/**
 * Politique de sécurité de contenu.
 *
 * GitHub Pages ne permet pas de fixer d'en-têtes HTTP : la politique est donc portée
 * par une balise <meta>, page par page. Ce que cela change par rapport à des en-têtes :
 *
 *  - `frame-ancestors` est ignoré dans une balise meta. Rien n'empêche donc un tiers
 *    d'encadrer une page du site. C'est la seule protection réellement perdue.
 *  - `Strict-Transport-Security` ne peut pas être posé — mais le domaine github.io
 *    figure déjà sur la liste de préchargement HSTS des navigateurs.
 *  - Les fichiers servis depuis /doc/ ne sont couverts par aucune politique.
 *
 * Le jeu d'en-têtes complet, à reposer le jour d'un passage sur un hébergeur qui les
 * accepte, est conservé dans entetes-si-hebergeur-avec-entetes.txt.
 *
 * ATTENTION : ces politiques ne sont posées que sur les pages CONSTRUITES
 * (`import.meta.env.PROD`). Le serveur de développement injecte ses propres styles et
 * son client de rechargement à chaud, qu'une politique stricte refuse — la page
 * s'afficherait alors sans mise en forme. Pour éprouver la politique : `npm run preview`.
 */

/** Régime documentaire : tout le site. Aucune ligne de JavaScript n'est autorisée. */
export const CSP_DOCUMENTAIRE = [
  "default-src 'none'",
  "img-src 'self' data:",
  "style-src 'self'",
  "font-src 'self'",
  "frame-src 'self'",
  "base-uri 'none'",
  "form-action 'none'",
  "object-src 'none'",
].join('; ');

/**
 * Régime démonstrateur : les pages /demos/<slug>/ seulement.
 *
 * Ces pages sont appelées dans une `iframe` en bac à sable, sans `allow-same-origin` :
 * le document y vit sur une origine opaque et ne peut donc atteindre ni la page qui
 * l'accueille, ni le stockage du site. Conséquence directe : `'self'` n'y désigne plus
 * rien, et un script servi depuis un fichier serait refusé. Le script du démonstrateur
 * est donc écrit dans la page et autorisé par son empreinte — ni fichier externe,
 * ni `'unsafe-inline'`.
 */
export function cspDemonstrateur(empreintes: string[] = []): string {
  const scriptSrc = empreintes.length
    ? `script-src ${empreintes.map((e) => `'${e}'`).join(' ')}`
    : "script-src 'none'";
  return [
    "default-src 'none'",
    "img-src data:",
    "style-src 'unsafe-inline'",
    scriptSrc,
    "base-uri 'none'",
    "form-action 'none'",
    "object-src 'none'",
  ].join('; ');
}
