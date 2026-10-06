/**
 * Le manifeste TRIFAB : documents publiés et contacts relais.
 *
 * Les PDF sont fabriqués hors du site, depuis 0_portfolio/manifeste/ (script
 * 2026-10-01_6_fabriquer-pdf-trifab_v1.0.0.py), qui les copie dans public/doc/manifeste/.
 * Les contacts vivent dans src/data/manifeste/contacts.json, source unique lue aussi par ce
 * script pour l'annexe et le document « Contacts relais ».
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import contacts from '../data/manifeste/contacts.json';
import { poids } from './mementos';

export const MANIFESTE = {
  nom: 'TRIFAB',
  punchline: "De la benne à l'établi.",
  chaine: 'Déchetterie · Ressourcerie · Fablab',
  version: '1.0',
  date: new Date('2026-10-01'),
  logo: '/doc/manifeste/trifab-logo.svg',
  logoPng: '/doc/manifeste/trifab-logo.png',
} as const;

/**
 * trifab.si : TRIFAB en anglais, pour l'Europe et au-delà, publié par ARSCRIPTA SAS.
 * « .si » vaut « super-intelligence » — SI, relais de « IA » — et non la Slovénie : ne jamais
 * présenter le domaine comme slovène. Pages relevées le 6 octobre 2026.
 */
export const TRIFAB_SI = {
  url: 'https://trifab.si/',
  europe: 'https://trifab.si/europe/',
  guide: 'https://trifab.si/blog/what-is-a-trifab/',
  pilote: 'https://trifab.si/pilot-site/',
  manifeste: 'https://trifab.si/manifesto/',
  relais: 'https://trifab.si/get-involved/',
} as const;

export const DOCUMENTS_MANIFESTE = [
  {
    id: 'courte',
    titre: 'Version courte',
    usage: "L'essentiel en quatre pages : à joindre à vos courriers, à imprimer, à distribuer.",
    url: '/doc/manifeste/trifab-manifeste-version-courte.pdf',
  },
  {
    id: 'longue',
    titre: 'Version longue',
    usage: 'Le projet complet : modèle économique, économie sociale et solidaire, site pilote, faire vivre le lieu, modèles de motion et de courrier.',
    url: '/doc/manifeste/trifab-manifeste-version-longue.pdf',
  },
  {
    id: 'contacts',
    titre: 'Contacts relais',
    usage: "Les relais nationaux et régionaux, et l'association des maires de chaque département.",
    url: '/doc/manifeste/trifab-contacts-relais.pdf',
  },
] as const;

/** Nombre de pages d'un PDF de public/ : compte des objets /Type /Page (PDF produits par Chromium). */
export function pagesPdf(url: string): number | undefined {
  try {
    const brut = readFileSync(join(process.cwd(), 'public', url)).toString('latin1');
    return (brut.match(/\/Type\s*\/Page(?!s)/g) ?? []).length || undefined;
  } catch {
    return undefined;
  }
}

export const documentsManifeste = () =>
  DOCUMENTS_MANIFESTE.map((d) => ({ ...d, pages: pagesPdf(d.url), poids: poids(d.url) }));

export type Contact = { organisme: string; role: string; email: string | null; url: string | null };
export type Departement = { code: string; departement: string; organisme: string; emails: string[] };

export const CONTACTS = contacts as {
  releve: string;
  nationaux: Contact[];
  occitanie: Contact[];
  departements: Departement[];
};
