/**
 * L'identité du site, écrite une seule fois.
 *
 * Tout ce qui nomme l'auteur ou renvoie ailleurs — en-tête, pied de page, données
 * structurées, liens `rel="me"` — lit ce fichier. Changer une adresse ici la change
 * partout ; l'écrire ailleurs créerait une deuxième source, donc une divergence.
 */

export const AUTEUR = 'D. Dambreville';

/** Adresse du site. Doit rester identique à `SITE` dans astro.config.mjs. */
export const SITE = 'https://didierdambreville.github.io';

/** Profils personnels : pied de page, `rel="me"` et `sameAs` des données structurées. */
export const RESEAUX = [
  { nom: 'X', libelle: '@D_Dambreville', url: 'https://x.com/D_Dambreville' },
  { nom: 'LinkedIn', libelle: 'd-dambreville', url: 'https://www.linkedin.com/in/d-dambreville/' },
  { nom: 'GitHub', libelle: 'didierdambreville', url: 'https://github.com/didierdambreville' },
] as const;

/** Les deux sites de l'auteur, présents dans le menu. */
export const ARSCRIPTA = {
  nom: 'ARSCRIPTA',
  url: 'https://arscripta.fr/',
  methodes: 'https://arscripta.fr/methodes.html',
} as const;

export const SPECULA = {
  nom: 'SPECULA',
  url: 'https://specula.fr/',
} as const;

/** Dépôt public de la méthode PRAXIS (domaine public). */
export const DEPOT_PRAXIS = 'https://github.com/didierdambreville/methode-praxis';

export const LICENCE = {
  nom: 'CC BY 4.0',
  intitule: 'Creative Commons Attribution 4.0 International',
  url: 'https://creativecommons.org/licenses/by/4.0/deed.fr',
  /** Forme canonique, sans langue, attendue par les données structurées. */
  urlCanonique: 'https://creativecommons.org/licenses/by/4.0/',
} as const;
