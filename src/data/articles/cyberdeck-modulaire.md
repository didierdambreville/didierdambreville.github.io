---
titre: "Cyberdeck modulaire : tout se joue à l'interface entre les modules"
these: "Un cyberdeck modulaire vaut par son interface : le DFCD branche ses modules sur des rails, l'USB et 7,2 volts, mais sans licence ni règle écrite, nul ne peut encore en faire une plateforme commune."
identifiant: "cyberdeck-modulaire"
rubriques: ["electronique", "fabrication", "informatique"]
date: 2026-10-26
sources:
  - libelle: "Jankbu, « I built a modular cyberdeck! », vidéo YouTube, 16 mai 2026"
    url: "https://www.youtube.com/watch?v=gIWp_F9PPzI"
    note: "Présentation du montage : Raspberry Pi, écran coulissant, clavier mécanique, trackball, modules interchangeables ; « not finished yet » ; lien vers les fichiers du projet."
  - libelle: "ArcticEnrichmentCenter, dépôt GitHub DFCD-cyberdeck-files, consulté le 26 octobre 2026"
    url: "https://github.com/ArcticEnrichmentCenter/DFCD-cyberdeck-files"
    note: "README : DesignatedFreeCadDevice, modules reliés en énergie et en signaux aux rails du bas, batterie NP-F à 7,2 V ramenés à 5,1 V, état du montage, « meant to be modified ». Dépôt créé le 23 février 2026, aucune licence, 751 étoiles, 94 copies (forks) ; 82 fichiers 3MF et 8 fichiers STEP."
  - libelle: "Même dépôt, « Hardware list.md », liste préliminaire du matériel"
    url: "https://github.com/ArcticEnrichmentCenter/DFCD-cyberdeck-files/blob/main/Hardware%20list.md"
    note: "Raspberry Pi 5 de 8 Go, écran tactile IPS de 10,1 pouces, clavier NOS 450 TKL, batterie NP-F, connecteurs autobloquants, broches à ressort, encodeur rotatif."
  - libelle: "FreeCAD, page de téléchargement, consultée le 26 octobre 2026"
    url: "https://www.freecad.org/downloads.php"
    note: "Version stable 1.1.4 ; une version Linux « aarch64 AppImage »."
  - libelle: "GitHub Docs, « Licensing a repository »"
    url: "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository"
    note: "Sans licence, le droit d'auteur par défaut s'applique : nul ne peut reproduire, diffuser ni créer d'œuvre dérivée ; les conditions de GitHub permettent de voir le dépôt et d'en faire une copie (fork) sur GitHub."
  - libelle: "Open Source Hardware Association, Open Source Hardware Definition 1.0"
    url: "https://oshwa.org/resources/open-source-hardware-definition/"
    note: "Matériel dont chacun peut étudier, modifier, distribuer, fabriquer et vendre la conception ; fichiers dans le format préféré pour les modifier ; licence qui permet modifications et œuvres dérivées."
  - libelle: "Wiki du dépôt DFCD, « Cyberdeck build guide picatinny clamp »"
    url: "https://github.com/ArcticEnrichmentCenter/DFCD-cyberdeck-files/wiki/Cyberdeck-build-guide-picatinny-clamp"
    note: "Les pinces fixent les modules d'interface à l'unité centrale sur un rail Picatinny ; version modifiée d'un modèle publié sur Thingiverse."
  - libelle: "Wiki du dépôt DFCD, « cyberdeck build guide chassis »"
    url: "https://github.com/ArcticEnrichmentCenter/DFCD-cyberdeck-files/wiki/cyberdeck-build-guide-chassis"
    note: "Les rails du bas portent l'énergie et l'USB ; chacune des trois prises EXT reçoit un câble USB branché sur le Raspberry Pi ; l'écran est alimenté par un câble USB ; chaîne porte-câbles modifiée d'après un modèle publié sur Printables."
  - libelle: "Raspberry Pi, documentation matérielle, section « Power supply », consultée le 26 octobre 2026"
    url: "https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#power-supply"
    note: "Raspberry Pi 5 : 1,6 A pour les périphériques USB avec une alimentation capable de 5 A sous 5 V (25 W), 600 mA avec toute autre alimentation compatible."
  - libelle: "3MF Consortium, présentation du format 3MF"
    url: "https://3mf.io/"
    note: "Standard ouvert, fondé sur XML, de transfert de modèles 3D entre applications de fabrication additive."
motsCles: ["cyberdeck", "Raspberry Pi", "open hardware", "FreeCAD", "impression 3D"]
licence: "CC BY 4.0"
miseEnAvant: false
brouillon: false
---

Une prise de courant accepte une lampe, un grille-pain ou un chargeur fabriqués à l'autre bout du
monde. Ce n'est pas que ces appareils se ressemblent. C'est que la tension, la forme de la fiche et
le courant maximal sont écrits quelque part, et que chaque fabricant s'y conforme.

Un cyberdeck modulaire fait la même promesse pour un ordinateur : un cœur, et des modules qu'on
ajoute ou qu'on remplace selon l'usage. Celui que Jankbu a présenté le 16 mai 2026, le DFCD, la
tient grâce à une interface simple : des rails, l'USB et une batterie de 7,2 volts [1][2]. Mais
cette interface n'est spécifiée nulle part, et les fichiers ne portent aucune licence. C'est là que
se joue l'avenir du projet, bien plus que dans son allure.

## Un cyberdeck Raspberry Pi 5 pensé pour FreeCAD

DFCD signifie DesignatedFreeCadDevice. Son auteur l'a conçu pour ouvrir et modifier des fichiers de
CAO à l'atelier, et s'en sert aussi pour le web et les PDF [2]. Le cœur est un Raspberry Pi 5 de
8 Go ; un écran tactile IPS de 10,1 pouces coulisse et découvre un clavier mécanique NOS 450 TKL
[3]. À droite, un trackball et la batterie ; à gauche, des prises et une molette de défilement [2].

L'usage visé est réaliste : FreeCAD publie une version Linux pour processeurs ARM 64 bits (aarch64),
en version 1.1.4 à ce jour [4]. L'auteur le reconnaît dans sa vidéo : la machine n'est pas encore
terminée [1].

## Public n'est pas libre : un dépôt sans licence ni norme de module

Le dépôt affiche une intention claire. Le DFCD est « meant to be modified » : on peut changer les
modules, redessiner les rails, remplacer l'électronique, et l'auteur espère que d'autres
concevront leurs propres modules [2]. Au 26 octobre 2026, le dépôt compte 751 étoiles et 94 copies
[2].

Pourtant, il n'a pas de licence [2]. Selon la documentation de GitHub, sans licence, le droit
d'auteur par défaut s'applique : nul ne peut reproduire, diffuser ni créer d'œuvre dérivée ; les
conditions du site permettent seulement de voir le dépôt et d'en faire une copie sur GitHub [5].
Or la définition du matériel libre de l'OSHWA exige justement une licence qui autorise
modifications et œuvres dérivées [6]. Le DFCD est public. Il n'est pas encore libre.

## Comment les modules se branchent : rails, USB et 7,2 volts

La mécanique repose sur des rails de type Picatinny : des pinces à levier y fixent les modules
d'interface sur l'unité centrale [7]. L'électricité passe par les rails du bas, qui portent à la
fois l'énergie et l'USB [8]. Chacune des trois prises « EXT » des rails reçoit un câble USB branché
sur le Raspberry Pi [8]. La batterie NP-F envoie 7,2 volts au châssis, ramenés à 5,1 volts pour le Pi [2].

C'est le ressort caché : un module est un périphérique USB, alimenté par le cœur. Pas de carte
d'extension maison, pas de protocole à écrire : un module se branche comme n'importe quel
périphérique USB. Les
bases du Pi — alimentation, ports, commandes — sont résumées dans le
[mémento Raspberry Pi](/mementos/raspberry-pi/).

Cette simplicité a un prix. L'écran lui-même est alimenté par un câble USB branché sur le Pi [8].
Écran, clavier et modules se partagent donc ce que le Pi 5 accorde à ses ports USB : 1,6 A avec
une alimentation capable de fournir 5 A sous 5 V, 600 mA avec toute autre [9]. Ni le README, ni la
liste du matériel, ni le wiki ne disent comment le Pi reconnaît la sienne.

| Couche | Ce que fixent les fichiers et le wiki | Ce qu'aucun document ne spécifie |
|---|---|---|
| Mécanique | rails Picatinny, pinces à levier | un gabarit de module : cotes, fixations |
| Signaux | un câble USB par prise « EXT » | le courant disponible par prise |
| Énergie | batterie NP-F, 7,2 V ramenés à 5,1 V | la façon dont le Pi reconnaît son alimentation |
| Droits | fichiers publics, invitation à modifier | une licence |

## Ce qui marche, ce qui manque encore

L'auteur est franc sur l'état du montage : l'écran fonctionne, le clavier tape, le trackball roule ;
la molette et le module de connexion de gauche ne sont pas encore câblés [2]. L'électronique du
trackball est prélevée sur un trackball Logitech, qu'il faut donc se procurer — une solution que
l'auteur juge lui-même insatisfaisante [2].

Les fichiers racontent la même histoire. Le dépôt publie 82 maillages 3MF, un format conçu pour la
fabrication additive [10], et 8 fichiers STEP — aucun fichier FreeCAD d'origine [2]. Deux pièces
sont des versions modifiées de modèles publiés par d'autres : les pinces viennent de Thingiverse
[7], la chaîne porte-câbles de Printables [8]. Leurs conditions s'ajoutent à la question de la
licence.

## Si chaque copie invente sa propre prise

Quatre-vingt-quatorze copies, c'est une communauté qui naît. Sans règle écrite, chacune risque de
dessiner ses modules aux cotes de son propre châssis, avec son propre câblage. Sans convention
commune, chaque extension devient une adaptation particulière, qui ne sert qu'à une machine. Un
atelier qui fabrique ses propres machines, comme ceux que décrit l'article sur
[les 25 projets de TRIFAB](/articles/trifab-25-projets/), a besoin de plans qu'il a le droit de
reprendre, de modifier et de partager.

## Juger un cyberdeck modulaire à son interface

Je retiens une seule règle : juger un cyberdeck modulaire à son interface écrite, avant son allure.
Trois questions suffisent. Quel courant chaque module peut-il tirer ? Quelles cotes et quels
connecteurs un nouveau module doit-il respecter ? Sous quelle licence peut-on diffuser ce qu'on en
tire ? Le DFCD a déjà la meilleure base possible, l'USB. Une licence et une page de spécification
feraient de cette belle machine une plateforme. Les
[50 dépôts open source pour équiper un FabLab](/notes/50-depots-github-fablab/) se lisent avec la
même question.
