---
titre: "Rétro-ingénierie par IA : comprendre un logiciel, pas copier son code"
these: "La rétro-ingénierie par IA, avec REA, explique comment fonctionne un logiciel, preuves à l'appui ; le droit européen en libère les idées, jamais le code."
identifiant: "retro-ingenierie-ia"
rubriques: ["informatique", "intelligence-artificielle"]
date: 2026-10-15
sources:
  - libelle: "morluto, « REA: Reverse Engineer Anything » — dépôt GitHub et README"
    url: "https://github.com/morluto/rea"
    note: "Serveur MCP et ligne de commande ; agents configurés par l'installation (Claude Code, Codex, Cursor, Gemini CLI, Grok Build) ; moteurs Hopper, Ghidra ou IDA ; tableau des cibles et de ce que REA renvoie ; prérequis Node.js ; analyse locale, le fournisseur du modèle appliquant sa propre politique de données ; licence MIT ; usages revendiqués. Dépôt créé le 14 avril 2026 ; 248 550 étoiles et 62 368 copies relevées par l'API GitHub le 15 octobre 2026."
  - libelle: "Union européenne, directive 2009/24/CE du 23 avril 2009 concernant la protection juridique des programmes d'ordinateur (version codifiée), EUR-Lex"
    url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32009L0024"
    note: "Art. 1er, § 2 : idées et principes non protégés ; art. 4 : reproduction, traduction et adaptation soumises à autorisation ; art. 5, § 1 et 3 : correction d'erreurs, observation, étude et test ; art. 6 : décompilation pour l'interopérabilité et ses conditions ; art. 8 : nullité des clauses contraires à l'article 6 et à l'article 5, § 2 et 3. Consulté le 15 octobre 2026."
  - libelle: "Légifrance, Code de la propriété intellectuelle, article L122-6-1, version en vigueur depuis le 26 novembre 2021"
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278920"
    note: "I : correction d'erreurs, que l'auteur peut se réserver par contrat ; III : observer, étudier ou tester « le fonctionnement ou la sécurité » du logiciel ; IV : décompilation pour l'interopérabilité, trois conditions et trois interdits, dont l'usage pour un logiciel d'expression substantiellement similaire ; stipulations contraires aux II, III et IV nulles. Consulté le 15 octobre 2026."
  - libelle: "Model Context Protocol, « What is the Model Context Protocol (MCP)? »"
    url: "https://modelcontextprotocol.io/docs/getting-started/intro"
    note: "Standard ouvert pour relier les applications d'IA à des systèmes externes ; comparaison avec un port USB-C. Consulté le 15 octobre 2026."
  - libelle: "morluto, REA — DISCLAIMER.md"
    url: "https://github.com/morluto/rea/blob/main/DISCLAIMER.md"
    note: "Usages admis et refusés, dont la copie de logiciels propriétaires et de leur code ou de leurs ressources protégés ; responsabilité de l'utilisateur, y compris pour les actions demandées à un agent ; l'autorisation d'inspecter n'autorise pas forcément l'exécution ni l'interception ; résultats possiblement incomplets ou faux ; un résultat proche du code source ne donne aucun droit sur le programme d'origine ; licences des outils commerciaux à acquérir. Consulté le 15 octobre 2026."
  - libelle: "Cour de justice de l'Union européenne, arrêt du 6 octobre 2021, Top System contre État belge, C-13/20, EUR-Lex"
    url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:62020CJ0013"
    note: "L'acquéreur légitime peut décompiler tout ou partie d'un programme pour corriger des erreurs qui en affectent le fonctionnement, y compris en désactivant une fonction, sans satisfaire aux conditions de l'article 6 ; dans la mesure nécessaire et dans le respect du contrat. Consulté le 15 octobre 2026."
  - libelle: "Cour de justice de l'Union européenne, arrêt du 2 mai 2012, SAS Institute contre World Programming, C-406/10, InfoCuria"
    url: "https://curia.europa.eu/juris/document/document.jsf?docid=122362&doclang=FR"
    note: "Système SAS développé sur 35 ans ; World Programming l'émule sans accès établi au code source ; ni la fonctionnalité, ni le langage de programmation, ni le format des fichiers de données ne sont protégés en tant que tels ; observation, étude et test permis au licencié ; la reproduction d'éléments d'un manuel d'utilisation peut violer le droit d'auteur sur ce manuel. Consulté le 15 octobre 2026."
  - libelle: "REA, étude de cas « DX-Ball : sound panning », rea.tools"
    url: "https://rea.tools/showcase/dx-ball/"
    note: "DX-Ball 1.07, jeu Windows de 1996 ; REA 4.1.0 ; pseudocode initial de la fonction 0x406400 sans paramètre, entrée révélée par l'assembleur ; constantes 1,5625 et 500 ; reconstruction en C ; 3 205 cas de comportement et 63 octets compilés identiques (chaîne VC4.0, relocations revues) ; point d'étape du 7 octobre 2026 ; intégration au moteur sonore encore à faire. Consulté le 15 octobre 2026."
  - libelle: "morluto, REA — docs/installation.md"
    url: "https://github.com/morluto/rea/blob/main/docs/installation.md"
    note: "Commande rea doctor : diagnostic des prérequis, d'un agent ou d'un moteur ; configuration des agents sous Windows, exemples en PowerShell ; Ghidra sous Windows en périmètre expérimental « P0 », en lecture seule, pour les applications et bibliothèques PE x86 et x86-64 ; installation de Hopper indisponible sous Windows. Consulté le 15 octobre 2026."
  - libelle: "morluto, REA — CHANGELOG.md"
    url: "https://github.com/morluto/rea/blob/main/CHANGELOG.md"
    note: "Version 0.2.0 du 12 juillet 2026 ; version 6.5.0 du 13 octobre 2026, dont le journal déclare plusieurs couvertures « non vérifiées », par exemple le comportement natif sous Windows et macOS de l'analyse des captures de paquets. Consulté le 15 octobre 2026."
  - libelle: "NationalSecurityAgency, Ghidra — dépôt GitHub"
    url: "https://github.com/NationalSecurityAgency/ghidra"
    note: "Cadre de rétro-ingénierie logicielle ; licence Apache-2.0. Relevé par l'API GitHub le 15 octobre 2026."
motsCles: ["rétro-ingénierie", "intelligence artificielle", "REA", "droit d'auteur", "Ghidra"]
licence: "CC BY 4.0"
miseEnAvant: false
brouillon: false
---

Un cuisinier dîne au restaurant et rentre chez lui une sauce en tête. Il devine le beurre, l'échalote,
la réduction ; il essaie, goûte, recommence. Personne ne lui en fait grief : il a payé son assiette, et
le goût d'une sauce n'appartient à personne. Envoyer la sauce au laboratoire pour en connaître la
composition exacte serait une autre affaire. Photocopier le carnet du chef en serait une troisième.

La rétro-ingénierie par IA pose ces trois questions à un logiciel. REA (*Reverse Engineer Anything*),
projet libre publié sur GitHub, donne à un agent de programmation — Claude Code, Codex, Cursor — les
instruments du rétro-ingénieur : il inspecte un programme sans son code source, explique comment une
fonction marche, montre les preuves de ce qu'il avance et peut en écrire une version neuve [1]. Le droit
européen fixe la limite : les idées et les principes d'un logiciel ne sont pas protégés, son expression
l'est [2][3]. Comprendre est permis, recopier ne l'est pas.

Ce guide s'adresse aux développeurs qui ont vu passer REA et se demandent ce qu'il fait vraiment, si ses
résultats sont fiables et si l'usage est permis. Il décrit l'outil, la règle juridique que l'on ignore, le
mécanisme d'une investigation, trois cas réels — et huit pièces à réunir avant de poser la première
question.

## REA, l'outil de rétro-ingénierie par IA : ce qu'il est, ce qu'il fait

REA n'est ni un décompilateur ni une intelligence artificielle. C'est un intermédiaire : un serveur que
l'agent appelle par le protocole MCP (*Model Context Protocol*), et une ligne de commande, `rea`, pour qui
préfère le terminal [1]. MCP est un standard ouvert qui relie les applications d'IA à des outils et à des
données ; ses auteurs le comparent à un port USB-C [4]. Branché sur ce port, l'agent ne se contente plus de
lire des fichiers texte : il interroge des moteurs d'analyse qui savent ouvrir un exécutable.

Le projet se décrit ainsi.

| Élément | Ce que dit le projet |
|---|---|
| Nature | Un serveur MCP et une ligne de commande, qui partagent les mêmes procédures [1] |
| Agents | Claude Code, Codex, Cursor, Gemini CLI, Grok Build, et tout agent qui accepte un serveur MCP local [1] |
| Moteurs natifs | Hopper, Ghidra ou IDA, installés à part ; Hopper et IDA sont commerciaux, leur licence reste à acquérir [1][5] |
| Cibles | Binaires natifs, applications JavaScript et Electron, assemblages .NET, sites web, applications Android, micrologiciels, captures réseau, bases SQLite [1] |
| Ce qui revient | Pseudocode, assembleur, chaînes, symboles, appels et références ; pour JavaScript, modules, imports, routes et échanges entre processus [1] |
| Lieu de l'analyse | La machine de l'utilisateur ; l'agent reçoit les résultats [1] |
| Licence | MIT pour le code de REA ; les outils tiers gardent la leur [1] |
| Usages revendiqués | Recherche licite, enseignement, interopérabilité, préservation, logiciels qu'on possède ou qu'on est autorisé à examiner [1][5] |

L'intelligence vient donc du modèle, l'analyse des moteurs existants ; REA les met en relation et impose
une discipline : chaque conclusion revient avec les preuves et les limites qui la fondent [1]. C'est ce qui
le distingue d'une IA à qui l'on demanderait de deviner comment marche un programme. Ghidra, l'un de ces
moteurs, figure dans le guide des [outils de sécurité open source](/articles/outils-securite-open-source/),
avec la règle qui vaut pour tous : s'exercer d'abord sur ce qui vous appartient.

## Comprendre un logiciel n'autorise pas à le copier

Le projet fait une promesse simple : vous voyez dans une application une fonctionnalité que vous aimeriez
avoir ; l'agent l'étudie avec REA, montre ses preuves et en construit une version pour votre projet [1].
Le même projet, dans son avertissement, refuse d'aider à copier un logiciel propriétaire ou à reproduire
son code et ses ressources protégés [5]. Les deux phrases ne se contredisent pas. Elles supposent qu'on
sache où passe la frontière — et l'outil ne la trace pas pour vous.

Le droit européen la trace, et le Code de la propriété intellectuelle la reprend presque mot pour mot
[2][3]. Il ne connaît pas « la rétro-ingénierie » en bloc : il distingue des gestes.

| Geste | Ce que dit le texte | À quelles conditions | Une licence peut-elle l'interdire ? |
|---|---|---|---|
| Observer, étudier, tester le fonctionnement | Permis sans autorisation, pour dégager les idées et principes du programme [2][3] | Avoir le droit d'utiliser le logiciel ; s'en tenir au chargement, à l'affichage, à l'exécution qu'on est en droit d'effectuer [2][3] | Non : la clause contraire est nulle [2][3] |
| Décompiler pour l'interopérabilité | Permis sans autorisation [2][3] | Indispensable ; information pas déjà facilement accessible ; limité aux parties nécessaires [2][3] | Non : la clause contraire est nulle [2][3] |
| Décompiler pour corriger une erreur | Permis à l'acquéreur légitime [2][6] | Dans la mesure nécessaire à la correction [6] | Le contrat peut se réserver la correction ou l'encadrer [2][3][6] |
| Reproduire, traduire, adapter le code | Soumis à l'autorisation de l'auteur [2] | Hors des exceptions ci-dessus | — |
| Reprendre une fonctionnalité, un langage, un format de fichiers | Non protégés en tant que tels par le droit d'auteur sur le programme [2][7] | Ne pas reproduire l'expression : code, textes, manuel [7] | — |

Le tableau dit deux choses que l'on ignore souvent. D'abord, la clause « vous ne ferez pas d'ingénierie
inverse » que portent tant de licences ne peut pas, dans l'Union, interdire d'observer, d'étudier ou de
tester un programme qu'on a le droit d'utiliser : sur ce point, elle est nulle et non avenue [2][3]. Le
texte français va plus loin que la directive : il permet d'étudier « le fonctionnement ou la sécurité » du
logiciel [3].

Ensuite — et c'est la règle qui fait se tromper —, aucune exception de décompilation ne vise « reconstruire
une fonctionnalité qui me plaît ». L'une sert l'interopérabilité d'un programme créé de façon indépendante ;
l'autre, la correction d'erreurs [2][3][6]. Les informations obtenues pour l'interopérabilité ne peuvent
même pas servir à mettre au point un logiciel dont l'expression est substantiellement similaire [3]. Or
traduire un exécutable en assembleur ou en pseudocode, c'est traduire la forme du code : le régime de la
décompilation [2].

La promesse du projet tient donc à une condition : que l'agent étudie ce que fait le logiciel, et que votre
programme exprime cette idée avec ses propres moyens. Observer le comportement d'une recherche, mesurer ses
résultats, en comprendre le principe, puis l'écrire autrement : c'est le premier geste du tableau.
Désassembler la fonction de recherche d'un concurrent pour en tirer la vôtre n'est ni de l'interopérabilité
ni une correction d'erreur. Ce guide donne les textes ; un cas précis relève d'un avocat.

## Comment un agent fait de la rétro-ingénierie avec REA

### Le protocole MCP relie l'agent aux outils

L'installation inscrit REA auprès de l'agent et ajoute des consignes de travail, en gardant une copie de
la configuration existante [1]. L'agent appelle ensuite REA pour inspecter la cible et suivre le code
utile ; REA renvoie ses constats avec leurs preuves ; l'agent s'en sert pour poser la question suivante,
expliquer le comportement, ou écrire et tester une implémentation [1]. La boucle est celle d'un enquêteur
qui interroge des témoins : chaque réponse en appelle une autre, et rien ne se conclut sans pièce.

### Lire sans exécuter, ou exécuter pour observer

Deux familles d'opérations se côtoient. L'inspection statique d'une application JavaScript ou d'un
assemblage .NET lit les fichiers fournis sans lancer l'application [1]. La capture à l'exécution, elle,
lance la cible ou interagit avec elle, avec les droits de l'utilisateur [1]. La différence n'est pas de
détail : le projet rappelle qu'être autorisé à inspecter un fichier n'autorise pas forcément à l'exécuter,
à intercepter son trafic ou à toucher au système d'un tiers, et recommande un environnement adapté aux
cibles dont on ne sait rien [5]. Une machine virtuelle jetable tient ce rôle ; le
[mémento VM & Docker](/mementos/vm-docker/) en donne les bases.

### Le pseudocode n'est pas le code source

Un exécutable a perdu en route les commentaires, souvent les noms et une partie de la structure du
programme écrit par un humain. Le décompilateur en propose une reconstruction calculée — le pseudocode —,
que l'agent doit lire comme un indice, non comme un aveu. Dans l'étude de cas DX-Ball, le premier
pseudocode décrivait une fonction sans paramètre ; c'est l'assembleur, renvoyé dans le même résultat, qui a
révélé l'entrée manquante [8]. Le projet le dit sans fard : décompilation, reconstruction, heuristiques et
analyse assistée par IA peuvent être incomplètes ou fausses, et les conclusions qui comptent se contrôlent
sur les preuves [5].

### Ce qui sort de la machine

REA analyse la cible localement. Mais l'agent reçoit les résultats de l'outil, et le fournisseur de son
modèle applique sa propre politique de données [1]. Du pseudocode, des chaînes de caractères, des extraits
de trafic peuvent donc quitter le poste avec la conversation. Le projet ajoute qu'une exécution locale ne
vaut pas autorisation et ne garantit pas que la cible ou les outils tiers restent sans effet au dehors [5].
Le lieu de l'analyse et le lieu du raisonnement sont deux questions distinctes.

## Le parcours d'une investigation, de la question au test

Une investigation suit sept étapes ; chacune laisse une pièce qu'il vaut la peine de garder.

| Étape | Ce qui se passe | Qui agit | Pièce à garder |
|---|---|---|---|
| 1. Installer | `npx rea-agents setup` inscrit le serveur MCP et les consignes, après approbation ; redémarrer l'agent [1] | Vous | La liste des changements approuvés |
| 2. Diagnostiquer | `rea doctor` contrôle les prérequis de la machine, un agent ou un moteur [9] | Vous | Le rapport, en `--json` |
| 3. Questionner | Une question en langage courant : quelle fonctionnalité, quelles preuves, quel but [1] | Vous | La question et son but, écrits |
| 4. Inspecter | REA interroge les moteurs : fonctions, chaînes, références, pseudocode [1] | Agent et REA | Les identifiants de preuve |
| 5. Observer | Capture du navigateur ou du processus, avec vos droits [1][5] | Agent et REA | La machine isolée, et ce qu'elle a vu |
| 6. Expliquer | L'agent sépare l'observé, l'inféré et l'inconnu [1] | Agent | La note d'investigation |
| 7. Reconstruire et tester | Nouvelle implémentation, comparée au comportement de l'original [1][8] | Agent et vous | Les tests |

Le tableau répartit les risques. Les étapes 4 et 7 portent le risque juridique : c'est là qu'on traduit le
code d'un autre et qu'on écrit le sien. Les étapes 3 et 6 portent le risque technique : une question floue
produit une enquête floue, et une explication qui ne distingue pas l'observé du supposé fabrique du code
faux avec aplomb. Les sorties en JSON se trient et se filtrent avec les outils du
[mémento JSON](/mementos/json/), `jq` en tête : c'est le moyen le plus sûr de relire ce que l'agent a
réellement vu.

## Ce que montrent les cas réels

**Sur le terrain : DX-Ball, une fonction à la fois.** Un projet de reconstruction vise une version en C,
maintenable, de DX-Ball 1.07, jeu Windows de 1996 [8]. La question posée à l'agent : comment la position
d'une brique à l'écran devient-elle un réglage de balance sonore, à gauche ou à droite ? Avec REA 4.1.0,
l'agent a suivi l'appel depuis la fonction qui traite l'impact sur une brique, lu les instructions, puis
les constantes stockées dans l'exécutable : 1,5625 et 500 [8]. Le pseudocode initial était faux par
omission ; l'assembleur l'a corrigé. La fonction réécrite en C a passé deux épreuves : 3 205 cas de
comportement comparés à l'original, de la position 0 à 640 sous cinq réglages d'échelle, et 63 octets
compilés identiques à ceux de l'exécutable, une fois les relocations revues [8]. La page dit aussi ce qui
manque : le raccordement au moteur sonore du jeu reste à faire [8]. Une conclusion n'y vaut que par son
test.

**À une autre échelle : SAS contre World Programming.** SAS Institute a développé en trente-cinq ans un
ensemble de programmes d'analyse statistique, doté de son propre langage de scripts [7]. World Programming
en a écrit un substitut qui exécute les mêmes scripts et cherche à produire, pour les mêmes entrées, les
mêmes résultats, sans qu'il soit établi qu'elle ait eu accès au code source [7]. Le 2 mai 2012, la Cour de
justice de l'Union a jugé que ni la fonctionnalité d'un programme, ni son langage de programmation, ni le
format de ses fichiers de données ne sont protégés en tant que tels par le droit d'auteur sur le programme,
et qu'un licencié peut en observer, étudier et tester le fonctionnement pour en dégager les idées [7]. Un
système entier peut donc être reconstruit à partir de son comportement.

**Contre l'intuition : décompiler pour corriger.** On croit souvent que la décompilation n'est permise que
pour l'interopérabilité. Le 6 octobre 2021, dans une affaire qui opposait l'éditeur Top System à l'État
belge, la Cour a jugé que l'acquéreur légitime d'un programme peut le décompiler, en tout ou en partie, pour
corriger des erreurs qui en affectent le fonctionnement — y compris en désactivant une fonction —, sans
remplir les conditions de l'interopérabilité [6]. Deux bornes demeurent : la décompilation se limite à ce
que la correction exige, et le contrat peut l'encadrer [6]. L'affaire SAS réserve une autre surprise : le
risque n'y tenait pas au programme, mais au manuel. La Cour a admis que reproduire certains éléments d'un
manuel d'utilisation pouvait violer le droit d'auteur sur ce manuel, s'ils exprimaient la création propre à
son auteur [7]. Un agent recopie sans effort une chaîne de caractères, un message d'erreur, une page d'aide :
c'est là, autant que dans le code, que se loge le risque.

## Au 15 octobre 2026 : REA en version 6.5

*Cette section est datée ; elle sera mise à jour à la sortie de la version 7.0 de REA.*

- **Version** : 6.5.0, publiée le 13 octobre 2026 ; la première entrée du journal des modifications, la
  0.2.0, date du 12 juillet 2026 [10]. Le README prévient que l'outil change vite et demande de le tenir à
  jour [1].
- **Audience** : 248 550 étoiles et 62 368 copies sur GitHub au 15 octobre 2026, pour un dépôt créé le
  14 avril 2026 [1].
- **Prérequis** : Node.js 22 (à partir de 22.19), 24 (à partir de 24.11) ou 26 et suivants, avec npm ;
  sous Linux, plusieurs analyses exigent une commande `ps` compatible procps [1] — le
  [mémento Linux](/mementos/linux/) en rappelle l'usage.
- **Commandes** : `npx rea-agents setup` pour inscrire l'outil auprès des agents ; `rea doctor` pour
  diagnostiquer ; `npx -y rea-agents@latest analyze-javascript-application <chemin absolu> --json` pour
  examiner une application JavaScript ou Electron décompressée [1][9].
- **Windows** : `rea setup` y configure les agents, et la documentation donne ses exemples en PowerShell ;
  Ghidra y est pris en charge dans un périmètre expérimental, en lecture seule ; l'installation de Hopper
  n'y est pas proposée [9].
- **Ce que le projet déclare non vérifié** : le journal de la version 6.5.0 précise, fonction par fonction,
  les systèmes éprouvés et ceux qui ne le sont pas — le comportement natif sous Windows et macOS de
  l'analyse des captures de paquets, par exemple [10].

L'enjeu est là. Un outil qui passe de la version 0.2 à la 6.5 en trois mois change plus vite que les
habitudes de ceux qui l'emploient. La même question, posée en langage courant, peut déclencher
l'observation d'un comportement ou la traduction d'un binaire, et l'agent ne demande pas lequel des deux
gestes vous entendiez accomplir. Le projet a fixé sa position : la responsabilité de l'usage, y compris des
actions que l'on demande à un agent, revient à l'utilisateur [5].

## Avant une rétro-ingénierie par IA : huit pièces à réunir

Une seule posture à retenir : faire comprendre, jamais recopier. Avant de lancer une investigation,
chacune des questions suivantes reçoit une réponse appuyée sur une pièce, non sur une intention.

1. **Avez-vous le droit d'utiliser ce logiciel ?** Une facture, une licence, un compte à votre nom : les
   exceptions ne profitent qu'à la personne qui a ce droit [2][3].
2. **Qu'interdit sa licence ?** La clause lue, et ce qu'elle ne peut pas interdire : observer, étudier,
   tester, décompiler pour l'interopérabilité [2][3].
3. **Quel est votre but, en une phrase ?** Comprendre un comportement, faire dialoguer deux programmes,
   corriger une erreur, éprouver une sécurité. « Reprendre par son code la fonctionnalité d'un concurrent »
   ne figure parmi aucune exception [2][3].
4. **L'information existe-t-elle déjà ?** Documentation, interface publique, format publié, demande écrite
   à l'éditeur : la décompilation pour l'interopérabilité suppose que l'information n'était pas facilement
   accessible [2][3].
5. **Où tourne la cible ?** Une machine virtuelle ou un poste de test, jamais le poste où vivent vos accès
   [5].
6. **Où partent les résultats ?** La politique de données du fournisseur de votre modèle, lue ; et la
   protection des traces d'investigation, dont le [mémento Cybersécurité](/mementos/cybersecurite/) donne
   les réflexes [1][5].
7. **Chaque conclusion a-t-elle sa preuve ?** Une adresse, une fonction, une chaîne, un identifiant de
   preuve — et l'inconnu nommé comme tel [1].
8. **Votre code est-il le vôtre ?** Une spécification écrite avec vos mots, des tests de comportement,
   aucune chaîne, ressource ou page d'aide recopiée [5][7].

Si une pièce manque, l'investigation attend. La rétro-ingénierie par IA rend trois gestes également
faciles : goûter la sauce, l'envoyer au laboratoire, photocopier le carnet du chef. Le premier est un
droit ; le deuxième, une exception étroite ; le troisième, une faute. REA ne vous demandera pas lequel vous
accomplissez : c'est à vous de le savoir avant de poser la question.

## Questions fréquentes

### La rétro-ingénierie d'un logiciel est-elle légale en France ?

Oui, dans des limites précises. La personne qui a le droit d'utiliser un logiciel peut en observer,
étudier ou tester le fonctionnement et la sécurité, et aucune clause ne peut l'en empêcher [3]. La
décompilation n'est permise que pour l'interopérabilité, à trois conditions, ou pour corriger des erreurs
[2][3][6]. Reproduire, traduire ou adapter le code reste soumis à l'autorisation de l'auteur [2]. Pour un
cas précis, l'avis d'un avocat s'impose.

### REA envoie-t-il mon application sur Internet ?

Non : REA analyse la cible sur votre machine [1]. Mais l'agent qui l'appelle reçoit les résultats —
pseudocode, chaînes, extraits de trafic —, et si son modèle tourne chez un fournisseur, ces résultats
partent avec la conversation, sous la politique de données de ce fournisseur [1]. Lisez-la avant d'analyser
un logiciel confidentiel. Le projet rappelle aussi qu'une exécution locale ne garantit pas que la cible ou
un outil tiers restent sans effet au dehors [5].

### Faut-il Ghidra ou IDA pour utiliser REA ?

Pour l'analyse approfondie des binaires natifs, oui : REA s'appuie sur Hopper, Ghidra ou IDA, déjà
installés [1]. Ghidra est publié sous licence Apache 2.0 [11] ; Hopper et IDA sont commerciaux, et REA ne
fournit ni licence ni clé [1][5]. L'inspection statique des applications JavaScript et des assemblages .NET
fonctionne sans moteur natif [1]. D'autres cibles demandent leurs propres outils, comme JADX pour les
applications Android [1].

### REA retrouve-t-il le code source d'une application ?

Non. Pour un binaire natif, REA renvoie du pseudocode et de l'assembleur ; pour une application
JavaScript, des modules et leurs relations [1]. Le pseudocode est une reconstruction calculée, privée des
commentaires d'origine, et il peut se tromper : dans l'étude de cas DX-Ball, il omettait le paramètre de la
fonction [8]. C'est l'agent qui écrit un code nouveau, et des tests de comportement doivent ensuite le
confirmer.

### Peut-on recréer la fonctionnalité d'une application concurrente ?

L'idée, oui ; le code, non. La fonctionnalité d'un programme n'est pas protégée en tant que telle, et un
licencié peut en observer, étudier et tester le fonctionnement pour en dégager les idées [7]. Mais la
licence MIT de REA ne couvre que REA, et un résultat proche du code source ne donne aucun droit sur le
programme d'origine [1][5]. Aucune exception de décompilation ne vise la reprise d'une fonctionnalité :
observez le comportement, puis écrivez votre propre code [2][3].

### REA fonctionne-t-il sous Windows ?

En partie. `rea setup` y configure les agents, et la documentation donne ses exemples en PowerShell [9].
Ghidra y est pris en charge dans un périmètre expérimental, en lecture seule, pour l'essentiel les
applications et bibliothèques PE x86 et x86-64 ; l'installation de Hopper n'y est pas proposée [9]. La
capture de processus est réservée à Linux et à macOS, l'analyse des captures de paquets à Linux [1]. Ces
limites changent d'une version à l'autre.
