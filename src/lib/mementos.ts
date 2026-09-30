import { statSync } from 'node:fs';
import { join } from 'node:path';
import { getCollection, type CollectionEntry } from 'astro:content';
import { FAMILLES, type Famille, type Rubrique } from './classement-mementos';

export type Memento = CollectionEntry<'mementos'>;

export async function mementosPublies(): Promise<Memento[]> {
  return getCollection('mementos', (e) => !e.data.brouillon);
}

/** Les familles et rubriques qui comptent au moins un mémento, dans l'ordre du classement. */
export function grouper(mementos: Memento[]) {
  return FAMILLES.map((famille: Famille) => ({
    famille,
    rubriques: famille.rubriques
      .map((rubrique: Rubrique) => ({
        rubrique,
        mementos: mementos
          .filter((m) => m.data.rubrique === rubrique.id)
          .sort((a, b) => a.data.ordre - b.data.ordre),
      }))
      .filter((r) => r.mementos.length > 0),
  })).filter((f) => f.rubriques.length > 0);
}

/** Adresses des fichiers servis, déposés par importer-mementos.cmd. */
export const urlPdf = (id: string) => `/doc/mementos/memento-${id}.pdf`;
export const urlSource = (id: string) => `/doc/mementos/memento-${id}.html`;

/** Poids d'un fichier de public/, en kilo-octets arrondis ; `undefined` s'il manque. */
export function poids(url: string): string | undefined {
  try {
    const octets = statSync(join(process.cwd(), 'public', url)).size;
    return `${Math.round(octets / 1024).toLocaleString('fr-FR')} Ko`;
  } catch {
    return undefined;
  }
}

export const dateFr = (d: Date, jour = true) =>
  d.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', ...(jour && { day: 'numeric' }), timeZone: 'UTC' });
