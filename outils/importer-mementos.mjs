/**
 * Importe les mémentos depuis HUMANITAS ET SCIENTIA vers le site.
 *
 * Pour chaque notice de src/data/mementos/ :
 *   1. contrôle que la version écrite dans les pieds de page du mémento et son nombre de
 *      pages sont ceux de la notice — sinon, arrêt : la notice et le fichier divergeraient ;
 *   2. copie le PDF et la source HTML dans public/doc/mementos/, sous le nom
 *      memento-<identifiant>.pdf / .html ;
 *   3. fabrique la vignette de couverture (première page) dans src/assets/mementos/.
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
const NOTICES = join(RACINE, 'src/data/mementos');
const DOC = join(RACINE, 'public/doc/mementos');
const COUVERTURES = join(RACINE, 'src/assets/mementos');

// Moteur de rendu : celui qui a produit les PDF (Chromium). Brave d'abord, Edge ou Chrome à défaut.
const NAVIGATEURS = [
  'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
];
const NAVIGATEUR = NAVIGATEURS.find(existsSync);

// Une page A4 à 96 points par pouce : 210 × 297 mm.
const LARGEUR = 794;
const HAUTEUR = 1123;

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

mkdirSync(DOC, { recursive: true });
mkdirSync(COUVERTURES, { recursive: true });
const tmp = mkdtempSync(join(tmpdir(), 'mementos-'));

const notices = readdirSync(NOTICES).filter((f) => f.endsWith('.md'));
let importes = 0;

for (const fichier of notices) {
  const id = fichier.replace(/\.md$/, '');
  const notice = readFileSync(join(NOTICES, fichier), 'utf8');
  const source = champ(notice, 'source');
  const version = champ(notice, 'version');
  const pages = Number(champ(notice, 'pages'));
  const html = join(FICHES, `${source}.html`);
  const pdf = join(FICHES, `${source}.pdf`);

  if (!source || !existsSync(html) || !existsSync(pdf)) {
    erreur(`${fichier} : source « ${source} » absente de ${FICHES} (.html et .pdf attendus).`);
    continue;
  }

  // 1. Contrôles d'accord entre la notice et le mémento.
  const texte = readFileSync(html, 'utf8');
  const pieds = texte.match(/<footer class="foot">[\s\S]*?<\/footer>/g) ?? [];
  const versions = new Set(pieds.flatMap((p) => [...p.matchAll(/v(\d+\.\d+)/g)].map((m) => m[1])));
  const pagesPdf = (readFileSync(pdf).toString('latin1').match(/\/Type\s*\/Page[^s]/g) ?? []).length;
  const problemes = [];
  if (versions.size !== 1 || !versions.has(version))
    problemes.push(`version ${[...versions].join(', ') || 'absente'} dans le mémento, ${version} dans la notice`);
  if (pieds.length !== pages) problemes.push(`${pieds.length} pages dans la source HTML, ${pages} dans la notice`);
  if (pagesPdf !== pages) problemes.push(`${pagesPdf} pages dans le PDF, ${pages} dans la notice`);
  if (!texte.includes('class="auteur"')) problemes.push('mention d’auteur absente de la couverture');
  if (problemes.length) {
    erreur(`${fichier} : ${problemes.join(' ; ')}. Corriger la notice ou régénérer le PDF.`);
    continue;
  }

  // 2. Copie des fichiers servis.
  copyFileSync(pdf, join(DOC, `memento-${id}.pdf`));
  copyFileSync(html, join(DOC, `memento-${id}.html`));

  // 3. Vignette : la première page seule, capturée puis recadrée au format A4.
  if (NAVIGATEUR) {
    const page1 = join(tmp, `${id}.html`);
    const capture = join(tmp, `${id}.png`);
    writeFileSync(page1, texte.replace('</style>', '.page:not(:first-child){display:none}</style>'));
    execFileSync(NAVIGATEUR, [
      '--headless=new', '--disable-gpu', '--no-first-run', '--hide-scrollbars',
      `--window-size=${LARGEUR},${HAUTEUR + 200}`, '--virtual-time-budget=4000',
      `--screenshot=${capture}`, pathToFileURL(page1).href,
    ], { stdio: 'ignore' });
    await sharp(capture)
      .extract({ left: 0, top: 0, width: LARGEUR, height: HAUTEUR })
      .webp({ quality: 82 })
      .toFile(join(COUVERTURES, `${id}.webp`));
  }

  importes += 1;
  console.log(`  ${id.padEnd(20)} v${version}, ${pages} pages`);
}

rmSync(tmp, { recursive: true, force: true });
console.log(`\n  ${importes} mémento(s) importé(s) sur ${notices.length}.`);
