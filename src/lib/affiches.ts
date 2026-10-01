import { getCollection, type CollectionEntry } from 'astro:content';

export type Affiche = CollectionEntry<'affiches'>;

/** Les affiches publiées, dans l'ordre de la section. */
export async function affichesPubliees(): Promise<Affiche[]> {
  const affiches = await getCollection('affiches', (e) => !e.data.brouillon);
  return affiches.sort((a, b) => a.data.ordre - b.data.ordre);
}

/** Adresses des fichiers servis, déposés par importer-mementos.cmd. */
export const urlPdfAffiche = (id: string) => `/doc/affiches/affiche-${id}.pdf`;
export const urlSourceAffiche = (id: string) => `/doc/affiches/affiche-${id}.html`;
