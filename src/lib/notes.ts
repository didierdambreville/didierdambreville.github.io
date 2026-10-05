import { getCollection, type CollectionEntry } from 'astro:content';
import { CATEGORIES } from './classement-notes';
import { dateFr } from './mementos';

export type Note = CollectionEntry<'notes'>;

/** « 1er octobre 2026 », non « 1 octobre 2026 ». */
export const dateNote = (d: Date) => dateFr(d).replace(/^1 /, '1er ');

export async function notesPubliees(): Promise<Note[]> {
  return getCollection('notes', (e) => !e.data.brouillon);
}

/** Ce qu'il faut pour figurer dans un index de mots-clés : les notes comme les articles. */
type AvecMotsCles = { id: string; data: { titre: string; motsCles: string[] } };

const parTitre = (a: AvecMotsCles, b: AvecMotsCles) => a.data.titre.localeCompare(b.data.titre, 'fr');

/** Les dossiers qui comptent au moins une note, dans l'ordre du classement ; les notes par titre. */
export function grouper(notes: Note[]) {
  return CATEGORIES.map((categorie) => ({
    categorie,
    notes: notes.filter((n) => n.data.categorie === categorie.id).sort(parTitre),
  })).filter((g) => g.notes.length > 0);
}

/** Ancre d'un mot-clé dans l'index de /notes/ ou de /articles/ : « XIXe siècle » → « mot-xixe-siecle ». */
export function ancre(mot: string): string {
  const s = mot
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  return `mot-${s}`;
}

/**
 * Index des mots-clés : chaque mot dans l'ordre alphabétique, avec ses notes (ou ses articles).
 *
 * Garde-fou : deux graphies d'un même mot (« Patrimoine », « patrimoine ») donneraient
 * la même ancre et deux entrées d'index — la construction échoue plutôt que de les
 * laisser diverger en silence.
 */
export function indexMotsCles<T extends AvecMotsCles>(notes: T[]) {
  const index = new Map<string, T[]>();
  const graphies = new Map<string, string>();
  for (const n of notes) {
    for (const mot of n.data.motsCles) {
      const a = ancre(mot);
      const deja = graphies.get(a);
      if (deja !== undefined && deja !== mot) {
        throw new Error(
          `Mot-clé écrit de deux façons : « ${deja} » et « ${mot} » (« ${n.id} »). Choisir une graphie.`,
        );
      }
      graphies.set(a, mot);
      index.set(mot, [...(index.get(mot) ?? []), n]);
    }
  }
  return [...index]
    .sort(([a], [b]) => a.localeCompare(b, 'fr'))
    .map(([mot, notes]) => ({ mot, ancre: ancre(mot), notes: notes.sort(parTitre) }));
}
