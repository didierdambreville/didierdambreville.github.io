/**
 * Garde-fou : le nom du fichier fait l'adresse de la page.
 *
 * Si `identifiant` et nom de fichier divergent, l'adresse annoncée dans les données
 * structurées n'est pas celle qui est servie. C'est un défaut silencieux — il ne se
 * voit pas à l'écran, et se découvre de l'extérieur. On le fait donc échouer à la
 * construction plutôt que de compter sur la vigilance.
 *
 * (La fonction vit dans un module à part parce que `getStaticPaths` s'exécute dans
 * une portée isolée : seuls les imports y sont accessibles.)
 */
export function verifierIdentifiants(
  entrees: { id: string; data: { identifiant: string } }[],
): void {
  for (const e of entrees) {
    if (e.data.identifiant !== e.id) {
      throw new Error(
        `Identifiant incohérent : le fichier « ${e.id}.md » déclare identifiant « ${e.data.identifiant} ». ` +
          `Les deux doivent être identiques — c'est le nom du fichier qui fait l'adresse de la page.`,
      );
    }
  }
}
