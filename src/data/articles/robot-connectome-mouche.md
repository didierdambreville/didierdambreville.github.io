---
titre: "Le robot piloté par une mouche morte : ce qui vient d'elle, ce qui vient de l'ingénieur"
these: "Le robot « piloté par une mouche morte » n'abrite aucune mouche : il exécute la carte de ses connexions, et ce qu'il fait dépend autant de l'interface écrite par l'ingénieur que du câblage hérité de l'évolution."
identifiant: "robot-connectome-mouche"
rubrique: "sciences"
date: 2026-10-05
sources:
  - libelle: "Male CNS Connectome — HHMI Janelia, projet FlyEM"
    url: "https://male-cns.janelia.org/"
    note: "Version 1.0 publiée le 8 juin 2026, licence CC BY ; collaboration FlyEM, université de Cambridge, MRC Laboratory of Molecular Biology, Google Research."
  - libelle: "Berg et al., article MaleCNS, Cell, 2026"
    url: "https://doi.org/10.1016/j.cell.2026.08.015"
    note: "Paru le 3 septembre 2026."
  - libelle: "Berg, Beckett, Costa, Schlegel, Januszewski et al., « Sexual dimorphism in the complete connectome of the Drosophila male central nervous system », bioRxiv"
    url: "https://www.biorxiv.org/content/10.1101/2025.10.09.680999v2"
    note: "Préprint : 166 691 neurones, du cerveau au cordon nerveux ventral, entièrement relus et annotés."
  - libelle: "Dorian Todd, Fly Brain Bridge"
    url: "https://www.doriantodd.com/projects/fly-brain-bridge/"
    note: "166 700 neurones et 25,6 millions de connexions simulés en temps réel, reliés au robot quadrupède Sesame ; intégration au robot physique pas encore achevée, selon l'auteur."
  - libelle: "Project NeuroHex (GitHub)"
    url: "https://github.com/shakeabhishek/project-neurohex"
    note: "Hexapode imprimé en 3D, 18 servomoteurs ; seul le voisinage direct de la fibre géante, avec LC4 et LPLC2."
  - libelle: "Fly Connectome, « The Adult Drosophila Connectome Ecosystem », 4 septembre 2026"
    url: "https://flyconnecto.me/2026/09/04/the-adult-drosophila-connectome-ecosystem/"
    note: "Les deux connectomes complets de la drosophile adulte : MaleCNS et BANC."
motsCles: ["connectome", "drosophile", "robotique", "neurosciences", "simulation"]
licence: "CC BY 4.0"
miseEnAvant: false
brouillon: false
---

Une partition survit au musicien. Jouée un siècle plus tard sur un autre instrument, elle reste
reconnaissable — mais ce qu'on entend tient aussi à l'instrument, à l'interprète, à la salle. Le
robot dont on dit qu'il est « piloté par le cerveau d'une mouche morte » pose exactement ce
problème : on y entend la mouche, on oublie l'instrument.

## Une carte de 166 691 neurones

Le 8 juin 2026, le projet FlyEM du campus Janelia (HHMI), avec l'université de Cambridge, le MRC
Laboratory of Molecular Biology et Google Research, a publié MaleCNS v1.0 : la carte complète du
système nerveux central d'une drosophile mâle, librement réutilisable sous licence CC BY [1]. Elle
décrit 166 691 neurones, du cerveau au cordon nerveux ventral — l'équivalent, chez l'insecte, de la
moelle épinière —, tous relus et annotés [3]. L'article scientifique a paru dans *Cell* le
3 septembre 2026 [2].

Une telle carte, un connectome, dit qui parle à qui : quels neurones, quelles synapses, dans quel
sens. Elle a été reconstruite à partir d'images de microscopie électronique, avec l'aide d'outils
automatiques pour suivre les fibres et repérer les synapses. Ce n'est pas une intelligence
artificielle qui aurait inventé un cerveau : la matière première est biologique.

## Le cerveau entier tourne… dans le simulateur

Dès la publication, des amateurs ont branché la carte sur des machines, et les titres ont suivi :
une mouche morte pilote un robot. Les deux projets les mieux documentés racontent pourtant autre
chose.

Fly Brain Bridge, de Dorian Todd, simule le système nerveux complet — 166 700 neurones, 25,6
millions de connexions — en temps réel sur un processeur ordinaire, et le relie au robot quadrupède
Sesame [4]. En stimulant des populations de neurones identifiées, on obtient la marche, le
demi-tour, l'alimentation, la toilette, la fuite ou la danse. Mais l'auteur l'écrit lui-même : la
commande des articulations, l'écran et la posture de sursaut sont construits et testés en logiciel,
« pas encore sur le robot physique ».

NeuroHex, à l'inverse, marche pour de bon : un hexapode imprimé en 3D, dix-huit servomoteurs [5].
Mais il ne reçoit qu'un fragment de la carte : le voisinage immédiat de la fibre géante, le circuit
de fuite de la mouche, avec les neurones visuels LC4 et LPLC2 qui réagissent à un objet grossissant
brusquement dans le champ visuel.

Le cerveau complet est dans la machine virtuelle ; le métal n'en reçoit, pour l'instant, qu'un
réflexe.

## Ce que la carte ne contient pas

Un connectome n'est pas un cerveau. Il ne dit rien des concentrations ioniques, des
neurotransmetteurs, des délais, de la plasticité ni des hormones. Pour le faire « tourner », il
faut ajouter ce qui manque, et chaque ajout est un choix d'ingénieur :

- **un modèle de neurone** — Fly Brain Bridge retient l'intégration avec fuite : le neurone
  accumule les impulsions reçues, son potentiel redescend lentement, il émet à son tour une
  impulsion quand un seuil est franchi ;
- **un encodage**, qui traduit l'image d'une caméra en activité de neurones sensoriels ;
- **une lecture**, qui choisit quels neurones descendants observer ;
- **un décodeur**, qui convertit cette activité en ordres pour des moteurs.

Les pattes le montrent bien. La mouche en a six ; Sesame en a quatre. Aucun neurone de mouche n'a
jamais commandé une patte de robot : c'est le décodeur qui invente la correspondance. Même
difficulté avec l'activité persistante : un réseau récurrent peut continuer à commander la fuite
après la disparition de la menace, et l'ingénieur doit alors régler des seuils ou des remises à
zéro. Plus il règle, plus il faut se demander ce qui vient encore de la mouche.

## Ce que l'expérience change vraiment

Ce n'est pas rien pour autant. Jusqu'ici, on concevait l'architecture d'un réseau, puis on
l'entraînait. Ici, l'architecture est mesurée sur un animal réel, et la question se retourne : non
plus « quel réseau inventer pour cette tâche ? », mais « que fait ce réseau quand on le met en
mouvement ? ».

La carte devient un laboratoire. On peut y couper une connexion, faire taire un neurone, stimuler
un groupe, puis observer la conséquence — et, avec un robot, la voir dans le monde physique : la
stimulation devient une rotation, une fuite, un pas. La neuroscience descriptive devient
exécutable.

## Si l'on confond la partition et l'instrument

Les démonstrations vont se multiplier. Un second connectome complet, celui d'une drosophile
femelle, cerveau et cordon nerveux réunis, est déjà publié sous le nom de BANC [6]. Chaque vidéo
d'un robot qui fuit ou qui « danse » sera présentée comme la preuve qu'un animal a été transféré
dans une machine. Si l'on ne sépare pas ce qui vient de la carte de ce qui vient de l'interface, on
attribuera à l'évolution des solutions qui sont celles du décodeur — et l'on manquera la seule
question scientifique qui compte : quelles propriétés appartiennent au réseau lui-même, et
lesquelles naissent de son couplage avec un corps et un environnement ?

L'excès inverse guette aussi. Rien ne montre encore qu'un contrôleur tiré d'un connectome soit plus
rapide, plus sobre ou plus robuste qu'un réseau artificiel de taille comparable. La démonstration
du principe n'est pas la démonstration d'une supériorité.

## Une question à poser à chaque démonstration

Devant chaque robot « piloté par un cerveau », une seule question suffit : qu'est-ce qui vient de
l'animal, qu'est-ce qui vient de l'ingénieur ?

| Vient de la mouche | Vient de l'ingénieur |
|---|---|
| l'identité des neurones | le modèle mathématique du neurone |
| la topologie des connexions | l'encodage des capteurs |
| l'organisation sensorimotrice | la lecture des neurones descendants |
| | le décodeur, le corps, la calibration |

La structure vient de la biologie, le corps de la robotique, la jonction de l'ingénierie. La mouche
n'est pas dans le robot. Mais une part de l'organisation qui lui permettait d'agir sur son monde
peut désormais faire bouger autre chose. Le plan est conservé. Pas l'être.
