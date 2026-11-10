---
titre: "Licences open source : ce qu'elles permettent, ce qu'elles exigent"
these: "Les licences open source n'abandonnent pas un travail : elles fixent ce que l'on donne et ce que l'on exige en retour. Sans licence, un dépôt public reste fermé ; c'est en publiant qu'on choisit."
identifiant: "licences-open-source"
rubriques: ["informatique", "fabrication", "entreprendre"]
date: 2026-11-10
sources:
  - libelle: "Open Source Initiative, « The Open Source Definition », version 1.9"
    url: "https://opensource.org/osd"
    note: "Dix critères : redistribution libre, sans redevance ; code source dans la forme préférée pour le modifier ; œuvres dérivées ; intégrité du code de l'auteur ; aucune discrimination de personnes ni de domaines ; licence attachée au programme, non à un produit, sans restriction sur les autres logiciels, neutre technologiquement. Texte modifié le 22 mars 2007."
  - libelle: "GitHub Docs, « Licensing a repository »"
    url: "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository"
    note: "Sans licence, le droit d'auteur par défaut s'applique : nul ne peut reproduire, distribuer ni créer d'œuvres dérivées ; les conditions de GitHub permettent seulement de voir le dépôt et d'en faire une copie (fork) ; fichier LICENSE à la racine."
  - libelle: "Creative Commons, « Frequently Asked Questions »"
    url: "https://creativecommons.org/faq/"
    note: "Licences CC déconseillées pour le logiciel ; logiciel et matériel sont les seules catégories pour lesquelles CC ne recommande pas ses licences ; usage admis pour la documentation ; CC0 compatible avec la GPL et acceptable pour le logiciel."
  - libelle: "Apache Software Foundation, « Apache License, Version 2.0 », janvier 2004"
    url: "https://www.apache.org/licenses/LICENSE-2.0"
    note: "Section 3 : licence de brevet de chaque contributeur, qui prend fin pour qui engage une action en contrefaçon visant l'œuvre ; section 4 : copie de la licence, mention des fichiers modifiés, conservation des avis, fichier NOTICE."
  - libelle: "Free Software Foundation, « Frequently Asked Questions about the GNU Licenses »"
    url: "https://www.gnu.org/licenses/gpl-faq.html"
    note: "La GPL n'oblige pas à publier une version modifiée ; si on la diffuse, la source suit ; la vente est permise ; une version modifiée exploitée sur un site sans distribution n'oblige pas sous GPL, mais oblige sous AGPL à offrir la source aux utilisateurs du réseau."
  - libelle: "Free Software Foundation, « GNU General Public License », version 3, 29 juin 2007"
    url: "https://www.gnu.org/licenses/gpl-3.0.html"
    note: "Section 6 : le code objet ne se transmet qu'avec la source correspondante ; dans un produit physique, la source sur un support durable ou une offre écrite valable au moins trois ans."
  - libelle: "Free Software Foundation, « Various Licenses and Comments about Them »"
    url: "https://www.gnu.org/licenses/license-list.html"
    note: "Compatibilités avec la GPL : Expat (MIT) et BSD modifiée oui ; Apache 2.0 avec la v3 seulement ; MPL 2.0 par sa section 3.3 ; CC BY-SA 4.0 vers la GPL v3, à sens unique ; CC0 compatible mais déconseillée pour le logiciel, faute de licence de brevet ; LGPL, copyleft non fort."
  - libelle: "CERN, « CERN Open Hardware Licence », page officielle"
    url: "https://cern-ohl.web.cern.ch/"
    note: "Version 2 en vigueur ; trois variantes : fortement réciproque (S), faiblement réciproque (W), permissive (P) ; but : la liberté d'utiliser, d'étudier, de modifier, de partager et de distribuer des conceptions de matériel."
  - libelle: "CERN, « CERN Open Hardware Licence Version 2 - Strongly Reciprocal », texte, 2020"
    url: "https://gitlab.com/ohwr/project/cernohl/-/wikis/uploads/819d71bea3458f71fba6cf4fb0f2de6b/cern_ohl_s_v2.txt"
    note: "Source et Complete Source (forme préférée pour modifier) ; qui transmet un produit fournit la Complete Source ou indique où la trouver ; licence de brevet et résiliation en cas d'action en contrefaçon."
  - libelle: "Open Source Hardware Association, « Open Source Hardware Definition 1.0 »"
    url: "https://www.oshwa.org/definition/"
    note: "Conception publique que chacun peut étudier, modifier, distribuer, fabriquer et vendre ; fichiers dans le format préféré pour les modifier ; fichiers obscurcis interdits ; logiciel nécessaire documenté ou sous licence approuvée par l'OSI."
  - libelle: "The Linux Kernel documentation, « Linux kernel licensing rules »"
    url: "https://docs.kernel.org/process/license-rules.html"
    note: "Noyau sous GPL-2.0 seule, avec l'exception Linux-syscall-note ; identifiant SPDX exigé dans chaque fichier source, en commentaire à la première ligne possible."
  - libelle: "data.gouv.fr, « Licences de réutilisation »"
    url: "https://www.data.gouv.fr/pages/legal/licences"
    note: "Licences de codes sources admises pour l'administration : cinq permissives (Apache 2.0, BSD 2 et 3 clauses, CeCILL-B, MIT), huit avec obligation de réciprocité (CeCILL 2.1, CeCILL-C, GPL v3, LGPL v3, AGPL v3, MPL 2.0, EPL 2.0, EUPL 1.2)."
  - libelle: "Légifrance, article D323-2-1 du code des relations entre le public et l'administration, en vigueur depuis le 4 décembre 2021"
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000034504991"
    note: "Logiciels : licences « permissives » (BSD, Apache, CeCILL-B, MIT) et « avec obligation de réciprocité » (Mozilla, GNU GPL, CeCILL, EUPL, Eclipse)."
motsCles: ["licences open source", "logiciel libre", "open hardware", "droit d'auteur", "GitHub"]
licence: "CC BY 4.0"
miseEnAvant: false
brouillon: false
---

Une porte ouverte n'est pas une invitation. Depuis la rue, on voit le salon, les meubles, la bibliothèque ; on
peut même les décrire à un ami. Mais personne n'entre, ne s'assied ni n'emporte un livre sans y avoir été prié.
L'invitation, c'est le mot sur la porte — « entrez », « servez-vous », « refermez derrière vous ».

Un dépôt de code ou de plans publié en ligne est une porte ouverte. Les licences open source sont le mot sur la
porte : l'écrit par lequel l'auteur autorise chacun à utiliser, étudier, modifier et redistribuer son travail, à des
conditions que l'Open Source Initiative résume en dix critères [1]. Sans licence, le droit d'auteur réserve tout,
même sur un dépôt public [2]. Avec une licence, l'auteur choisit ce qu'il donne et ce qu'il exige en retour : une
simple mention, le partage des améliorations, la paix sur les brevets. Ce guide dit ce que chaque famille de
licences permet, ce qu'elle exige, comment les combiner, et pourquoi le choix se fait au moment de publier.

## Licences open source : ce que la définition garantit

Une licence n'est pas « open source » parce qu'elle le déclare. L'Open Source Initiative (OSI) tient une définition
en dix critères, que toute licence doit remplir pour mériter le nom [1]. Regroupés, ils garantissent cinq choses à
celui qui reçoit le logiciel.

| Ce qui est garanti | Ce que dit la définition |
|---|---|
| Redistribuer, et même vendre | La licence ne peut empêcher personne de vendre ou de donner le logiciel, ni exiger de redevance [1] |
| Avoir la source, sous une forme utile | Le code source est la forme préférée pour modifier le programme ; l'obscurcissement délibéré est exclu [1] |
| Modifier et diffuser ses modifications | Les œuvres dérivées sont permises, et peuvent être distribuées aux mêmes conditions [1] |
| N'être exclu de rien | Aucune discrimination de personnes, de groupes ni de domaines d'activité, recherche ou commerce [1] |
| Garder ces droits partout | Les droits suivent le programme, sans licence supplémentaire, quel que soit le produit qui l'embarque [1] |

La première ligne surprend souvent : l'open source n'interdit pas de vendre. Il interdit d'empêcher les autres de
redistribuer. C'est une règle sur la circulation, non sur le prix.

## Public n'est pas libre : sans licence, rien n'est permis

La documentation de GitHub le dit sans détour : sans licence, le droit d'auteur par défaut s'applique, et personne
ne peut reproduire, distribuer ni créer d'œuvres dérivées du travail publié [2]. Les conditions d'utilisation de la
plateforme accordent seulement aux autres utilisateurs le droit de voir le dépôt et d'en faire une copie — un
« fork » — sur GitHub même [2]. Copier les fichiers pour fabriquer, modifier ou vendre reste interdit.

Ce site en a rencontré deux cas. Le [cyberdeck modulaire, un dépôt public très copié mais sans licence](/articles/cyberdeck-modulaire/),
invite à la modification sans l'autoriser en droit. Le combiné du [téléphone anti-distraction, dont les fichiers se
vendent avec la redistribution interdite](/articles/telephone-anti-distraction/), est disponible sans être libre.
Dans les deux cas, ce qui manque n'est pas la bonne volonté de l'auteur : c'est l'écrit.

La confusion inverse existe aussi. Creative Commons, dont les licences servent à partager textes, images et musique,
déconseille elle-même de les appliquer au logiciel ; le logiciel et le matériel sont les deux seules catégories
d'œuvres pour lesquelles elle ne recommande pas ses licences [3]. Une bonne intention, mal outillée, ne protège ni
l'auteur ni ceux qui réutilisent son travail.

## Trois familles, trois contreparties

Chaque licence open source échange des droits contre une contrepartie. Ce qui distingue les familles, c'est ce que
l'auteur demande en retour.

| Famille | Exemples | Ce que l'utilisateur peut faire | Ce qu'il doit rendre |
|---|---|---|---|
| Permissive | MIT, BSD, Apache 2.0 | Tout, y compris intégrer le code dans un produit fermé | Conserver les mentions et la licence ; pour Apache, signaler les fichiers modifiés [4] |
| Réciproque (copyleft) | GPL v3, AGPL v3 | Tout, y compris vendre | Transmettre la source de ce qu'il distribue, sous la même licence ; pour l'AGPL, aussi aux utilisateurs du réseau [5] |
| Réciprocité limitée | LGPL v3, MPL 2.0 | Combiner avec d'autres codes, y compris des modules non libres pour la LGPL [7] | Garder sous la licence d'origine la bibliothèque ou les fichiers concernés [7] |
| Matériel | CERN-OHL-P, -W, -S | Fabriquer, modifier, vendre le matériel [10] | Selon la variante, une réciprocité nulle, faible ou forte ; pour la variante S, la source complète de conception [8][9] |

### Les licences permissives : une mention suffit

La licence MIT et la licence BSD modifiée sont qualifiées de « laxistes » par la Free Software Foundation : elles
n'imposent pas que les versions modifiées restent libres [7]. La licence Apache 2.0 ajoute deux choses. Celui qui
redistribue doit fournir une copie de la licence, signaler les fichiers modifiés et reprendre le fichier NOTICE s'il
existe [4]. Surtout, chaque contributeur accorde une licence sur ses brevets ; elle prend fin pour quiconque engage
une action en contrefaçon de brevet visant l'œuvre [4]. La paix sur les brevets fait partie du contrat.

### Les licences réciproques : la source suit le programme

La GPL, licence du projet GNU, est la plus connue des licences réciproques. Sa règle est souvent mal lue. Elle
n'oblige pas à publier une version modifiée : on peut l'utiliser chez soi, dans son entreprise, sans rien rendre ;
mais dès qu'on la diffuse, la source doit suivre, sous GPL [5]. Elle permet de vendre des copies [5]. Pour un
fabricant, la section 6 de la version 3 compte double : un objet qui embarque un logiciel sous GPL v3 doit être
accompagné de la source, sur un support durable, ou d'une offre écrite valable au moins trois ans [6].

L'AGPL ferme une porte que la GPL laisse ouverte. Une entreprise qui fait tourner une version modifiée d'un
programme sous GPL sur son site ne le distribue pas, et n'a donc rien à publier ; sous AGPL, elle doit offrir la
source à tous les utilisateurs qui interagissent avec le programme par le réseau [5].

### La réciprocité limitée : la frontière passe par le fichier

Entre les deux, certaines licences limitent la réciprocité. La LGPL permet de lier une bibliothèque libre à des
modules non libres, ce qui en fait, pour la FSF, un copyleft qui n'est pas « fort » [7]. La Mozilla Public License
2.0 trace la frontière fichier par fichier : dans une œuvre combinée, les fichiers sous MPL restent sous MPL [7].

### Le matériel : la CERN-OHL et ses trois variantes

Les licences logicielles ont été écrites pour des programmes ; or un schéma n'est pas un programme, et l'objet
fabriqué n'est pas une copie de fichier. Le CERN a écrit pour cela la CERN Open Hardware Licence, dont la
version 2 existe en trois variantes : fortement réciproque (S), faiblement réciproque (W) et permissive (P) [8]. La
variante S définit la « Complete Source » comme l'ensemble des sources nécessaires pour fabriquer le produit, dans la
forme préférée pour les modifier ; quiconque transmet un produit doit fournir cette source ou indiquer où la trouver
[9]. Comme Apache, elle accorde une licence de brevet, qui prend fin pour qui attaque en contrefaçon [9].

L'Open Source Hardware Association (OSHWA) en tire la définition du matériel open source : une conception rendue
publique pour que chacun puisse l'étudier, la modifier, la distribuer, la fabriquer et la vendre, avec des fichiers
dans leur format d'origine et sans obscurcissement [10]. Pour qui conçoit un objet, la question de la licence se pose
en même temps que celle du brevet — c'est l'une des deux horloges décrites dans le guide pour
[fabriquer un prototype, entre montrer et protéger](/articles/fabriquer-prototype/).

### Creative Commons : pour la documentation, pas pour le code

Les licences Creative Commons retrouvent leur place autour du code : elles peuvent couvrir la documentation d'un
logiciel et ses éléments artistiques distincts, images ou musique d'un jeu [3]. Ce site publie ainsi ses articles
sous CC BY 4.0, qui permet la réutilisation à condition de citer l'auteur.

## Mélanger des licences : la compatibilité

Un projet réel combine presque toujours du code venu d'ailleurs. Deux licences sont compatibles quand on peut
distribuer l'ensemble sans violer ni l'une ni l'autre. La FSF tient la liste de référence pour la GPL [7].

| Licence du code repris | Intégrable dans un projet sous GPL ? |
|---|---|
| MIT (Expat), BSD modifiée | Oui, avec la GPL v2 comme avec la v3 [7] |
| Apache 2.0 | Oui avec la GPL v3, non avec la GPL v2, à cause des clauses de brevet [7] |
| MPL 2.0 | Oui, par sa section 3.3, les fichiers MPL restant sous MPL [7] |
| CC BY-SA 4.0 | Oui vers la GPL v3, à sens unique : l'inverse n'est pas permis [7] |
| CC0 | Oui, mais la FSF la déconseille pour le logiciel, faute de licence de brevet [7] |
| AGPL v3 | Pas au sens strict avec la GPL v3 ; des modules séparés peuvent coexister [7] |

La conséquence est pratique : la licence d'un projet se choisit après l'inventaire de ce qu'il reprend. Un projet
qui intègre une bibliothèque sous Apache 2.0 ne peut pas sortir sous GPL v2 seule.

## Le parcours : publier un projet sous licence

| Étape | Ce qu'on fait | La pièce qui en reste |
|---|---|---|
| 1. Inventaire | Lister le code, les bibliothèques, les fichiers et les images repris d'ailleurs, avec leur licence | Un tableau des dépendances [7] |
| 2. Choix | Décider de la contrepartie voulue : mention, réciprocité, réciprocité limitée | Une phrase qui justifie le choix |
| 3. Fichier de licence | Placer le texte intégral à la racine du dépôt | Un fichier LICENSE, que GitHub détecte [2] |
| 4. En-têtes | Indiquer la licence dans chaque fichier, par un identifiant normalisé | Une ligne `SPDX-License-Identifier` en tête de fichier [11] |
| 5. Matériel | Publier les fichiers de conception dans leur format d'origine, avec la licence | Les sources de CAO et la nomenclature [9][10] |
| 6. Documentation | Choisir une licence pour les textes et les images | Une mention CC dans le README [3] |
| 7. Contributions | Préciser que les apports sont reçus sous la même licence | Une règle écrite dans le guide de contribution |

Avant de réutiliser un dépôt, la même vérification vaut dans l'autre sens : la sélection de
[50 dépôts open source pour équiper un FabLab](/notes/50-depots-github-fablab/) ne dispense pas de lire la licence de
chacun avant d'en fabriquer et d'en vendre les pièces.

## Ce que montrent les faits

**Le plus grand projet libre tient à une ligne par fichier.** Le noyau Linux est distribué sous la GPL version 2
seule, avec une exception pour les appels système ; ses règles exigent un identifiant de licence SPDX précis dans
chaque fichier source, en commentaire, à la première ligne possible [11]. La licence n'est pas une page oubliée au
fond du dépôt : elle est inscrite partout où le code circule.

**L'État français a fait son choix, et il est double.** Pour les logiciels qu'elle publie, l'administration peut
retenir des licences « permissives » — BSD, Apache, CeCILL-B, MIT — ou « avec obligation de réciprocité » — Mozilla,
GNU GPL, CeCILL, EUPL, Eclipse [13]. La liste publiée par data.gouv.fr en détaille treize, cinq permissives et huit
réciproques [12]. Les deux familles y sont admises à égalité : aucune n'est la bonne en soi, chacune répond à une
intention. Les mêmes licences protègent des logiciels d'usage courant, comme les
[alternatives libres aux logiciels Adobe](/notes/alternatives-libres-adobe/).

**Ce qui va contre l'intuition.** Les licences les plus célèbres pour partager ne conviennent pas au logiciel : c'est
Creative Commons qui le dit [3]. Et la mise dans le domaine public, qui semble l'ouverture la plus totale, a un
défaut que la FSF relève : CC0 n'accorde aucune licence de brevet [7]. Plus d'ouverture apparente peut signifier moins
de sécurité pour ceux qui réutilisent. Le droit d'auteur du logiciel garde par ailleurs ses règles propres, comme le
montre l'article sur la [rétro-ingénierie par IA et le droit européen](/articles/retro-ingenierie-ia/).

## Au 10 novembre 2026 : les versions et les listes en vigueur

*Cette section est datée ; elle sera mise à jour à toute nouvelle version d'une des licences citées, ou à toute
modification de l'article D323-2-1 du code des relations entre le public et l'administration.*

- **Open Source Definition** : version 1.9, texte modifié le 22 mars 2007 [1].
- **GPL** : version 3, du 29 juin 2007 [6] ; le noyau Linux reste sous la version 2 seule [11].
- **Apache License** : version 2.0, de janvier 2004 [4].
- **CERN-OHL** : version 2, texte de 2020, en variantes S, W et P [8][9].
- **Administration française** : article D323-2-1, en vigueur depuis le 4 décembre 2021 [13] ; treize licences de
  logiciels publiées par data.gouv.fr [12].

## Choisir sa licence avant de publier

Une seule posture à retenir : les licences open source se choisissent au moment de publier, pas après le premier
fork. Après, il faut retrouver chaque contributeur ; avant, il suffit de décider. Chacune des questions suivantes
doit recevoir une réponse appuyée sur une pièce, et non sur une intention.

1. **Qu'avez-vous repris d'ailleurs, et sous quelle licence ?** Le tableau des dépendances.
2. **Que voulez-vous en retour : une mention, ou le partage des améliorations ?** Une phrase écrite.
3. **Votre projet tourne-t-il sur un serveur que d'autres utilisent ?** Si oui, la question de l'AGPL est tranchée par écrit.
4. **Des brevets sont-ils en jeu, les vôtres ou ceux de vos contributeurs ?** Le choix d'une licence qui les traite,
   comme Apache 2.0 ou la CERN-OHL.
5. **Y a-t-il du matériel ?** La variante de la CERN-OHL retenue, et les fichiers de conception dans leur format d'origine.
6. **Le texte de la licence est-il à la racine du dépôt ?** Le fichier LICENSE.
7. **Chaque fichier dit-il sa licence ?** L'identifiant SPDX en tête.
8. **La documentation a-t-elle sa propre licence ?** La mention Creative Commons dans le README.

Si une réponse manque, la porte est ouverte sans mot dessus. Ceux qui passent regarderont, admireront peut-être — et
n'entreront pas. Le mot sur la porte ne coûte qu'une décision ; c'est lui qui transforme un dépôt public en projet
dont d'autres peuvent faire quelque chose.

## Questions fréquentes

### Un code publié sur GitHub sans licence est-il libre ?

Non. Sans licence, le droit d'auteur par défaut s'applique : personne ne peut reproduire, distribuer ni créer d'œuvres
dérivées sans l'accord de l'auteur [2]. Les conditions de GitHub permettent seulement de consulter le dépôt et d'en
faire une copie sur la plateforme [2]. Pour réutiliser ce code, il faut demander une licence à l'auteur ; pour publier
le sien, en placer une à la racine du dépôt.

### Peut-on vendre un logiciel sous licence open source ?

Oui. La définition de l'Open Source Initiative interdit seulement d'empêcher quiconque de vendre ou de donner le
logiciel [1], et la FAQ de la GPL confirme que chacun peut vendre des copies d'un programme sous GPL, au prix qu'il
veut [5]. La contrepartie est ailleurs : l'acheteur reçoit les mêmes droits, y compris celui de redistribuer à son
tour, et, sous GPL, la source.

### La GPL oblige-t-elle à publier son code ?

Pas tant qu'on ne distribue pas le programme. La GPL n'oblige pas à publier une version modifiée utilisée en interne,
ni même exploitée sur un site web [5]. Elle oblige, quand on diffuse le programme, à fournir la source sous GPL [5] ;
dans un objet vendu, la source ou une offre écrite valable au moins trois ans [6]. L'AGPL va plus loin : les utilisateurs du
réseau ont droit à la source [5].

### Quelle licence choisir pour un projet de matériel ?

Une licence écrite pour le matériel, comme la CERN Open Hardware Licence version 2 : permissive (P), faiblement
réciproque (W) ou fortement réciproque (S), selon ce que l'on exige des fabricants [8]. La variante S impose de
fournir la source complète de conception avec chaque produit transmis [9]. Creative Commons déconseille ses propres
licences pour le matériel [3], et l'OSHWA exige des fichiers dans leur format d'origine [10].

### Quelle différence entre la licence MIT et la licence Apache 2.0 ?

Les deux sont permissives : on peut intégrer le code dans un produit fermé, à condition de conserver les mentions [7].
Apache 2.0 ajoute une licence de brevet de chaque contributeur, qui prend fin pour qui engage une action en
contrefaçon, et impose de signaler les fichiers modifiés et de reprendre le fichier NOTICE [4]. Elle est compatible
avec la GPL v3, pas avec la GPL v2 [7].

### Une licence Creative Commons convient-elle à un logiciel ?

Non, selon Creative Commons elle-même, qui déconseille ses licences pour le logiciel et renvoie aux licences reconnues
par la Free Software Foundation ou l'Open Source Initiative [3]. Les licences CC conviennent en revanche à la
documentation et aux éléments artistiques d'un logiciel [3]. La dédicace CC0 fait exception : elle est acceptable
pour du code, mais n'accorde aucune licence de brevet [3][7].
