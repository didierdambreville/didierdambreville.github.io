---
titre: "Traversal jeu de plateau : les règles, et ce que le relief change"
these: "Traversal, jeu de plateau à relief, retire la théorie d'ouverture en changeant le terrain à chaque partie ; qu'il soit plus profond que les échecs, aucune donnée ne le montre encore."
identifiant: "traversal-jeu-plateau"
rubriques: ["informatique", "sciences"]
date: 2026-10-20
sources:
  - libelle: "Traversal, page « Comment jouer » (règles), traversalgame.com, lue le 20 octobre 2026"
    url: "https://www.traversalgame.com/rules"
    note: "Grille de 10 × 10, écart de 2 unités au plus entre cases voisines, six modes de terrain ; les trois pièces (Mouvement, Force, coups spéciaux) ; coût de déplacement ; formules de combat ; score, victoire de la Sentinelle, limite de 200 coups."
  - libelle: "Traversal, page « À propos » (en anglais seulement), traversalgame.com, lue le 20 octobre 2026"
    url: "https://www.traversalgame.com/about"
    note: "Diagnostic de l'auteur sur la théorie d'ouverture ; plateau physique ; plateaux extrêmes ; définition du décompte et résultat, 7,51 × 10⁵⁶ plateaux calculés le 30 septembre 2026 ; aveu que la comparaison avec le nombre de Shannon n'a jamais été équitable."
  - libelle: "Fédération internationale des échecs (FIDE), « History of Chess960 », 8 mars 2025"
    url: "https://www.fide.com/history-of-chess960/"
    note: "Traité de Van Zuylen van Nijevelt (1792) ; Bronstein et Benko ; but de Fischer, 960 positions, présentation publique le 19 juin 1996 à Buenos Aires ; premier championnat du monde reconnu par la FIDE en 2019, remporté par Wesley So."
  - libelle: "FIDE Handbook, « Laws of Chess taking effect from 1 January 2023 », Guidelines II « Chess960 Rules »"
    url: "https://handbook.fide.com/chapter/E012023"
    note: "Règles de la position de départ (roi entre les tours, fous sur des cases de couleurs opposées, noirs en miroir) ; les Guidelines ne font pas partie des Lois du jeu ; 960 positions au glossaire."
  - libelle: "Dépôt GitHub du jeu (darkfireXXI/board_game), README du dossier cpp_transfer_matrix"
    url: "https://github.com/darkfireXXI/board_game/tree/main/cpp_transfer_matrix"
    note: "Méthode de décompte des plateaux sans les énumérer ; énumération directe : deux mois de calcul pour 6 milliards de plateaux ; tableau de 3,5 millions d'entrées au plus ; ordres de grandeur par taille de plateau."
  - libelle: "Traversal, page d'accueil, traversalgame.com, lue le 20 octobre 2026"
    url: "https://www.traversalgame.com/"
    note: "Compteurs affichés (4,2 k joueurs, 11,6 k parties jouées) ; jeu annoncé comme jouable gratuitement en ligne ; accès au tutoriel, au mode local et à l'inscription."
motsCles: ["Traversal", "jeu de plateau", "échecs", "Chess960", "combinatoire"]
licence: "CC BY 4.0"
miseEnAvant: false
brouillon: false
---

Un randonneur qui a parcouru cent fois le même sentier n'a plus besoin de regarder le paysage : ses
pieds connaissent le tracé. Les ouvertures d'échecs sont un sentier de ce genre, balisé coup après coup
par des générations de joueurs. Traversal le supprime : le terrain change à chaque partie, et le sentier
n'existe pas encore [1][2].

Traversal, jeu de plateau pour deux joueurs, se joue sur une grille de 10 × 10 cases dont chacune a une
hauteur. Chacun conduit six pièces qu'il doit faire sortir par le bord opposé, et le relief coûte du
Mouvement [1]. Ce guide pose les règles, explique ce que le relief change au calcul, recompte le nombre de
plateaux que l'auteur annonce, et dit ce que les faits permettent de conclure. Il s'adresse à qui a vu
passer le jeu sous un titre qui promet de rendre les échecs obsolètes : le site, lui, ne promet rien de
tel. Il dit vouloir corriger un défaut des jeux classiques, échecs et go compris [2].

## Traversal, jeu de plateau : les règles en un tableau

Les règles tiennent sur une page du site du jeu. Le tableau en donne la substance, telle qu'elle était
publiée le 20 octobre 2026.

| Élément | Règle |
|---|---|
| Joueurs et pièces | Deux joueurs, six pièces chacun : deux Explorateurs, deux Avant-gardes, deux Sentinelles [1] |
| Plateau | 10 × 10 cases, chacune à une hauteur ; deux cases voisines diffèrent de 2 unités au plus, donc aucune falaise infranchissable [1] |
| Terrain | Différent à chaque partie ; six modes au choix : aléatoire, montagnes, vallées, hautes terres, bois, désert [1] |
| Déplacement | En ligne droite, sans traverser aucune pièce ; 1 point de Mouvement pour une case de même hauteur, la différence de hauteur plus 1 sinon [1] |
| Combat | Une pièce adjacente à une pièce adverse l'attaque au lieu de bouger ; elle la capture si sa force égale ou dépasse celle du défenseur [1] |
| But | Sortir par le bord opposé ; chaque pièce sortie rapporte sa Force en points [1] |
| Fin de partie | Deux pièces sorties, de n'importe quel camp ; ou une Sentinelle sortie la première, victoire immédiate ; ou 200 coups [1] |

Les pièces se placent symétriquement sur les colonnes 2 à 7 de la rangée de départ [1]. Ce qui change d'une
partie à l'autre, c'est le sol. Tout ce qu'un joueur a appris par cœur porte sur les pièces, jamais sur
le terrain.

## Jouer sans théorie d'ouverture : pourquoi changer le plateau plutôt que les pièces ?

Le point de départ de l'auteur est un diagnostic. Les échecs récompenseraient la mémoire et l'étude : on
n'irait pas loin sans la théorie d'ouverture, et les moteurs de calcul permettent de préparer des lignes
sur quarante coups. Quand toutes les parties partent de la même position, conclut-il, tout ce qui
commence peut être calculé à l'avance [2].

Ce diagnostic n'est pas neuf. En 1792, le Néerlandais Philip Julius van Zuylen van Nijevelt proposait de
tirer au sort la position des pièces pour supprimer la mémorisation des ouvertures ; David Bronstein
défendit une variante voisine dans les années 1940, Pal Benko dans les années 1970 [3]. Bobby Fischer
fit compter les dispositions possibles par des mathématiciens : 960, assez à ses yeux pour empêcher les
joueurs de planifier leurs ouvertures. Son jeu fut présenté au public le 19 juin 1996 à Buenos Aires [3]. Ce Chess960 a ses règles dans le Handbook de la Fédération internationale des échecs
(FIDE), à titre de recommandations hors des Lois du jeu : roi entre les deux tours, fous sur des cases de
couleurs opposées, noirs en miroir des blancs [4].

Traversal fait un autre choix : ne pas mélanger les pièces, changer le sol. Le tableau compare les trois
jeux sur ce qui varie d'une partie à l'autre.

| | Échecs | Chess960 | Traversal |
|---|---|---|---|
| Positions de départ | Une [2] | 960 [3][4] | Environ 7,5 × 10⁵⁶ plateaux, selon le décompte de l'auteur [2][5] |
| Ce qui varie | Rien | L'ordre des pièces de la première rangée [4] | La hauteur des 100 cases [1] |
| Ce qui ne varie pas | Tout | Le plateau plat et les coups des pièces [4] | Les pièces, leurs deux nombres et la règle de coût [1] |
| Origine | — | Fischer, présenté le 19 juin 1996 [3] | Idée de l'auteur vers 2015, plans en bois de janvier 2016 [2] |

Chess960 déplace la mémoire sans toucher au calcul : un cavalier saute toujours en L. Traversal touche au
calcul lui-même, puisque le sol fixe ce que coûte chaque pas. C'est ce qui en fait un autre jeu plutôt
qu'une variante.

Reste la tension du sujet. Supprimer la théorie ne supprime pas la préparation : elle passe de la mémoire
à la lecture du terrain. Le joueur de Traversal n'a plus de lignes à retenir, mais il doit apprendre qu'un
détour de cinq cases peut coûter moins cher qu'un trajet de trois. Que cet apprentissage soit plus riche
que celui des ouvertures, rien ne le dit : Fischer considérait que la préparation dominait les échecs,
l'auteur de Traversal le pense aussi [2][3], et ni l'un ni l'autre ne le mesure. Pour voir ce que
représente cette préparation, le [mémento Échecs](/mementos/echecs/) pose les règles et les idées
d'ouverture sur huit pages, et la note [Construire son répertoire d'ouvertures](/notes/repertoire-d-ouvertures/)
en fait un plan en six étapes : c'est le travail de mémoire dont Traversal veut dispenser.

## Le mécanisme : ce que coûte un pas quand le sol monte

### Le chemin le plus court n'est pas le moins cher

Le ressort du jeu tient en une règle. Passer à une case de même hauteur coûte 1 point de Mouvement ;
passer à une case plus haute ou plus basse coûte la différence de hauteur plus 1. Monter de la hauteur 2
à la hauteur 4 coûte 3, et descendre de 4 à 2 coûte aussi 3 : la descente n'est pas gratuite [1].

Un exemple montre ce que cela change. Trois pas par-dessus deux crêtes de deux unités, de 0 à 2, de 2 à 0
puis de 0 à 2, coûtent 3 + 3 + 3 = 9 points. Un détour de cinq pas, quatre dans la plaine puis une montée
de deux, atteint la même case pour 4 + 3 = 7 [1]. La distance qui compte n'est pas le nombre de cases,
c'est le coût : un logiciel d'itinéraire raisonne de même quand il préfère le trajet le plus rapide au
plus court en kilomètres.

### Trois pièces, un total de six

Chaque type de pièce est un solide dont la forme porte ses deux nombres : le nombre de côtés de la base
donne le Mouvement, le nombre de pointes du sommet donne la Force, et leur somme fait toujours 6 [1]. Plus
une pièce est rapide, plus elle est faible au combat. Le tableau ajoute aux données du site la portée de
chaque pièce en un tour, calculée d'après la règle de coût sur un plateau sans bord ni obstacle ; la
rampe est un plateau extrême décrit par l'auteur, où la hauteur monte de 2 unités à chaque case, de 0 à 36 [2].

| Pièce | Mouvement / Force | Coup particulier | Cases atteignables, terrain plat | Cases atteignables, rampe |
|---|---|---|---|---|
| Explorateur | 5 / 1 | À la place du déplacement : un pas en diagonale ou un bond de deux cases en ligne droite, sans coût de hauteur [1] | 60 | 12 |
| Avant-garde | 4 / 2 | +1 en attaque si elle dépense ses 4 points pour atteindre la cible par le plus court chemin [1] | 40 | 4 |
| Sentinelle | 3 / 3 | Première pièce sortie, tous camps confondus : victoire immédiate de son joueur [1] | 24 | 4 |

Sur le plat, la portée va de 24 à 60 cases. Sur la rampe, chaque pas coûte 3 : la Sentinelle et
l'Avant-garde n'en font plus qu'un, et seul l'Explorateur garde du champ, parce que ses coups spéciaux
ignorent la hauteur : il garde douze cases, quatre pas normaux, quatre pas en diagonale et quatre bonds.
On imagine volontiers l'Explorateur en maître des terrains plats ; c'est l'inverse. Sur le plat, ses
coups spéciaux n'ajoutent aucune case à sa portée normale. Il devient décisif quand le sol monte.

### Le combat est une addition

La force d'un attaquant est sa Force, plus 1 s'il a commencé son tour plus haut que la cible, moins 1 s'il
a commencé plus bas, plus la Force de base de chacune de ses pièces adjacentes à la cible. Celle du
défenseur est sa Force, plus 1 par pièce alliée adjacente. À égalité, l'attaquant capture ; une attaque
perdante n'est pas autorisée [1]. L'exemple du site : un Explorateur (1) appuyé par une Avant-garde (2)
adjacente à la cible capture une Sentinelle sans renfort (3), car 1 + 2 = 3 [1].

Un allié pèse donc sa Force entière dans l'attaque et un seul point dans la défense. Se regrouper
protège un peu et attaque beaucoup, mais ralentit la course vers la sortie, comme le site le note
lui-même [1].

## Le parcours d'une partie, du tirage du terrain à la sortie

Une partie suit cinq étapes, du choix du terrain à la dernière sortie.

| Étape | Ce qui se passe | Qui décide | Règle ou limite |
|---|---|---|---|
| 1. Le terrain | Un mode est choisi, puis le plateau est généré pour la partie | Les joueurs pour le mode, le générateur pour le sol | Six modes ; 2 unités d'écart au plus entre voisines [1] |
| 2. La mise en place | Six pièces par camp, disposées symétriquement sur les colonnes 2 à 7 | La règle | Le camp rouge part de la rangée 1, le bleu de la rangée 10 [1] |
| 3. Un tour | On déplace une pièce ou on attaque ; le tour s'arrête ensuite | Le joueur dont c'est le tour | Aucun passage à travers une pièce ; pas de retour sur la case de départ du tour [1] |
| 4. La sortie | Une pièce sur la dernière rangée, avec au moins 1 point de Mouvement en réserve, quitte le plateau ; sa Force s'ajoute au score | Le joueur | La pièce sortie est retirée de la partie [1] |
| 5. La fin | Deux pièces sorties, de n'importe quel camp ; ou la première Sentinelle sortie ; ou le 200e coup | La règle | Le plus haut score gagne ; égalité, partie nulle [1] |

Comme deux sorties arrêtent la partie, le score reste modeste : un joueur ne peut pas dépasser 5 points,
une Avant-garde (2) puis une Sentinelle (3) [1]. La Sentinelle fait de la course une menace permanente :
la première qui sort gagne sans compter les points. Si 200 coups sont atteints sans sortie, l'emporte
le joueur dont la pièce est la plus proche de l'arrivée, puis la plus forte, sinon la partie est nulle [1].

## Combien de plateaux différents ? Le décompte de l'auteur, recompté

L'auteur ne se contente pas d'affirmer que les plateaux sont nombreux : il les compte [2]. Il appelle
plateau une grille de hauteurs entières où deux cases voisines diffèrent de 2 au plus, sans bordure ;
deux grilles qui ne diffèrent que d'une translation de toutes les hauteurs sont la même [2][5]. Pour
10 × 10, il a calculé le 30 septembre 2026 un total de
751 446 302 681 050 365 478 027 416 872 495 407 843 190 771 097 924 033 841 plateaux, soit 7,51 × 10⁵⁶,
ce qui revient à 3,7 hauteurs possibles par case en moyenne [2].

Les énumérer est hors de portée : même à un milliard de plateaux par seconde, il faudrait environ 10⁴⁰ ans [5].
L'auteur compte donc sans lister : il construit le plateau case par case et fusionne les plateaux
partiels qui ont le même bord, ce qui réduit le travail à un tableau de 3,5 millions d'entrées au plus [5].
Il dit avoir confié ce calcul exact à un assistant d'intelligence artificielle (IA) [2]. Raison de plus de le
recompter, comme le recommande l'article [Vérifier les chiffres d'une IA](/articles/verifier-chiffres-ia/) :
le nombre peut être juste et la phrase qu'on en tire, fausse.

Le nombre résiste. Une méthode écrite indépendamment, qui traite le plateau ligne par ligne, retrouve les
valeurs du tableau de l'auteur pour de petites grilles (85 pour 2 × 2, 1 459 pour 2 × 3, 1 133 641 543
pour 4 × 4), puis, pour 10 × 10, les mêmes 57 chiffres [2][5].

Il faut lire ce nombre pour ce qu'il est. Il compte des grilles, pas des parties ni des problèmes. Chaque
grille y est comptée séparément, rotations et symétries comprises ; en les confondant, il resterait
environ 9,4 × 10⁵⁵ plateaux, le même ordre de grandeur. Il inclut des plateaux extrêmes, que l'auteur
cite lui-même, comme la rampe de 0 à 36 [2]. D'après le site, les terrains générés sont équitables ;
combien de plateaux le générateur peut produire, et selon quel tirage, les pages ne le disent pas [1].
Enfin l'auteur compare son nombre au
« nombre de Shannon », 10¹²⁰, qu'il présente comme une borne basse du nombre de parties d'échecs, et
reconnaît que comparer des positions de départ à des parties n'a jamais été équitable [2]. Un nombre de
plateaux n'est pas un nombre de problèmes.

## Ce que montrent les faits

**Sur le terrain : trop jeune pour une théorie.** Les compteurs de la page d'accueil, relevés plus bas,
font moins de trois parties jouées par joueur en moyenne [6]. À ce volume, il est difficile qu'une théorie,
d'ouverture ou de terrain, se soit formée ; aucune n'est non plus démentie. Et aucune statistique d'équilibre,
victoires par camp ou par mode de terrain, n'est publiée sur les pages consultées [1][2][6] : l'équité des
terrains reste une affirmation du site. À chacun sa mesure : pour les robots humanoïdes, la preuve se
compte en heures de travail, comme le montre l'article [Robots humanoïdes : la preuve se compte en
heures](/articles/robots-humanoides-heures-travail/) ; pour un jeu, elle se compte en parties et en
résultats publiés.

**À une autre échelle : l'idée a 234 ans.** Depuis le traité de 1792, la sortie de la théorie par le
hasard a reçu plusieurs réponses : les pièces tirées au sort, ou placées tour à tour par les joueurs chez
Bronstein et Benko ; les 960 positions de Fischer, dont le premier championnat du monde reconnu
officiellement par la FIDE, en 2019, a été remporté par Wesley So [3]. Le sol variable de Traversal en
est une de plus. Les précédentes ont une histoire de tournois, que la FIDE documente ; celle-ci en est au
début, et ses compteurs figurent dans la section datée plus bas.

**Ce qui va contre l'intuition.** Plus de plateaux ne veut pas dire plus de stratégie. Fischer jugeait
960 positions suffisantes pour empêcher la planification des ouvertures [3] : au-delà du seuil où nul ne
peut tout préparer, avoir 7,8 × 10⁵³ fois plus de plateaux que Chess960 n'a de positions n'ajoute rien à
ce but-là [2][3]. Ce qui reste à établir est autre chose : que deux plateaux différents posent deux
problèmes différents. Le décompte ne l'établit pas, il mesure la variété des départs, non la profondeur
du jeu. Retirer la mémoire du jeu ne dit pas encore ce que l'on entraîne à la place.

## Au 20 octobre 2026 : ce que le jeu est, et ce qui manque encore

*Cette section est datée ; elle sera mise à jour à la première publication de statistiques de parties
par le site, ou à toute modification de la page des règles.*

- **Fréquentation** : la page d'accueil affiche 4,2 k joueurs et 11,6 k parties jouées [6].
- **Accès** : le jeu se joue en ligne, gratuitement d'après le titre de sa page d'accueil, avec un
  tutoriel et un mode local ; « Trouver une partie » mène à l'inscription [6].
- **Langues** : les règles se lisent en français ; la page « À propos », qui porte le décompte, n'existe
  qu'en anglais [1][2].
- **Édition physique** : la page des règles en évoque une, avec un générateur de plateaux pour la mise en
  place ; l'auteur décrit un plateau imprimé en 3D et des plans en bois de janvier 2016 [1][2]. Les pages
  lues n'indiquent pas où se la procurer.
- **Décompte** : arrêté au 30 septembre 2026 [2].
- **Équilibre** : aucune statistique de victoires par camp ou par mode de terrain n'est publiée [1][2][6].

Relisez la page des règles avant de jouer : une règle de coût ou de combat modifiée change tout ce qui
précède.

## Juger Traversal sur pièces, pas sur le slogan

Je propose de traiter Traversal comme une hypothèse bien posée, ni comme un remède aux échecs ni comme
une curiosité. Avant de dire de Traversal, jeu de plateau neuf, qu'il dépasse les échecs ou qu'il ne vaut
rien, voici sept questions, auxquelles on répond par une pièce et jamais par une impression :

1. **Avez-vous lu les règles à la source ?** La page « Comment jouer » du site, ouverte à côté du
   plateau, plutôt qu'un résumé ou une vidéo.
2. **Avez-vous joué dix parties au moins, sur deux modes de terrain ?** L'historique de votre compte en
   fait foi.
3. **Un coût de chemin a-t-il changé votre plan ?** Notez la partie, le coup, le détour pris : c'est le
   mécanisme que le jeu annonce.
4. **Quel camp a gagné vos parties ?** Un relevé de vos résultats par couleur : le site affirme l'équité
   des terrains, aucune statistique ne l'appuie.
5. **Le chiffre qu'on vous cite compte-t-il des plateaux ou des parties ?** Retrouvez sa définition sur la
   page de l'auteur avant de le répéter [2].
6. **Qui annonce l'obsolescence des échecs ?** Une phrase, avec son auteur : le site du jeu ne l'écrit
   pas [2].
7. **L'avez-vous comparé à Chess960 ?** Dix parties de chaque jeu contre les mêmes adversaires, et le
   relevé de ce que vous avez eu à préparer.

Si une réponse manque, la conclusion est prématurée, dans un sens comme dans l'autre. Un sentier se juge
en le parcourant : Traversal, jeu de plateau sans sentier balisé, n'échappe pas à la règle.

## Questions fréquentes

### Comment jouer à Traversal ?

Deux joueurs, une grille de 10 × 10 cases à hauteurs variables, six pièces chacun. À son tour, on déplace
une pièce en ligne droite, en payant du Mouvement selon le relief, ou on attaque une pièce adjacente. On
gagne en faisant sortir ses pièces par le bord opposé : chacune rapporte sa Force, et la première
Sentinelle sortie donne la victoire immédiate [1]. Le site propose un tutoriel interactif [1][6].

### Traversal est-il gratuit ?

La page d'accueil du jeu le présente comme jouable gratuitement en ligne ; le bouton « Trouver une
partie » mène à l'inscription, et le site propose aussi un tutoriel et un mode local [6]. Une édition
physique est mentionnée dans les règles, sans indication de prix ni de point de vente sur les pages
consultées [1].

### Traversal remplace-t-il les échecs ?

Rien ne l'établit. Le site dit vouloir corriger un défaut des jeux classiques, échecs et go compris, en
retirant sa prime à la mémorisation des ouvertures [2]. Il ne publie aucune statistique de parties, et
ses compteurs affichent quelque 4 200 joueurs [6]. L'idée est ancienne, et Chess960, présenté en 1996 et
reconnu par la FIDE, la sert déjà [3][4].

### Combien de plateaux différents existe-t-il ?

Selon l'auteur, 751 446 302 681 050 365 478 027 416 872 495 407 843 190 771 097 924 033 841 grilles de
10 × 10 sans bordure, soit environ 7,5 × 10⁵⁶ [2]. Un recomptage indépendant retrouve ce nombre exact.
Il compte des grilles, rotations et symétries comprises, pas des parties ; ce que le générateur du jeu
en produit réellement n'est pas précisé [1][2].

### Quelle différence avec Chess960 ?

Chess960 mélange la première rangée parmi 960 positions, roi entre les deux tours et fous sur des cases
de couleurs opposées, puis on joue comme aux échecs [3][4]. Traversal ne mélange pas les pièces, il change
le sol : chaque case a une hauteur, et chaque pas coûte du Mouvement selon la différence de hauteur [1].
La variation touche le calcul lui-même.

### Comment gagne-t-on à Traversal ?

Au score : chaque pièce sortie par le bord opposé rapporte sa Force, et la partie s'arrête dès que deux
pièces ont franchi l'arrivée, de n'importe quel camp. Exception : si une Sentinelle sort la première, son
joueur gagne aussitôt. À 200 coups, le meilleur score l'emporte, ou à défaut la pièce la plus proche de la
sortie [1].
