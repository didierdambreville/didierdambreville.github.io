# Portfolio — squelette du site

Site statique, conforme à la note de structure. Astro 6, aucune ligne de JavaScript hors des
démonstrateurs, politique de sécurité de contenu appliquée par en-têtes.

> **Vous ne connaissez pas ces outils ?** Lisez `COMMENT-FAIRE.md` plutôt que ce fichier :
> il dit la même chose sans supposer que vous avez déjà lancé un site en local.
> En pratique, tout tient en un double-clic sur `lancer.cmd`.

## Lancer

```
npm install
npm run dev      # http://localhost:4321 — travail au quotidien
npm run build    # produit dist/
npm run preview  # sert dist/ — le SEUL mode où la politique de sécurité est posée
```

Node 22 ou plus est requis (Astro 6 a abandonné Node 18 et 20).

## État au 30 septembre 2026

- **Contenu publié** : les 13 mémentos (`src/data/mementos/`, fichiers dans `public/doc/mementos/`),
  classés selon `src/lib/classement-mementos.ts`. Import et contrôles : `importer-mementos.cmd`
  (`outils/importer-mementos.mjs`) — voir `COMMENT-FAIRE.md`, « Les mémentos ».
- **Identité** : nom, adresses, réseaux et licence dans `src/lib/identite.ts`, et nulle part
  ailleurs. Logo : `public/logo-or.svg` (fichier maître : `../identite/`).
- **Couleurs** : bleu et or sur fond gris clair, jetons en tête de `src/styles/global.css`
  (contrastes calculés, en commentaire).
- **Menu** : Mémentos · Articles · Méthodes · À propos. Articles et Méthodes renvoient à specula.fr
  et arscripta.fr ; dès qu'un article est publié ici, « Articles » mène à `/articles/`.
- **Rubriques en attente** (articles, réalisations, documents) : leurs pages existent, mais une
  rubrique sans pièce publiée n'apparaît ni au menu ni au plan du site (`astro.config.mjs`).

## Ajouter une pièce

Déposer un fichier Markdown dans `src/data/realisations/`, ses images dans
`src/assets/realisations/<identifiant>/`. Rien d'autre à toucher : index, filtres, flux, plan du
site et données structurées s'en déduisent.

Le schéma refuse la construction si le texte alternatif d'image manque. C'est voulu : l'accessibilité
est une contrainte de compilation, non une intention.

Deux formats de fiche, jamais un troisième :

- **court** — en-tête, une image, trois liens, deux phrases. C'est la règle.
- **long** — les trois mouvements : problème, parti pris, ce qu'on en retient. Une pièce sur quatre
  au plus.

## Les trois régimes

| Régime | Pages | JavaScript |
|---|---|---|
| documentaire | tout le site | aucun |
| visuel | galeries | aucun — le défilement se fait en CSS |
| démonstrateur | `/demos/<slug>/` seulement | autorisé, sous une politique distincte |

Une fiche ne charge jamais le script de son démonstrateur : c'est l'`iframe` cloisonnée qui le fait.
Toute pièce interactive porte une capture enregistrée (`apercu`) — la fiche survit à la démonstration.

## Pièges à ne pas rouvrir

- `build.inlineStylesheets: 'never'` dans `astro.config.mjs`. Sans lui, Astro insère de petites
  feuilles dans le HTML, que `style-src 'self'` rejette : la page s'affiche nue, sans erreur visible
  ailleurs que dans la console.
- La politique de sécurité n'est posée que sur les pages **construites** (`import.meta.env.PROD`
  dans `BaseHead.astro`). Le serveur de développement injecte ses propres styles et son client de
  rechargement à chaud, qu'une politique stricte refuse — même symptôme, page nue. Ne jamais
  retirer cette condition : éprouver la politique avec `npm run preview`.
- Aucun attribut `style=""`, jamais, nulle part.
- Aucune ressource chargée depuis un tiers, polices comprises.
- Les blocs `application/ld+json` ne sont pas exécutés : ils passent sous `default-src 'none'`.

## Mise en ligne — GitHub Pages

En ligne depuis le 30 septembre 2026 : `https://didierdambreville.github.io`, dépôt public
`didierdambreville/didierdambreville.github.io`, Pages en mode « GitHub Actions ». Chaque envoi sur
`main` reconstruit et republie le site (`.github/workflows/deploy.yml`, actions `checkout` v7,
`withastro/action` v6, `deploy-pages` v5).

Envoi : `gh` sert de gestionnaire d'identifiants en configuration **locale** du dépôt
(`credential.https://github.com.helper`, liste remise à zéro), faute de quoi le gestionnaire de
Windows présente un ancien jeton dépourvu du droit `workflow`.

Si le dépôt portait un autre nom, le site serait servi sous `/<nom-du-depot>/` et il faudrait
ajouter `base: '/<nom-du-depot>'` dans `astro.config.mjs` — puis revoir toutes les adresses
absolues du site. Le dépôt au nom du compte évite cela entièrement.

### Ce que GitHub Pages ne sait pas faire

Aucun en-tête HTTP n'est configurable. Trois conséquences, toutes assumées :

- La politique de sécurité de contenu est portée par une balise `<meta>` dans chaque page
  (`src/csp.ts`). Elle fonctionne, à une exception près : `frame-ancestors` est ignoré en balise
  meta, donc rien n'empêche un tiers d'encadrer une page. C'est la seule protection perdue.
- `Strict-Transport-Security` ne peut pas être posé — mais `github.io` est déjà sur la liste de
  préchargement HSTS des navigateurs.
- Aucune redirection côté serveur : `public/_redirects` est inerte. Pour conserver une ancienne
  adresse, il faut y laisser une page de redirection.

Le jeu d'en-têtes complet est conservé dans `entetes-si-hebergeur-avec-entetes.txt`, à reposer tel
quel le jour d'un passage sur un hébergeur qui les accepte.

`public/.nojekyll` doit rester : sans lui, un déploiement depuis une branche ferait ignorer par
GitHub le dossier `_astro/`, où vivent la feuille de style et les images.

## Dossiers vides à remplir

- `public/doc/` — les PDF servis, référencés par les notices.
- `public/apercus/` — les captures enregistrées des démonstrateurs.
- `src/pages/demos/` — un dossier par démonstrateur.
