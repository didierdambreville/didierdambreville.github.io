---
titre: "Neurones humains et Doom : la part des cellules, la part du logiciel"
these: "Les neurones humains qui jouent à Doom ne voient pas l'écran : un réseau artificiel choisit leurs stimulations, un décodeur lit leurs réponses, et seuls les contrôles disent ce qu'ils apportent."
identifiant: "neurones-humains-doom-wetware"
rubriques: ["neurosciences", "intelligence-artificielle", "informatique"]
date: 2026-10-25
sources:
  - libelle: "Cortical Labs, « Living Human Brain Cells Play DOOM on a CL1 », vidéo, 25 février 2026"
    url: "https://www.youtube.com/watch?v=yRV8fSw6HaE"
    note: "Démonstration sur un CL1 ; crédits : Alon Loeffler, Brett Kagan, David Hogan, Azin Azadi, Frank Yang, Sean Cole ; la description renvoie vers le code de la démonstration."
  - libelle: "Cortical Labs, page de présentation du CL1, consultée le 25 octobre 2026"
    url: "https://corticallabs.com/cl1"
    note: "Neurones cultivés sur une puce de silicium qui envoie et reçoit des impulsions électriques ; logiciel biOS qui leur présente un monde simulé ; maintien en vie « jusqu'à six mois »."
  - libelle: "Sean Cole, dépôt doom-neuron (GitHub, licence GPL-3.0), consulté le 25 octobre 2026"
    url: "https://github.com/SeanCole02/doom-neuron"
    note: "Encodeur convolutif entraîné par PPO qui fixe fréquence, amplitude, impulsions et électrodes ; douze rayons vers les murs ; décodeur linéaire sans biais ; selon la FAQ, impulsions aléatoires ou nulles : aucun apprentissage ; encodeur gelé : la récompense progresse encore."
  - libelle: "Hogan, Loeffler, Kagan et al., « CL API: Real-Time Closed-Loop Interactions with Biological Neural Networks », arXiv, 12 février 2026"
    url: "https://arxiv.org/abs/2602.11632"
    note: "Interface de programmation du CL1 ; des réseaux de neurones biologiques ne traitent l'information de façon fiable que si leurs entrées ont une structure et un rythme constants."
  - libelle: "Kagan et al., « In vitro neurons learn and exhibit sentience when embodied in a simulated game-world », Neuron, vol. 110, n° 23, 2022"
    url: "https://doi.org/10.1016/j.neuron.2022.09.001"
    note: "DishBrain, en ligne le 12 octobre 2022 : neurones humains issus de cellules souches ou neurones de souris, matrice MaxOne de 26 400 électrodes ; Pong ; apprentissage apparent en cinq minutes, absent des conditions de contrôle."
  - libelle: "Balci et al., « A response to claims of emergent intelligence and sentience in a dish », Neuron, vol. 111, n° 5, 1er mars 2023"
    url: "https://doi.org/10.1016/j.neuron.2023.02.009"
    note: "Lettre de trente neuroscientifiques : « sentience » et « intelligence » non étayées, contrôles mal appariés, travaux antérieurs non cités (tissus nerveux reliés à un robot dès 2000)."
  - libelle: "NUS Medicine, « NUS Medicine, DayOne and Cortical Labs Unveil Biological Data Center Prototype in Singapore », 17 août 2026"
    url: "https://medicine.nus.edu.sg/news/nus-medicine-dayone-and-cortical-labs-unveil-biological-data-center-prototype-in-singapore/"
    note: "Prototype présenté le 6 août 2026 ; système de vingt CL1 à l'Institut des sciences de la vie de NUS ; usages cités par Hon Weng Chong ; sobriété énergétique annoncée, sans mesure."
motsCles: ["neurones humains", "wetware", "Cortical Labs", "neurosciences", "intelligence artificielle"]
licence: "CC BY 4.0"
miseEnAvant: false
brouillon: false
---

Deux joueurs d'échecs qui ne parlent pas la même langue s'affrontent par téléphone, chacun par
l'intermédiaire de son interprète. La partie est belle. Qui joue bien : les joueurs ou les
interprètes ? L'échiquier ne le dit pas. Il faut une autre expérience : faire parler l'interprète
seul, et voir si la partie tient encore.

C'est ainsi qu'il faut regarder les neurones humains qui jouent à Doom. Oui, des neurones humains
cultivés sur une puce ont pris part à des parties de Doom, dans une démonstration publiée par
Cortical Labs le 25 février 2026 [1]. Mais ils ne voient pas l'écran. Ils sont pris entre deux
réseaux artificiels — l'un décide comment les stimuler, l'autre interprète ce qu'ils émettent —, et
ce qu'ils apportent eux-mêmes ne se mesure qu'en les retirant de la boucle. C'est le wetware : un
calcul confié en partie à des cellules vivantes.

## Ce que Cortical Labs a montré le 25 février 2026

La vidéo s'intitule « Living Human Brain Cells Play DOOM on a CL1 » [1]. Le CL1 est l'appareil que
vend l'entreprise australienne : des neurones cultivés sur une puce de silicium qui leur envoie des
impulsions électriques et recueille les leurs, un logiciel qui leur présente un monde simulé, un
système qui les maintient en vie jusqu'à six mois, selon le fabricant [2].

L'intérêt de la démonstration n'est pas le score. Il est dans sa transparence : les crédits nomment
six personnes, dont Sean Cole, et la description renvoie vers son code, publié sous licence libre
[1][3]. Pour une fois, on peut lire comment le tour est construit.

## Des neurones humains qui ne voient pas l'écran

Une culture de neurones n'a ni rétine ni manette. Elle reçoit des impulsions électriques et en
émet. Entre l'image du jeu et elle, il faut un traducteur ; entre elle et le personnage, un second.

Le dépôt pose lui-même la question qui fâche, dans sa foire aux questions : le décodeur et
l'algorithme d'apprentissage ne font-ils pas tout le travail [3] ? Elle est légitime, car ces deux
traducteurs sont eux aussi des systèmes qui apprennent. Si la partie s'améliore, rien ne dit a
priori qui progresse : les cellules, ou le logiciel qui les entoure.

## Comment Doom devient un courant électrique

Le code décrit trois pièces [3].

- **Un encodeur.** Un petit réseau convolutif regarde l'image du jeu, complétée, dans la
  configuration par défaut, par douze rayons qui mesurent la distance aux murs. Il décide de la
  stimulation : fréquence, amplitude, nombre d'impulsions, et même quelles électrodes activer. Il
  apprend par renforcement, avec l'algorithme PPO. Comme on ne peut pas faire remonter une erreur à
  travers des neurones vivants, il apprend à partir de la probabilité des stimulations qu'il a
  lui-même tirées : la méthode dite REINFORCE.
- **Un décodeur.** Par défaut, une simple combinaison linéaire des impulsions émises par les
  cellules, sans terme constant : l'action dépend de ce qu'elles produisent, selon des coefficients
  eux aussi ajustés pendant l'entraînement.
- **Un retour.** Selon la récompense obtenue dans le jeu, une stimulation positive ou négative est
  renvoyée à la culture.

Le ressort caché est là : une part du programme réside dans le choix des stimulations. L'équipe de
Cortical Labs l'écrit elle-même en présentant son interface de programmation : des neurones en
culture ne traitent l'information de façon fiable que si leurs entrées arrivent avec une structure
et un rythme constants [4].

| Vient des cellules | Vient du logiciel |
|---|---|
| les impulsions émises en réponse aux stimulations | ce qui, dans l'image, est transmis |
| un état interne qui change d'une partie à l'autre | la forme et le lieu de chaque stimulation |
| ce que le décodeur linéaire parvient à lire | la traduction des impulsions en gestes |
| | la règle de récompense, l'entraînement PPO |

## De Pong à Doom : ce que disent les contrôles

En 2022, l'équipe publiait dans *Neuron* l'expérience DishBrain : des neurones humains issus de
cellules souches, ou des neurones de souris, posés sur une matrice de 26 400 électrodes, jouaient à
une version simplifiée de Pong [5]. Quand la raquette touchait la balle, toutes les électrodes
recevaient une stimulation brève et régulière ; quand elle la manquait, quatre secondes de
stimulation imprévisible. Les auteurs ont observé un apprentissage apparent en cinq minutes de
jeu, absent des conditions de contrôle, dont une culture laissée au repos et une culture stimulée
sans retour [5].

Le titre de l'étude parlait de *sentience*. Trente neuroscientifiques ont répondu dans la même
revue le 1er mars 2023 : termes non étayés, conditions de contrôle mal appariées, oubli des travaux
qui reliaient déjà des tissus nerveux à un robot en 2000 [6]. Rien, dans ces protocoles, ne mesure
une expérience vécue : on observe des impulsions qui changent avec le retour reçu.

Pour Doom, la preuve avancée tient en deux phrases du dépôt [3]. Remplacer les impulsions des
neurones par du bruit aléatoire ou par des zéros : aucun apprentissage. Geler l'encodeur, lui
interdire d'apprendre : la récompense progresse encore. Si ces résultats se confirment, les
cellules apportent bien quelque chose. Mais ils ne sont, à ce jour, ni chiffrés dans le dépôt ni
relus par des pairs, et l'auteur demande lui-même que certains réglages soient encore testés sur
le matériel réel. Le contrôle fait la preuve, pas la vidéo.

## Wetware : des centres de données avant la preuve

L'industrie n'attend pas. Le 6 août 2026, NUS Medicine, l'opérateur de centres de données DayOne et
Cortical Labs ont présenté à Singapour un prototype de centre de données biologique : vingt CL1
installés à l'Institut des sciences de la vie de l'université nationale de Singapour [7]. Le
fondateur de Cortical Labs, Hon Weng Chong, y cite la découverte de médicaments, la robotique
humanoïde, la cybersécurité et la détection de fraude [7].

L'argument de fond est la sobriété : le communiqué évoque une fraction de l'énergie des
ordinateurs numériques, sans mesure à l'appui [7]. Or, dans la démonstration Doom, l'encodeur et
l'entraînement tournent sur un serveur classique [3]. Un bilan honnête additionnerait leur
consommation, celle des cellules et celle de leur maintien en vie. Faute d'isoler la part des
neurones, on risque de présenter comme calcul biologique ce que fait, pour l'essentiel, un
ordinateur ordinaire.

La même exigence vaut pour les neurotechnologies qui assemblent vivant, signal extérieur et IA de
réglage, dont l'article sur [ce que Huberman prédit pour le cerveau](/articles/modifier-cerveau-huberman/)
démonte les pièces ; et pour la robotique humanoïde, où [la preuve se compte en heures de travail
réel](/articles/robots-humanoides-heures-travail/), pas en annonces.

## Une question à poser devant les neurones humains qui jouent

Je retiens une seule question, à poser devant chaque démonstration de wetware : que devient la
performance quand on remplace les neurones humains par du bruit ? C'est la question déjà posée
pour le [robot dit piloté par une mouche morte](/articles/robot-connectome-mouche/) — ce qui vient
du vivant, ce qui vient de l'ingénieur —, avec une différence : ici, les cellules vivent et
changent, et le contrôle doit être refait à chaque culture.

Si la partie s'effondre sans elles, les cellules jouent vraiment, et une autre forme de calcul
s'ouvre. Si personne ne l'a mesuré, on ne sait pas encore qui tient l'échiquier.
