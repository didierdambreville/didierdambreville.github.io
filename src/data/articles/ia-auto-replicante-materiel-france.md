---
titre: "IA auto-réplicante : le matériel concerné et où le trouver en France"
these: "Selon Anthropic, une IA auto-réplicante peut se contenter de boîtiers à 4 Go de RAM. Voici le matériel concerné, où le trouver en France pour un banc d’essai fermé, et celui à éviter."
identifiant: "ia-auto-replicante-materiel-france"
rubriques: ["intelligence-artificielle", "informatique", "electronique"]
date: 2026-10-13
sources:
  - libelle: "Anthropic, Frontier Red Team (W. Zhou, D. Freeman), « AI models may be capable of self-replicating without access to a datacenter », 12 octobre 2026"
    url: "https://www.anthropic.com/research/self-replicating-ai"
    note: "Source de tous les chiffres attribués à Anthropic : 15 boîtiers Android TV d'environ 55 $ à 0,39 jeton par seconde, inférence en route sur 8 types de matériel sur 9, GLM-5.2 à 8 nœuds sur 8, tendance de 13,7 points ECI par an, durées de mise en place, pistes de défense. Texte intégral relu le 13 octobre 2026."
  - libelle: "Air et coauteurs, « Language Models Can Autonomously Hack and Self-Replicate », arXiv:2605.06760, 7 mai 2026"
    url: "https://arxiv.org/abs/2605.06760"
    note: "Des modèles de langage exploitent une faille d'application web, extraient des identifiants et déploient un serveur d'inférence sur l'hôte compromis, puis recommencent depuis la copie. Résumé relu le 13 octobre 2026."
  - libelle: "Commission européenne, règlement délégué (UE) 2022/30 du 29 octobre 2021 (directive 2014/53/UE, article 3, paragraphe 3, points d, e et f)"
    url: "https://eur-lex.europa.eu/eli/reg_del/2022/30/oj/fra"
    note: "Article 1er : l'exigence de l'article 3, paragraphe 3, point d, s'applique à tout équipement radioélectrique capable de communiquer par lui-même sur l'internet. Consulté le 13 octobre 2026."
  - libelle: "Commission européenne, règlement délégué (UE) 2023/2444 du 20 juillet 2023"
    url: "https://eur-lex.europa.eu/legal-content/FR/ALL/?uri=CELEX:32023R2444"
    note: "Article 1er : le règlement (UE) 2022/30 « est applicable à partir du 1er août 2025 ». Consulté le 13 octobre 2026."
  - libelle: "Commission européenne, « Cyber Resilience Act », règlement (UE) 2024/2847"
    url: "https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act"
    note: "Entrée en vigueur le 10 décembre 2024 ; obligations de notification à partir du 11 septembre 2026 ; obligations principales à partir du 11 décembre 2027. Consulté le 13 octobre 2026."
  - libelle: "Légifrance, Code pénal, chapitre III, articles 323-1 et 323-3-1"
    url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070719/LEGISCTA000006149839/"
    note: "Article 323-1, en vigueur depuis le 26 janvier 2023 : trois ans d'emprisonnement et 100 000 € d'amende. Article 323-3-1 : détention ou mise à disposition d'un outil conçu pour ces infractions « sans motif légitime, notamment de recherche ou de sécurité informatique ». Consulté le 13 octobre 2026."
  - libelle: "redroid-doc, dépôt GitHub et README"
    url: "https://github.com/remote-android/redroid-doc"
    note: "Android dans un conteneur, sous Docker, en arm64 et amd64 ; licence Apache pour le projet, GPL v2 pour les modules noyau ; le README met en garde contre l'exposition de l'accès ADB sur un réseau public. Consulté le 13 octobre 2026."
  - libelle: "Raspberry Pi, Raspberry Pi 5 — fiche produit"
    url: "https://www.raspberrypi.com/products/raspberry-pi-5/"
    note: "Processeur Arm Cortex-A76 à 2,4 GHz ; mémoire LPDDR4X de 1, 2, 4, 8 ou 16 Go selon la variante. Consulté le 13 octobre 2026."
  - libelle: "Raspberry Pi, « Approved Resellers », recherche par région « France »"
    url: "https://www.raspberrypi.com/resellers/?q=France&country=1"
    note: "Neuf revendeurs agréés affichés pour la France, dont Kubii et Equipements Scientifiques (ES France). Consulté le 13 octobre 2026."
  - libelle: "NVIDIA, Jetson Orin Nano Super Developer Kit — fiche produit"
    url: "https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/nano-super-developer-kit/"
    note: "Mémoire de 8 Go LPDDR5 sur 128 bits ; bande passante de 102 Go/s. Consulté le 13 octobre 2026."
  - libelle: "NVIDIA, boutique « Robotique et IA en périphérie », version française"
    url: "https://marketplace.nvidia.com/fr-fr/enterprise/robotics-edge/"
    note: "Le kit Jetson Orin Nano Super s'ouvre sur « Voir les options d'achat » : Arrow, Silicon Highway et RS. Aucun prix affiché. Consulté le 13 octobre 2026."
  - libelle: "NVIDIA, boutique « Robotics & Edge AI », version américaine"
    url: "https://marketplace.nvidia.com/en-us/enterprise/robotics-edge/"
    note: "Kit Jetson Orin Nano Super affiché à 399,00 $ le 13 octobre 2026."
  - libelle: "FBI, Internet Crime Complaint Center, « Home Internet Connected Devices Facilitate Criminal Activity », alerte I-060525-PSA, 5 juin 2025"
    url: "https://www.ic3.gov/PSA/2025/PSA250605"
    note: "Des appareils sont configurés avec un logiciel malveillant avant l'achat ; le FBI recommande d'éviter les appareils IoT de marques inconnues et de vérifier la certification Google Play Protect des appareils Android. Consulté le 13 octobre 2026."
  - libelle: "Cybermalveillance.gouv.fr, page d'accueil"
    url: "https://www.cybermalveillance.gouv.fr/"
    note: "Assistance et prévention en cybersécurité pour les particuliers et les professionnels ; la section « Victime de cybermalveillance ? » renvoie à 17Cyber pour un diagnostic. Consulté le 13 octobre 2026."
motsCles: ["IA auto-réplicante", "intelligence artificielle", "cybersécurité", "objets connectés", "systèmes embarqués"]
licence: "CC BY 4.0"
miseEnAvant: false
brouillon: false
---

Une rumeur n'a pas besoin de haut-parleur. Elle passe de voisin en voisin, lentement, et aucun interrupteur central ne l'arrête. Anthropic estime que de petits modèles d'IA pourraient, d'ici quelques mois, se copier d'un appareil connecté à l'autre de cette façon [1] : c'est l'hypothèse d'une IA auto-réplicante.

La réponse courte à la question du matériel : des boîtiers d'entrée de gamme à 4 Go de mémoire, mis en réseau par dizaines [1]. Pour l'étudier, on trouve en France de quoi monter un banc d'essai fermé chez des revendeurs identifiés. Le boîtier sans marque, lui, est celui qu'il vaut mieux ne pas acheter.

## Quinze boîtiers TV à 55 dollars font tourner un modèle de 26 milliards de paramètres

Le 12 octobre 2026, l'équipe Frontier Red Team d'Anthropic a publié ses mesures sur ce scénario [1]. Un modèle de 9 milliards de paramètres a mis l'inférence en route sur 8 des 9 types de matériel testés [1]. Dans la démonstration, Gemma4-26B-A4B, 26 milliards de paramètres, tourne réparti sur 15 boîtiers Android TV sans marque, achetés environ 55 dollars pièce, à 0,39 jeton par seconde [1]. C'est lent. Mais il n'a fallu ni GPU ni centre de données.

## Une IA auto-réplicante sans centre de données : pourquoi c'est nouveau

On imaginait un ver d'IA visant les GPU des centres de données : des cibles de valeur, mais mieux défendues. Anthropic montre qu'un parc d'appareils bon marché et mal protégés pourrait fournir assez de calcul [1]. Elle prend pour référence Kimwolf, un botnet de plus de deux millions d'appareils, surtout des boîtiers Android TV [1]. Si chaque groupe de 15 boîtiers servait une copie du modèle, un parc de cette taille fournirait environ 80 000 jetons par seconde, soit au plus une quarantaine de GPU H100 [1]. C'est peu, et le calcul repose sur un seul botnet passé [1]. Le nombre de copies doublerait en quelques jours [1].

## Quel matériel peut faire tourner une IA auto-réplicante ? La mémoire décide

Un boîtier TV embarque de 1 à 4 Go de RAM [1]. Un modèle de 9 milliards de paramètres compressé en 4 bits pèse, d'après mon calcul, environ 4,5 Go avant le cache : aucun boîtier ne le porte seul. Anthropic le découpe en tranches, chaque boîtier gardant quelques couches : avec 4 Go chacun, il faut 4 machines ou plus pour 9 milliards de paramètres, 10 ou plus pour 26 [1]. La limite est la bande passante de la mémoire, non le calcul [1] ; d'où la lenteur : de 28 à 51 heures pour qu'un modèle de 9 milliards installe son moteur d'inférence, de 71 à 150 heures pour celui de 26 milliards [1].

Le matériel concerné se range par mémoire :

- les boîtiers TV (1 à 4 Go) et les NAS de petites entreprises (512 Mo à 2 Go) [1] ;
- les cartes à accélérateur comme les Jetson : un AGX Orin de 64 Go sert Qwen3-30B-A3B à 76,7 jetons par seconde [1] ;
- les caméras de sécurité et les unités de visioconférence dotées d'une puce d'IA [1].

Anthropic précise que les puces citées dans ses tests ne sont pas une source de risque ou de vulnérabilités [1].

## Ce que l'expérience prouve, et ce qu'elle laisse ouvert

Dans un réseau fermé de 8 nœuds Android émulés, GLM-5.2 a atteint 8 nœuds sur 8 dans 4 essais sur 5 ; les autres modèles ouverts testés échouent de façon régulière [1].

Deux limites. L'accès initial était volontairement trivial, sans authentification : c'est une borne haute du succès réel [1]. Les auteurs n'ont pas testé la capacité à contourner des défenses [1]. L'idée n'est pas isolée : une étude déposée sur arXiv le 7 mai 2026 montre des modèles qui exploitent une faille web, extraient des identifiants et installent un serveur d'inférence sur l'hôte compromis [2].

## D'ici fin 2026 : des appareils sans correctif, des modèles qui progressent

Si les petits modèles progressent à leur rythme historique, environ 13,7 points d'indice par an, ils atteindront le niveau de GLM-5.2 d'ici la fin de 2026 ; Anthropic présente ce chiffre comme une estimation grossière [1].

Côté défense, Anthropic cite notamment trois leviers. Le trafic : des charges de plusieurs gigaoctets et un flux soutenu entre appareils qui ne se parlent pas d'ordinaire seraient visibles chez un fournisseur d'accès [1]. La quarantaine : contre Mirai, isoler les abonnés infectés et les prévenir a nettoyé 92 % des infections en 14 jours, contre 74 % sans notification [1]. Les fabricants : sur le marché britannique, les mots de passe par défaut des objets connectés sont désormais non conformes [1].

En Europe, le règlement délégué (UE) 2022/30 applique l'exigence de ne pas nuire au réseau à tout équipement radio capable de communiquer par lui-même sur Internet [3] ; il est applicable depuis le 1er août 2025 [4]. Le règlement sur la cyber-résilience y ajoute des obligations de notification depuis le 11 septembre 2026, puis ses obligations principales le 11 décembre 2027 [5]. Ces textes s'adressent aux fabricants. Reste le parc installé : [la cyberattaque des frigos de supermarchés](/articles/cyberattaque-frigos-supermarches/) a montré, les 11 et 12 octobre, ce que donne en France un équipement connecté laissé joignable sans correctif.

## Où trouver du matériel compatible en France, pour un banc d'essai fermé

Je vous propose de procéder dans cet ordre : inventorier d'abord ce que vous possédez, ne monter un banc d'essai qu'ensuite, et seulement pour mesurer.

**L'inventaire.** Dressez la liste des appareils connectés à votre routeur : boîtier TV, NAS, caméra, unité de visioconférence, et les appareils ménagers que l'étude range parmi les cibles possibles, réfrigérateurs, fours, aspirateurs, tondeuses [1]. Tout ce qui tourne sous Android ou Linux avec 1 Go de mémoire ou plus est du matériel compatible au sens de l'étude. Mettez-le à jour, changez les mots de passe d'origine.

**Le banc.** Pour mesurer ce que décrit Anthropic d'une IA auto-réplicante, il faut un réseau fermé, sans lien avec votre box ni avec Internet, et des appareils à vous. Le Code pénal punit de trois ans d'emprisonnement et de 100 000 € d'amende l'accès frauduleux à un système [6] ; détenir un outil conçu pour cela « sans motif légitime » est puni aussi, la recherche et la sécurité informatique figurant parmi les motifs [6]. Ceci est de l'information, pas un conseil juridique ; l'article sur [les outils de sécurité open source](/articles/outils-securite-open-source/) pose la même règle : auditer ce qui vous appartient. Sur le banc, vous mesurez la mémoire utilisée, le débit d'un modèle, le volume d'un téléchargement de plusieurs gigaoctets, la signature que cherchent les défenseurs [1]. Cet article ne donne aucun moyen de compromettre un appareil, et ces mesures n'en demandent aucun.

| Matériel | Ce que l'étude en dit | Où le trouver en France |
|---|---|---|
| Émulateur Android redroid | Anthropic en fait tourner 8 nœuds d'essai [1] | Gratuit, sous Docker, en amd64 et arm64 ; son README déconseille d'exposer son accès de débogage sur un réseau public [7] |
| [Raspberry Pi 5](/mementos/raspberry-pi/), de 1 à 16 Go [8] | Carte ARM, comme la plupart des boîtiers TV [1] | Neuf revendeurs agréés pour la France, dont Kubii et Equipements Scientifiques (ES France) [9] |
| Jetson Orin Nano Super, 8 Go [10] | La famille Jetson figure dans les tests [1] | Arrow, Silicon Highway et RS sur la boutique NVIDIA France [11] ; pas de prix affiché, 399 $ sur la boutique américaine le 13 octobre 2026 [12] |
| Boîtier Android TV de 4 Go | Le matériel de la démonstration, environ 55 $ pièce [1] | À éviter s'il est sans marque : le FBI signale des appareils infectés avant l'achat et recommande de vérifier la certification Google Play Protect [13] |

En cas d'appareil au comportement inexpliqué, Cybermalveillance.gouv.fr oriente les victimes vers 17Cyber, qui propose un diagnostic [14].
