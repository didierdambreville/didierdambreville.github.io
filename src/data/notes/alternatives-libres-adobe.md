---
titre: "Sept alternatives libres aux logiciels Adobe (Crafting Apps)"
resume: "Sept logiciels libres publiés sur GitHub fin septembre 2026 pour remplacer Photoshop, Illustrator, Premiere Pro, Lightroom, Acrobat, After Effects et InDesign : ce qu'ils font, ce qui leur manque, comment les essayer."
identifiant: "alternatives-libres-adobe"
categorie: "informatique"
motsCles: ["logiciel libre", "Adobe", "graphisme", "GitHub", "intelligence artificielle"]
date: 2026-10-07
---

## En bref

- **Sept logiciels**, publiés les 30 septembre et 1er octobre 2026 sur GitHub par l'équipe ArtCraft
  (compte [`storytold`](https://github.com/storytold)), sous le nom commun de
  [Crafting Apps](https://getartcraft.com/apps). Chacun reprend un logiciel Adobe : mêmes menus,
  mêmes panneaux, mêmes raccourcis.
- **Libres et gratuits** : licence MIT ou Apache 2.0, au choix de l'utilisateur. Pas d'abonnement.
- **Écrits de zéro en Rust**, « en salle blanche » : à partir des spécifications publiques et du
  comportement observé des logiciels, sans code, icône ni ressource d'Adobe. Aucun lien avec Adobe.
- **Installeurs prêts** pour Windows, macOS et Linux, et, pour la plupart, une version qui tourne
  dans le navigateur.
- **Un succès immédiat** : PhotoCraft dépassait 11 000 étoiles sur GitHub le 7 octobre, une semaine
  après sa création.
- **Mais ce sont des versions 0.2 à 0.4.** Les dépôts le disent eux-mêmes : aucun ne remplace encore
  le logiciel d'Adobe pour un travail professionnel.

## Les sept, d'un coup d'œil

| Adobe | Alternative | Pour quoi faire | Version au 7 octobre | Où il en est, selon ses auteurs |
|---|---|---|---|---|
| Photoshop | [PhotoCraft](https://github.com/storytold/photocraft) | retouche d'image, fichiers PSD | 0.2.0 | 25 à 35 % prêt pour un usage professionnel quotidien |
| Illustrator | [VectorCraft](https://github.com/storytold/vectorcraft) | illustration vectorielle | 0.3.1 | 69 à 75 % des fonctions ; 40 à 55 % au niveau d'un utilisateur avancé |
| Premiere Pro | [FilmCraft](https://github.com/storytold/filmcraft) | montage vidéo, étalonnage, son | 0.2.1 | 50 à 60 % prêt pour de vrais projets |
| Lightroom | [LightCraft](https://github.com/storytold/lightcraft) | photothèque, développement RAW | 0.2.1 | 60 à 70 % comme remplaçant au quotidien |
| Acrobat Pro | [PrintCraft](https://github.com/storytold/printcraft) | lire, organiser, protéger des PDF | 0.2.1 | la moitié des fonctions hors ligne, un tiers du travail |
| After Effects | [EffectCraft](https://github.com/storytold/effectcraft) | animation, effets visuels | 0.4.0 | non mesuré ; « pas encore » pour un travail client |
| InDesign | [DesignCraft](https://github.com/storytold/designcraft) | mise en page, édition | 0.2.1 | environ 83 % (fonctions et profondeur) |

Les pourcentages sont des **auto-évaluations**, chacune avec sa propre mesure : ils ne se comparent
pas d'un logiciel à l'autre. Tous distinguent ce qui existe de ce qui tient sur un vrai travail :
PhotoCraft relie chaque menu de Photoshop à une commande, mais estime sa parité réelle « bien en
dessous de 50 % ».

## PhotoCraft, pour Photoshop

- **Calques** : groupes, masques de fusion et vectoriels, masques d'écrêtage, 16 calques de réglage
  (courbes, niveaux, vibrance, teinte et saturation…), styles de calque (ombre portée, lueur,
  biseau, contour…), objets dynamiques avec filtres dynamiques, 27 modes de fusion.
- **Outils** : 34, dont lasso, baguette magique, sélection d'objet et du sujet, tampon, correcteur,
  plume, texte et formes ; un vrai moteur de brosses, sensible à la pression et à l'inclinaison
  du stylet. Plus de 70 filtres, prévisualisés en direct.
- **Couleur** : RVB, niveaux de gris, CMJN et Lab, en 8, 16 et 32 bits par couche ; gestion des
  profils ICC et épreuvage à l'écran.
- **Fichiers** : ouvre, modifie et enregistre les PSD et PSB — 307 des 309 fichiers du jeu d'essai
  psd-tools ressortent avec le même rendu. Aussi PNG, JPEG, TIFF, WebP, AVIF, OpenEXR, GIF.
- **Ce qui manque** : les fonctions d'IA générative, une vingtaine d'outils, la profondeur
  typographique et des flux professionnels, les modules externes (plug-ins). Après la version 0.2.0,
  les premiers utilisateurs ont relevé des défauts de base : sélection de texte décalée, 214
  raccourcis en échec, panneaux qui se redimensionnent seuls.

## VectorCraft, pour Illustrator

- **Dessin** : plume et sélection directe sur de vraies courbes de Bézier, Pathfinder et concepteur
  de formes, dégradés et filets de dégradé, dégradés de formes modifiables, distorsion par
  enveloppe, répétition radiale, plans de travail multiples.
- **Texte** : styles, chaînage entre blocs ; texte vertical en premier état.
- **Fichiers** : SVG, PDF et `.ai` enregistrés avec compatibilité PDF, en lecture et en écriture ;
  EPS, DXF, EMF/WMF et PSD également pris en charge ; export PNG, JPEG, WebP et « Exporter pour les
  écrans ».
  Format natif documenté (`.vectorcraft`, du JSON).
- **Ce qui manque** : la 3D et les matières, les effets pixellisés à la manière de Photoshop, la
  composition verticale japonaise et chinoise, les variables et les scripts.

## FilmCraft, pour Premiere Pro

- **Montage** : moniteurs source et programme, chutiers, pistes multiples, montage trois points,
  tous les outils de raccord de Premiere, multicaméra, marqueurs, imbrication. Jeux de raccourcis de Premiere Pro, Final Cut Pro et Avid.
- **Étalonnage** à la manière de Lumetri : correction de base, courbes, roues chromatiques,
  correction secondaire, vignetage ; oscilloscopes calculés sur l'image étalonnée.
- **Effets** : les 93 effets vidéo de Premiere et une trentaine de transitions ; images clés avec
  courbes de valeur et de vitesse.
- **Son** : mesure de la sonie à la norme EBU R128, égaliseur, compresseur, réverbération,
  débruitage, table de mixage avec automation.
- **Sous-titres** : SRT, WebVTT et SCC, incrustables à l'export.
- **Codecs maison, sans FFmpeg** : lecture H.264, HEVC, ProRes, VP9, AV1, DNxHD/DNxHR ; export
  H.264 (MP4), ProRes 422 HQ, DNxHR, MXF.
- **Échanges** : XML de Final Cut Pro 7 (celui qu'échangent Premiere et DaVinci Resolve), FCPXML,
  OpenTimelineIO, EDL, AAF pour Avid et Pro Tools, OMF.
- **Ce qui manque** : le décodage matériel hors macOS (l'étalonnage et l'export tournent encore sur
  le processeur), les modules audio et vidéo (VST3, Audio Units, OpenFX), l'export HEVC et AV1 ;
  les fichiers de caméras et de téléphones sont encore peu testés.

## LightCraft, pour Lightroom

- **Bibliothèque** : albums, dossiers, albums dynamiques, piles, copies virtuelles, notes, drapeaux,
  libellés, recherche ; tri et comparaison pour sélectionner une série.
- **Développement non destructif** : lumière, balance des blancs, mélangeur de couleurs, étalonnage
  en trois roues, courbe de tonalité, texture, clarté, correction du voile, masques (pinceau,
  linéaire, radial, plage de luminance ou de couleur), redressement automatique, corrections
  d'objectif, suppression des taches, fusion HDR et panorama.
- **RAW décodés par l'équipe** : DNG, Canon CR2, Sony ARW, Nikon NEF, Fujifilm RAF non compressé
  (X-Trans compris), Panasonic RW2, Pentax PEF, Olympus ORF non compressé.
- **Compatibilité** : fichiers annexes XMP lus et écrits, réglages de développement de Lightroom
  relus, préréglages XMP.
- **Export** : JPEG, PNG, TIFF, WebP, AVIF, DNG, avec filigrane, renommage et traitement par lots.
- **Ce qui manque** : la calibration des couleurs propre à chaque appareil (hors DNG, les couleurs
  sortent ternes), les Canon CR3 et les RAW compressés de Fujifilm et d'Olympus (aperçu seulement),
  les masques et le débruitage par IA, le HDR, la vidéo, les modules Impression, Livre et Carte.

## PrintCraft, pour Acrobat Pro

- **Ce qui marche** : lecture et recherche ; organisation des pages (rotation, insertion,
  suppression, déplacement) ; fusion et découpage, en conservant signets, liens et champs ;
  commentaires ; remplissage et création de formulaires ; mots de passe et chiffrement jusqu'à
  AES-256 ; caviardage ; signatures numériques simples ; impression ; vérification d'accessibilité.
- **Enregistrements sûrs** : les modifications s'ajoutent à la fin du fichier, dont les octets
  d'origine restent intacts ; sauvegarde automatique chaque minute.
- **En ligne de commande** : `printcraft-cli combine`, `extract` et `split` pour fusionner, extraire
  ou découper des PDF par lots.
- **Ce qui manque** : la modification fiable du texte existant, la reconnaissance de caractères
  (OCR) au-delà de l'alphabet latin, l'import et l'export Office, l'horodatage et la validation à
  long terme des signatures, le contrôle PDF/A, PDF/X et PDF/UA, les formulaires XFA, des
  installeurs signés. Le rendu des pages est encore confié à une bibliothèque tierce, et des
  fichiers malveillants provoquent encore des plantages.

## EffectCraft, pour After Effects

- **Animation** : compositions et précompositions ; calques de texte, de formes, de métrage, de
  réglage, caméras et lumières ; parentage, caches, 38 modes de fusion, flou de mouvement ; images
  clés et expressions.
- **Effets** : 306, plus les styles de calque. 3D avec caméras, profondeur de champ, lumières et
  ombres. Détourage assisté (Roto Brush) et suivi de visage, par deux petits modèles d'IA à
  télécharger en option.
- **Export** : ProRes avec couche alpha, HEVC, AV1, WebM, séquences d'images jusqu'à l'EXR 32 bits,
  GIF animé ; **Lottie** en import et en export, pour des animations destinées au web et aux
  applications.
- **Projets lisibles** : du JSON versionné (`.ecproj`), qu'on peut suivre dans un gestionnaire de
  versions.
- **Ce qui manque** : n'ouvre pas les projets After Effects (`.aep`, `.aepx`), ne fait pas tourner
  ses modules externes ; ses rendus ne sont pas encore comparés à ceux d'After Effects. Premier
  commit le 1er octobre 2026.

## DesignCraft, pour InDesign

- **Mise en page** : planches et gabarits, blocs de texte et d'image, textes chaînés, styles de
  paragraphe, de caractère et d'objet, nuancier (quadrichromie, tons directs, teintes), habillage,
  tableaux, notes de bas de page, table des matières, index, rechercher-remplacer avec GREP,
  correcteur orthographique.
- **Typographie** : composition de paragraphe Knuth-Plass (l'algorithme de TeX), césure par
  dictionnaire, alignement optique des marges, grille de ligne de base.
- **Fichiers** : IDML, le format d'échange d'InDesign, en import et en export ; export PNG. L'export
  PDF est en chantier : la feuille de route le décrit déjà en partie (PDF/A-2b), la page d'accueil
  du dépôt l'annonce encore à venir.
- **Ce qui manque** : les fichiers `.indd`, illisibles sans enfreindre la règle de la salle blanche,
  l'EPS, la validation PDF/X-4 par un outil certifié, la fidélité de détail des dialogues et des
  panneaux.

## Ce qu'ils ont en commun

- **Pilotables par une IA.** Chaque commande des menus est aussi accessible en ligne de commande,
  par un canal de contrôle et par un **serveur MCP** : un assistant comme Claude peut retoucher,
  monter ou mettre en page dans le logiciel, et traiter des dossiers entiers par lots.
- **Écrits avec des agents d'IA.** La documentation de FilmCraft décrit une boucle de travail pour
  agents autonomes ; la feuille de route de DesignCraft chiffre le travail restant en heures d'un
  agent Claude Opus 5.5. D'où le rythme : plusieurs versions par semaine.
- **Sans télémétrie**, précisent LightCraft, PrintCraft, EffectCraft et DesignCraft ; LightCraft et
  PrintCraft ajoutent : sans compte ni nuage.
- **Ouverts, mais pas la marque.** Le code est libre ; le nom et le logo ArtCraft restent des
  marques, à retirer de toute version dérivée.
- **L'équipe** : [ArtCraft](https://getartcraft.com/), qui édite aussi un studio de création
  d'images et de vidéos par IA. Communauté et entraide sur [Discord](https://discord.gg/artcraft).

## Avant d'installer

1. **Télécharger au bon endroit** : la page *Releases* de chaque dépôt, sous
   `github.com/storytold/`. Des copies du code circulent déjà sous d'autres comptes.
2. **Choisir le bon fichier** : sous Windows, `…-windows-x64.msi` pour installer ou
   `…-windows-x64-portable.zip` sans installation ; sous macOS, `…-macos-universal.dmg` ; sous Linux,
   AppImage, `.deb` ou `.rpm`.
3. **Vérifier l'empreinte** : chaque version publie un fichier `SHA256SUMS.txt`. Sous Windows, dans
   PowerShell : `Get-FileHash nom-du-fichier.msi`, puis comparer avec la ligne correspondante.
4. **Travailler sur des copies.** Ce sont des versions alpha : ne leur confier ni ses seuls
   originaux, ni un travail à rendre.
5. **Garder son abonnement Adobe pour l'instant** : les auteurs eux-mêmes ne présentent aucun de ces
   logiciels comme un remplaçant. macOS est la plateforme la plus testée ; Windows et Linux le sont
   moins.
6. **Signaler ce qui ne va pas** : par les *Issues* du dépôt concerné ; c'est ce que les équipes
   demandent en priorité.

## Les alternatives libres déjà éprouvées

Pour un travail à rendre aujourd'hui, les logiciels libres développés depuis des années restent plus
sûrs, au prix d'une interface différente de celle d'Adobe :

- **Photoshop** → [GIMP](https://www.gimp.org/)
- **Illustrator** → [Inkscape](https://inkscape.org/)
- **Premiere Pro** → [Kdenlive](https://kdenlive.org/)
- **Lightroom** → [darktable](https://www.darktable.org/) (version 5.6.2 du 4 octobre 2026)
- **Acrobat** → [PDF Arranger](https://github.com/pdfarranger/pdfarranger), pour organiser les
  pages seulement
- **After Effects** → [Natron](https://natrongithub.github.io/), compositing (dernière version :
  novembre 2022)
- **InDesign** → [Scribus](https://www.scribus.net/)

Dépôts, versions, installeurs et états d'avancement relevés le 7 octobre 2026 dans les dépôts
eux-mêmes (pages d'accueil et feuilles de route) ; les pourcentages sont ceux des équipes. Ces
projets changent chaque jour : à revérifier avant toute décision.
