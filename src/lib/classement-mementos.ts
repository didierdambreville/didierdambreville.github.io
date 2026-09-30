/**
 * Classement des mémentos : huit familles, chacune divisée en rubriques.
 *
 * Structure arrêtée par l'auteur le 30 septembre 2026. Les `sujets` listent ce qui est
 * prévu dans chaque rubrique ; ils ne sont PAS affichés. Le site ne montre que les
 * familles et rubriques qui comptent au moins un mémento publié : un sujet apparaît de
 * lui-même le jour où sa notice est déposée dans src/data/mementos/.
 *
 * Chaque notice désigne sa rubrique par son identifiant (`rubrique: "informatique"`) ;
 * la famille s'en déduit. Les identifiants sont donc uniques sur l'ensemble.
 */

export interface Rubrique {
  id: string;
  nom: string;
  sujets: string[];
}

export interface Famille {
  numero: string;
  nom: string;
  rubriques: Rubrique[];
}

export const FAMILLES: Famille[] = [
  {
    numero: '01',
    nom: 'Sciences fondamentales',
    rubriques: [{ id: 'sciences', nom: 'Sciences', sujets: ['Mathématique', 'Physique', 'Chimie'] }],
  },
  {
    numero: '02',
    nom: 'Génie et technologies',
    rubriques: [
      {
        id: 'genie',
        nom: 'Génie',
        sujets: [
          'Génie civil',
          'Génie mécanique',
          'Électricité', // publié
          'Électronique', // Raspberry Pi, Arduino
          'Maçonnerie',
          'Traitement de l’eau',
        ],
      },
      {
        id: 'informatique',
        nom: 'Informatique',
        sujets: [
          'Informatique',
          'Logiciels',
          'Linux', // publié, avec VM & Docker
          'JSON', // publié
          'Python', // publié
          'Rust', // publié
          'Git et GitHub',
          'Cybersécurité', // publié
        ],
      },
    ],
  },
  {
    numero: '03',
    nom: 'Économie et organisation',
    rubriques: [{ id: 'economie', nom: 'Économie', sujets: ['Économie', 'Finance et gestion', 'Logistique'] }], // 1 publié
  },
  {
    numero: '04',
    nom: 'Sciences humaines',
    rubriques: [{ id: 'sciences-humaines', nom: 'Sciences humaines', sujets: ['Psychologie', 'Philosophie'] }],
  },
  {
    numero: '05',
    nom: 'Langues et littérature',
    rubriques: [
      {
        id: 'langues',
        nom: 'Langues',
        sujets: ['Anglais de voyage', 'Espagnol de voyage', 'Latin – français'], // 1 et 3 publiés
      },
      { id: 'litterature', nom: 'Littérature', sujets: ['Littérature'] },
    ],
  },
  {
    numero: '06',
    nom: 'Stratégie',
    rubriques: [{ id: 'jeux', nom: 'Jeux', sujets: ['Échecs'] }], // publié
  },
  {
    numero: '07',
    nom: 'Musique',
    rubriques: [
      { id: 'musique', nom: 'Musique', sujets: ['Musique classique', 'Jazz', 'Blues'] },
      { id: 'instrument', nom: 'Instrument', sujets: ['Guitare classique', 'Piano classique'] }, // guitare publiée
    ],
  },
  {
    numero: '08',
    nom: 'Théologie et tradition catholique',
    rubriques: [
      { id: 'theologie', nom: 'Théologie', sujets: ['Théologie catholique'] },
      {
        id: 'tradition',
        nom: 'Tradition',
        sujets: ['Pères de l’Église', 'Docteurs de l’Église', 'Magistère et tradition'],
      },
      { id: 'spiritualite', nom: 'Spiritualité', sujets: ['Prières latines'] }, // publié
    ],
  },
];

/** Liste plate des identifiants, pour le schéma de la collection. */
export const RUBRIQUES_MEMENTO = FAMILLES.flatMap((f) => f.rubriques.map((r) => r.id)) as [
  string,
  ...string[],
];

/** Famille et rubrique d'un identifiant de rubrique. */
export function situer(rubriqueId: string): { famille: Famille; rubrique: Rubrique } {
  for (const famille of FAMILLES) {
    const rubrique = famille.rubriques.find((r) => r.id === rubriqueId);
    if (rubrique) return { famille, rubrique };
  }
  throw new Error(`Rubrique de mémento inconnue : « ${rubriqueId} ».`);
}
