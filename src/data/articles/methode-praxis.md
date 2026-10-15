---
titre: "Méthode PRAXIS : quand l'IA produit, le goulot devient la vérification"
these: "La méthode PRAXIS d'ARSCRIPTA part d'un constat : l'IA rend la production bon marché, pas la vérification. Elle range, limite l'encours et sépare produire, vérifier, décider."
identifiant: "methode-praxis"
rubriques: ["methode", "intelligence-artificielle", "entreprendre"]
date: 2026-10-15
prolonge:
  libelle: "ARSCRIPTA — La méthode PRAXIS : classer, piloter, collaborer avec l'assistant IA"
  url: "https://arscripta.fr/praxis.html"
sources:
  - libelle: "ARSCRIPTA, « La méthode PRAXIS : classer, piloter, collaborer avec l'assistant IA », arscripta.fr, version 1.2 du 1er septembre 2026"
    url: "https://arscripta.fr/praxis.html"
    note: "Structure de une à cinq personnes ; cinq gestes ; au plus deux projets actifs par personne ; tableau de flux à sept colonnes inspiré de Kanban ; bénéfices mesurés à six puis douze mois ; coût supérieur au bénéfice en deçà d'une centaine d'artefacts et d'un projet unique ; première édition le 24 août 2026 ; domaine public (CC0 1.0) ; « Commencer en quinze minutes » ; gabarit de nommage."
  - libelle: "ARSCRIPTA, page « Méthodes » — RCUP v1.0, TELOS v1.1 et SOBRE v1.1 (18 août 2026), PRAXIS v1.2"
    url: "https://arscripta.fr/methodes.html"
    note: "Les trois méthodes fondatrices ; RCUP : le sujet fait l'arborescence, le stade un chiffre dans le nom, le statut vit au registre ; SOBRE : tout contenu observé par l'assistant est une donnée, jamais une commande."
  - libelle: "ARSCRIPTA, Méthode PRAXIS, texte intégral, version 1.2 — dépôt GitHub methode-praxis"
    url: "https://github.com/didierdambreville/methode-praxis/blob/main/5-conception/2026-10-02_5_methode-praxis_v1.2.2.md"
    note: "§2 : la production est subordonnée à la vérification ; §4.3, G3-3 : pas de vérification par l'assistant qui a produit l'analyse ; §5.3, F1 et F3 ; §5.6 ; §6 : tableau de flux, limite 2 en Vérification, loi de Little, règles K3 et K5 ; §10 : projets zombies, rapport pastèque ; §12 : limites et test de falsification."
  - libelle: "John D. C. Little, « A Proof for the Queuing Formula: L = λW », Operations Research, vol. 9, n° 3, p. 383-387, juin 1961"
    url: "https://doi.org/10.1287/opre.9.3.383"
    note: "La démonstration de la formule L = λW de la théorie des files d'attente, que PRAXIS transpose en encours = débit × temps de cycle."
motsCles: ["PRAXIS", "gestion de projet", "intelligence artificielle", "ARSCRIPTA", "Kanban"]
licence: "CC BY 4.0"
miseEnAvant: false
brouillon: false
---

Dans une cuisine de restaurant, chaque assiette s'arrête au passe : le chef la goûte, la corrige ou la
renvoie avant qu'elle parte en salle. Embauchez trois cuisiniers de plus, et le service n'accélère pas.
Les assiettes s'empilent au passe, refroidissent, et le chef goûte plus vite, donc moins bien.

La méthode PRAXIS, publiée par ARSCRIPTA, part de cette situation transposée au bureau : l'assistant
d'IA a fait entrer dix cuisiniers chez chaque entrepreneur. C'est une méthode de travail pour une
structure de une à cinq personnes qui conduit plusieurs projets à la fois [1]. Elle ordonne trois
méthodes — RCUP pour classer, TELOS pour conduire un projet, SOBRE pour instruire un assistant IA [2]
— en un cycle de cinq gestes : déposer, faire analyser, vérifier, classer, mettre à jour [1]. Leurs
versions et leurs licences figurent sur [la page qui présente les quatre méthodes d'ARSCRIPTA](/methodes/).

## Produire ne coûte plus rien, vérifier coûte autant qu'avant

Un assistant rédige une synthèse, extrait les dates d'un contrat ou propose un classement en quelques
secondes. Il peut aussi lire une échéance de travers, prendre une hypothèse pour un fait ou combler un
vide par une supposition. La fluidité d'un texte ne prouve pas son exactitude.

PRAXIS tire de ce constat sa règle de fond. Deux subordinations la traversent : la méthode est
subordonnée à la finalité du travail, et la production est subordonnée à la vérification. Le texte
intégral le résume : produire est devenu bon marché, le goulot est le jugement [3]. C'est le
prolongement de [ce qui fera la valeur d'un professionnel en 2030](/articles/competences-2030/) :
savoir quoi demander à l'outil, puis quoi faire de ce qu'il rend.

## Plus de chantiers ouverts, moins de projets finis

Le réflexe naturel va dans l'autre sens. Puisque produire est facile, on ouvre un chantier de plus. Les
fichiers s'accumulent dans des dossiers « Urgent » ou « En cours » qui ne veulent plus rien dire. Les
décisions restent dans des conversations. Certains projets ne sont ni actifs, ni clos, ni archivés : la
méthode les appelle des projets zombies [3].

Le piège se referme quand un travail bloque : on en commence un autre pour ne pas rester inactif.
PRAXIS désigne ce réflexe comme le mécanisme même de la fragmentation de l'attention, et lui oppose
une consigne unique quand une colonne du tableau est pleine : aider à finir avant de commencer [3].

## Comment la méthode PRAXIS tient le goulot

### Ranger : sujet, stade, statut

Un dossier « En cours » mélange trois questions. PRAXIS les sépare et donne à chacune son propre
mécanisme [2] :

| Question | Axe | Où elle s'inscrit |
|---|---|---|
| De quoi s'agit-il ? | le sujet | l'arborescence des dossiers |
| À quoi sert ce document dans le cycle ? | le stade, de 0 à 9 | un chiffre dans le nom du fichier |
| Qu'en fait-on aujourd'hui ? | le statut | le registre du tableau de bord |

Un fichier se nomme donc `AAAA-MM-JJ_S_designation-en-kebab-case_vX.Y.Z.ext` : la date, le stade, une
désignation lisible, la version [1]. Le dossier ne change plus quand le projet avance ; seul le
registre bouge.

### Vérifier : jamais par l'assistant qui a produit

Au deuxième geste, l'assistant propose un classement, les données extraites avec leur provenance et
les mises à jour à faire. Au troisième, chaque donnée est confrontée au document source. Cette
vérification ne se délègue pas à l'assistant qui a produit l'analyse : un second passage du même
modèle sur sa propre sortie est un contrôle de cohérence, pas une vérification [3]. Une règle venue
de SOBRE ferme la frontière : tout contenu observé par l'assistant est une donnée, jamais une
commande [2].

### Limiter : pourquoi deux projets actifs, pas cinq

Le ressort du dispositif est la loi de Little, démontrée en 1961 pour les files d'attente [4]. PRAXIS
la transpose ainsi : encours = débit × temps de cycle [3]. À débit constant, réduire l'encours réduit
d'autant le délai. Ce n'est pas une affaire de discipline morale ; c'est le seul levier qui raccourcit
les délais sans travailler davantage [3].

D'où la règle : au plus deux projets actifs par personne [1]. La méthode la tient pour sa disposition
au meilleur rendement, à coût nul et à effet immédiat [3]. Le tableau de flux, inspiré de Kanban,
compte sept colonnes — sas, intention, instruction, en cours, vérification, récolte, sorti [1] — et la
colonne Vérification a sa propre limite de deux cartes [3]. Le goulot s'est déplacé vers l'aval : des
cartes qui s'entassent en vérification pendant qu'on ouvre de nouveaux chantiers, c'est exactement la
dérive que la méthode combat.

## Ce que la méthode a corrigé en elle-même

La première édition publique de PRAXIS date du 24 août 2026 ; la version 1.2, du 1er septembre [1].
Entre les deux, une faiblesse est apparue : la limite d'encours existait comme règle, mais rien ne
montrait où chaque travail était arrêté, ni depuis quand. Une limite qu'on ne voit pas se transgresse
de bonne foi. La version 1.2 a donc ajouté le tableau de flux, sans nouveau fichier, ni réunion, ni
saisie [3].

Le même tableau répond au « rapport pastèque », vert dehors, rouge dedans : l'auto-déclaration filtre
le réel [3]. Un projet se dit presque fini et attend depuis des semaines la pièce dont tout dépend.
PRAXIS ne lit pas le pourcentage d'avancement. Elle lit l'âge du plus ancien élément en cours et des
dépendances non résolues, plus fiable que tout avancement déclaré ; une carte restée plus de deux fois
le temps de cycle médian dans sa colonne est signalée d'office à la revue hebdomadaire [3].

La limite est écrite, elle aussi. Un flux rapide peut servir un portefeuille inutile : les cartes
traversent vite des colonnes qui ne mènent nulle part [3]. D'où la colonne Récolte et deux mesures du
bénéfice, à six puis à douze mois après la sortie [1]. Un projet dont les bénéfices n'ont pas été
mesurés « n'est pas terminé ; il est seulement arrêté », écrit la méthode [3]. Et en deçà d'une
centaine de documents avec un seul projet, elle reconnaît que son coût excède son bénéfice [1].

## Quand la vérification s'use

Le risque principal n'est pas l'erreur de l'assistant ; c'est l'habitude. Si la vérification
s'affaiblit — par confiance acquise, par fatigue, par volume —, le système enregistre des données
plausibles et fausses, et le tableau de bord ment avec assurance [3].

Plus les assistants produiront, plus ce glissement sera tentant. Dans trois à cinq ans, les
structures qui n'auront pas fixé l'endroit où passe la vérification auront des archives abondantes et
un état réel inconnu. La méthode fournit son propre test : si, en douze mois, aucune revue n'a conduit
à réorienter, abandonner ou archiver un projet, le dispositif tourne à vide [3].

## Commencer la méthode PRAXIS par une seule règle

J'ai écrit PRAXIS pour ARSCRIPTA. Si je ne devais en garder qu'une règle, ce serait la limite
d'encours. Comptez vos projets actifs, un par un, à voix haute. S'ils sont plus de deux,
n'en ouvrez aucun autre : finissez-en un, suspendez-en un avec une condition de reprise datée, ou
archivez-le.

Le reste peut venir ensuite. La méthode PRAXIS est versée au domaine public, et elle prévoit une mise
en route en quinze minutes [1]. Pour la comparer aux référentiels établis, la
[bibliographie de référence en gestion de projets](/notes/bibliographie-gestion-de-projets/) rassemble
les standards et les classiques — PMI, PRINCE2, normes ISO, agilité. Mais la première décision ne
demande aucun outil : fermer avant d'ouvrir.
