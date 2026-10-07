# Comment faire

Ce fichier suppose que vous n'avez jamais lancé de site en local. Il n'y a rien à savoir d'autre
que ce qui suit.

---

## 1. Une seule installation, une seule fois

Le site a besoin d'un logiciel : **Node.js**. C'est le moteur qui assemble les pages ; il ne
s'affiche nulle part et ne tourne que quand vous le demandez.

Si vous ne l'avez pas, le lanceur vous le dira et ouvrira la page de téléchargement. Prenez la
version marquée **LTS**, installez-la en laissant toutes les cases par défaut, et n'y revenez plus.

## 2. Lancer le site

**Double-cliquez sur `lancer.cmd`**, à la racine de ce dossier.

Une fenêtre noire s'ouvre. La première fois, elle télécharge les composants du site — une à deux
minutes, une seule fois. Ensuite, elle affiche quelques lignes et votre navigateur s'ouvre tout seul
sur le site.

L'adresse est `http://localhost:4321`. Ce site n'existe que sur votre ordinateur : personne d'autre
ne peut le voir, il n'est pas sur Internet.

## 3. Travailler

Laissez la fenêtre noire ouverte. Modifiez un fichier, enregistrez : **la page se rafraîchit toute
seule** dans le navigateur. C'est là tout l'intérêt.

## 4. Arrêter

Fermez la fenêtre noire. Le site s'éteint. Rien ne reste en marche.

## 5. Voir le site tel qu'il sera en ligne

Le mode de travail et le site publié ne sont pas tout à fait identiques : le premier ajoute des
outils de confort — rechargement automatique, notamment — que le second n'a pas.

Pour voir exactement ce que verront les visiteurs, ouvrez une fenêtre de commande dans ce dossier et
tapez `npm run preview`. Cela sert la version construite, à l'adresse indiquée. C'est là, et là
seulement, que la politique de sécurité du site est réellement en place.

---

# Se servir du portfolio

Tout se fait avec des fichiers texte. Aucune interface, aucun mot de passe, aucune base de données :
vous déposez un fichier, le site s'ajuste. L'accueil, les index, les filtres, le flux et le plan du
site se recalculent seuls — vous ne touchez jamais à une page.

Le dossier `_gabarits\` contient trois fichiers prêts à copier, abondamment commentés. C'est par là
qu'il faut passer : on copie un gabarit, on le renomme, on le remplit.

---

## Les mémentos

Les mémentos sont rédigés dans HUMANITAS ET SCIENTIA (`91_REVISION\fiches\`), jamais ici. Le site
n'en garde qu'une **notice** par mémento, dans `src\data\mementos\`, et une copie du PDF et de la
source HTML, dans `public\doc\mementos\`.

### Mettre à jour un mémento existant

1. Corriger la source HTML dans HUMANITAS ET SCIENTIA, relever la version dans les pieds de page
   (`v1.1` → `v1.2`) et régénérer le PDF (procédure dans le `README.md` des fiches).
2. Dans la notice du site (`src\data\mementos\<identifiant>.md`), porter la même `version` et la
   `date` du jour.
3. Double-cliquer sur **`importer-mementos.cmd`**. Il copie le PDF et la source, refait la vignette,
   et **refuse** d'importer si la version ou le nombre de pages de la notice ne correspondent pas au
   fichier : c'est voulu, une notice qui annonce une autre version que le PDF servi ruine la
   confiance dans tout le reste.

### Ajouter un nouveau mémento

1. Dans HUMANITAS ET SCIENTIA, le mémento porte déjà en couverture la mention « Auteur : D.
   Dambreville · didierdambreville.github.io · licence CC BY 4.0 » et l'adresse du site en pied de
   page (voir le `README.md` des fiches).
2. Copier une notice existante de `src\data\mementos\` sous le nouvel identifiant (minuscules,
   tirets, sans accent : `git-github.md`), et la remplir. Champs à surveiller :

   | Champ | Ce qu'on y met |
   |---|---|
   | `source` | le nom du fichier dans `91_REVISION\fiches\`, **sans** extension |
   | `rubrique` | l'identifiant de la rubrique, tel qu'il figure dans `src\lib\classement-mementos.ts` (`informatique`, `langues`, `jeux`…) |
   | `ordre` | le rang dans la rubrique (1, 2, 3…) |
   | `sommaire` | un intitulé **par page** — le site refuse de se construire sinon |

3. Double-cliquer sur `importer-mementos.cmd`.

La famille et la rubrique apparaissent d'elles-mêmes sur le site dès qu'elles comptent un mémento :
les sujets encore sans mémento restent listés dans `classement-mementos.ts`, mais ne s'affichent pas.

## Les affiches

Une affiche est une page A3 en couleur tirée d'un ou plusieurs mémentos. Elle se rédige, elle aussi,
dans HUMANITAS ET SCIENTIA (`91_REVISION\fiches\<domaine>-affiche-<sujet>.html` et `.pdf`). Le site
en garde une **notice** dans `src\data\affiches\` et une copie dans `public\doc\affiches\` ; elles
s'affichent dans la section « Affiches », sous les familles de la page Mémentos.

Ajouter ou mettre à jour une affiche : même marche que pour un mémento. Copier une notice existante
de `src\data\affiches\` (ou y porter la nouvelle `version` et la `date`), puis double-cliquer sur
`importer-mementos.cmd`. Champs propres aux affiches :

| Champ | Ce qu'on y met |
|---|---|
| `mementos` | les identifiants des mémentos du site dont l'affiche est tirée — le site refuse de se construire si l'un d'eux n'existe pas |
| `blocs` | l'intitulé de chaque bloc, dans l'ordre de lecture |
| `ordre` | le rang dans la section |

L'importeur refuse une affiche dont le PDF ne compte pas exactement une page, ou dont le pied ne porte
pas la version de la notice (celle qui suit « · v », non celle du mémento cité).

### Une affiche venue d'ailleurs

Une affiche qui n'est pas rédigée dans HUMANITAS ET SCIENTIA (exemple : `free-wifi`) se dépose à la
main : le PDF dans `public\doc\affiches\affiche-<identifiant>.pdf`, la vignette dans
`src\assets\affiches\<identifiant>.webp` (1 123 × 1 588 pixels). Sa notice n'a pas de champ `source` :
l'importeur la laisse de côté, et sa page ne propose pas de source HTML. Champs facultatifs :

| Champ | Ce qu'on y met |
|---|---|
| `format` | `"A3"` (par défaut) ou `"A4"` |
| `couleur` | `true` (par défaut) ou `false` pour une affiche en noir et blanc |
| `langue` | `"fr"` (par défaut) ou `"en"` |
| `renvois` | des mémentos à proposer « pour aller plus loin », sans que l'affiche en soit tirée |
| `premiereEdition` | à omettre si on ne la connaît pas : la ligne disparaît de la page |

`mementos` et `blocs` peuvent alors rester absents.

---

## Les notes

Une note n'est pas un article : c'est une liste, un relevé, une bibliographie — l'essentiel d'un
sujet, tenu à jour. Chacune est un fichier Markdown de `src\data\notes\` ; le nom du fichier fait
l'adresse (`architectes-et-batisseurs.md` → `/notes/architectes-et-batisseurs/`).

Ajouter une note : copier une note existante, la renommer, remplacer l'en-tête et le texte.

| Champ | Ce qu'on y met |
|---|---|
| `titre` | le titre, 90 signes au plus |
| `resume` | une phrase : ce que la note rassemble — elle sert de chapeau et de description |
| `identifiant` | le nom du fichier, sans `.md` — le site refuse de se construire s'ils diffèrent |
| `categorie` | le dossier du panneau : `methode`, `documentation`, `informatique`, `maison`, `sante`, `patrimoine`, `voyages` ou `loisirs` |
| `motsCles` | de un à cinq mots, en minuscules sauf nom propre, ex. `["web", "archives"]` |
| `date` | la date de la dernière mise à jour, `AAAA-MM-JJ` |

Sous l'en-tête, le texte commence directement : ni titre ni chapeau, la page les tire de `titre` et
`resume`. Les intertitres `##` deviennent les sections affichées sous la note dans le panneau (à
partir de trois). Un tableau Markdown se lit en colonnes sur ordinateur et en fiches sur téléphone.

Un nouveau dossier : l'ajouter à la liste de `src\lib\classement-notes.ts`, rien d'autre. Un même
mot-clé doit toujours s'écrire de la même façon : « Patrimoine » et « patrimoine » dans deux notes
font échouer la construction, qui vous dit lequel corriger.

---

## Ajouter une réalisation

**1. Choisir un identifiant.** En minuscules, avec des tirets, sans accent :
`lecteur-de-releves`, et non « Lecteur de relevés ». Cet identifiant sert de nom de fichier, de nom
de dossier d'images et d'adresse de la page. **Il ne changera jamais** — le titre affiché, lui, peut
changer autant que vous voulez.

**2. Déposer les images** dans `src\assets\realisations\<identifiant>\` : `couverture.png` pour
la principale, puis `01.png`, `02.png`. Exportez-les à 2 400 pixels de large au maximum ; le site
fabrique tout seul les versions plus petites pour chaque taille d'écran.

**3. Copier un gabarit** depuis `_gabarits\` vers `src\data\realisations\`, et le renommer
`<identifiant>.md`. Prenez `fiche-courte.md` : c'est la forme normale. La forme longue se réserve
aux pièces qui la méritent — une sur quatre au plus, sans quoi vous n'en écrirez plus aucune.

**4. Remplir.** Chaque champ est expliqué dans le gabarit. Trois seulement demandent réflexion :

| Champ | Ce qu'on y met |
|---|---|
| `resume` | Ce que la pièce **remplace ou épargne**, jamais ce qu'elle est. « Ce qui remplace deux heures de saisie par relevé » plutôt que « Outil de lecture de relevés ». Le lecteur ne mesure pas ce qu'une chose est, il mesure ce qu'elle lui évite. |
| `discipline` | Une case sur quatre — méthode, outil, publication, image — et le critère qui tranche est : *qu'est-ce que le lecteur en fait ?* S'il hésite, c'est le classement qui est mauvais, pas la pièce. |
| `couvertureAlt` | Ce que l'on **voit sur l'image**, pas ce qu'est la pièce. Ce champ est obligatoire : sans lui, le site refuse de se construire. C'est délibéré. |

**5. Publier.** Tant que `brouillon: true`, la pièce n'apparaît nulle part — ni sur l'accueil, ni
dans les index, ni dans le flux. Vous pouvez la rédiger en trois fois. Passez à `false` quand elle
est prête.

`miseEnAvant: true` la fait remonter sur l'accueil. Si aucune pièce n'est mise en avant, l'accueil
affiche simplement les six plus récentes.

---

## Écrire un article

Les articles sont la troisième rubrique du site, à côté des réalisations et des documents. Ce sont
des textes courts — 800 à 1 200 mots, quatre à six minutes — organisés autour d'une thèse énoncée en
une phrase. Un sujet qui appelle un guide de référence prend la forme d'un **article pilier** :
2 500 à 3 500 mots, avec tableaux, liste de contrôle et questions fréquentes.

### Deux temps, jamais un seul

**D'abord la fiche de structuration.** Copiez `_gabarits\fiche-de-structuration.md` dans
`_brouillons\` et remplissez-la dans l'ordre. Elle ne se publie pas : elle sert à cristalliser
l'idée avant d'écrire. Sa règle est sévère et c'est ce qui la rend utile — on ne passe à une section
que lorsque la précédente tient en une phrase.

Le contrôle qui la clôt vaut relecture : la thèse tient-elle en une phrase **dite à voix haute** ?
La tension est-elle plus forte que le constat ? Au moins une preuve vient-elle du terrain réel ?
Chaque chiffre a-t-il sa source ? Si l'une des réponses est non, l'article n'est pas prêt, et
l'écrire quand même coûtera plus cher que d'attendre.

**Ensuite seulement l'article.** Copiez `_gabarits\article.md`, toujours dans `_brouillons\`. La
fiche indique section par section où chacune de ses réponses atterrit :

| Dans la fiche | Dans l'article |
|---|---|
| §1 la thèse | le champ `these` — chapeau, description sociale, résumé du flux |
| §1 pourquoi maintenant | le premier mouvement |
| §2 l'arc narratif, six étapes | les six mouvements du corps, dans cet ordre |
| §3 fil rouge éditorial | le champ `prolonge` |
| §3 écho, actualité, couche profonde | la matière des mouvements 1, 4 et 5 |
| §4 données et autorités | le champ `sources`, affiché en fin d'article |
| §4 analogie maîtresse | l'ouverture — avant toute définition |
| §4 contre-exemple préventif | le mouvement 3 ou 5 |
| §5 la voix | nulle part : c'est une consigne d'écriture |
| §7 le terrain | nulle part : reste dans la fiche |

Quand le texte est prêt, déplacez-le dans `src\data\articles\` et passez `brouillon` à `false`.

La fiche porte aussi des champs marqués ★, pour le référencement : l'intention de recherche, la
requête cible et sa longue traîne, les liens vers les autres pages du site, les longueurs du titre
et de la thèse. Ils se remplissent pour les deux formats.

### Les commandes `/article` et `/article-pilier`

Dans une session Claude ouverte sur `D_Dambreville`, tapez `/article` suivi d'un lien ou du chemin
d'un fichier — par exemple un texte déposé dans `_SAS\` — ou `/article-pilier` pour un guide de
référence. La commande lit la source, vérifie chaque fait chez son émetteur, remplit la fiche,
écrit l'article, le contrôle et l'ouvre dans l'aperçu. Elle ne publie rien : la mise en ligne reste
`/publier`.

### Les six mouvements

Constat, tension, mécanisme, preuves, enjeu, proposition. L'ordre ne se discute pas — c'est lui qui
tient le lecteur. Les intertitres du gabarit, en revanche, sont des repères : **renommez-les selon le
sujet**, sinon six articles porteront les mêmes titres et se ressembleront tous.

Deux erreurs à surveiller. Une tension plus faible que le constat : le texte n'a pas de moteur et
s'affaisse au troisième paragraphe. Et une proposition multiple : un article qui demande trois
choses n'en fait adopter aucune.

### Les rubriques

Cinq, pas huit : `methode`, `sources`, `heritage`, `sciences`, `livres`. Où tombent les sujets
annoncés — théologie, archéologie, arts et culture vont dans `heritage` ; géopolitique, techniques
et économie dans `sciences`. Pour en ajouter une, il suffit de deux lignes dans
`src\content.config.ts`, mais attendez d'avoir vingt articles : une classification ne se corrige
utilement qu'une fois qu'on sait ce qu'elle range.

### Les mots-clés

Cinq au plus par article (`motsCles`), en minuscules sauf nom propre. Avec la rubrique, ils
s'affichent sous la carte de l'article dans `/articles/`, dans le panneau de droite à la lecture
(ceux de l'article en évidence) et dans l'index des mots-clés, en bas de `/articles/`. Un même mot
s'écrit toujours de la même façon : deux graphies (« Fablab », « fablab ») font échouer la
construction, qui dit laquelle corriger.

### Une précaution sur la reprise de vos autres publications

Vous publiez déjà ailleurs. Un texte recopié à l'identique sur deux adresses se fait du tort aux
deux : les moteurs en choisissent une et déclassent l'autre, et le lecteur qui tombe sur la seconde
a le sentiment d'un doublon.

La bonne forme n'est donc pas la reprise mais **le prolongement**. Un article d'ici part d'une pièce
publiée ailleurs, en tire un point précis, le pousse plus loin — et le champ `prolonge` porte le
lien vers l'original. Le lecteur y gagne quelque chose que la pièce d'origine ne donnait pas, et
l'original y gagne un lien entrant.

### Les sources ne sont pas des ornements

Le champ `sources` s'affiche en fin d'article, numéroté. Tout chiffre avancé dans le corps doit s'y
retrouver : un chiffre sans source se retourne contre vous au premier lecteur attentif, et il
emporte avec lui le crédit de tout le reste.

C'est aussi ce qui rend un article citable — et un article citable est ce qui rapporte le plus de
liens entrants, donc de lecteurs.

---

## Ajouter un document (un PDF)

Un PDF ne se publie jamais par un lien nu. Il reçoit une **notice** : une page qui porte le titre,
le résumé, le sommaire, la version et la licence. C'est cette page qui est indexée, citée et
partagée ; le fichier n'est que la pièce jointe.

1. Déposez le PDF dans `public\doc\`.
2. Copiez `_gabarits\notice-document.md` vers `src\data\documents\<identifiant>.md`.
3. Remplissez, et passez `brouillon` à `false`.

Pour rattacher ce document à une réalisation, ajoutez son identifiant dans le champ `documents` de
la fiche — l'identifiant, pas le chemin du fichier. Ainsi la version n'est écrite qu'à un seul
endroit, et ne peut pas diverger.

---

## Ajouter une pièce interactive

Une démonstration cliquable est le seul endroit du site où du code s'exécute. Elle vit sur sa propre
adresse, `/demos/<identifiant>/`, et la fiche l'affiche dans un cadre cloisonné : la démonstration
ne peut ni lire ni modifier la page qui l'accueille.

Le fichier `_gabarits\demo-lecteur-de-releves.astro` est le gabarit à recopier dans
`src\pages\demos\<identifiant>.astro` — il est commenté
ligne à ligne. Il montre le mécanisme complet, y compris la façon dont son script est autorisé.

**Une règle sans exception** : toute pièce interactive porte une **capture enregistrée** — champ
`apercu`, fichier déposé dans `public\apercus\`. Une démonstration finit toujours par cesser de
fonctionner ; la capture, elle, reste. C'est ce qui fait que la fiche lui survit.

---

## Retirer, corriger, renommer

**Masquer une pièce** : `brouillon: true`. Elle disparaît immédiatement de partout.

**Corriger** : modifiez le fichier, enregistrez, la page se rafraîchit. Rien d'autre.

**Renommer** : ne le faites pas si la pièce a déjà été publiée en ligne. Le nom du fichier est
l'adresse de la page ; la changer casse tous les liens extérieurs qui pointaient dessus, et une
adresse morte ne se rattrape pas. Le titre affiché, en revanche, se change librement — c'est
précisément pour cela que les deux sont séparés.

---

## Le rythme, plutôt que l'élan

Le site n'a de valeur que par ce qu'il expose. Trois repères, tirés du document `notes\09-regle-de-tenue.md` :

- **Deux à trois heures par semaine**, pas davantage — dont une demi-heure de relecture de ce qui
  est déjà publié, pour attraper les liens morts avant qu'un lecteur ne les trouve.
- **Une pièce par quinzaine au plus.** Le plafond n'est pas de la modestie : il empêche de vider le
  stock en trois semaines puis de laisser le site immobile six mois.
- **Zéro pièce cette semaine est un résultat acceptable.** Un corpus qui s'étoffe lentement dit
  quelque chose de juste ; un corpus qui s'arrête net dit quelque chose de faux.

---

## Les cinq choses à ne pas faire

Ce site tient une promesse écrite en pied de page : aucun cookie, aucune ressource extérieure. Cette
promesse n'est pas une déclaration, c'est une règle que le navigateur fait respecter. D'où cinq
gestes qui la casseraient — et, chaque fois, ce qu'il faut faire à la place.

### 1. Ne collez pas de mise en forme dans une page

Quand on copie du HTML trouvé ailleurs, il contient souvent des couleurs ou des tailles écrites
directement dans la balise, sous la forme `style="..."`. Le navigateur les refusera et le bloc
s'affichera nu.

**À la place** : toute la mise en forme s'écrit dans `src\styles\global.css`, un seul fichier.

### 2. N'ajoutez rien qui vienne d'un autre site

Une police Google, une bannière, un compteur de visites, un bouton de partage, une vidéo intégrée :
tout cela est bloqué. Ce n'est pas un défaut du site, c'est exactement ce qu'il promet.

**À la place** : si vous voulez une police particulière, on télécharge le fichier et on le sert
depuis le site lui-même. Pour une vidéo, on l'héberge dans `public\apercus\`.

### 3. Ne touchez pas à la ligne `inlineStylesheets: 'never'`

Elle se trouve dans `astro.config.mjs`. C'est le seul réglage piégeux du fichier : sans elle, le
site s'affiche **entièrement sans mise en forme**, et rien ne vous prévient. Vous chercheriez
longtemps.

### 4. Ne renommez pas une pièce déjà publiée

Le nom du fichier devient l'adresse de la page. La renommer casse tous les liens extérieurs qui
pointaient dessus, et une adresse morte ne se rattrape pas.

**À la place** : si le renommage est indispensable, ajoutez une ligne de redirection dans
`public\_redirects`.

### 5. Ne mettez pas les images dans `public\`

Les images placées dans `src\assets\` sont automatiquement redimensionnées et allégées pour chaque
taille d'écran. Celles placées dans `public\` sont servies telles quelles, en pleine taille, et
alourdissent la page.

**Exception** : les PDF et les captures vidéo vont bien dans `public\doc\` et `public\apercus\` —
eux n'ont rien à optimiser.

---

## Le site sur Internet

Le site est en ligne depuis le 30 septembre 2026 à l'adresse **https://didierdambreville.github.io**,
hébergé par GitHub Pages (dépôt public `didierdambreville/didierdambreville.github.io`).

Chaque modification envoyée sur la branche `main` reconstruit et republie le site en moins d'une
minute (`.github/workflows/deploy.yml`). Les envois se font depuis une session Claude : c'est là, et
non dans une invite de commandes ordinaire du poste, que vit la connexion à GitHub.

**Pour publier** : dans une session Claude ouverte sur le dossier `D_Dambreville` (ou l'un de ses
sous-dossiers), tapez `/publier`. Claude reconstruit le site, passe les contrôles automatiques
(`D_Dambreville\.claude\skills\publier\verifier-avant-envoi.py`), enregistre et envoie les
modifications, attend la fin de la republication, puis vérifie les pages en ligne. Taper la commande
vaut accord pour cette mise en ligne ; si un contrôle échoue, rien n'est envoyé.

---

## Ce que GitHub Pages exige, et ce qu'il interdit

L'hébergement est gratuit et sans contrepartie publicitaire, mais il est assorti de conditions. Les
voici en entier, celles qui vous concernent d'abord.

### Le dépôt doit être public

C'est la condition qui a le plus de conséquences. Sur un compte gratuit, seuls les dépôts publics
peuvent publier un site. Publier un site privé demande un compte GitHub Pro, payant.

Un dépôt public signifie que **tout son contenu est lisible par n'importe qui** — pas seulement les
pages publiées : les sources, l'historique des modifications, et les fiches marquées
`brouillon: true`. Une pièce en brouillon n'apparaît pas sur le site, mais son fichier se lit dans
le dépôt.

D'où le dossier `_brouillons\`, exclu du dépôt : rédigez-y, et ne déplacez le fichier dans
`src\data\realisations\` qu'une fois la pièce prête.

### Un seul site à cette adresse

Un compte ne peut avoir qu'un seul site à l'adresse `<compte>.github.io`. Les autres dépôts publient
sous une adresse plus longue, `<compte>.github.io/<nom-du-depot>/`, et ne gênent en rien celui-ci.

### Les limites

| Limite | Valeur | En pratique |
|---|---|---|
| Taille du dépôt | 1 Go recommandé | Un portfolio de texte et d'images n'en atteindra jamais le dixième |
| Taille du site publié | 1 Go maximum | Idem |
| Bande passante | 100 Go par mois, limite souple | Il faudrait des dizaines de milliers de visites mensuelles |
| Constructions | 10 par heure, limite souple | **Ne s'applique pas ici** : la limite est levée pour les sites construits par un flux GitHub Actions, ce qui est notre cas |

Ces limites sont dites souples : les dépasser n'entraîne pas de coupure automatique, mais GitHub
peut cesser de servir le site ou vous écrire pour proposer une autre solution.

La seule façon réaliste de s'en approcher serait d'y déposer de la vidéo. Les captures enregistrées
des démonstrateurs doivent donc rester brèves et légères ; au-delà de quelques mégaoctets, mieux
vaut les héberger ailleurs et n'en mettre que le lien.

### Ce qui est interdit

GitHub Pages ne peut pas servir d'hébergement gratuit à une activité commerciale : pas de boutique
en ligne, pas de service vendu par abonnement, pas de transaction. Les conditions générales
proscrivent en outre les promesses d'enrichissement rapide, les contenus obscènes et les contenus
violents ou menaçants.

**Ce que cela ne vous interdit pas** : exposer un travail professionnel, indiquer une activité, se
faire connaître, être contacté. La distinction porte sur la transaction, non sur le fait d'être
professionnel. Un portfolio qui montre et qui donne une adresse de contact est parfaitement dans les
clous ; le même site avec un panier et un paiement ne le serait plus.

Sont également proscrites les transactions sensibles — mots de passe, numéros de carte. Le site n'a
aucun formulaire, et sa politique de sécurité en interdit l'envoi de toute façon.

### Et plus tard

Le jour où vous prendriez un vrai nom de domaine, il se rattache à ce même dépôt sans rien
reconstruire, et reste gratuit du côté de GitHub : seul le domaine se paie. Le certificat HTTPS est
fourni et renouvelé automatiquement dans les deux cas.

---

## Une chose que cet hébergement ne sait pas faire

GitHub Pages ne permet pas de régler les en-têtes techniques d'un site. La promesse de sobriété
tient quand même — elle est simplement inscrite dans chaque page plutôt que dans la réponse du
serveur, et reste tout aussi vérifiable : affichez la source d'une page, elle y figure dès les
premières lignes.

Une seule protection est perdue : rien n'empêche un site tiers d'afficher vos pages dans un cadre,
chez lui. C'est sans gravité pour un portfolio. Le jour où vous prendriez un vrai domaine et un
hébergeur qui accepte les en-têtes, le fichier `entetes-si-hebergeur-avec-entetes.txt` contient tout
ce qu'il faudrait y reposer.

---

## Si quelque chose ne marche pas

La fenêtre noire affiche toujours la cause en clair, avec le nom du fichier. Copiez-la telle quelle
et demandez-moi : c'est plus rapide que de chercher.

**Un cas particulier, qui déroute.** Si vous supprimez une fiche ou un article et qu'il continue de
s'afficher, ce n'est pas une erreur de votre part : le site garde en mémoire ce qu'il a déjà lu.
Supprimez le dossier `node_modules\.astro` et relancez. Le site en ligne, lui, n'est jamais concerné
— il se reconstruit toujours de zéro.
