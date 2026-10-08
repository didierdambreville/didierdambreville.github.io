import { getCollection, type CollectionEntry } from 'astro:content';
import { CATEGORIES, categorie } from './classement-notes';
import { dateFr } from './mementos';

export type Note = CollectionEntry<'notes'>;

/** « 1er octobre 2026 », non « 1 octobre 2026 ». */
export const dateNote = (d: Date) => dateFr(d).replace(/^1 /, '1er ');

export async function notesPubliees(): Promise<Note[]> {
  return getCollection('notes', (e) => !e.data.brouillon);
}

/** Ce qu'il faut pour figurer dans un index de mots-clés : les notes comme les articles. */
type AvecMotsCles = { id: string; data: { titre: string; motsCles: string[] } };
/** Ce qu'il faut pour être classé : des mots-clés et une date. */
type Datee = AvecMotsCles & { data: { date: Date } };

const parTitre = (a: AvecMotsCles, b: AvecMotsCles) => a.data.titre.localeCompare(b.data.titre, 'fr');

/**
 * Les dossiers qui comptent au moins une note, dans l'ordre du classement ; les notes par
 * titre. Une note rangée dans trois dossiers figure dans chacun des trois.
 */
export function grouper(notes: Note[]) {
  return CATEGORIES.map((categorie) => ({
    categorie,
    notes: notes.filter((n) => n.data.categories.includes(categorie.id)).sort(parTitre),
  })).filter((g) => g.notes.length > 0);
}

/** Comme `grouper`, mais chaque note une seule fois, sous son dossier principal. */
export function grouperParPrincipal(notes: Note[]) {
  return CATEGORIES.map((categorie) => ({
    categorie,
    notes: notes.filter((n) => n.data.categories[0] === categorie.id).sort(parTitre),
  })).filter((g) => g.notes.length > 0);
}

/** Les dossiers d'une note, dans son ordre à elle : le principal d'abord. */
export function categoriesDe(n: Note) {
  return n.data.categories.map(categorie);
}

/**
 * Les dossiers « à découvrir » du panneau d'une note : d'abord ceux qui accompagnent le
 * plus souvent les dossiers de la note chez les autres notes, puis les plus fournis, puis
 * l'ordre du classement. Ceux de la note n'y figurent pas.
 */
export function dossiersADecouvrir(notes: Note[], courante: Note, combien = 4) {
  const siens = new Set<string>(courante.data.categories);
  const voisines = notes.filter(
    (n) => n.id !== courante.id && n.data.categories.some((c) => siens.has(c)),
  );
  return grouper(notes)
    .filter((g) => !siens.has(g.categorie.id))
    .map((g, ordre) => ({
      ...g,
      ordre,
      proches: voisines.filter((n) => n.data.categories.includes(g.categorie.id)).length,
    }))
    .sort((a, b) => b.proches - a.proches || b.notes.length - a.notes.length || a.ordre - b.ordre)
    .slice(0, combien);
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

/**
 * Classe des mots-clés (notes ou articles) : d'abord la proximité (facultative), puis les
 * plus partagés, puis, à égalité, ceux qu'une pièce place en tête de sa liste (son mot
 * principal), puis les plus récents. `proximite` note une pièce ; un mot prend la
 * meilleure note des siennes.
 */
function classerMots<T extends Datee>(pieces: T[], proximite: (p: T) => number = () => 0): string[] {
  const stats = new Map<string, { p: number; n: number; rang: number; recent: number }>();
  for (const piece of pieces) {
    piece.data.motsCles.forEach((mot, rang) => {
      const s = stats.get(mot) ?? { p: 0, n: 0, rang: Infinity, recent: 0 };
      stats.set(mot, {
        p: Math.max(s.p, proximite(piece)),
        n: s.n + 1,
        rang: Math.min(s.rang, rang),
        recent: Math.max(s.recent, piece.data.date.getTime()),
      });
    });
  }
  return [...stats]
    .sort(
      ([ma, a], [mb, b]) =>
        b.p - a.p || b.n - a.n || a.rang - b.rang || b.recent - a.recent || ma.localeCompare(mb, 'fr'),
    )
    .map(([mot]) => mot);
}

/** La sélection de mots-clés d'une page d'index ; les autres restent dans l'index complet. */
export function motsEnVitrine<T extends Datee>(pieces: T[], combien = 8): string[] {
  return classerMots(pieces).slice(0, combien);
}

/**
 * Les mots-clés « à découvrir » d'un panneau de lecture : ceux des autres pièces, en
 * commençant par celles qui partagent le plus de cases (rubriques, dossiers) avec la pièce
 * lue. Ses propres mots-clés n'y figurent pas : le panneau les montre à part.
 */
export function motsADecouvrir<T extends Datee>(
  pieces: T[],
  courante: T,
  cases: (p: T) => readonly string[],
  combien = 6,
): string[] {
  const siens = new Set(courante.data.motsCles);
  const sesCases = new Set(cases(courante));
  const autres = pieces.filter((p) => p.id !== courante.id);
  const communes = (p: T) => cases(p).filter((c) => sesCases.has(c)).length;
  return classerMots(autres, communes)
    .filter((mot) => !siens.has(mot))
    .slice(0, combien);
}
