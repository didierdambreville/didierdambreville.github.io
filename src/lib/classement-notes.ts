/**
 * Classement des notes : des dossiers, comme ceux d'un gestionnaire de favoris.
 *
 * Une note n'est pas un article : c'est une liste, un relevé, une bibliographie — un
 * outil de travail tenu à jour, qu'on consulte plutôt qu'on ne le lit d'une traite.
 * Chaque note désigne son dossier (`categorie: "methode"`) et porte de un à cinq
 * mots-clés libres ; le panneau de gauche range par dossier, l'index de /notes/ par
 * mot-clé.
 *
 * Structure arrêtée le 1er octobre 2026 avec les trois premières notes. Un dossier sans
 * note publiée n'apparaît pas. Pour en ajouter un : cette liste, et rien d'autre.
 */

export interface Categorie {
  id: string;
  nom: string;
}

export const CATEGORIES: Categorie[] = [
  { id: 'methode', nom: 'Méthode' },
  { id: 'documentation', nom: 'Documentation' },
  { id: 'patrimoine', nom: 'Patrimoine' },
];

/** Liste plate des identifiants, pour le schéma de la collection. */
export const CATEGORIES_NOTE = CATEGORIES.map((c) => c.id) as [string, ...string[]];

export function categorie(id: string): Categorie {
  const c = CATEGORIES.find((c) => c.id === id);
  if (!c) throw new Error(`Catégorie de note inconnue : « ${id} ».`);
  return c;
}
