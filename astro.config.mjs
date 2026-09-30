// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { existsSync, readdirSync, readFileSync } from 'node:fs';

// Hébergement : GitHub Pages, sur le domaine gratuit du compte.
// Si le dépôt s'appelle exactement <compte>.github.io, le site est servi à la racine
// et il ne faut PAS de `base`. Pour tout autre nom de dépôt, il faudrait ajouter
// `base: '/nom-du-depot'`, et toutes les adresses absolues du site devraient être revues.
// Doit rester identique à SITE dans src/lib/identite.ts.
const SITE = 'https://didierdambreville.github.io';

/**
 * Rubriques sans pièce publiée : leurs pages existent (index vide) mais ne sont liées
 * nulle part — on les retire aussi du plan du site, pour ne pas offrir aux moteurs de
 * recherche des pages vides. Dès qu'une pièce est publiée, la rubrique y rentre seule.
 * `defaut` est la valeur de `brouillon` quand la notice ne l'écrit pas (cf. content.config.ts).
 */
function publiees(dossier, defaut) {
  const d = new URL(`./src/data/${dossier}/`, import.meta.url);
  if (!existsSync(d)) return 0;
  return readdirSync(d)
    .filter((f) => f.endsWith('.md'))
    .filter((f) => {
      const m = readFileSync(new URL(f, d), 'utf8').match(/^brouillon:\s*(true|false)\s*$/m);
      return !(m ? m[1] === 'true' : defaut);
    }).length;
}
const realisations = publiees('realisations', false);
const RUBRIQUES_VIDES = [
  ...(publiees('articles', true) ? [] : ['/articles/']),
  ...(realisations ? [] : ['/realisations/', '/demos/']),
  ...(publiees('documents', false) ? [] : ['/documents/']),
];

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  build: {
    // Sans cela, Astro insère les petites feuilles de style dans le HTML,
    // ce que `style-src 'self'` refuse : la page s'affiche alors sans mise en forme.
    inlineStylesheets: 'never',
    format: 'directory',
  },
  // Le préchargement injecterait un script sur toutes les pages.
  prefetch: false,
  integrations: [
    sitemap({
      filter: (page) => !RUBRIQUES_VIDES.some((r) => new URL(page).pathname.startsWith(r)),
    }),
  ],
});
