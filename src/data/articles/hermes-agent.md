---
titre: "Hermes Agent : la puissance est dans le harnais, pas dans le modèle"
these: "Hermes Agent, l'agent libre de Nous Research, ne rend pas un modèle plus intelligent : il lui donne outils, mémoire et limites. Il se juge à ce qu'il peut prouver, jusqu'au robot."
identifiant: "hermes-agent"
rubriques: ["intelligence-artificielle", "robotique", "informatique"]
date: 2026-10-24
sources:
  - libelle: "Nous Research, dépôt GitHub « hermes-agent », consulté le 24 octobre 2026"
    url: "https://github.com/NousResearch/hermes-agent"
    note: "Licence MIT ; six environnements d'exécution intégrés (local, Docker, SSH, Modal, Daytona, Vercel Sandbox) ; fournisseurs de modèles (Nous Portal, OpenRouter, OpenAI, point d'accès personnalisé) ; commandes d'installation ; 256,7 k étoiles et 56,1 k copies le 24 octobre 2026."
  - libelle: "Nous Research, documentation d'Hermes Agent, page d'accueil, consultée le 24 octobre 2026"
    url: "https://hermes-agent.nousresearch.com/docs/"
    note: "Agent autonome qui gagne en capacité à mesure qu'il tourne, ni copilote de programmation ni surcouche de conversation ; compétences comme mémoire procédurale, au format agentskills.io ; plus de vingt messageries ; tâches planifiées, sous-agents isolés, serveurs MCP ; « tout point d'accès » de modèle."
  - libelle: "NVIDIA, billet de blog sur la keynote de Jensen Huang à la GTC Berlin, 21 octobre 2026"
    url: "https://blogs.nvidia.com/blog/gtc-berlin-2026-keynote/"
    note: "Vidéo d'un agent entraînant le Microduck (parcours, Isaac Sim, entraînement dans le cloud, évaluation sur RTX Spark, déploiement) ; quatre Microduck sur scène ; l'agent en cinq éléments ; sécurité et privilèges qui changent à chaque lancement ; architecture de référence OpenShell."
  - libelle: "NVIDIA, « Bringing the Spark to Europe: Local Intelligence Powers Next Wave of Agents », 21 octobre 2026"
    url: "https://blogs.nvidia.com/blog/local-ai-gtc-rtx-dgx-spark-station-sync/"
    note: "Microduck entraîné avec Isaac Lab, Hermes Agent et Nemotron 3.5 Bolt 74B sur RTX Spark ; RTX Spark lancé le 16 octobre (128 Go, 1 pétaflop) ; DGX Spark de 64 Go livrés à partir du 23 octobre ; DGX Station pour Windows attendue en décembre, Hermes Agent parmi les agents cités."
  - libelle: "Nous Research, documentation d'Hermes Agent, « Architecture », consultée le 24 octobre 2026"
    url: "https://hermes-agent.nousresearch.com/docs/developer-guide/architecture"
    note: "Boucle de conversation (appel du modèle, exécution des outils, nouvel appel, enregistrement) ; plus de 70 outils en 28 jeux environ ; sessions SQLite avec recherche plein texte FTS5 ; compression du contexte."
  - libelle: "Nous Research, documentation d'Hermes Agent, « Security », consultée le 24 octobre 2026"
    url: "https://hermes-agent.nousresearch.com/docs/user-guide/security"
    note: "Huit couches de protection ; approbation « smart » par défaut, confiée à un modèle auxiliaire ; commandes catastrophiques toujours refusées ; mode local sans isolement ; conteneurs durcis (capacités retirées, 256 processus, 1 processeur, 5 120 Mo) ; contrôles levés dans les conteneurs ; la liste d'interdits n'isole pas un agent compromis ; examen heuristique des fichiers de contexte ; utilisateurs refusés par défaut."
  - libelle: "NVIDIA sur le blog de Hugging Face, « Train in Simulation, Deploy on a Real Robot: Microduck with Isaac Lab 3.0 », 21 octobre 2026"
    url: "https://huggingface.co/blog/nvidia/microduck-isaac-lab-sim-to-real"
    note: "Chaîne complète en lignes de commande ; 4 096 environnements parallèles ; jusqu'à 1,25 million de pas par seconde avec 16 GPU ; moteur Newton ; randomisation (masse, frottement, inertie, capteurs, batterie, latence, jeu d'engrenage) ; politique de 61 observations à 14 positions, exportée en ONNX ; aucune mention d'Hermes Agent."
  - libelle: "NVIDIA Developer, page « Isaac Lab », consultée le 24 octobre 2026"
    url: "https://developer.nvidia.com/isaac/lab"
    note: "Cadre de simulation libre, accéléré par GPU, pour l'apprentissage robotique ; licence BSD-3-Clause ; bâti sur Isaac Sim ; apprentissage par renforcement et par imitation ; moteurs PhysX, Warp, MuJoCo et Newton."
  - libelle: "Pollen Robotics, dossier de presse du Microduck, consulté le 24 octobre 2026"
    url: "https://pollen-robotics.com/microduck/press-kit/"
    note: "Pollen Robotics, équipe robotique de Hugging Face à Bordeaux ; 25 cm, moins de 800 g, quinze degrés de liberté, caméra, lidar compact, deux centrales inertielles ; précommandes depuis le 27 août 2026 à 399 $ hors taxes et hors livraison ; premières livraisons visées avant Noël 2026 ; logiciel ouvert, matériel non libre."
  - libelle: "Pollen Robotics, dépôt GitHub « microduck », consulté le 24 octobre 2026"
    url: "https://github.com/pollen-robotics/microduck"
    note: "Licence Apache 2.0 ; simulateur MuJoCo qui fait tourner les programmes réels du robot ; entraînement (dépôt microduck_rl) avec MuJoCo et PPO, export ONNX."
  - libelle: "Tobin et al., « Domain Randomization for Transferring Deep Neural Networks from Simulation to the Real World », arXiv:1703.06907, 20 mars 2017"
    url: "https://arxiv.org/abs/1703.06907"
    note: "Détecteur entraîné uniquement sur des images de synthèse aux textures aléatoires non réalistes ; précision de 1,5 cm dans le monde réel, robuste aux distracteurs et aux occlusions partielles."
  - libelle: "Nous Research, versions publiées d'Hermes Agent sur GitHub, consultées le 24 octobre 2026"
    url: "https://github.com/NousResearch/hermes-agent/releases"
    note: "Version 0.22.5 du 22 octobre 2026 ; version 0.22.0 du 13 octobre ; huit versions entre le 8 et le 22 octobre 2026."
motsCles: ["Hermes Agent", "intelligence artificielle", "robotique", "simulation", "logiciel libre"]
licence: "CC BY 4.0"
miseEnAvant: false
brouillon: false
---

Un cheval de trait ne laboure rien sans harnais. Le harnais ne le rend pas plus fort : il transmet sa
force à la charrue, et les rênes décident où elle va. Changez de cheval, le harnais reste ; lâchez les
rênes, la même force devient un danger. Les ingénieurs de l'intelligence artificielle ont adopté le
mot : ils appellent *harness*, harnais, le programme qui attelle un modèle de langage à des outils.

Hermes Agent est un harnais de ce genre. Publié par Nous Research sous licence libre MIT, il relie le
modèle de votre choix à un terminal, à des fichiers et à des messageries, et lui donne une mémoire et
des compétences qu'il écrit lui-même [1][2]. Le 21 octobre 2026, à la GTC de Berlin, NVIDIA l'a montré
orchestrant l'entraînement d'un petit robot bipède, le Microduck [3][4]. Ce guide s'adresse à ceux qui
envisagent de l'installer : ce qu'il fait, comment il fonctionne, ce que la démonstration de Berlin
prouve et ne prouve pas — et pourquoi un agent se juge à ce qu'on lui interdit plutôt qu'à ce qu'il
exécute.

## Hermes Agent, c'est quoi ? Un harnais libre autour du modèle de votre choix

Nous Research le présente comme un agent autonome qui gagne en capacité à mesure qu'il tourne, et
précise ce qu'il n'est pas : ni un copilote de programmation, ni une surcouche de conversation [2]. Ses
composants tiennent en un tableau.

| Élément | Ce qu'en dit Nous Research |
|---|---|
| Licence | MIT : code lisible, modifiable, réutilisable [1] |
| Modèle | Au choix : Nous Portal, OpenRouter, OpenAI ou tout autre point d'accès [1][2] |
| Outils | Plus de 70, en 28 jeux environ [5] |
| Lieu d'exécution | Six environnements intégrés : local, Docker, SSH, Daytona, Modal, Vercel Sandbox [1][2] |
| Canaux | Terminal et plus de vingt messageries, dont Telegram, Discord, Slack, WhatsApp, Signal [2] |
| Mémoire | Sessions en base SQLite, avec recherche plein texte [5] |
| Compétences | Une mémoire procédurale qu'il crée et réutilise [2] |
| Autonomie | Tâches planifiées, sous-agents isolés, serveurs MCP [2] |
| Installation | Une commande sous Linux, macOS, WSL2 ou PowerShell [1] |

Aucune ligne de ce tableau n'est un modèle. Hermes Agent n'apporte pas d'intelligence propre : il
apporte des mains, une mémoire et des habitudes. Changer de modèle, c'est changer de cheval ; le harnais
reste le même.

## Hermes Agent et la sécurité : le même modèle, un tout autre risque

Voici le paradoxe. Un modèle qui se trompe dans une fenêtre de conversation écrit une phrase fausse ;
le même modèle attelé à un terminal l'exécute. Le harnais n'a rien ajouté à son jugement, mais il a
multiplié les conséquences de ses erreurs.

La documentation de Nous Research ne le cache pas. Elle décrit huit couches de protection —
autorisation des utilisateurs, approbation des commandes dangereuses, isolement par conteneur, filtrage
des secrets, examen des fichiers de contexte, entre autres — et prévient que sa liste de chemins
interdits n'isole pas un agent hostile ou compromis [6]. Par défaut, le tri des commandes dangereuses
est confié à un second modèle : il approuve ce qu'il juge sans risque, refuse ce qu'il juge dangereux,
et ne soumet à l'utilisateur que les cas douteux [6]. Un modèle surveille un modèle.

Jensen Huang l'a résumé à Berlin : la priorité est la sécurité de l'agent, dont les privilèges
diffèrent à chaque lancement et doivent rester minimaux et surveillés [3]. NVIDIA présentait le même
jour OpenShell, une architecture de référence qui s'interpose entre l'agent et les systèmes qu'il
touche, pour lui imposer une politique, l'isoler au niveau du noyau et limiter ses privilèges [3].

Plus un agent est capable, moins sa valeur tient à ce qu'il sait faire, et plus elle tient à ce qu'on
lui interdit et à ce qu'on peut vérifier de son travail. C'est le déplacement que décrit la
[méthode PRAXIS, pour qui le goulot devient la vérification dès que l'IA rend la production bon
marché](/articles/methode-praxis/).

## Comment fonctionne un harnais d'agent : boucle, outils, mémoire

### La boucle

Le cœur d'Hermes est une boucle. Le programme assemble les instructions, le contexte et la demande,
puis appelle le modèle. Si la réponse contient des appels d'outils — lire un fichier, lancer une
commande —, il les exécute, renvoie les résultats au modèle et recommence ; quand le modèle répond
sans réclamer d'outil, la réponse s'affiche et la session s'enregistre [5]. Quand la conversation
dépasse un seuil, un compresseur résume les échanges du milieu pour tenir dans la fenêtre du modèle [5].

Rien de magique : un modèle qui propose, un programme qui exécute, et des allers-retours jusqu'à ce
que la tâche soit finie ou que l'agent bute.

### L'environnement d'exécution

Où s'exécutent ces commandes ? C'est la question décisive, et Hermes laisse le choix. En mode local,
l'agent agit directement sur la machine hôte, sans isolement [6]. Dans un conteneur Docker, il tourne
privé de toutes les capacités système sauf trois, sans pouvoir élever ses privilèges, limité par défaut
à 256 processus, un processeur et 5 Go de mémoire, et sans aucun secret de l'hôte qu'on n'ait
explicitement listé [6]. Dans ces environnements isolés, Hermes cesse de filtrer les commandes
dangereuses : sa documentation tient le conteneur pour la frontière de sécurité [6]. Les commandes de
base se trouvent dans le [mémento VM & Docker](/mementos/vm-docker/).

### La mémoire et les compétences

Hermes garde une mémoire d'une session à l'autre et la fouille en plein texte [2][5]. Surtout, il écrit
des compétences : d'une tâche résolue, il tire une procédure réutilisable, qu'il améliore à l'usage, au
format ouvert agentskills.io [2]. C'est ce que Nous Research appelle sa boucle d'apprentissage. Le
modèle, lui, n'apprend rien ; c'est le harnais qui accumule des recettes.

Cette mémoire est aussi une surface d'attaque. Avant d'inclure un fichier de contexte de projet dans
ses instructions, Hermes le passe au crible : consignes d'ignorer les instructions précédentes,
commentaires cachés, tentatives de lire des secrets, caractères invisibles [6]. Sa documentation
précise qu'il s'agit d'heuristiques, non d'une détection d'intention [6].

### Les cinq éléments d'un agent

À Berlin, Huang a décomposé un agent en cinq éléments : un modèle, un harnais qui orchestre son travail
et sa mémoire, un bac à sable qui isole le harnais, des connaissances et des outils [3]. La grille
s'applique à Hermes comme à la démonstration du Microduck.

| Élément | Dans Hermes Agent | Dans la démonstration Microduck |
|---|---|---|
| Modèle | Au choix de l'utilisateur [2] | Nemotron 3.5 Bolt 74B [4] |
| Harnais | La boucle et ses outils [5] | Hermes Agent [4] |
| Bac à sable | Docker, SSH, Modal, Daytona… [6] | Non précisé par NVIDIA |
| Connaissances | Mémoire, compétences, fichiers de contexte [2] | Non précisé par NVIDIA |
| Outils | Terminal, exécution de code, serveurs MCP [2][6] | Isaac Sim, Isaac Lab, calcul dans le cloud [3][4] |

Les deux cases vides de la dernière colonne ne sont pas un détail : NVIDIA a montré ce que l'agent a
fait, pas dans quelles limites il l'a fait.

## Du terminal au robot : la démonstration Microduck de la GTC Berlin

Selon NVIDIA, la vidéo projetée pendant la keynote montrait un agent qui préparait un parcours,
simulait le robot dans Isaac Sim, envoyait les tâches d'entraînement dans le cloud, puis rapatriait la
politique apprise sur un ordinateur RTX Spark pour l'évaluer avant de la déployer sur le robot
physique [3]. L'agent était Hermes Agent ; le modèle, Nemotron 3.5 Bolt 74B ; l'outil d'entraînement,
Isaac Lab [4]. Le parcours se lit ainsi.

| Étape | Où | Avec quoi | Ce qui en sort |
|---|---|---|---|
| 1. Préparer le parcours, simuler le robot | Non précisé | Isaac Sim [3] | Un monde virtuel, un robot simulé |
| 2. Entraîner | Cloud, supercalculateurs NVIDIA [3] | Isaac Lab [4] | Une politique de contrôle |
| 3. Évaluer | RTX Spark, en local [3] | Simulation [3] | Une politique retenue ou rejetée |
| 4. Déployer | Le robot physique [3] | Fichier de politique | Un comportement réel |
| D'un bout à l'autre | RTX Spark [4] | Hermes Agent, Nemotron 3.5 Bolt 74B [4] | L'enchaînement des étapes |

La répartition a sa logique : l'entraînement massif va là où sont les processeurs graphiques ;
l'évaluation revient sur la machine qui orchestre, avant tout contact avec le réel.

### Ce que l'agent a réellement enchaîné

Le même jour, des ingénieurs de NVIDIA ont publié sur le blog de Hugging Face le tutoriel complet de
l'entraînement du Microduck avec Isaac Lab 3.0 [7]. On y lit la chaîne, sans agent : installer
Isaac Lab, lancer l'entraînement de la tâche du Microduck avec 4 096 environnements en parallèle,
rejouer la politique dans le visualiseur du moteur physique Newton, l'exporter, la copier sur le robot
et l'y charger [7]. Chaque étape est une ligne de commande.

C'est la clé de la démonstration. Un harnais doté d'un terminal sait taper des commandes, lire leurs
sorties, corriger un paramètre et relancer. Il n'a pas besoin de comprendre la marche d'un bipède : il
a besoin d'une chaîne que des ingénieurs ont rendue scriptable. Isaac Lab — cadre libre sous licence
BSD-3-Clause, bâti sur Isaac Sim, qui entraîne par renforcement ou par imitation [8] — est précisément
cela.

### Le robot

Le Microduck mesure 25 cm, pèse moins de 800 g et compte quinze degrés de liberté, une caméra, un lidar
compact et deux centrales inertielles ; il est conçu par Pollen Robotics, l'équipe robotique de
Hugging Face installée à Bordeaux [9]. Son logiciel est ouvert, ses plans mécaniques et électroniques
ne le sont pas : Pollen demande qu'on ne le présente pas comme du matériel libre [9]. Le dépôt de son
logiciel, sous licence Apache 2.0, fait tourner les vrais programmes du robot contre un corps simulé
dans MuJoCo, un autre moteur physique [10].

## Ce que montrent les faits : une scène, un calcul, une simulation fausse exprès

### Sur scène, à Berlin

Quatre Microduck ont rejoint Huang sur scène, s'asseyant, se levant et faisant même la sieste sur
commande ; ils avaient été créés sur RTX Spark, entraînés dans le cloud, et avaient appris leurs gestes
en simulation [3]. C'est la preuve de terrain : un comportement appris en simulation, exécuté par du
matériel réel, devant un public.

Sa limite est tout aussi nette. NVIDIA ne dit pas quelle part du travail l'agent a faite seul, combien
d'essais ont échoué, ni ce que les ingénieurs avaient préparé ; le tutoriel publié le même jour ne fait
pas intervenir Hermes [7]. Une démonstration prouve qu'une chaîne peut aboutir ; elle ne mesure pas sa
fiabilité. On retrouve la question que posait [le robot piloté par une mouche : ce qui vient du
système, ce qui vient de l'ingénieur](/articles/robot-connectome-mouche/).

### À l'échelle du calcul

Le tutoriel donne une autre échelle. L'entraînement fait marcher 4 096 canards virtuels à la fois ;
réparti sur 16 GPU, il atteint jusqu'à 1,25 million de pas de simulation par seconde sur terrain
accidenté [7]. Ce qui en sort tient en un fichier : une politique qui lit 61 valeurs d'observation et
rend 14 positions articulaires, exportée au format ONNX, que le robot charge à bord [7]. La chaîne de
Pollen, elle, entraîne avec MuJoCo et l'algorithme PPO, et aboutit au même format ONNX [10].

Deux chaînes, un même fichier : le robot ne sait pas quel harnais l'a entraîné. C'est ce que
l'ouverture achète — l'interchangeabilité des briques —, plus que la gratuité. Reste à savoir ce que ce
fichier vaut au travail : un robot se juge, comme le montrait l'article sur
[les robots humanoïdes, aux heures de travail réel plutôt qu'aux prévisions](/articles/robots-humanoides-heures-travail/).

### Contre l'intuition : une simulation volontairement fausse

En 2017, Josh Tobin et ses coauteurs ont entraîné un détecteur d'objets uniquement sur des images de
synthèse aux textures aléatoires, délibérément non réalistes ; transféré dans le monde réel, il
localisait les objets à 1,5 cm près, malgré des distracteurs et des occlusions partielles [11]. C'est
la randomisation de domaine : rendre la simulation assez variée pour que le réel n'y paraisse qu'une
variante de plus [11].

Le tutoriel du Microduck applique ce principe à la mécanique. Chaque canard virtuel reçoit sa masse et
son centre de gravité, son frottement au sol, son inertie articulaire, ses décalages de capteurs, sa
tension de batterie, son délai de commande et un jeu d'engrenage propre à chaque articulation [7]. On
ne franchit pas l'écart entre simulation et réalité en rendant la simulation plus belle, mais en la
rendant plus diverse. Et le travail décisif — choisir ce qui varie, et dans quelles bornes — revient à
l'ingénieur, pas à l'agent.

## Au 24 octobre 2026 : versions, matériel, disponibilité

*Cette section est datée ; elle sera mise à jour aux premières livraisons du Microduck, attendues par
Pollen Robotics avant Noël 2026.*

- **Hermes Agent** : version 0.22.5, publiée le 22 octobre 2026 ; huit versions ont paru entre le 8 et
  le 22 octobre [12]. Une option notée aujourd'hui peut changer de nom demain : relisez la documentation
  de la version installée. Le dépôt compte 256 700 étoiles et 56 100 copies sur GitHub [1].
- **RTX Spark** : portables lancés le 16 octobre 2026, jusqu'à 128 Go de mémoire unifiée et un pétaflop
  de calcul d'IA, chez ASUS, Dell, HP, Lenovo, Microsoft et MSI [4].
- **Nemotron 3.5 Bolt 74B** : 24 Go, parmi les modèles proposés pour les DGX Spark de 64 Go livrés à
  partir du 23 octobre [4].
- **DGX Station pour Windows** : attendue chez les constructeurs en décembre ; NVIDIA cite Hermes Agent
  parmi les agents qu'elle accueille [4].
- **Microduck** : précommandes ouvertes depuis le 27 août 2026 à 399 dollars hors taxes et hors
  livraison, en Amérique du Nord et en Europe ; premières livraisons visées avant Noël 2026 ; publication
  de la pile logicielle complète prévue avant ces livraisons [9].
- **La recette de Berlin** : le tutoriel publié décrit l'entraînement du Microduck sans agent [7] ; les
  deux billets de NVIDIA décrivent l'orchestration par Hermes Agent sans en publier les réglages [3][4].

Deux de ces faits bougeront vite : le numéro de version d'Hermes et la disponibilité du robot. Le reste
du guide — la boucle, le harnais, l'écart entre simulation et réalité — ne dépend d'aucun des deux.

## Installer Hermes Agent sans lui confier les clés : sept questions

Je n'en retiens qu'une règle : juger un agent à ce qu'on lui interdit, pas à ce qu'il exécute. Avant
d'ouvrir un terminal à Hermes Agent, chacune des questions suivantes doit recevoir une réponse appuyée
sur une pièce — une ligne de configuration, un journal, un rapport —, non sur une intention.

1. **Où s'exécute-t-il ?** Le nom de l'environnement, écrit dans la configuration : un conteneur ou une
   machine distante, jamais le mode local pour un agent joignable par messagerie [6]. Pour un premier
   essai, un [banc d'essai fermé, sur du matériel dédié](/articles/ia-auto-replicante-materiel-france/),
   vaut mieux que votre poste de travail.
2. **Qui peut lui parler ?** La liste des utilisateurs autorisés, ou l'appairage par code. Sans liste,
   tout le monde est refusé par défaut, et cela doit le rester [6].
3. **Qui approuve ses commandes ?** Le mode d'approbation, noir sur blanc : manuel les premières
   semaines ; le mode sans approbation, seulement dans un conteneur jetable [6].
4. **Où sont les secrets ?** Les clés dans le fichier prévu, lisible par vous seul, et aucune transmise
   au conteneur sans y être listée [6].
5. **Quel modèle voit vos données ?** Le nom du fournisseur et de son point d'accès : l'agent tourne
   chez vous, mais ce qu'il envoie au modèle part chez celui qui l'héberge, sauf modèle local [1][2].
6. **Qu'a-t-il appris depuis la dernière fois ?** La date de votre dernière relecture des commandes
   toujours autorisées et des automatismes ajoutés ; Nous Research recommande de les auditer
   régulièrement [6].
7. **Comment saura-t-on que c'est fait ?** Un test, une mesure, un fichier évalué ; pour un robot, une
   évaluation en simulation avant tout essai réel, comme à Berlin [3][7].

Si une réponse manque, le temps est mieux employé à la produire qu'à écrire la première demande.
Hermes Agent fournit de bonnes rênes — approbations, conteneurs, listes d'autorisation — ; encore
faut-il les tenir. Les modèles passeront d'une version à l'autre ; le harnais et ses rênes sont ce qui
vous reste.

## Questions fréquentes

### Hermes Agent est-il gratuit ?

Le logiciel l'est : Hermes Agent est publié par Nous Research sous licence MIT, qui permet de
l'utiliser, de le modifier et de le redistribuer [1]. Le modèle qu'il pilote ne l'est pas forcément :
son prix dépend du fournisseur choisi — Nous Portal, OpenRouter, OpenAI ou un autre point d'accès —, et
un modèle local demande une machine capable de le faire tourner [1][2]. Le coût réel d'un agent, c'est
son modèle et le temps passé à le surveiller.

### Quel modèle utiliser avec Hermes Agent ?

Celui que vous voulez : Hermes accepte Nous Portal, OpenRouter, OpenAI ou tout autre point d'accès,
y compris un modèle servi par votre propre machine [1][2]. À Berlin, NVIDIA l'a associé à
Nemotron 3.5 Bolt 74B, un modèle ouvert, sur un ordinateur RTX Spark [4]. Deux critères décident : la
fiabilité du modèle dans ses appels d'outils, et l'endroit où vos données ont le droit d'aller.

### Hermes Agent est-il sûr ?

Il est armé, pas sûr par nature. Sa documentation décrit huit couches de protection : utilisateurs
autorisés, approbation des commandes dangereuses, commandes catastrophiques toujours refusées,
conteneurs durcis, filtrage des secrets, examen des fichiers de contexte [6]. Elle prévient aussi qu'en
mode local l'agent agit sans isolement, et que ses interdits n'isolent pas un agent compromis [6].
Lancez-le dans un conteneur, avec une liste d'utilisateurs et l'approbation manuelle.

### Comment installer Hermes Agent ?

Une commande suffit : un script d'installation sous Linux, macOS et WSL2, son équivalent PowerShell
sous Windows, ou un installateur de bureau [1][2]. Lisez le script avant de l'exécuter, comme tout
script téléchargé. Choisissez ensuite un environnement isolé — Docker, SSH ou un service distant —
plutôt que le mode local, et dressez la liste des utilisateurs autorisés avant d'ouvrir une
messagerie [6].

### Hermes Agent a-t-il entraîné le robot tout seul ?

Non. À la GTC Berlin, l'agent a enchaîné les étapes : parcours, simulation, entraînement dans le
cloud, évaluation, déploiement [3][4]. Mais la tâche d'entraînement du Microduck, la randomisation de
ses paramètres et le modèle du jeu de ses engrenages ont été écrits par des ingénieurs de NVIDIA et de
Pollen Robotics, et le tutoriel publié décrit cette chaîne sans agent [7]. L'agent orchestre un travail
scriptable ; il ne le conçoit pas.

### Quelle différence entre Hermes Agent et un chatbot ?

Un chatbot répond ; un agent agit. Hermes Agent envoie la demande au modèle, exécute les outils que
celui-ci réclame — commande, fichier —, lui renvoie les résultats et recommence jusqu'à la fin de la
tâche [5]. Il garde une mémoire d'une session à l'autre et écrit des compétences réutilisables [2]. La
conséquence pratique : une erreur de chatbot reste une phrase, une erreur d'agent devient un acte.
