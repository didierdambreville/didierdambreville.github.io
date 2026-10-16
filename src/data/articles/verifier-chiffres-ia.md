---
titre: "Vérifier les chiffres d'une IA : le nombre est juste, pas la phrase"
these: "Pour vérifier les chiffres d'une IA, chercher le nombre dans la source ne suffit pas : l'erreur discrète porte sur ce qu'il désigne — sa référence, son sens, sa date, son heure."
identifiant: "verifier-chiffres-ia"
rubriques: ["sources", "intelligence-artificielle", "methode"]
date: 2026-10-16
prolonge:
  libelle: "SPECULA™ — Vérifier un texte généré par IA : recompter, orienter, dater (16 octobre 2026)"
  url: "https://specula.fr/verifier-texte-genere-ia/"
sources:
  - libelle: "SPECULA™, « Vérifier un texte généré par IA : recompter, orienter, dater », specula.fr, 16 octobre 2026"
    url: "https://specula.fr/verifier-texte-genere-ia/"
    note: "Cas relevés dans les éditions de La Note Sentinelle du 26 septembre au 16 octobre 2026 : « 76 points de base » (12 octobre), écart à la moyenne des 200 dernières séances ; « le yen recule » (4 octobre) ; cotation de Hong Kong relevée à 12 h 45 locales (16 octobre) ; vote de la Banque d'Angleterre (29 septembre) ; deux rédactions et deux fausses « septième séance » (16 octobre) ; vérificateur lisant « 20 » dans « 200 » ; les quatre opérations ; la réserve sur la portée des cas."
  - libelle: "SPECULA™ (D. Dambreville, ARSCRIPTA SAS), « Ce que le texte calcule, et ce qu'il date », étude, 17 pages, 16 octobre 2026"
    url: "https://specula.fr/wp-content/uploads/2026/10/2026-10-16_8_etude-ce-que-le-texte-calcule-et-ce-qu-il-date_v1.0.0.pdf"
    note: "Couverture : « 76 pour 124 », un écart exact rattaché à la mauvaise référence ; « 7 pour 2 », séances consécutives écrites et réelles. L'étude détaille les cas, les quatre gestes et les douze questions de lecture."
  - libelle: "U.S. Department of the Treasury, Daily Treasury Par Yield Curve Rates, octobre 2026"
    url: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?type=daily_treasury_yield_curve&field_tdr_date_value_month=202610"
    note: "Taux à 10 ans : 5,24 % le 9 octobre 2026."
  - libelle: "Federal Reserve, communiqué du Federal Open Market Committee, 16 septembre 2026"
    url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a.htm"
    note: "Fourchette cible des fonds fédéraux relevée d'un quart de point, à 3 3/4 – 4 % ; vote à l'unanimité, 12 voix contre 0."
  - libelle: "HKEX (Hong Kong Exchanges and Clearing), Trading Hours — Securities Market"
    url: "https://www.hkex.com.hk/Services/Trading-hours-and-Severe-Weather-Arrangements/Trading-Hours/Securities-Market?sc_lang=en"
    note: "Négociation continue : séance du matin de 9 h 30 à 12 h, séance du matin étendue de 12 h à 13 h, séance de l'après-midi de 13 h à 16 h, heure locale."
  - libelle: "Bank of England, Monetary Policy Summary, September 2026 (publié le 17 septembre 2026)"
    url: "https://www.bankofengland.co.uk/monetary-policy-summary-and-minutes/2026/september-2026"
    note: "Réunion du comité achevée le 16 septembre 2026 ; Bank Rate maintenu à 3,75 % par six voix contre trois ; les trois membres minoritaires votent pour une hausse à 4 %."
  - libelle: "The Register, Cade Metz, « Google News farce triggers Wall Street sell-off », 10 septembre 2008"
    url: "https://www.theregister.com/2008/09/10/online_news_farce_drops_united_stock/"
    note: "Article de 2002 sur la faillite d'United Airlines, sans date, daté du 6 septembre 2008 par Google News ; diffusé sur Bloomberg le 8 septembre par Income Securities Advisors ; UAL ouvert à 12,30 $, tombé à 3 $, cotation suspendue, clôture à 10,92 $."
motsCles: ["vérification des faits", "intelligence artificielle", "information financière", "SPECULA™"]
licence: "CC BY 4.0"
miseEnAvant: false
brouillon: false
---

Une étiquette de prix peut être exacte en tout point — bon produit, bon prix, bonne date — et tromper quand
même : il suffit qu'elle soit posée devant le mauvais article. Qui la compare
au catalogue la trouve juste. Qui regarde le rayon voit l'erreur.

Vérifier les chiffres d'une IA pose le même problème. Retrouver chaque nombre dans la source attrape
l'invention, pas l'étiquette mal posée. Le contrôle utile porte sur ce que le nombre désigne, en quatre
questions : entre quoi et quoi a-t-il été calculé, dans quel sens se lit-il, de quel jour date le fait, de
quelle heure et de quelle place ? Les deux premières se règlent dans la donnée. Les deux dernières exigent
une référence extérieure.

## Chercher le chiffre dans la source : nécessaire, pas suffisant

Devant un texte rédigé par une machine, le premier réflexe est de chercher chaque nombre dans une source. Il
est sain : il attrape le chiffre tiré de la mémoire du modèle, qui n'existe nulle part.

Quand les nombres viennent d'interfaces de données plutôt que de la mémoire du modèle, ce risque-là recule
[1]. Mais le contrôle ne répond qu'à une question : ce nombre existe-t-il ? Il ne dit pas s'il désigne ce que
la phrase lui fait désigner. C'est ce second risque que documente l'étude publiée par SPECULA™ le 16 octobre
2026 [2].

## Un nombre exact dans une phrase fausse

Le 12 octobre 2026, une édition de La Note Sentinelle, la note quotidienne de SPECULA™, écrit trois fois que
le rendement à dix ans du Trésor américain se tient « 76 points de base » au-dessus de la borne haute de la
fourchette directrice de la Réserve fédérale [1]. Ce rendement valait 5,24 % le 9 octobre, selon le Trésor
[3]. La borne haute était de 4 % depuis la décision du 16 septembre [4]. L'écart réel
était donc de 124 points de base [2].

Le nombre 76 n'était pas inventé : c'était la distance entre ce même rendement et sa moyenne des deux cents
dernières séances [1]. Un contrôle de présence l'aurait trouvé dans les données, et validé. Le nombre était
juste ; son rattachement, faux.

## Pourquoi une IA se trompe avec des chiffres justes

Entre la donnée et la phrase, un texte automatisé fait quatre opérations qu'aucune ligne de sa source ne
porte telle quelle [1]. Chacune appelle sa question :

| Opération | Ce que fait le texte | La question à poser | Où se trouve la réponse |
|---|---|---|---|
| Calculer | un écart, une série | Entre quoi et quoi ? | dans la donnée : les deux bornes |
| Orienter | « en hausse », « recule » | Dans quel sens ? | dans la donnée : le signe, le sens de la cotation |
| Dater | un fait, un jour | Qui l'a dit, et quand ? | hors de la donnée : chez l'émetteur |
| Situer | un nombre, une heure | Quelle place, quelle séance ? | hors de la donnée : l'horloge de la place |

La ligne de partage passe au milieu. Une erreur de calcul ou de sens se corrige avec la donnée
disponible. Une erreur de date ou d'heure, non : aucun calcul sur un cours ne dira si le discours
qui l'explique date d'hier ou d'il y a deux semaines.

Même le sens piège. Le 4 octobre, une édition écrit que « le yen recule » [1]. La paire suivie, USD/JPY,
compte les yens qu'il faut pour obtenir un dollar ; elle avait baissé, donc le yen avait monté. Le signe
était juste, sa lecture inversée.

L'heure, pas davantage. Le 16 octobre à 6 h 45, heure de Paris, une vérification automatique a pris la
hausse d'une valeur cotée à Hong Kong pour un mouvement d'après clôture [1]. Il était 12 h 45 sur place, et
la négociation continue y commence à 9 h 30 [5] : la dernière cotation appartenait à la séance du jour.

## Dater chez l'émetteur : la même erreur, à dix-huit ans d'écart

Dater est l'opération la plus souvent en défaut dans les cas relevés [1]. Le mécanisme ne varie pas : la
collecte lit un relais qui rapporte un fait plus ancien, et lui prête la date du relais.

Le 29 septembre 2026, une édition présente un vote de la Banque d'Angleterre comme récent et accommodant :
cinq voix contre quatre, quatre membres favorables à une baisse [1]. La réunion s'était achevée le
16 septembre. Le taux avait été maintenu à 3,75 % par six voix contre trois, et les trois minoritaires
demandaient une hausse à 4 % [6]. La date était fausse, et le sens avec elle.

Le mécanisme n'est pas né avec l'IA. En septembre 2008, un article de 2002 sur la faillite d'United
Airlines, publié sans date, ressurgit sur le site du South Florida Sun-Sentinel ; Google News le date du
6 septembre 2008 [7]. Le 8, une société de recherche financière le diffuse sur Bloomberg. Le titre de
la maison mère, UAL, ouvert à 12,30 dollars, tombe à 3 dollars ; sa cotation est suspendue ; il clôture à
10,92 dollars [7]. Aucun chiffre n'était inventé. La date suffisait.

## Relancer la rédaction ne corrige pas l'erreur

Devant une erreur, la tentation est de relancer le modèle. Le 16 octobre 2026, la même édition a été rédigée
deux fois, sur les mêmes données [1]. La première voyait une valeur de semi-conducteurs « sous pression pour
la septième séance consécutive » ; la seconde, le Dow Jones devant le Nasdaq pour la septième séance. Dans
les deux cas, la série réelle comptait deux séances [2]. Le nombre
venait de la collecte ; chaque rédaction l'a rattaché à un objet différent.

Une seconde rédaction peut tomber juste par hasard ; elle ne supprime pas la cause. Un nouveau passage du même
modèle sur son propre texte reste un contrôle de cohérence, pas une vérification : c'est l'une des règles de
[la méthode PRAXIS, qui place la vérification au goulot du travail avec l'IA](/articles/methode-praxis/).

Plus les chaînes automatisées produiront, plus un contrôle de simple présence validera d'erreurs exactes. Et
le contrôle doit lui-même être éprouvé : chez SPECULA™, un vérificateur conçu après le cas des 76 points
lisait « 20 » au début de « 200 », défaut corrigé avant sa mise en service [1]. Un contrôle se juge sur
un cas faux qu'il doit trouver, et sur un cas juste qu'il doit laisser passer.

## Vérifier les chiffres d'une IA : quatre questions avant de citer

Je ne demande plus à un texte automatisé si ses nombres existent. Je lui demande ce qu'ils désignent, une
question par opération :

1. **Entre quoi et quoi ?** Un écart, une moyenne, une série se recomptent depuis leurs deux bornes ;
   « septième » est un nombre, même écrit en lettres.
2. **Dans quel sens ?** Le mot « hausse » doit avoir le signe du chiffre, et la cotation son sens de
   lecture.
3. **Qui l'a dit, et quel jour ?** La date d'un fait se lit chez son émetteur, pas dans l'article qui le
   rapporte.
4. **Quelle place, quelle heure ?** Une cotation relevée en pleine séance n'est pas une clôture.

Ces cas viennent de la note que je publie avec SPECULA™ ; tirés d'une seule production sur trois semaines,
ils montrent comment chaque erreur se forme, non combien de textes elle touche [1]. L'étude complète en tire
douze questions pour le lecteur qui n'a pas la donnée sous les yeux [2].

La grille vaut au-delà de la finance : un compte rendu calcule, une synthèse de contrat date, un rapport
chiffré oriente. Vérifier les chiffres d'une IA, c'est la question d'après — vérifier ce que l'outil
produit —, que [l'article sur les compétences de 2030](/articles/competences-2030/) compte parmi celles
qui feront la valeur d'un professionnel.
