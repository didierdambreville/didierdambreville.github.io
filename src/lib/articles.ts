import { getCollection, type CollectionEntry } from 'astro:content';
import { RUBRIQUES, LIBELLES_RUBRIQUE } from '../content.config';

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
 * Classe des mots-clés : d'abord la proximité (facultative), puis les plus partagés, puis,
 * à égalité, ceux qu'un article place en tête de sa liste (son mot principal), puis les
 * plus récents. `proximite` note un article ; un mot prend la meilleure note des siens.
 */
function classerMots(articles: Article[], proximite: (a: Article) => number = () => 0): string[] {
  const stats = new Map<string, { p: number; n: number; rang: number; recent: number }>();
  for (const a of articles) {
    a.data.motsCles.forEach((mot, rang) => {
      const s = stats.get(mot) ?? { p: 0, n: 0, rang: Infinity, recent: 0 };
      stats.set(mot, {
        p: Math.max(s.p, proximite(a)),
        n: s.n + 1,
        rang: Math.min(s.rang, rang),
        recent: Math.max(s.recent, a.data.date.getTime()),
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

/**
 * La sélection de mots-clés montrée sur /articles/. Les autres restent dans l'index
 * complet, /articles/mots-cles/.
 */
export function motsClesEnVitrine(articles: Article[], combien = 8): string[] {
  return classerMots(articles).slice(0, combien);
}

/**
 * Les mots-clés « à découvrir » du panneau de lecture : ceux des autres articles, en
 * commençant par les articles qui partagent le plus de rubriques avec l'article lu. Ses
 * propres mots-clés n'y figurent pas : le panneau les montre à part.
 */
export function motsClesADecouvrir(articles: Article[], courant: Article, combien = 6): string[] {
  const siens = new Set(courant.data.motsCles);
  const rubriques = new Set<string>(courant.data.rubriques);
  const autres = articles.filter((a) => a.id !== courant.id);
  const communes = (a: Article) => a.data.rubriques.filter((r) => rubriques.has(r)).length;
  return classerMots(autres, communes)
    .filter((mot) => !siens.has(mot))
    .slice(0, combien);
}

/** Durée de lecture, à 220 mots par minute. */
export function minutesLecture(a: Article): number {
  const mots = (a.body ?? '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(mots / 220));
}
