/**
 * Importe les mémentos et les affiches depuis HUMANITAS ET SCIENTIA vers le site.
 *
 * Pour chaque notice de src/data/mementos/ et de src/data/affiches/ :
 *   1. contrôle que la version écrite dans les pieds de page du document et son nombre de
 *      pages sont ceux de la notice — sinon, arrêt : la notice et le fichier divergeraient ;
 *   2. copie le PDF et la source HTML dans public/doc/mementos/ (memento-<identifiant>.pdf / .html)
 *      ou public/doc/affiches/ (affiche-<identifiant>.pdf / .html) ;
 *   3. fabrique la vignette (première page) dans src/assets/mementos/ ou src/assets/affiches/.
 *
 * Lancement : double-clic sur importer-mementos.cmd, à la racine du site.
 * Rien n'est effacé ; les fichiers du site sont remplacés par leur nouvelle version.
 */
import { copyFileSync, existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import sharp from 'sharp';

const RACINE = resolve(import.meta.dirname, '..');
const FICHES = resolve(RACINE, '../../../HUMANITAS_ET_SCIENTIA/91_REVISION/fiches');

// Moteur de rendu : celui qui a produit les PDF (Chromium). Brave d'abord, Edge ou Chrome à défaut.
const NAVIGATEURS = [
  'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
];
const NAVIGATEUR = NAVIGATEURS.find(existsSync);

/**
 * Les deux sortes de documents. À 96 points par pouce, une page A4 (210 × 297 mm) fait
 * 794 × 1123 pixels, une page A3 (297 × 420 mm) 1123 × 1588.
 *   pages   — nombre de pages attendu, lu dans la notice ;
 *   version — motif de la version dans un pied de page (l'affiche cite aussi la version
 *             du mémento dont elle est tirée : seule compte celle qui suit « · v ») ;
 *   masque  — règle ajoutée à la feuille de style pour ne capturer que la première page.
 */
const SORTES = [
  {
    nom: 'mémento',
    importes: 'importé(s)',
    notices: join(RACINE, 'src/data/mementos'),
    doc: join(RACINE, 'public/doc/mementos'),
    couvertures: join(RACINE, 'src/assets/mementos'),
    prefixe: 'memento',
    largeur: 794,
    hauteur: 1123,
    pages: (notice) => Number(champ(notice, 'pages')),
    version: /v(\d+\.\d+)/g,
    masque: '.page:not(:first-child){display:none}',
  },
  {
    nom: 'affiche',
    importes: 'importée(s)',
    notices: join(RACINE, 'src/data/affiches'),
    doc: join(RACINE, 'public/doc/affiches'),
    couvertures: join(RACINE, 'src/assets/affiches'),
    prefixe: 'affiche',
    largeur: 1123,
    hauteur: 1588,
    pages: () => 1,
    version: /·\s*v(\d+\.\d+)\s*·/g,
    masque: '',
    // La fenêtre sans interface de Brave est un peu plus étroite que demandé : sur fond
    // coloré, la capture montrerait une bande blanche à droite. On l'élargit, puis on recadre.
    marge: 40,
  },
];

function champ(texte, nom) {
  const m = texte.match(new RegExp(`^${nom}:\\s*"?([^"\\n]+)"?\\s*$`, 'm'));
  return m ? m[1].trim() : undefined;
}

function erreur(message) {
  console.error(`\n  ERREUR — ${message}\n`);
  process.exitCode = 1;
}

if (!existsSync(FICHES)) {
  erreur(`dossier des mémentos introuvable : ${FICHES}`);
  process.exit();
}
if (!NAVIGATEUR) console.warn('  Aucun navigateur Chromium trouvé : les vignettes ne seront pas refaites.');

const tmp = mkdtempSync(join(tmpdir(), 'mementos-'));

for (const sorte of SORTES) {
  if (!existsSync(sorte.notices)) continue;
  mkdirSync(sorte.doc, { recursive: true });
  mkdirSync(sorte.couvertures, { recursive: true });

  const notices = readdirSync(sorte.notices).filter((f) => f.endsWith('.md'));
  let importes = 0;

  for (const fichier of notices) {
    const id = fichier.replace(/\.md$/, '');
    const notice = readFileSync(join(sorte.notices, fichier), 'utf8');
    const source = champ(notice, 'source');
    const version = champ(notice, 'version');
    const pages = sorte.pages(notice);
    const html = join(FICHES, `${source}.html`);
    const pdf = join(FICHES, `${source}.pdf`);

    if (!source || !existsSync(html) || !existsSync(pdf)) {
      erreur(`${fichier} : source « ${source} » absente de ${FICHES} (.html et .pdf attendus).`);
      continue;
    }

    // 1. Contrôles d'accord entre la notice et le document.
    const texte = readFileSync(html, 'utf8');
    const pieds = texte.match(/<footer class="foot">[\s\S]*?<\/footer>/g) ?? [];
    const versions = new Set(pieds.flatMap((p) => [...p.matchAll(sorte.version)].map((m) => m[1])));
    const pagesPdf = (readFileSync(pdf).toString('latin1').match(/\/Type\s*\/Page[^s]/g) ?? []).length;
    const problemes = [];
    if (versions.size !== 1 || !versions.has(version))
      problemes.push(`version ${[...versions].join(', ') || 'absente'} dans le document, ${version} dans la notice`);
    if (pieds.length !== pages) problemes.push(`${pieds.length} pages dans la source HTML, ${pages} attendue(s)`);
    if (pagesPdf !== pages) problemes.push(`${pagesPdf} pages dans le PDF, ${pages} attendue(s)`);
    if (!texte.includes('class="auteur"')) problemes.push('mention d’auteur absente');
    if (problemes.length) {
      erreur(`${fichier} : ${problemes.join(' ; ')}. Corriger la notice ou régénérer le PDF.`);
      continue;
    }

    // 2. Copie des fichiers servis.
    copyFileSync(pdf, join(sorte.doc, `${sorte.prefixe}-${id}.pdf`));
    copyFileSync(html, join(sorte.doc, `${sorte.prefixe}-${id}.html`));

    // 3. Vignette : la première page seule, capturée puis recadrée à son format.
    if (NAVIGATEUR) {
      const page1 = join(tmp, `${sorte.prefixe}-${id}.html`);
      const capture = join(tmp, `${sorte.prefixe}-${id}.png`);
      writeFileSync(page1, sorte.masque ? texte.replace('</style>', `${sorte.masque}</style>`) : texte);
      execFileSync(NAVIGATEUR, [
        '--headless=new', '--disable-gpu', '--no-first-run', '--hide-scrollbars',
        `--window-size=${sorte.largeur + (sorte.marge ?? 0)},${sorte.hauteur + 200}`, '--virtual-time-budget=4000',
        `--screenshot=${capture}`, pathToFileURL(page1).href,
      ], { stdio: 'ignore' });
      await sharp(capture)
        .extract({ left: 0, top: 0, width: sorte.largeur, height: sorte.hauteur })
        .webp({ quality: 82 })
        .toFile(join(sorte.couvertures, `${id}.webp`));
    }

    importes += 1;
    console.log(`  ${id.padEnd(20)} v${version}, ${pages} page(s)`);
  }

  console.log(`\n  ${importes} ${sorte.nom}(s) ${sorte.importes} sur ${notices.length}.\n`);
}

rmSync(tmp, { recursive: true, force: true });
