---
titre: "L'ad-blocker qui se glisse derrière votre routeur tient dans 50 Ko de mémoire"
these: "Un microcontrôleur à deux dollars filtre la publicité de toute une maison parce que son auteur a changé la représentation des données plutôt que le matériel."
identifiant: "esp32-c3-adblock"
rubriques: ["informatique", "electronique"]
date: 2026-10-05
sources:
  - libelle: "M-Abozaid, esp32-c3-adblock — dépôt GitHub et README"
    url: "https://github.com/M-Abozaid/esp32-c3-adblock"
    note: "Licence MIT. Empreintes FNV-1a de 40 bits triées en flash ; plus de 140 000 domaines dans ~0,7 Mo ; ~50 Ko de RAM ; ~18 lectures et ~10 ms par requête ; ~1,3 Mo et ~250 000 domaines avec la mise à jour à distance du micrologiciel, 537 000 sans ; 0 collision à 141 000 domaines, 1 à 537 000. Consulté le 5 octobre 2026."
  - libelle: "Pull request n° 2 — index de premier niveau et cache en mémoire vive"
    url: "https://github.com/M-Abozaid/esp32-c3-adblock/pull/2"
    note: "Fusionnée le 4 octobre 2026 : index de 4 096 entrées (~20 Ko) et cache de 256 entrées (~2 Ko) ; de ~115 à ~165 requêtes par seconde sur 141 000 domaines."
  - libelle: "Pull request n° 11 — points d'accès OTA et de commande, CSRF, XSS stockée"
    url: "https://github.com/M-Abozaid/esp32-c3-adblock/pull/11"
    note: "Fusionnée le 4 octobre 2026 : authentification, en-tête anti-CSRF, échappement du HTML."
motsCles: ["ESP32", "DNS", "bloqueur de publicité", "logiciel libre", "systèmes embarqués"]
licence: "CC BY 4.0"
miseEnAvant: false
brouillon: false
---

À une frontière, on ne retient pas la biographie de chaque voyageur interdit. On compare des
empreintes : quelques traits suffisent à reconnaître une personne parmi des millions, sans rien
savoir d'elle. Un petit projet open source applique ce principe à la publicité, et il tient sur une
carte minuscule.

## Le DNS, porte d'entrée de la publicité

Pour joindre un site, un téléphone, un ordinateur ou une télévision demande d'abord au DNS l'adresse
qui correspond à un nom. Un bloqueur DNS se glisse à cet endroit : si le nom figure sur une liste de
régies publicitaires ou de traqueurs, il répond « nulle part » (0.0.0.0) ; sinon, il transmet la
question au résolveur habituel. Le filtrage ne se règle plus appareil par appareil : il couvre tout
le réseau. Pi-hole, la référence du genre, fait ce travail sur un Raspberry Pi, avec des listes de
centaines de milliers de domaines.

## 141 000 noms, quelques centaines de kilo-octets

ESP32-C3 AdBlock, publié par M-Abozaid sous licence MIT, fait la même chose sur un ESP32-C3
SuperMini : un microcontrôleur Wi-Fi vendu autour de deux dollars, 4 Mo de mémoire flash, sans
mémoire vive additionnelle [1]. Le problème saute aux yeux. Garder 141 000 noms de domaine sous forme
de texte demanderait environ 2,5 Mo de mémoire vive, selon l'estimation du projet ; la puce n'en
possède que quelques centaines de kilo-octets. Sur le papier, c'est impossible.

## Garder l'empreinte, oublier le nom

L'auteur n'a pas cherché une puce plus grosse. Il a cessé de stocker les noms.

Chaque domaine de la liste est réduit, avant même d'arriver sur la carte, à une empreinte de
40 bits — cinq octets — calculée par la fonction FNV-1a. Les empreintes sont triées, puis écrites
dans la mémoire flash. Quand une requête arrive, la carte calcule l'empreinte du nom demandé et la
cherche par dichotomie : à chaque lecture, elle écarte la moitié de la table. Pour 141 000 entrées,
il faut environ dix-huit lectures et une dizaine de millisecondes, Wi-Fi compris. Un domaine bloqué
bloque aussi ses sous-domaines [1].

Résultat : plus de 140 000 domaines tiennent dans environ 0,7 Mo de flash, et le tout fonctionne avec
à peu près 50 Ko de mémoire vive. La mémoire vive ne sert plus de base de données : elle fait tourner
le réseau. La flash devient une bibliothèque de signatures.

Pourquoi 40 bits ? Avec 32, les collisions — deux noms différents, une même empreinte — deviennent
trop probables ; avec 64, la table enfle. À 40 bits, le projet ne relève aucune collision à 141 000
domaines et en estime une seule à 537 000.

## Chaque octet se paie

Les compromis sont affichés. La mise à jour à distance du micrologiciel exige deux emplacements pour
le programme : il ne reste alors qu'environ 1,3 Mo pour la liste, soit 250 000 domaines au plus. En
renonçant à cette mise à jour, on monte à 537 000 domaines [1]. La liste elle-même se reconstruit
avec un script Python à partir de listes publiques (StevenBlack et Hagezi Light par défaut), et le
dépôt fournit même le boîtier à imprimer en 3D.

Le projet bouge vite. Le 4 octobre 2026, deux contributions extérieures ont été intégrées. La
première place en mémoire vive un index de 4 096 entrées (environ 20 Ko) et un petit cache : environ
une lecture de flash par suffixe au lieu de dix-huit, et un débit mesuré qui passe d'environ 115
à 165 requêtes par seconde sur 141 000 domaines [2]. La seconde corrige des failles réelles : les
points d'accès qui commandaient la carte et sa mise à jour n'exigeaient aucune authentification, et
l'interface était exposée à la falsification de requêtes et à l'injection de script [3]. Le code
ouvert a permis de les trouver ; il ne garantissait pas qu'elles n'existaient pas.

## Ce qu'un filtre DNS ne voit pas

Un boîtier qui répond à toutes les questions DNS d'une maison n'est pas un gadget : c'est une
infrastructure. Il faut le traiter comme tel — interface jamais exposée à Internet, mises à jour
lues avant d'être installées, configuration sauvegardée.

Il faut aussi connaître ses limites. Le DNS ne voit que des noms : si la publicité vient du même
domaine que le contenu, il ne peut pas la séparer. Il ne voit ni le contenu des pages ni le trafic
chiffré, et un appareil réglé sur un autre résolveur passe à côté. Ce n'est ni un pare-feu, ni un
outil d'anonymat : c'est un filtre de noms, efficace dans ce périmètre.

## Changer la représentation avant d'acheter plus gros

La leçon dépasse la publicité. Devant un problème trop grand pour la machine, le premier réflexe
est d'acheter une machine plus grande. Ce projet pose une autre question : au lieu de « comment
faire tenir 140 000 domaines en mémoire ? », il demande « pourquoi faut-il garder les domaines en
mémoire ? ». La seconde question ouvre une architecture que la première n'aurait jamais trouvée.

Avant de changer de matériel, changer la représentation des données. Le gain vient de là.
