---
titre: "Cyberattaque des frigos de supermarchés : une porte laissée ouverte"
these: "La cyberattaque des frigos de supermarchés du 12 octobre 2026 tient moins au talent des pirates qu'à des contrôleurs de froid joignables sur Internet, sans correctif, parfois en fin de vie."
identifiant: "cyberattaque-frigos-supermarches"
rubriques: ["informatique", "economie"]
date: 2026-10-13
sources:
  - libelle: "Le Monde avec AFP, « Plusieurs centaines de supermarchés Intermarché et Coopérative U victimes d'une cyberattaque visant leurs installations frigorifiques », 12 octobre 2026"
    url: "https://www.lemonde.fr/economie/article/2026/10/12/plusieurs-centaines-de-supermarches-intermarche-et-cooperative-u-victimes-d-une-cyberattaque-visant-leurs-installations-frigorifiques_6792621_3234.html"
    note: "Chiffres donnés par les enseignes à l'AFP : au moins 300 Intermarché et Netto, moins d'une centaine de Coopérative U, « plusieurs magasins » E.Leclerc, une trentaine de Monoprix ; produits frais et surgelés jetés ; enquête du parquet de Paris confiée à l'Office anticybercriminalité, « départs de feu » ; E.Leclerc met en cause l'un de ses fournisseurs de matériel frigorifique ; communiqué de Danfoss sur les unités en fin de vie ; l'ANSSI en lien avec ses homologues européens. Consulté le 13 octobre 2026."
  - libelle: "Le Monde, « Dans les supermarchés français, une journée noire après une cyberattaque massive visant des systèmes frigorifiques », 12 octobre 2026, modifié le 13 octobre"
    url: "https://www.lemonde.fr/economie/article/2026/10/12/journee-noire-dans-les-supermarches-francais-apres-une-cyberattaque-massive_6792763_3234.html"
    note: "80 magasins Carrefour ; « des tonnes » de marchandises perdues ; température de dégivrage portée à 50 °C et durée allongée d'une heure à huit heures pour retarder les alarmes ; témoignage du gérant de l'Intermarché de Gradignan. Article réservé aux abonnés, début lu le 13 octobre 2026."
  - libelle: "CERT-FR (ANSSI), alerte CERTFR-2026-ALE-012, « Incident de sécurité ciblant les Danfoss série AK-SM et AK-SC », 12 octobre 2026"
    url: "https://cert.ssi.gouv.fr/alerte/CERTFR-2026-ALE-012/"
    note: "Nombreuses compromissions de ces équipements ; exposer une interface de gestion sur Internet est contraire aux bonnes pratiques ; déconnecter ou filtrer ; en cas de compromission : limiter l'accès aux prestataires, réinitialiser, corriger, renouveler les secrets, revoir les comptes, reconfigurer ; renvoi aux recommandations pour les secteurs de l'énergie et de l'eau. Consulté le 13 octobre 2026."
  - libelle: "Claroty Team82, « Freeze the Controller, Defrost the Food: Uncovering Vulnerabilities in Danfoss Refrigeration Controllers », 9 août 2026"
    url: "https://www.claroty.com/team82/research/freeze-the-controller-defrost-the-food-uncovering-vulnerabilities-in-danfoss-refrigeration-controllers"
    note: "Fonctions de l'interface de l'AK-SM 800A (seuils de température, alarmes, horaires, comptes, maintenance à distance) ; second code d'authentification caché, calculé à partir de la date de l'appareil ; 2 765 appareils exposés selon une recherche Censys. Consulté le 13 octobre 2026."
  - libelle: "BleepingComputer, « Cyberattack shuts down refrigerators at French supermarkets », 12 octobre 2026"
    url: "https://www.bleepingcomputer.com/news/security/cyberattack-shuts-down-refrigerators-at-french-supermarkets/"
    note: "Baptiste Robert (Predicta Lab) : 2 752 systèmes Danfoss exposés le 12 octobre, dont 1 590 en France ; Intermarché évoque une attaque visant un prestataire qui gère le froid de ses magasins. Consulté le 13 octobre 2026."
  - libelle: "Danfoss, avis de sécurité DSA-2025-03-01, contournement d'authentification dans la série AK-SM 8xxA, 24 mars 2025"
    url: "https://www.danfoss.com/en/service-and-support/coordinated-vulnerability-disclosure/danfoss-security-advisories/dsa-2025-03-01/"
    note: "CVE-2025-41450, score 8,2 ; versions antérieures à 4.2 ; correctif : version 4.2. Consulté le 13 octobre 2026."
  - libelle: "Danfoss, avis de sécurité DSA-2025-08-01, injection de commande et de configuration dans la série AK-SM 8xxA, 1er août 2025"
    url: "https://www.danfoss.com/en/service-and-support/coordinated-vulnerability-disclosure/danfoss-security-advisories/dsa-2025-08-01/"
    note: "CVE-2025-41451 (exécution de commandes après authentification) et CVE-2025-41452 (déni de service) ; versions antérieures à 4.3.1 ; correctif : version 4.3.1. Consulté le 13 octobre 2026."
  - libelle: "CISA, avis ICSA-25-140-03, « Danfoss AK-SM 8xxA Series », 20 mai 2025, mis à jour le 26 août 2025"
    url: "https://www.cisa.gov/news-events/ics-advisories/icsa-25-140-03"
    note: "Les trois failles, signalées par Claroty Team82 ; aucune exploitation publique connue à la date de l'avis ; recommandations : tenir les automates hors d'Internet, derrière un pare-feu, séparés des réseaux de gestion. Consulté le 13 octobre 2026."
motsCles: ["cybersécurité", "Danfoss", "grande distribution", "chaîne du froid", "systèmes industriels"]
licence: "CC BY 4.0"
miseEnAvant: false
brouillon: false
---

On ne perce pas le coffre quand la porte de service est restée ouverte. Le cambrioleur qui passe par là n'est pas plus habile qu'un autre : il a seulement trouvé la porte.

Dans la nuit du 11 au 12 octobre 2026, la cyberattaque des frigos de supermarchés a suivi ce chemin. Des pirates ont pris la main, à distance, sur les régulateurs de froid de plusieurs centaines de magasins et ont fait monter congélateurs et chambres froides jusqu'à 50 °C [1][2]. Les appareils visés sont des gestionnaires de froid du fabricant danois Danfoss, que le CERT-FR demande de déconnecter d'Internet [3]. Comment l'attaquant est entré n'est pas encore établi ; ce qui l'est suffit à tirer une leçon.

## Ce qui s'est passé dans la nuit du 11 au 12 octobre

Les enseignes ont donné leurs chiffres à l'AFP le 12 octobre : au moins 300 magasins Intermarché et Netto, moins d'une centaine de Coopérative U, une trentaine de Monoprix, « plusieurs magasins » E.Leclerc [1]. Le Monde y ajoute 80 magasins Carrefour [2]. Ces comptes, recueillis à chaud, ne font pas un bilan.

Les produits frais et surgelés des meubles touchés ont été jetés [1]. Le parquet de Paris a ouvert une enquête, confiée à l'Office anticybercriminalité ; il fait aussi état de « départs de feu » [1]. Le même jour, le CERT-FR, le centre d'alerte de l'Agence nationale de la sécurité des systèmes d'information (ANSSI), signalait de nombreuses compromissions des contrôleurs Danfoss des séries AK-SM et AK-SC [3].

## Pourquoi un frigo de supermarché répond à Internet

Un supermarché ne règle pas ses meubles froids un par un. Un gestionnaire central — chez Danfoss, la gamme AK-SM — surveille les circuits, fixe les seuils de température, envoie les alarmes, tient les horaires et les comptes d'utilisateurs, et se pilote depuis une interface web [4]. Le frigoriste peut ainsi intervenir sans se déplacer [4].

C'est commode ; c'est aussi la brèche. Le CERT-FR l'écrit sans détour : exposer une interface de gestion sur Internet est contraire aux bonnes pratiques [3]. Le jour de l'attaque, le chercheur Baptiste Robert (Predicta Lab) comptait pourtant 2 752 systèmes Danfoss joignables, dont 1 590 en France [5]. Claroty, qui a étudié ces appareils, en avait relevé 2 765 pour la seule gamme AK-SM 800A [4].

## Comment chauffer un congélateur à distance

L'attaque ne demande aucune pièce exotique. Elle détourne une fonction ordinaire : le dégivrage. L'évaporateur d'un meuble froid se couvre de givre ; on le réchauffe régulièrement pour le faire fondre, pendant un temps limité, puis le froid reprend.

Selon Le Monde, les attaquants ont porté la température de dégivrage à 50 °C et allongé l'opération d'une heure à huit heures, pour que les alarmes se déclenchent tard [2]. À Gradignan, en Gironde, le gérant d'un Intermarché situe le début de l'attaque vers 23 heures ; on ne s'en est aperçu qu'à 4 heures, quand la chaleur avait déclenché l'arrosage automatique de la chambre froide [2].

C'est la marque des attaques dites cyberphysiques. Aucun fichier n'est volé : une consigne change, et des tonnes de marchandises sont perdues [2].

## Ce que disent les failles connues de Danfoss

Trois failles de la gamme AK-SM 800A sont documentées. Danfoss les a corrigées en 2025 [6][7] ; Claroty Team82, qui les avait trouvées, les a décrites en détail le 9 août 2026 [4].

| Faille | Ce qu'elle permet | Corrigée dans |
|---|---|---|
| CVE-2025-41450 | entrer comme administrateur sans le mot de passe configuré | version 4.2, mars 2025 [6] |
| CVE-2025-41451 | exécuter des commandes sur l'appareil, une fois connecté | version 4.3.1, août 2025 [7] |
| CVE-2025-41452 | rendre l'interface de gestion indisponible | version 4.3.1, août 2025 [7] |

La première est la plus parlante. En plus du mot de passe choisi par l'exploitant, l'appareil acceptait un second code, caché, calculé à partir de la date du jour : qui connaissait le calcul obtenait une session d'administrateur [4]. Claroty y voit un accès probablement prévu pour la maintenance [4].

Prudence, pourtant : rien de public ne dit que ces failles ont servi le 12 octobre. Danfoss affirme que « la majorité des unités touchées sont des produits anciens », arrivés en fin de vie et privés de mises à jour de sécurité [1] — d'autres appareils, donc, que ceux qu'a étudiés Claroty. Et en 2025, l'agence américaine de cybersécurité, la CISA, ne connaissait aucune exploitation publique de ces trois failles [8].

## Une attaque qui n'a pas exigé de génie

Rien, dans ce qui est publié, ne décrit une prouesse technique. Les correctifs existent depuis mars et août 2025 [6][7]. Tenir ces automates hors d'Internet est recommandé en toutes lettres, en France comme aux États-Unis [3][8]. Le fabricant dit que la plupart des appareils touchés ne recevaient plus de mises à jour [1]. La faute première n'est donc pas du côté de l'attaquant le plus doué, mais de l'exploitation la moins tenue : un automate sans correctif, parfois en fin de vie, laissé à portée de n'importe quelle adresse sur Internet.

Cette exploitation a plusieurs mains. E.Leclerc parle d'une attaque qui a touché l'un de ses fournisseurs de matériel frigorifique [1] ; Intermarché, d'un prestataire qui gère le froid de ses magasins [5]. Qui devait couper l'accès, installer le correctif, remplacer l'appareil ? L'enquête le dira pour cette nuit-là. Chaque exploitant peut se poser la question dès maintenant.

Car la même nuit peut se répéter. L'ANSSI cherche d'autres entreprises concernées et prévient ses homologues européens, « car d'autres pays peuvent être touchés » [1]. La voie d'entrée exacte reste à établir ; la porte, elle, était ouverte.

## Cyberattaque des frigos de supermarchés : ce que j'en retiens

Une seule règle, que je tiens pour la bonne : un équipement qui agit sur le monde physique ne se branche pas sur Internet sans qu'on sache qui le met à jour, et jusqu'à quand.

Le CERT-FR en donne la traduction pratique : déconnecter ces contrôleurs ou en filtrer l'accès ; en cas de doute, réserver l'accès aux prestataires, réinitialiser l'appareil, appliquer les correctifs, changer les secrets, revoir les comptes et tout reconfigurer [3]. Il renvoie d'ailleurs à ses recommandations pour les secteurs de l'énergie et de l'eau [3] : la même porte existe ailleurs que dans les chambres froides.

Pour regarder d'abord ce que vous exposez vous-même, l'article [Outils de sécurité open source : auditez ce qui vous appartient](/articles/outils-securite-open-source/) présente cinq outils gratuits, et le mémento [Cybersécurité](/mementos/cybersecurite/) en rassemble les notions de base.
