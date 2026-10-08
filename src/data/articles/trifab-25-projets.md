---
titre: "TRIFAB : 25 projets pour un atelier qui fabrique ses propres machines"
these: "Le fablab d'un TRIFAB ne se mesure pas au nombre de ses machines, mais à sa capacité à fabriquer ses propres moyens de fabrication — et à documenter chaque pas pour qu'un autre territoire le refasse."
identifiant: "trifab-25-projets"
rubriques: ["fabrication", "ecologie"]
date: 2026-10-05
prolonge:
  libelle: "le manifeste TRIFAB — De la benne à l'établi"
  url: "https://didierdambreville.github.io/manifeste/"
sources:
  - libelle: "RepRap — page d'accueil du projet"
    url: "https://reprap.org/wiki/RepRap"
    note: "« La première machine de fabrication auto-réplicative à usage général » ; projet lancé par Adrian Bowyer."
  - libelle: "Open Source Ecology — Global Village Construction Set"
    url: "https://www.opensourceecology.org/gvcs/"
    note: "50 machines industrielles, plans publiés sous licence CC BY-SA 4.0."
  - libelle: "Precious Plastic"
    url: "https://www.preciousplastic.com/"
    note: "Machines de recyclage du plastique en libre accès ; 1 100 ateliers dans 56 pays et 1,4 million de kilos recyclés par an, chiffres 2024 annoncés par le projet."
motsCles: ["TRIFAB", "fablab", "ressourcerie", "open hardware", "réemploi"]
licence: "CC BY 4.0"
miseEnAvant: false
brouillon: false
---

Le forgeron fabrique lui-même ses pinces, ses tranches et ses marteaux. Son atelier n'est pas un
stock d'outils achetés : c'est une capacité qui s'entretient et grandit avec chaque pièce forgée. Le
troisième maillon d'un TRIFAB — le fablab, après la déchetterie et la ressourcerie — devrait être
pensé de la même façon.

## Ce que la ressourcerie ne remet pas en rayon

Une ressourcerie récupère, trie, nettoie et remet en circulation. Mais une part des objets qu'elle
reçoit ne repartira pas tels quels. Ils ne sont pas vides pour autant : une imprimante hors d'usage
contient des rails de guidage, un disque dur des aimants, une vieille alimentation peut devenir une
source de laboratoire, un ventilateur rejoindre un système d'extraction, un moteur récupéré
entraîner l'axe d'une machine. Un appareil mort est un kit de pièces détachées.

## Acheter neuf à côté d'une benne pleine

C'est là que le fablab classique se contredit. On l'équipe en achetant des machines — imprimante,
découpeuse laser, fraiseuse à commande numérique —, à quelques mètres d'un gisement de moteurs, de
profilés et de cartes électroniques. Et ce qu'il fabrique reste souvent sur place : une machine non
documentée demeure une réalisation locale, que l'atelier voisin devra réinventer.

## Fabriquer les moyens de fabriquer

Le principe qui change tout tient en une phrase : un TRIFAB ne doit pas seulement fabriquer des
objets, il doit fabriquer peu à peu les moyens d'en fabriquer davantage. Les ressources récupérées
donnent un prototype, le prototype une machine, la machine une capacité nouvelle, qui permet une
autre machine. L'imprimante 3D produit des pièces pour la fraiseuse ; la fraiseuse usine des plaques
pour le laser ; le laser découpe les panneaux d'une machine suivante. Il ne s'agit pas d'autonomie
absolue, mais d'une capacité qui s'accumule.

Pour tenir cette boucle, neuf briques suffisent : un Raspberry Pi pour superviser, des Arduino et
autres microcontrôleurs pour commander, des capteurs pour mesurer, une fraiseuse, une imprimante 3D,
un laser, des logiciels libres, un agent de programmation comme Claude Code pour accélérer le
logiciel — et GitHub pour tout documenter. La dernière brique est la plus importante : une machine
dont les plans, le code, la nomenclature et les procédures sont publiés devient reproductible.

## Ce que d'autres ont déjà prouvé

L'idée n'est pas une utopie d'atelier. RepRap, lancé par Adrian Bowyer, se présente comme la
première machine de fabrication auto-réplicative à usage général : une imprimante 3D conçue pour
imprimer une partie de ses propres pièces [1]. Open Source Ecology publie librement les plans de
cinquante machines industrielles, conçues pour être fabriquées sur place et à faible coût [2].
Precious Plastic diffuse gratuitement les plans de ses machines de recyclage du plastique ; le
projet annonce, pour 2024, 1 100 ateliers dans 56 pays [3].

Pour un TRIFAB, ces exemples dessinent vingt-cinq projets, en cinq familles :

- **Construire ses machines** — 1. la micro-usine, chaîne complète de la récupération au réemploi ;
  5. une imprimante 3D grand format ; 6. une fraiseuse auto-fabricable ; 7. un graveur-découpeur
  laser ; 22. une machine à outils interchangeables ; 24. un atelier qui fabrique une partie de ses
  propres machines.
- **Trier et récupérer** — 2. un robot d'aide au tri ; 10. une banque de composants inventoriée ;
  11. un laboratoire de rétro-ingénierie ; 12. une station de récupération électronique ; 16. un banc
  de caractérisation des batteries.
- **Transformer la matière** — 4. du plastique recyclé au filament d'impression ; 9. un scanner 3D
  pour les pièces dont les plans n'existent plus ; 20. un générateur de pièces détachées, de la
  photo de la pièce cassée à sa refabrication.
- **Mesurer et piloter** — 8. TRIFAB OS, l'inventaire de tout ce que possède le lieu ; 13. une
  station météo ouverte ; 14. une serre pilotée ; 15. un laboratoire d'essais de traitement de
  l'eau ; 17. une maison intelligente miniature ; 18. un réseau de capteurs sur les machines ;
  19. un laboratoire de l'énergie consommée par pièce.
- **Automatiser et transmettre** — 3. un bras robotisé fait sur place ; 21. un assistant
  d'ingénierie qui part des photos, mesures et pièces disponibles ; 23. une mini-ligne de
  production pédagogique ; 25. le kit TRIFAB open source, pour qu'un autre territoire le reproduise.

Plusieurs exigent une rigueur particulière : le laser se conçoit avec son confinement, ses
interverrouillages et son extraction ; les batteries lithium gonflées ou endommagées sortent du
circuit ordinaire ; l'eau traitée en atelier reste une expérience, jamais une eau de consommation.
La sécurité ne s'ajoute pas au projet : elle en fait partie.

## Si chaque atelier reste seul

Sans documentation, chaque fablab recommence ce que le voisin a déjà réussi — et refait ses erreurs.
Sans mesure, le discours écologique reste un discours. Le laboratoire de l'énergie et l'inventaire
répondent à des questions simples, que peu de lieux savent trancher aujourd'hui : combien d'énergie
pour fabriquer cette pièce ? combien de matière détournée de la benne ? combien de temps humain ?
Un TRIFAB qui mesure peut défendre son budget devant les élus ; un TRIFAB qui documente peut être
copié par la communauté de communes voisine.

L'intelligence artificielle accélère la conception, elle ne dispense ni des essais ni des règles de
sécurité : une mauvaise pièce générée vite reste une mauvaise pièce.

## Documenter dès la première pièce

Un TRIFAB peut commencer modestement : un Raspberry Pi, quelques Arduino, une imprimante 3D, une
petite fraiseuse, un laser correctement sécurisé, des logiciels libres — dont on trouvera
[cinquante dépôts éprouvés](/notes/50-depots-github-fablab/) — et un compte GitHub. La décision qui
compte se prend le premier jour : documenter chaque machine, chaque réglage et chaque échec, avant
même qu'elle fonctionne. Un prototype raté et décrit est une leçon pour le suivant ; un prototype
réussi et muet est perdu pour tous.

Une déchetterie récupère. Une ressourcerie réemploie. Un fablab transforme. Et quand il documente
tout ce qu'il apprend, il transmet la capacité de transformer.
