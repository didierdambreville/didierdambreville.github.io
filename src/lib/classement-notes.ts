/**
 * Classement des notes : des dossiers, comme ceux d'un gestionnaire de favoris.
 *
 * Une note n'est pas un article : c'est une liste, un relevé, une bibliographie — un
 * outil de travail tenu à jour, qu'on consulte plutôt qu'on ne le lit d'une traite.
 * Chaque note se range dans un à trois dossiers (`categories: ["maison", "sante"]`), le
 * principal en tête, et porte de un à cinq mots-clés libres. /notes/ range chaque note
 * une fois, sous son dossier principal ; la page d'un dossier, /notes/dossier/<id>/, en
 * donne toutes les notes ; l'index /notes/mots-cles/ les range par mot-clé.
 *
 * Structure arrêtée le 1er octobre 2026 avec les trois premières notes ; « Informatique »,
 * « Maison », « Santé », « Voyages » et « Loisirs » ajoutés le même jour ; « Logiciel libre »,
 * « Fabrication », « Gastronomie », « Nature » et « Musique » le 8 octobre 2026, avec le
 * classement multiple. Ce que range chacun :
 *   methode         — conduite de projet, méthodes de travail
 *   documentation   — bibliographies, répertoires de sites et de sources
 *   informatique    — systèmes, réglages, domotique
 *   logiciel-libre  — logiciels et dépôts libres, alternatives aux logiciels propriétaires
 *   fabrication     — fablab, bricolage, menuiserie, fabriquer soi-même
 *   maison          — aménagement, équipement, confort
 *   sante           — alimentation, remèdes, sommeil (sans promesse de guérison)
 *   gastronomie     — vins, cuisine, produits d'exception
 *   patrimoine      — architecture, histoire, lieux
 *   voyages         — circuits, destinations
 *   nature          — plein air, baignade, randonnée
 *   musique         — instruments, répertoire, pédagogie
 *   loisirs         — jeux, passe-temps, dégustation
 *
 * Un dossier sans note publiée n'apparaît pas. Pour en ajouter un : cette liste, et rien
 * d'autre ; son identifiant fait l'adresse /notes/dossier/<id>/ et ne change plus.
 */

export interface Categorie {
  id: string;
  nom: string;
}

export const CATEGORIES: Categorie[] = [
  { id: 'methode', nom: 'Méthode' },
  { id: 'documentation', nom: 'Documentation' },
  { id: 'informatique', nom: 'Informatique' },
  { id: 'logiciel-libre', nom: 'Logiciel libre' },
  { id: 'fabrication', nom: 'Fabrication' },
  { id: 'maison', nom: 'Maison' },
  { id: 'sante', nom: 'Santé' },
  { id: 'gastronomie', nom: 'Gastronomie' },
  { id: 'patrimoine', nom: 'Patrimoine' },
  { id: 'voyages', nom: 'Voyages' },
  { id: 'nature', nom: 'Nature' },
  { id: 'musique', nom: 'Musique' },
  { id: 'loisirs', nom: 'Loisirs' },
];

/** Liste plate des identifiants, pour le schéma de la collection. */
export const CATEGORIES_NOTE = CATEGORIES.map((c) => c.id) as [string, ...string[]];

export function categorie(id: string): Categorie {
  const c = CATEGORIES.find((c) => c.id === id);
  if (!c) throw new Error(`Catégorie de note inconnue : « ${id} ».`);
  return c;
}
