---
titre: "Outils de sécurité open source : auditez ce qui vous appartient"
these: "Ghidra, Sherlock, mitmproxy, TruffleHog et ESP32 Marauder sont publics et gratuits : ces outils de sécurité open source servent d'abord à auditer ses pseudonymes, dépôts et réseaux."
identifiant: "outils-securite-open-source"
rubriques: ["informatique", "electronique"]
date: 2026-10-08
sources:
  - libelle: "NSA, « Attention Ghidra Users: Full Source Code Released », communiqué du 4 avril 2019"
    url: "https://www.nsa.gov/Press-Room/Press-Releases-Statements/Press-Release-View/Article/1805182/attention-ghidra-users-full-source-code-released/"
    note: "La NSA a publié le code source de Ghidra le 4 avril 2019, avec les instructions de compilation pour macOS, Linux et Windows. Consulté le 8 octobre 2026."
  - libelle: "NSA, « Four Years Later: The Impacts of Ghidra's Public Release », 6 mars 2023"
    url: "https://www.nsa.gov/Press-Room/News-Highlights/Article/Article/3319971/four-years-later-the-impacts-of-ghidras-public-release/"
    note: "Présentation à la conférence RSA 2019 ; plus d'un million de téléchargements publics et 26 versions en quatre ans ; usage dans l'enseignement et en entreprise ; analyses de routeurs Wi-Fi, d'électroniques de voiture et de machines à voter, dont un scrutin du New Hampshire en 2020. Consulté le 8 octobre 2026."
  - libelle: "NationalSecurityAgency, Ghidra — dépôt GitHub et README"
    url: "https://github.com/NationalSecurityAgency/ghidra"
    note: "Licence Apache-2.0 ; 81 529 étoiles ; version 12.1.4 publiée le 21 septembre 2026 ; avertissement sur des vulnérabilités connues dans certaines versions. Relevé par l'API GitHub le 8 octobre 2026."
  - libelle: "Sherlock Project, Sherlock — dépôt GitHub et README"
    url: "https://github.com/sherlock-project/sherlock"
    note: "Recherche d'un nom d'utilisateur sur plus de 400 réseaux ; usage : une ligne de commande ; licence MIT ; 93 535 étoiles. Relevé le 8 octobre 2026."
  - libelle: "mitmproxy, dépôt GitHub et README"
    url: "https://github.com/mitmproxy/mitmproxy"
    note: "Proxy d'interception HTTP compatible TLS ; licence MIT ; 45 316 étoiles. Relevé le 8 octobre 2026."
  - libelle: "Truffle Security, TruffleHog — dépôt GitHub et README"
    url: "https://github.com/trufflesecurity/trufflehog"
    note: "Recherche d'identifiants dans Git et d'autres sources ; plus de 800 types de secrets classés ; validation par connexion au service ; licence AGPL-3.0 ; 28 340 étoiles. Relevé le 8 octobre 2026."
  - libelle: "JustCallMeKoko, ESP32 Marauder — dépôt GitHub"
    url: "https://github.com/justcallmekoko/ESP32Marauder"
    note: "Suite d'outils Wi-Fi et Bluetooth offensifs et défensifs pour ESP32 ; licence MIT (fichier LICENSE) ; 12 620 étoiles. Relevé le 8 octobre 2026."
  - libelle: "Légifrance, Code pénal, chapitre III, articles 323-1 et 323-3-1"
    url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070719/LEGISCTA000006149839/"
    note: "Article 323-1 en vigueur depuis le 26 janvier 2023 : trois ans et 100 000 € ; cinq ans et 150 000 € en cas de suppression ou modification de données ou d'altération du système. Article 323-3-1 : détention d'un outil conçu pour ces infractions « sans motif légitime ». Consulté le 8 octobre 2026."
  - libelle: "JustCallMeKoko, ESP32 Marauder Wiki — page d'accueil"
    url: "https://github.com/justcallmekoko/ESP32Marauder/wiki"
    note: "Usage réservé aux systèmes et environnements radio que l'on possède ou que l'on est explicitement autorisé à évaluer. Consulté le 8 octobre 2026."
  - libelle: "GitHub Docs, « Removing sensitive data from a repository »"
    url: "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository"
    note: "Révoquer ou renouveler d'abord le secret ; un commit présent dans un fork y reste accessible ; les clones d'autres utilisateurs échappent au nettoyage. Consulté le 8 octobre 2026."
  - libelle: "mitmproxy, documentation — « Certificates »"
    url: "https://docs.mitmproxy.org/stable/concepts/certificates/"
    note: "Le HTTPS n'est déchiffré que si le client fait confiance à l'autorité de certification de mitmproxy ; les applications qui épinglent leur certificat refusent celui de l'outil. Consulté le 8 octobre 2026."
motsCles: ["cybersécurité", "logiciel libre", "Ghidra", "TruffleHog", "ESP32"]
licence: "CC BY 4.0"
miseEnAvant: false
brouillon: false
---

Un serrurier vend ses crochets en boutique, au grand jour. Le cambrioleur n'a pas besoin d'un modèle secret : ceux du commerce lui suffisent. Le même outil sert à l'un et à l'autre ; ce qui change, c'est la serrure sur laquelle on l'essaie.

Les outils de sécurité open source suivent cette logique. Cinq d'entre eux, gratuits et publics, examinent cinq choses que vous exposez sans toujours le savoir : un pseudonyme, une application, un dépôt de code, un programme compilé, un réseau radio. Un seul vient d'une agence de renseignement ; tous s'essaient d'abord chez soi.

## Un seul des cinq outils de sécurité open source vient de la NSA

Le 4 avril 2019, la NSA a publié le code source de Ghidra, son outil de rétro-ingénierie, avec les instructions pour le compiler sous macOS, Linux et Windows [1]. Elle l'avait présenté au public à la conférence RSA de la même année ; quatre ans plus tard, elle faisait état de plus d'un million de téléchargements publics, d'une place dans les cursus universitaires et d'usages en entreprise [2]. Ghidra désassemble et décompile des programmes dont on n'a pas le code source, sous licence Apache 2.0 [3].

Les quatre autres projets n'ont aucun lien avec l'État américain.

| Outil | Ce qu'il examine | Licence | Étoiles GitHub, 8 octobre 2026 |
|---|---|---|---|
| Sherlock [4] | un nom d'utilisateur, sur plus de 400 réseaux et services | MIT | 93,5 k |
| Ghidra [3] | un programme compilé, sans son code source | Apache 2.0 | 81,5 k |
| mitmproxy [5] | le trafic HTTP et HTTPS d'une application | MIT | 45,3 k |
| TruffleHog [6] | les secrets laissés dans le code et son historique | AGPL-3.0 | 28,3 k |
| ESP32 Marauder [7] | un environnement Wi-Fi et Bluetooth | MIT | 12,6 k |

Les cinq dépôts totalisent environ 261 000 étoiles [3][4][5][6][7]. Une étoile mesure un intérêt, pas un usage : n'en tirez pas un nombre d'utilisateurs.

## Ces outils sont-ils légaux ? L'autorisation fait la différence

Un outil public n'est pas une autorisation. En France, accéder ou se maintenir frauduleusement dans un système de traitement automatisé de données est puni de trois ans d'emprisonnement et de 100 000 € d'amende, de cinq ans et 150 000 € si des données sont modifiées ou supprimées, ou si le système est altéré [8]. Détenir ou mettre à disposition un programme conçu ou spécialement adapté à ces infractions est puni s'il se fait « sans motif légitime » ; le texte cite la recherche et la sécurité informatique parmi les motifs [8]. Ceci est de l'information, pas un conseil juridique.

Le texte fait donc dépendre la sanction du caractère frauduleux de l'accès et de l'absence de motif légitime. Le wiki d'ESP32 Marauder donne la règle pratique pour son outil : ne l'employer que sur des systèmes et des environnements radio que l'on possède ou que l'on est explicitement autorisé à évaluer [9].

## Supprimer un secret d'un dépôt Git ne l'efface pas

Le cas le plus concret tient en trois gestes. Un développeur publie par erreur une clé d'accès dans un fichier, s'en aperçoit, la retire dans un second commit. Le fichier est propre ; l'historique ne l'est pas. TruffleHog cherche des identifiants dans Git et dans bien d'autres sources : il reconnaît plus de 800 types de secrets, indique le commit, le fichier et la ligne où il en a trouvé un, et peut se connecter au service concerné pour savoir si le secret est encore actif [6].

Réécrire l'historique ne suffit d'ailleurs pas toujours. GitHub le dit sans détour : si le commit existe dans un fork, il y reste accessible, et les clones des autres échappent à votre nettoyage [10]. Sa consigne place d'abord la révocation ou le renouvellement du secret ; une fois renouvelé, il ne donne plus accès à rien, et la réécriture peut devenir inutile [10]. Révoquer d'abord, nettoyer ensuite.

## Ce que ces outils montrent quand on les tourne vers soi

**Ghidra.** La NSA cite des analyses de routeurs Wi-Fi, d'électroniques de voiture et de machines à voter ; l'État du New Hampshire s'en est servi pour l'analyse criminalistique d'un scrutin de 2020 pour élire des représentants de l'État [2]. À votre échelle, l'idée est la même : voir ce qu'un programme fait réellement, sans en posséder le code.

**mitmproxy.** Placé entre une application et Internet, il montre les requêtes et les réponses. Il ne lit le HTTPS que si l'appareil fait confiance à son autorité de certification, que l'on installe soi-même, et les applications qui épinglent leur certificat refusent le sien [11]. Ce n'est pas une clé universelle. Pour ce que votre système envoie à votre insu, la note sur [la télémétrie de Windows 11](/notes/telemetrie-windows-11/) prend le problème par l'autre bout.

**Sherlock.** Il part d'un nom d'utilisateur et le cherche sur plus de 400 services ; une ligne de commande suffit [4]. Il ne trouve que ce nom-là, sur les services qu'il connaît : vos autres pseudonymes et vos comptes fermés lui échappent, et un homonyme peut s'afficher à votre place. Utilisez-le sur votre propre pseudonyme.

**ESP32 Marauder.** C'est le plus délicat : son dépôt le décrit comme une suite d'outils Wi-Fi et Bluetooth offensifs et défensifs pour ESP32 [7]. Son terrain, c'est un laboratoire radio à vous.

Ces outils ont enfin leurs propres failles. Le README de Ghidra signale des vulnérabilités connues dans certaines versions et renvoie à ses avis de sécurité [3]. Et ouvert ne veut pas dire audité : [l'ad-blocker ESP32-C3](/articles/esp32-c3-adblock/) a dû corriger des points d'accès sans authentification.

## Les outils progressent, l'habitude de regarder beaucoup moins

Les outils ne disparaîtront pas, ils progressent. Ghidra a reçu 26 versions supplémentaires en quatre ans [2], et la 12.1.4 date du 21 septembre 2026 [3]. Étudiants, chercheurs et attaquants disposent des mêmes versions. Reste une seule inconnue : qui regardera le premier vos dépôts, vos comptes et vos applications. Une clé oubliée dans un fork, un pseudonyme réutilisé depuis dix ans, une application qui contacte des serveurs que vous ne connaissez pas : tout cela reste en place tant que personne ne regarde.

## Un seul outil, un terrain à soi, cette semaine

Parmi les outils de sécurité open source, je vous propose d'en prendre un seul, et de le tourner vers ce que vous possédez de plus exposé. Pour la plupart des lecteurs, ce sera TruffleHog sur leurs propres dépôts. Si un secret encore actif apparaît, révoquez-le avant tout nettoyage [10]. Sherlock vient ensuite, avec un pseudonyme qui est le vôtre [4]. mitmproxy, Ghidra et Marauder demandent plus de préparation : réservez-les à une application, un programme et un réseau radio qui vous appartiennent.

Pour la suite — mots de passe, authentification, réaction à un incident —, le mémento [Cybersécurité](/mementos/cybersecurite/) tient en six pages.
