import { getCollection, type CollectionEntry } from 'astro:content';
import { RUBRIQUES, LIBELLES_RUBRIQUE } from '../content.config';

export type Article = CollectionEntry<'articles'>;

/** Les articles publiés, du plus récent au plus ancien. */
export async function articlesPublies(): Promise<Article[]> {
  const articles = await getCollection('articles', (e) => !e.data.brouillon);
  return articles.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Les rubriques qui comptent au moins un article, dans l'ordre du classement. */
export function rubriquesPresentes(articles: Article[]) {
  return RUBRIQUES.map((id) => ({
    id,
    nom: LIBELLES_RUBRIQUE[id],
    articles: articles.filter((a) => a.data.rubrique === id),
  })).filter((r) => r.articles.length > 0);
}

/** Durée de lecture, à 220 mots par minute. */
export function minutesLecture(a: Article): number {
  const mots = (a.body ?? '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(mots / 220));
}
