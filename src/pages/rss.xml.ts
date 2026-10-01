import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { AUTEUR, SITE } from '../lib/identite';

export async function GET(context: APIContext) {
  const mementos = await getCollection('mementos', (e) => !e.data.brouillon);
  const affiches = await getCollection('affiches', (e) => !e.data.brouillon);
  const realisations = await getCollection('realisations', (e) => !e.data.brouillon);
  const documents = await getCollection('documents', (e) => !e.data.brouillon);
  const articles = await getCollection('articles', (e) => !e.data.brouillon);
  const notes = await getCollection('notes', (e) => !e.data.brouillon);

  const items = [
    // Une nouvelle version d'un mémento remonte dans le flux : sa date est celle de la version.
    ...mementos.map((m) => ({
      title: `Mémento — ${m.data.titre} (version ${m.data.version})`,
      description: m.data.resume,
      pubDate: m.data.date,
      link: `/mementos/${m.id}/`,
    })),
    ...affiches.map((a) => ({
      title: `Affiche — ${a.data.titre} (version ${a.data.version})`,
      description: a.data.resume,
      pubDate: a.data.date,
      link: `/affiches/${a.id}/`,
    })),
    ...realisations.map((r) => ({
      title: r.data.titre,
      description: r.data.resume,
      pubDate: r.data.date,
      link: `/realisations/${r.id}/`,
    })),
    ...documents.map((d) => ({
      title: d.data.titre,
      description: d.data.resume,
      pubDate: d.data.date,
      link: `/documents/${d.id}/`,
    })),
    ...articles.map((a) => ({
      title: a.data.titre,
      description: a.data.these,
      pubDate: a.data.date,
      link: `/articles/${a.id}/`,
    })),
    // Comme un mémento, une note mise à jour remonte dans le flux.
    ...notes.map((n) => ({
      title: `Note — ${n.data.titre}`,
      description: n.data.resume,
      pubDate: n.data.date,
      link: `/notes/${n.id}/`,
    })),
  ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: AUTEUR,
    description: 'Mémentos imprimables en libre accès, et ce qui paraît sur ce site.',
    site: context.site ?? SITE,
    items,
    customData: '<language>fr</language>',
  });
}
