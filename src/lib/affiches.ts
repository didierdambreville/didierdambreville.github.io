import { getCollection, type CollectionEntry } from 'astro:content';

export type Affiche = CollectionEntry<'affiches'>;

/** Les affiches publiées, dans l'ordre de la section. */
export async function affichesPubliees(): Promise<Affiche[]> {
  const affiches = await getCollection('affiches', (e) => !e.data.brouillon);
  return affiches.sort((a, b) => a.data.ordre - b.data.ordre);
}

/** Adresses des fichiers servis, déposés par importer-mementos.cmd (ou à la main, sans source). */
export const urlPdfAffiche = (id: string) => `/doc/affiches/affiche-${id}.pdf`;
export const urlSourceAffiche = (id: string) => `/doc/affiches/affiche-${id}.html`;

/** « couleur » ou « noir et blanc ». */
export const teinte = (a: Affiche) => (a.data.couleur ? 'couleur' : 'noir et blanc');

/** « A3 en couleur », « A4 en noir et blanc ». */
export const formatAffiche = (a: Affiche) => `${a.data.format} en ${teinte(a)}`;

export const LANGUES = { fr: 'français', en: 'anglais' } as const;
