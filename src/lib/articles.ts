import { getCollection, type CollectionEntry } from 'astro:content';
import { RUBRIQUES, LIBELLES_RUBRIQUE } from '../content.config';
import { motsADecouvrir, motsEnVitrine } from './notes';

export type Article = CollectionEntry<'articles'>;

/** Les articles publiés, du plus récent au plus ancien. */
export async function articlesPublies(): Promise<Article[]> {
  const articles = await getCollection('articles', (e) => !e.data.brouillon);
  return articles.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/**
 * Les rubriques qui comptent au moins un article, dans l'ordre du classement. Un article
 * classé dans trois rubriques figure dans chacune des trois.
 */
export function rubriquesPresentes(articles: Article[]) {
  return RUBRIQUES.map((id) => ({
    id,
    nom: LIBELLES_RUBRIQUE[id],
    articles: articles.filter((a) => a.data.rubriques.includes(id)),
  })).filter((r) => r.articles.length > 0);
}

/**
 * Les rubriques « à découvrir » du panneau de lecture : d'abord celles qui accompagnent le
 * plus souvent les rubriques de l'article lu chez les autres articles, puis les plus
 * fournies, puis l'ordre du classement. Celles de l'article n'y figurent pas.
 */
export function rubriquesADecouvrir(articles: Article[], courant: Article, combien = 4) {
  const siennes = new Set<string>(courant.data.rubriques);
  const voisins = articles.filter(
    (a) => a.id !== courant.id && a.data.rubriques.some((r) => siennes.has(r)),
  );
  return rubriquesPresentes(articles)
    .filter((r) => !siennes.has(r.id))
    .map((r, ordre) => ({ ...r, ordre, proches: voisins.filter((a) => a.data.rubriques.includes(r.id)).length }))
    .sort((a, b) => b.proches - a.proches || b.articles.length - a.articles.length || a.ordre - b.ordre)
    .slice(0, combien);
}

/** Les rubriques d'un article, dans son ordre à lui : la principale d'abord. */
export function rubriquesDe(a: Article) {
  return a.data.rubriques.map((id) => ({ id, nom: LIBELLES_RUBRIQUE[id] }));
}

/**
 * La sélection de mots-clés montrée sur /articles/ (règle commune aux notes :
 * `motsEnVitrine`, src/lib/notes.ts). Les autres restent dans /articles/mots-cles/.
 */
export function motsClesEnVitrine(articles: Article[], combien = 8): string[] {
  return motsEnVitrine(articles, combien);
}

/**
 * Les mots-clés « à découvrir » du panneau de lecture : ceux des autres articles, en
 * commençant par les articles qui partagent le plus de rubriques avec l'article lu.
 */
export function motsClesADecouvrir(articles: Article[], courant: Article, combien = 6): string[] {
  return motsADecouvrir(articles, courant, (a) => a.data.rubriques, combien);
}

/** Durée de lecture, à 220 mots par minute. */
export function minutesLecture(a: Article): number {
  const mots = (a.body ?? '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(mots / 220));
}
