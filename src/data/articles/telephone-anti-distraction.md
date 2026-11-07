---
titre: "Téléphone anti-distraction : ADHD ONE retire l'alibi, pas la tentation"
these: "Un téléphone anti-distraction peut n'être qu'un combiné : ADHD ONE sort l'appel du smartphone, resté au tiroir. Il retire l'alibi pour le garder en main, pas l'envie d'aller le chercher."
identifiant: "telephone-anti-distraction"
rubriques: ["fabrication", "electronique", "methode"]
date: 2026-11-07
sources:
  - libelle: "Kevin Noki, « Building a 1980s Brick to Replace My Smartphone », vidéo YouTube, 7 octobre 2026"
    url: "https://www.youtube.com/watch?v=iahWN18jeBo"
    note: "Le problème (0:15), ni seconde SIM ni second numéro (2:13), le profil HFP et l'échec de l'ESP32 (2:45 à 5:33), le Raspberry Pi Pico (6:08), l'antenne factice (27:05), l'accès aux contacts et la copie du répertoire (28:06), l'USB-C (28:55), l'essai de quelques jours et le doute sur sa cause (29:09). 427 000 vues le 7 novembre 2026."
  - libelle: "Kevin Noki, « ADHD ONE – Retro Brick Handset (DIY Build Files V1) », page produit, consultée le 7 novembre 2026"
    url: "https://kevinnoki.com/product/adhd-one-retro-brick-handset-diy-build-files-v1/"
    note: "29,99 € ; fichiers STL, clavier de 19 touches, boîtier sans trou d'antenne, micrologiciel compilé, fichiers Gerber, nomenclature. Code source et fichiers modifiables non inclus, aucune pièce livrée, usage personnel, redistribution interdite. Aucune liste de téléphones compatibles."
  - libelle: "Kevin Noki, « ADHD ONE – Retro Brick Handset (DIY Kit) », page produit, consultée le 7 novembre 2026"
    url: "https://kevinnoki.com/product/adhd-one-retro-brick-handset-diy-kit/"
    note: "« Not available yet », sans prix ni plan de sortie fixe."
  - libelle: "Haute Autorité de santé, « Trouble du neurodéveloppement / TDAH : repérage, diagnostic et prise en charge des adultes », note de cadrage, validée le 17 novembre 2021"
    url: "https://www.has-sante.fr/jcms/p_3302480/fr/trouble-du-neurodeveloppement/-tdah-reperage-diagnostic-et-prise-en-charge-des-adultes-note-de-cadrage"
    note: "Cadre un projet de recommandation ; vise les médecins de premier recours pour le repérage et les médecins compétents dans le diagnostic et la prise en charge du TDAH."
  - libelle: "Apple, « Bluetooth profiles that iOS and iPadOS support », assistance, 31 octobre 2023"
    url: "https://support.apple.com/HT204387"
    note: "HFP 1.8 permet aux oreillettes Bluetooth et aux kits mains libres de voiture de communiquer avec les téléphones ; iPhone 5s et modèles ultérieurs."
  - libelle: "Ward, Duke, Gneezy et Bos, « Brain Drain: The Mere Presence of One's Own Smartphone Reduces Available Cognitive Capacity », Journal of the Association for Consumer Research, 2(2), avril 2017"
    url: "https://doi.org/10.1086/691462"
    note: "La thèse, énoncée dans le titre : la simple présence de son smartphone réduit la capacité cognitive disponible."
  - libelle: "Ruiz Pardo et Minda, « Reexamining the 'brain drain' effect: A replication of Ward et al. (2017) », Acta Psychologica, vol. 230, 2022"
    url: "https://pubmed.ncbi.nlm.nih.gov/36007374/"
    note: "Réplication directe préenregistrée, six conditions d'emplacement et d'état du téléphone ; aucune différence liée à l'emplacement."
  - libelle: "Böttger, Poschik et Zierer, « Does the Brain Drain Effect Really Exist? A Meta-Analysis », Behavioral Sciences, 13(9), 11 septembre 2023"
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10525686/"
    note: "22 études et 43 effets, présence et usage confondus. Global g = −0,14 ; mémoire g = −0,23, significatif ; attention g = −0,07, non significatif."
  - libelle: "Castelo, Kushlev, Ward, Esterman et Reiner, « Blocking mobile internet on smartphones improves sustained attention, mental health, and subjective well-being », PNAS Nexus, 4(2), 18 février 2025"
    url: "https://academic.oup.com/pnasnexus/article/4/2/pgaf017/8016017"
    note: "Essai randomisé préenregistré, 467 participants, iPhone seulement, deux semaines de blocage, appels et SMS maintenus. Attention soutenue dz = 0,23 en intention de traiter ; 314 à 161 minutes d'écran par jour dans un sous-échantillon ; 119 participants conformes, soit 25,5 % ; effets d'attente possibles."
  - libelle: "Grüning, Riedel et Lorenz-Spreen, « Directing smartphone use through the self-nudge app one sec », PNAS, 120(8), 16 février 2023"
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9974409"
    note: "Terrain : 280 utilisateurs sur six semaines, ouvertures effectives en baisse de 57 %, sans groupe témoin randomisé ; F. Riedel a créé l'application. Expérience contrôlée, 500 participants : l'option de renoncer a l'effet le plus fort."
  - libelle: "Arcep, « Fermeture des réseaux mobiles 2G et 3G : ce qu'il faut anticiper », fiche pratique, consultée le 7 novembre 2026"
    url: "https://www.arcep.fr/mes-demarches-et-services/consommateurs/fiches-pratiques/extinction-reseaux-mobiles-2g-3g.html"
    note: "Calendrier par opérateur, susceptible d'évoluer ; téléphones non compatibles 4G et 5G, dont des « modèles minimalistes », hors service à la fermeture ; compatibilité VoLTE dont il faut s'assurer."
motsCles: ["téléphone anti-distraction", "ADHD ONE", "attention", "Raspberry Pi", "impression 3D"]
licence: "CC BY 4.0"
miseEnAvant: false
brouillon: false
---

Imaginez que le seul téléphone de votre atelier soit posé sur le comptoir du bar d'à côté. Vous y
entrez pour un appel, vous en ressortez une heure plus tard. Tirer une ligne jusqu'à l'atelier ne
ferme pas le bar. Cela vous retire seulement votre raison d'y entrer.

Un téléphone anti-distraction, c'est cette ligne : un appareil qui garde les appels et laisse le
reste ailleurs. Le plus curieux, ADHD ONE, présenté le 7 octobre 2026 par le designer
Kevin Noki, n'est même pas un téléphone [1]. C'est un combiné Bluetooth qui fait passer les appels
d'un smartphone rangé dans un tiroir. Cela peut marcher si c'est le besoin d'être joignable qui vous
ramène à l'écran. Pas si c'est l'envie.

## ADHD ONE, un combiné sans carte SIM ni second numéro

ADHD ONE signifie *Anti Distraction Handset Device* ; Noki prend pour modèle le Motorola DynaTAC, qui
ne savait qu'appeler et répondre [1]. Son boîtier imprimé en 3D porte 19 touches, un petit écran et
une prise USB-C [1][2]. L'antenne est factice [1]. Pas de seconde carte SIM, pas de second numéro [1].

Noki vend les fichiers 29,99 € : modèles à imprimer, micrologiciel compilé, plans de fabrication du
circuit, nomenclature [2]. Aucune pièce n'est livrée, et le kit complet n'est pas en
vente, sans date annoncée [2][3]. Ce n'est pas non plus un projet open source : ni code source, ni
fichiers modifiables, et la redistribution est interdite [2]. Disponible n'est pas libre, comme
pour le [cyberdeck modulaire](/articles/cyberdeck-modulaire/), dont le dépôt public
ne porte aucune licence.

Le sigle est aussi celui du TDAH en anglais. Un sigle n'est pas un soin : chez l'adulte, le repérage,
le diagnostic et la prise en charge de ce trouble relèvent de professionnels de santé, comme le pose
la note de cadrage de la HAS [4]. Il n'est question ici que d'attention au quotidien.

## Rester joignable sans smartphone à la main

Noki l'admet d'emblée : le silencieux et le mode concentration règlent les notifications [1]. Reste
la distraction qu'on va chercher soi-même. Un coup d'œil, et des minutes ou des heures passent [1].
Le remède serait de ranger l'appareil. Sauf que quelques personnes doivent pouvoir vous joindre, et
qu'il faut pouvoir les appeler [1].

Voilà le nœud. L'appel, la fonction la moins envahissante du smartphone, justifie de garder tout le
reste à portée de main. C'est un alibi parfait, parce qu'il est vrai. Noki concède d'ailleurs qu'on
pourrait régler cela bien plus simplement [1]. Il a préféré fabriquer une brique.

## Ce que le profil mains libres laisse passer

Le ressort tient en trois lettres. HFP, pour *Hands-Free Profile*, est le profil Bluetooth qui fait
dialoguer un téléphone avec une oreillette ou un kit mains libres de voiture [5]. Pour le smartphone,
le combiné n'est rien d'autre que cela. Noki le connecte comme un accessoire, puis autorise l'accès
aux contacts [1].

Là se loge le choix de conception. Une règle logicielle se désactive en deux gestes ; ici, seuls les
appels et le répertoire sont prévus pour passer, et le reste demeure dans le tiroir [1].

Un premier montage sur un ESP32, de la famille de la carte qui fait tourner
[ce bloqueur de publicité](/articles/esp32-c3-adblock/), passait l'appel avec un son de retransmission
lunaire [1]. Il a fallu un module Bluetooth dédié, piloté par un Raspberry Pi Pico, et un circuit
imprimé soudé à la main [1].

Deux précautions, que la vidéo n'aborde pas. Le combiné copie votre répertoire dans sa mémoire [1],
et le code du micrologiciel n'étant pas fourni [2], vous ne pouvez pas relire ce qu'il en fait. Rien
n'indique un abus ; vous ne pouvez simplement pas le vérifier. Et la page du produit ne liste aucun
téléphone compatible [2] : à demander avant d'acheter.

## Reprendre le contrôle de son attention : ce que les études mesurent

Sur l'objet lui-même, la vidéo n'offre qu'un témoignage : quelques jours d'essai, nettement moins de
temps sur le smartphone, et un doute honnête. Le mérite revient-il au combiné, ou à « my determination
to not open that drawer » [1] ? Les études, elles, portent sur des gestes voisins.

**Ne plus voir le téléphone.** C'est l'argument de Noki, et c'est le plus fragile. L'article de 2017
selon lequel la simple présence du smartphone réduit la capacité cognitive [6] n'a pas été confirmé par une
réplication directe et préenregistrée : aucune différence selon l'emplacement du téléphone [7]. Une
méta-analyse de 2023 sur 22 études, qui mêle présence et usage, trouve un effet sur la mémoire
(g = −0,23), mais rien de significatif sur l'attention (g = −0,07) [8].

**Couper l'accès.** Dans un essai randomisé de 2025, 467 adultes
devaient bloquer l'internet mobile de leur iPhone pendant deux semaines, appels et SMS maintenus [9].
L'attention soutenue progresse, avec un effet de petite taille (dz = 0,23), et le temps d'écran passe
de 314 à 161 minutes par jour dans un sous-échantillon du premier groupe [9]. Mais seuls 25,5 % des
participants ont tenu le blocage selon les critères de l'étude, et les auteurs n'excluent pas un
effet d'attente [9].

**Ajouter une pause.** Une application qui impose un délai et propose de renoncer a fait baisser de
57 % les ouvertures effectives des applications visées en six semaines, chez 280 utilisateurs [10].
L'étude de terrain n'a pas de groupe témoin tiré au sort, et l'un des auteurs a créé l'application
[10]. Dans l'expérience contrôlée qui l'accompagne, c'est la possibilité de renoncer qui pèse le plus
[10]. Le chemin jusqu'au tiroir offre la même occasion, mais c'est une analogie, pas une mesure.

Ce faisceau ne prouve pas qu'un combiné marche. Il suggère que le gain tient moins à la vue de l'objet
qu'à ce qu'il en coûte d'y accéder.

## Dumbphone, combiné ou réglages : la fin de la 2G change le calcul

La vidéo comptait 427 000 vues le 7 novembre 2026 [1] : le sujet intéresse. Beaucoup penseront d'abord au téléphone à touches, qui demande désormais une vérification. Selon
le calendrier de l'Arcep, susceptible d'évoluer, la 2G s'éteint en métropole le 15 novembre chez SFR,
du 1er au 15 décembre chez Bouygues Telecom et d'ici fin décembre chez Orange [11]. L'Arcep cite les
« modèles minimalistes » parmi les téléphones qui, sans 4G ni 5G, ne fonctionneront plus ; et un
appareil compatible 4G peut ne pas l'être pour les appels sur 4G, dits VoLTE [11]. Celui qui dort au
fond d'un placard risque donc de ne plus sonner.

Le combiné échappe à ce problème, puisque la radio reste celle du smartphone. Mais celui-ci doit rester
allumé et à portée de Bluetooth, et messages, plans, paiement et double authentification restent sur
son écran.

| Voie | Ce qu'elle retire | Pour revenir à l'écran | Sa limite |
|---|---|---|---|
| Silencieux, mode concentration | les notifications [1] | prendre le téléphone | la distraction qu'on va chercher soi-même [1] |
| Blocage logiciel | l'internet mobile [9] | désactiver le blocage | 25,5 % de participants conformes dans l'essai [9] |
| Combiné ADHD ONE | rien : il éloigne le smartphone | ouvrir le tiroir | montage à réaliser, code fermé [1][2] |
| Téléphone basique | les applications | changer d'appareil | exige la 4G et la VoLTE [11] |

## Avant de fabriquer un téléphone anti-distraction, le test du tiroir

Je retiens un seul geste, gratuit. Pendant une semaine, quand vous travaillez, mettez votre smartphone
dans un tiroir, sonnerie forte. Chaque fois que vous l'ouvrez, notez pourquoi.

Si c'est presque toujours pour un appel, un téléphone anti-distraction peut régler votre problème, et
une oreillette, qui repose sur le même profil [5], suffira peut-être. Si c'est par envie, aucun combiné
n'y changera rien : le bar est toujours ouvert, de l'autre côté du mur. Vous l'aurez appris sans une
seule heure de soudure.
