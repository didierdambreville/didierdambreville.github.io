import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { RUBRIQUES_MEMENTO } from './lib/classement-mementos';
import { CATEGORIES_NOTE } from './lib/classement-notes';

/**
 * Quatre cases, pas six. Une classification n'est utilisée que si elle tient
 * en quatre boîtes ; le critère qui tranche est : qu'est-ce que le lecteur en fait ?
 *   methode     — il en tire une manière de faire
 *   outil       — il s'en sert, il ne le lit pas
 *   publication — la pièce a une existence hors du site
 *   image       — le jugement porte sur le rendu
 */
export const DISCIPLINES = ['methode', 'outil', 'publication', 'image'] as const;

export const LIBELLES_DISCIPLINE: Record<(typeof DISCIPLINES)[number], string> = {
  methode: 'Méthode',
  outil: 'Outil',
  publication: 'Publication',
  image: 'Image',
};

const realisations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/realisations' }),
  schema: ({ image }) =>
    z.object({
      titre: z.string().max(80),
      // Dire ce que la pièce remplace ou épargne, non ce qu'elle est.
      resume: z.string().max(220),
      // Permalien : ne change jamais, n'est jamais réattribué.
      identifiant: z.string(),
      discipline: z.enum(DISCIPLINES),
      date: z.coerce.date(),
      commanditaire: z.string().optional(),
      role: z.array(z.string()).min(1),
      techniques: z.array(z.string()).default([]),
      couverture: image(),
      // Obligatoire, sans valeur par défaut : la construction échoue si on l'oublie.
      couvertureAlt: z.string(),
      hauteRes: z.string().optional(),
      // Capture enregistrée : la fiche survit à la démonstration.
      apercu: z.string().optional(),
      galerie: z.array(z.object({ src: image(), legende: z.string() })).default([]),
      demo: z
        .object({
          mode: z.enum(['interne', 'externe', 'aucun']).default('aucun'),
          url: z.string().optional(),
          hauteur: z.number().default(640),
          repli: z.string(),
        })
        .optional(),
      documents: z.array(z.string()).default([]),
      liens: z.array(z.object({ libelle: z.string(), url: z.string().url() })).default([]),
      licence: z.string().default('CC BY 4.0'),
      miseEnAvant: z.boolean().default(false),
      brouillon: z.boolean().default(false),
    }),
});

const documents = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/documents' }),
  schema: z.object({
    titre: z.string(),
    resume: z.string().max(400),
    type: z.enum(['methode', 'article', 'note', 'dossier']),
    fichier: z.string(),
    pages: z.number().int().positive(),
    // La version vit ici et nulle part ailleurs.
    version: z.string(),
    date: z.coerce.date(),
    licence: z.string(),
    sommaire: z.array(z.string()).default([]),
    brouillon: z.boolean().default(false),
  }),
});

/**
 * Cinq rubriques, pas huit. Une classification n'est utilisée que si l'on range
 * sans hésiter ; au-delà de cinq cases, on hésite une fois sur trois et l'on finit
 * par ne plus s'en servir.
 *
 * Où tombent les sujets annoncés :
 *   methode    — méthodes de travail, outils de pensée, conduite de projet
 *   sources    — fiabilité, vérification, provenance d'une information
 *   heritage   — théologie, histoire, archéologie, arts et culture
 *   sciences   — sciences, techniques, géopolitique, économie
 *   livres     — les ouvrages et ce qui les entoure
 *
 * Pour en ajouter une : cette liste, le libellé ci-dessous, et rien d'autre.
 * Attendez d'avoir vingt articles avant d'y toucher.
 */
export const RUBRIQUES = ['methode', 'sources', 'heritage', 'sciences', 'livres'] as const;

export const LIBELLES_RUBRIQUE: Record<(typeof RUBRIQUES)[number], string> = {
  methode: 'Méthode',
  sources: 'Sources',
  heritage: 'Héritage',
  sciences: 'Sciences',
  livres: 'Livres',
};

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/articles' }),
  schema: ({ image }) =>
    z.object({
      titre: z.string().max(90),
      /**
       * LE SIGNAL — la thèse en une phrase, sans jargon, compréhensible par un
       * non-initié. Sert de chapeau, de description sociale et de résumé dans le flux.
       * Si elle ne tient pas en une phrase, l'article n'est pas prêt.
       */
      these: z.string().max(240),
      identifiant: z.string(),
      rubrique: z.enum(RUBRIQUES),
      date: z.coerce.date(),
      /** Facultative : un article n'a pas besoin d'image pour exister. */
      couverture: image().optional(),
      couvertureAlt: z.string().optional(),
      /** LES PILIERS — références et preuves. Affichées en fin d'article. */
      sources: z
        .array(z.object({ libelle: z.string(), url: z.string().url(), note: z.string().optional() }))
        .default([]),
      /** LE FIL ROUGE — le contenu que cet article prolonge ou contredit. */
      prolonge: z.object({ libelle: z.string(), url: z.string().url() }).optional(),
      motsCles: z.array(z.string()).default([]),
      licence: z.string().default('CC BY 4.0'),
      miseEnAvant: z.boolean().default(false),
      brouillon: z.boolean().default(true),
    })
    .refine((d) => !d.couverture || !!d.couvertureAlt, {
      message: "couvertureAlt est obligatoire dès qu'une couverture est fournie.",
      path: ['couvertureAlt'],
    }),
});

/**
 * Mémentos : aide-mémoire imprimables (A4, noir et blanc), rédigés dans le projet
 * HUMANITAS ET SCIENTIA. Une notice par mémento ; le PDF et la source HTML sont copiés
 * dans public/doc/mementos/ par `importer-mementos.cmd`, qui contrôle au passage que
 * version et nombre de pages concordent avec la notice.
 */
const mementos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/mementos' }),
  schema: ({ image }) =>
    z.object({
      titre: z.string().max(60),
      /** Ligne de sous-titre de la couverture, recopiée telle quelle. */
      sousTitre: z.string().max(200),
      /** Permalien : /mementos/<identifiant>/ ; égal au nom du fichier. */
      identifiant: z.string(),
      rubrique: z.enum(RUBRIQUES_MEMENTO),
      /** Précision facultative affichée sur la carte (ex. « Électronique »). */
      sujet: z.string().optional(),
      /** Rang dans la rubrique. */
      ordre: z.number().int(),
      resume: z.string().max(280),
      pages: z.number().int().positive(),
      /** La version vit ici et dans le pied de page du mémento — l'import vérifie l'accord. */
      version: z.string().regex(/^\d+\.\d+$/),
      /** Date de la version en cours. */
      date: z.coerce.date(),
      premiereEdition: z.coerce.date(),
      /** Nom du fichier source dans HUMANITAS_ET_SCIENTIA/91_REVISION/fiches/, sans extension. */
      source: z.string(),
      /** Intitulé de chaque page, dans l'ordre. */
      sommaire: z.array(z.string()).min(1),
      couverture: image(),
      couvertureAlt: z.string(),
      brouillon: z.boolean().default(false),
    })
    .refine((d) => d.sommaire.length === d.pages, {
      message: 'Le sommaire doit compter un intitulé par page.',
      path: ['sommaire'],
    }),
});

/**
 * Affiches : une page A3 en couleur, tirée d'un ou plusieurs mémentos, pour le mur d'un
 * atelier ou d'un fablab. Même circuit que les mémentos : rédigées dans HUMANITAS ET
 * SCIENTIA, copiées dans public/doc/affiches/ par `importer-mementos.cmd`, qui contrôle
 * que la version de la notice est celle du pied de l'affiche et que le PDF compte une page.
 */
const affiches = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/affiches' }),
  schema: ({ image }) =>
    z.object({
      titre: z.string().max(60),
      /** Ligne de sous-titre de l'affiche, recopiée telle quelle. */
      sousTitre: z.string().max(200),
      /** Permalien : /affiches/<identifiant>/ ; égal au nom du fichier. */
      identifiant: z.string(),
      /** Rang dans la section. */
      ordre: z.number().int(),
      resume: z.string().max(280),
      /** La version vit ici et dans le pied de l'affiche — l'import vérifie l'accord. */
      version: z.string().regex(/^\d+\.\d+$/),
      date: z.coerce.date(),
      premiereEdition: z.coerce.date(),
      /** Nom du fichier source dans HUMANITAS_ET_SCIENTIA/91_REVISION/fiches/, sans extension. */
      source: z.string(),
      /** Identifiants des mémentos du site dont l'affiche est tirée. */
      mementos: z.array(z.string()).min(1),
      /** Intitulé de chaque bloc, dans l'ordre de lecture. */
      blocs: z.array(z.string()).min(1),
      couverture: image(),
      couvertureAlt: z.string(),
      brouillon: z.boolean().default(false),
    }),
});

/**
 * Notes : listes, relevés, bibliographies — des outils de travail tenus à jour, non des
 * articles. Le corps est en Markdown ; il ne porte ni titre ni chapeau (l'en-tête de la
 * page les tire de `titre` et `resume`), il commence directement par le contenu.
 */
const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/notes' }),
  schema: z.object({
    titre: z.string().max(90),
    /** Une phrase : ce que la note rassemble et à quoi elle sert. */
    resume: z.string().max(240),
    /** Permalien : /notes/<identifiant>/ ; égal au nom du fichier. */
    identifiant: z.string(),
    categorie: z.enum(CATEGORIES_NOTE),
    /** En minuscules, sauf nom propre. Chacun mène à l'index des mots-clés de /notes/. */
    motsCles: z.array(z.string()).min(1).max(5),
    /** Date de la dernière mise à jour. */
    date: z.coerce.date(),
    licence: z.string().default('CC BY 4.0'),
    brouillon: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/pages' }),
  schema: z.object({ titre: z.string(), description: z.string() }),
});

export const collections = { realisations, documents, articles, mementos, affiches, notes, pages };
