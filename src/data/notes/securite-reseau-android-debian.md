---
titre: "Tablette Android et ordinateur Debian : quoi installer pour sécuriser et gérer son réseau"
resume: "Ce qu'il faut installer sur une tablette Android 17 et un ordinateur Debian 13 pour les protéger, puis inventorier, vérifier et administrer son réseau, du réseau domestique simple au parc de NAS, serveur et machines virtuelles."
identifiant: "securite-reseau-android-debian"
categories: ["informatique", "logiciel-libre"]
motsCles: ["cybersécurité", "vie privée", "Android", "Debian", "logiciel libre"]
date: 2026-10-24
---

## La réponse courte

La tablette et l'ordinateur sont deux outils de contrôle : ils servent à vérifier et à administrer le
réseau, et n'offrent eux-mêmes aucun service. Chaque outil a une version gratuite qui suffit ici ; Fing
réserve ses fonctions avancées à un abonnement.

**Sur la tablette Android**

| Application | Pour quoi faire | Où la prendre |
|---|---|---|
| Bitwarden | des mots de passe uniques pour la box, les comptes et les machines | [Play Store](https://play.google.com/store/apps/details?id=com.x8bit.bitwarden) |
| Fing | voir les appareils connectés ; ping, traceroute, ports ouverts, débit | [Play Store](https://play.google.com/store/apps/details?id=com.overlook.android.fing) |
| Rethink | couper Internet à une application ; chiffrer le DNS | [Play Store](https://play.google.com/store/apps/details?id=com.celzero.bravedns) ou [F-Droid](https://f-droid.org/packages/com.celzero.bravedns/) |
| Termux | un terminal, et le client SSH du paquet `openssh` | [F-Droid](https://f-droid.org/packages/com.termux/) ou GitHub |
| WireGuard | joindre son réseau de l'extérieur, s'il existe un serveur WireGuard | [Play Store](https://play.google.com/store/apps/details?id=com.wireguard.android) |

Déjà là, à régler : mises à jour, Play Protect, DNS privé, autorisations (section 1).

**Sur l'ordinateur Debian**

```bash
sudo apt update
sudo apt install ufw unattended-upgrades nmap arp-scan bind9-dnsutils mtr-tiny tcpdump openssh-client lynis
```

| Paquet | Pour quoi faire |
|---|---|
| `ufw` | fermer l'ordinateur aux connexions entrantes |
| `unattended-upgrades` | installer seul les correctifs de sécurité |
| `nmap` | trouver les appareils, lister leurs ports et leurs services |
| `arp-scan` | lister les appareils du réseau local |
| `bind9-dnsutils` | `dig`, pour interroger le DNS |
| `mtr-tiny` | `mtr`, qui réunit traceroute et ping : la route et les pertes jusqu'à un serveur |
| `tcpdump` | capturer le trafic en terminal |
| `openssh-client` | administrer d'autres machines par SSH |
| `lynis` | auditer la configuration de l'ordinateur |

Déjà là : AppArmor, actif par défaut depuis Debian 10, et le journal systemd (`journalctl`).

**Plus tard, si le besoin existe** : Wireshark pour lire les captures (section 8), systemd-resolved pour
le DNS chiffré (section 4), WireGuard en client (section 10), OpenSnitch ; et, sur une autre machine que
l'ordinateur, Pi-hole, Cockpit, fail2ban (sections 9 et 11).

## Selon la taille du réseau

Les outils de base restent les mêmes ; c'est leur usage qui grandit avec le réseau.

**Réseau simple** — une box ou un routeur, un téléviseur, un ordinateur, un smartphone :

- régler les appareils (sections 1, 3 et 4) et la box (section 5) ;
- de temps en temps, un relevé Fing ou `arp-scan`, comparé à la liste de la box (section 6) ;
- `nmap` sur la box une fois, puis après chaque changement de ses réglages (section 7) ;
- rien d'autre à installer : ni serveur, ni accès à distance.

**À chaque appareil ajouté** :

- changer son mot de passe par défaut, le mettre à jour, lui et l'application qui le pilote ;
- l'inscrire dans la liste des appareils connus ;
- un téléviseur, une box TV ou un autre objet connecté va sur le réseau séparé de la box, celui des
  invités et des objets connectés : [Cybermalveillance.gouv.fr](https://www.cybermalveillance.gouv.fr/tous-nos-contenus/bonnes-pratiques/securite-objets-connectes-iot) conseille de limiter leur accès aux autres
  appareils, et de les éteindre quand ils ne servent pas.

**Réseau complexe** — par exemple 2 NAS, 3 machines VirtualBox, 4 ordinateurs, 3 téléphones, 2 tablettes,
1 serveur, 2 box TV :

- **Un inventaire tenu à jour** : pour chaque appareil, son nom, son rôle, son adresse IP et son adresse
  MAC — aléatoire, et propre à chaque réseau, pour les téléphones et les tablettes. Le comparer chaque mois
  aux relevés `arp-scan` et `nmap -sn` et à la liste de la box.
- **Téléphones et tablettes** : les mêmes réglages sur chacun (section 1), DNS privé compris.
- **Ordinateurs** : sur chacun, le pare-feu fermé à l'entrée et les mises à jour automatiques
  (section 3) ; `ss -tulpn` pour vérifier que rien n'écoute sans raison.
- **Machines VirtualBox** : en NAT, le mode par défaut, la machine virtuelle se trouve derrière un routeur
  virtuel et reste injoignable de l'extérieur. En mode pont (*bridged*), elle est branchée au réseau comme
  par un câble : un appareil de plus, à inventorier, mettre à jour et examiner comme les autres. Le mode
  *host-only* la limite à l'hôte et aux autres machines virtuelles — de quoi s'exercer sans toucher au
  réseau.
- **NAS et serveur** : administrés par leur interface ou par SSH avec des clés, depuis l'ordinateur ou la
  tablette (section 9) ; mis à jour ; `nmap -sV` pour repérer les services ouverts qui ne servent pas.
  Leurs interfaces d'administration ne s'ouvrent jamais sur Internet : on les joint par WireGuard
  (section 10).
- **Le serveur porte les services du réseau** — WireGuard, Pi-hole, Cockpit, fail2ban (sections 9 à 11) —,
  jamais l'ordinateur de travail.
- **Le trafic d'un appareil précis** : capturer sur cet appareil, ou passer par le port miroir d'un
  commutateur administrable, puis lire la capture dans Wireshark (section 8).

## Avant de commencer

- **Versions visées.** Android 17, publié par Google le 16 juin 2026, et Debian 13 « trixie », version
  13.7 du 12 septembre 2026. Les menus Android cités sont ceux de l'aide de Google ; leurs noms changent
  d'un fabricant à l'autre : à défaut, taper le nom du réglage dans la recherche des *Paramètres*.
- **Le principe.** L'ordinateur reste un poste de travail : ni serveur SSH ni serveur VPN. Ces rôles
  reviennent à la box ou à une machine dédiée, toujours allumée. La tablette sert de console : le
  navigateur pour l'interface de la box, Fing, Termux.
- **L'ordre des sections.** 1 à 5 : protéger les deux appareils et la box. 6 à 8 : inventorier et
  vérifier. 9 à 11 : administrer d'autres machines et joindre le réseau à distance, surtout utiles sur un
  réseau complexe.
- **Périmètre.** Les commandes d'examen (`nmap`, `arp-scan`, `tcpdump`) ne visent que ses propres
  appareils, ou ceux dont le propriétaire a donné son accord : on
  [audite ce qui nous appartient](/articles/outils-securite-open-source/).
- **Ce qu'on ne peut pas en attendre.** Le DNS chiffré ne protège que les requêtes DNS. Un VPN chiffre le
  trafic entre ses deux bouts ; il ne rend pas sain un appareil compromis. Un examen qui ne trouve aucun
  port ouvert ne prouve pas qu'un appareil est sûr.
- **Pour s'exercer.** Les réglages risqués s'essaient d'abord dans une machine virtuelle
  ([mémento VM & Docker](/mementos/vm-docker/)) ; les commandes de base sont dans le
  [mémento Linux](/mementos/linux/), les notions dans le [mémento Cybersécurité](/mementos/cybersecurite/).
- **Exemples.** Le réseau local est noté `192.168.1.0/24`, une machine administrée `192.168.1.50`, son
  compte `utilisateur` : remplacer par ses propres valeurs.

## 1. Tablette : ce qui est déjà là

- **Mises à jour.** *Paramètres* › *À propos de la tablette* › *Version d'Android* : la version et la mise
  à jour de sécurité installées. *Paramètres* › *Système* › *Mises à jour logicielles* : installer ce qui
  est proposé. Le calendrier dépend du fabricant ; un appareil trop ancien ne reçoit plus les nouvelles
  versions.
- **Play Protect.** Play Store › icône du profil › *Play Protect* › *Paramètres* : laisser activé
  *Analyser les applications avec Play Protect*, le réglage par défaut. Il contrôle les applications du
  Play Store avant leur téléchargement et cherche sur l'appareil les applications dangereuses venues
  d'ailleurs.
- **DNS privé.** Présent depuis Android 9, c'est du DNS sur TLS : les requêtes partent chiffrées.
  *Paramètres* › *Réseau et Internet* › *DNS privé* : *Désactivé*, *Automatique* ou *Nom d'hôte du
  fournisseur DNS privé* ; par défaut, la tablette l'utilise avec tous les réseaux compatibles. Pour imposer un résolveur, choisir ce dernier, saisir par
  exemple `dns.quad9.net`, puis *Enregistrer*. Quad9, fondation de droit suisse, bloque les domaines
  malveillants connus et valide DNSSEC. Quand un VPN est actif, le DNS privé n'est pas utilisé, signale
  Quad9 : le DNS se règle alors dans le VPN.
- **Wi-Fi.** Depuis Android 10, la tablette présente par défaut à chaque réseau une adresse MAC
  aléatoire, propre à ce réseau ; on la lit sous *Adresse MAC aléatoire*, dans *Paramètres* › *Réseau et
  Internet* › *Internet* › icône *Paramètres* à côté du réseau, en bas de page. Android prend en charge WPA3 depuis la version 10. Éviter
  les Wi-Fi publics ; retirer des réseaux enregistrés ceux qui ne servent plus.
- **Autorisations.** *Paramètres* › *Applications* › l'application › *Autorisations*, ou *Paramètres* ›
  *Sécurité et confidentialité* › *Confidentialité* › *Gestionnaire d'autorisations*. Le groupe
  *Appareils à proximité* permet de trouver les appareils proches et de s'y connecter. Depuis Android 17,
  une application qui cible cette version n'atteint plus le réseau local — box, imprimante, objets
  connectés — sans un sélecteur du système ou l'autorisation `ACCESS_LOCAL_NETWORK`, rangée dans ce même
  groupe. La refuser aux applications qui n'ont rien à faire sur le réseau de la maison.
- **Provenance.** N'installer que depuis le Play Store ou F-Droid ; désinstaller ce qui ne sert plus.

## 2. Tablette : les applications à ajouter

- **[Bitwarden](https://bitwarden.com/)**, gestionnaire de mots de passe libre, chiffré de bout en bout,
  gratuit pour l'usage de base. Un mot de passe principal long et unique ; garder hors de la tablette de
  quoi récupérer le coffre. Il reçoit ensuite les mots de passe de la box, du Wi-Fi et des machines.
- **[Fing](https://www.fing.com/app/)**, gratuit pour un usage personnel : la liste des appareils
  connectés, ping, traceroute, examen des ports ouverts, test de débit. Ses noms d'appareils sont une
  aide, pas une preuve : comparer avec la liste de la box (section 6).
- **[Rethink](https://github.com/celzero/rethink-app)**, libre (licence Apache 2.0). L'accès à Internet ne
  figurant pas parmi les autorisations réglables d'Android, c'est lui qui le coupe à une application, en
  Wi-Fi comme en données mobiles ; il chiffre aussi le DNS (DNS sur HTTPS, DNS sur TLS, DNSCrypt). Il passe
  par les interfaces VPN d'Android, qui n'admet qu'un service VPN actif par utilisateur : Rethink et
  l'application WireGuard ne tournent pas ensemble, mais Rethink sait se connecter lui-même à un serveur
  WireGuard.
- **[Termux](https://github.com/termux/termux-app)**, terminal et environnement Linux pour Android. Le
  prendre sur F-Droid (installer d'abord [F-Droid](https://f-droid.org/)) ou sur GitHub, et tous ses
  modules à la même source : son dépôt exige de ne pas les mêler. La version Google Play, pour Android 11 et
  suivants, est encore en développement. Son paquet `openssh`, installé avec le gestionnaire de paquets de
  Termux, donne `ssh` et `ssh-keygen` (section 9).
- **WireGuard**, seulement quand un serveur WireGuard existe (section 10) : l'application seule ne crée
  aucun VPN.

## 3. Ordinateur : mises à jour et pare-feu

```bash
sudo apt update
sudo apt upgrade
```

- **Dépôt de sécurité.** Dans `debian.sources`, sous `/etc/apt/sources.list.d/` (format deb822), une
  strophe doit porter `URIs: http://security.debian.org/debian-security/` et `Suites: trixie-security`. APT
  lit aussi l'ancien format, une ligne `deb` dans `/etc/apt/sources.list`.
- **Mises à jour automatiques.**

```bash
sudo dpkg-reconfigure unattended-upgrades
sudo unattended-upgrade --dry-run --debug
```

La configuration par défaut installe les correctifs de sécurité, pas les nouvelles fonctions ;
`--dry-run` simule sans rien installer. Ses propres réglages vont dans
`/etc/apt/apt.conf.d/52unattended-upgrades-local`, le compte rendu dans `/var/log/unattended-upgrades/`.
S'abonner à la liste `debian-security-announce`, où paraissent les avis de sécurité de Debian.

**Le pare-feu, UFW**

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw enable
sudo ufw status verbose
```

- Aucune règle `allow` : l'ordinateur n'offre aucun service. Les deux règles `default` reprennent la
  politique d'UFW à l'installation — entrant refusé, sortant permis — et la rendent explicite.
- Une règle ajoutée autrefois se retire : `sudo ufw status numbered`, puis `sudo ufw delete 3` avec le
  numéro affiché.
- `sudo ufw logging on` journalise au niveau *low* : les paquets refusés par la politique, avec une limite
  de débit.

**Ou nftables, sans UFW**

nftables est le cadre de pare-feu par défaut de Debian depuis la version 10 ; UFW, façade plus simple,
passe par iptables. Choisir l'un ou l'autre : le wiki Debian déconseille de mêler des règles nftables et
iptables, sauf à savoir exactement ce que l'on fait. Voici, commenté en français, le jeu de règles que le
wiki nftables propose pour un poste de travail, à placer dans `/etc/nftables.conf` :

```
flush ruleset

table inet filter {
    chain input {
        type filter hook input priority 0; policy drop;

        # trafic de la machine vers elle-même
        iif lo accept

        # réponses aux connexions ouvertes par la machine
        ct state established,related accept

        # découverte des voisins IPv6, sans quoi IPv6 cesse de fonctionner
        icmpv6 type { nd-neighbor-solicit, nd-router-advert, nd-neighbor-advert } accept
    }
}
```

```bash
sudo apt install nftables
sudo systemctl enable nftables.service
sudo nft -c -f /etc/nftables.conf
sudo nft -f /etc/nftables.conf
sudo nft list ruleset
```

`-c` vérifie le fichier sans rien appliquer, `-f` le charge, `list ruleset` affiche les règles en
vigueur ; `flush ruleset` efface d'abord toutes les tables, y compris celles d'un autre logiciel.

**Vérifier que rien n'écoute**

```bash
sudo ss -tulpn
```

TCP (`-t`) et UDP (`-u`), en écoute seulement (`-l`), avec le programme (`-p`), sans traduction des noms
(`-n`). Chaque ligne est un service qui attend des connexions ; une adresse locale `127.0.0.1` ou `[::1]`
n'est joignable que depuis la machine. Un serveur SSH installé sans usage s'enlève :
`sudo apt remove openssh-server`.

## 4. Ordinateur : DNS chiffré

Sous Debian 13, systemd-resolved est un paquet à part ; l'installer remplace `/etc/resolv.conf`, qui
passe sous sa gestion.

```bash
sudo apt install systemd-resolved
```

Fichier `dns-chiffre.conf`, dans `/etc/systemd/resolved.conf.d/` :

```
[Resolve]
DNS=9.9.9.9#dns.quad9.net 149.112.112.112#dns.quad9.net
DNSOverTLS=yes
```

```bash
sudo systemctl restart systemd-resolved
resolvectl status
```

- Le nom placé après `#` est transmis au serveur à l'ouverture de la connexion TLS (indication du nom du
  serveur, SNI).
- `DNSOverTLS=yes` est le mode strict : si le serveur ne parle pas TLS, les requêtes échouent au lieu de
  partir en clair. Le mode `opportunistic` retombe en clair et s'expose aux attaques par rétrogradation.
  Valeur par défaut : `no`.
- `resolvectl status` montre les réglages DNS en vigueur, globaux et par interface. Si l'interface garde
  le serveur DNS de la box, le lui retirer dans NetworkManager :

```bash
nmcli connection show
sudo nmcli connection modify "nom-de-la-connexion" ipv4.ignore-auto-dns yes ipv6.ignore-auto-dns yes
sudo nmcli connection up "nom-de-la-connexion"
```

- Contrôle : pendant une navigation, `sudo tcpdump -n -i <interface> port 53` ne devrait plus rien
  montrer (nom de l'interface : `ip -br link`).

## 5. La box et le Wi-Fi

L'interface de la box s'ouvre dans le navigateur de la tablette ou de l'ordinateur ; son adresse est le
plus souvent celle de la passerelle, la ligne `default via` de `ip route`. Les recommandations de
[Cybermalveillance.gouv.fr](https://www.cybermalveillance.gouv.fr/tous-nos-contenus/bonnes-pratiques/comment-securiser-son-reseau-wi-fi),
dans l'ordre :

1. Changer le mot de passe Wi-Fi par défaut, et celui de l'interface d'administration de la box : deux
   mots de passe différents, rangés dans Bitwarden.
2. Désactiver le WPS s'il ne sert pas.
3. Désactiver l'administration à distance.
4. Chiffrer en WPA2 ou WPA3 — WPA3 si tous les appareils le prennent en charge ; en mode de transition
   WPA2/WPA3, les appareils récents se connectent en WPA3, les anciens en WPA2.
5. Mettre à jour la box et les équipements réseau.
6. Changer le nom par défaut du réseau.
7. Maîtriser qui se connecte, et quand.
8. Séparer un réseau pour les invités et les objets connectés.
9. Éviter les Wi-Fi publics ou inconnus.

S'y ajoute : supprimer les redirections de ports qui ne servent plus.

## 6. Inventorier le réseau

```bash
ip -br addr
ip route
sudo arp-scan --localnet
nmap -sn 192.168.1.0/24
```

- `ip -br addr` donne l'adresse de l'ordinateur ; `ip route`, la passerelle.
- `arp-scan --localnet` balaie le réseau de l'interface (`--interface` en désigne une autre) ; il ne voit
  pas au-delà de ce réseau : un réseau invité isolé, par exemple, lui échappe.
- `nmap -sn` cherche les hôtes présents sans examiner leurs ports ; `192.168.1.0/24` couvre les 256
  adresses du réseau.
- Sur la tablette, Fing fait le même relevé.
- Comparer à la liste des appareils de la box. Un inconnu n'est pas forcément un intrus — adresses MAC
  aléatoires, appareils en veille : l'identifier avant de le bloquer. Tenir la liste des appareils connus
  dans un document protégé.

## 7. Vérifier les ports, le DNS et la route

**Les ports et services d'un appareil** — la box d'abord, puis chaque machine :

```bash
nmap -sV 192.168.1.50
nmap -p- 192.168.1.50
```

- Sans `-p`, nmap examine les 1 000 ports les plus courants ; `-p-` les prend tous, de 1 à 65 535 ;
  `-sV` cherche quel service, et quelle version, répond.
- *open* : un programme accepte les connexions ; *closed* : le port répond, personne n'écoute ;
  *filtered* : un filtre empêche de conclure. Un service inattendu sur la box se désactive dans son
  interface.

**Le DNS**

```bash
dig debian.org
dig @9.9.9.9 debian.org
```

Sans `@`, `dig` interroge le serveur de `/etc/resolv.conf` ; avec `@`, celui qu'on désigne. Une réponse
différente n'est pas forcément une attaque : caches et réseaux de diffusion varient leurs réponses.

**La route**

```bash
mtr -r -c 10 debian.org
```

`-r` produit un rapport après le nombre de cycles fixé par `-c`, d'une seconde chacun. Une étape muette
ne prouve pas une panne : des routeurs ne répondent pas aux sondes.

## 8. Observer le trafic, lire les journaux, auditer l'ordinateur

**Le trafic**

```bash
sudo tcpdump -D
sudo tcpdump -n -i <interface> port 53
```

`-D` liste les interfaces, `-n` garde les adresses en chiffres, `port 53` ne retient que le DNS classique. Sur un
réseau commuté, l'ordinateur ne voit que son propre trafic et les diffusions : pour observer un autre
appareil, capturer sur cet appareil, ou passer par le port miroir d'un commutateur administrable. Une
capture contient des données sensibles : ne pas la partager sans l'avoir lue.

Pour lire les captures à l'écran, Wireshark : `sudo apt install wireshark`, puis
`sudo dpkg-reconfigure wireshark-common` (répondre *Oui* pour la capture sans droits d'administrateur),
`sudo usermod -a -G wireshark utilisateur`, et se reconnecter.

**Les journaux**

Depuis Debian 12, rsyslog n'est plus installé par défaut : les journaux sont ceux de systemd, rangés sous
`/var/log/journal`.

```bash
journalctl -p warning -b
journalctl -k
journalctl -f
```

Les avertissements et plus graves depuis le démarrage ; les messages du noyau, où UFW envoie les paquets
qu'il journalise ; l'affichage en continu.

**L'audit de l'ordinateur**

```bash
sudo lynis audit system
sudo aa-status
```

- Lynis passe la configuration en revue et propose des mesures : les lire avant de les appliquer. Son
  journal, `/var/log/lynis.log`, est effacé à chaque examen — le copier pour comparer ; le rapport est
  `/var/log/lynis-report.dat`.
- `aa-status` liste les profils AppArmor chargés et leur mode, *enforce* (bloque) ou *complain* (se
  contente de noter).

## 9. Administrer d'autres machines par SSH

Une machine administrée — un serveur, un Raspberry Pi, un NAS sous Debian — se pilote depuis
l'ordinateur ou depuis Termux, sur la tablette.

**Côté ordinateur ou tablette**

```bash
ssh-keygen -t ed25519
ssh-copy-id utilisateur@192.168.1.50
ssh utilisateur@192.168.1.50
```

- `ed25519` est déjà le type par défaut de `ssh-keygen` sous Debian 13. Donner une phrase de passe quand
  elle est demandée.
- `ssh-copy-id` dépose la clé publique sur la machine. Vérifier que la connexion par clé fonctionne avant
  d'aller plus loin.
- À la première connexion, comparer l'empreinte affichée à celle de la machine, lue sur place :
  `ssh-keygen -l -f /etc/ssh/ssh_host_ed25519_key.pub`.

**Côté machine administrée**

Un fichier `durcissement.conf`, dans `/etc/ssh/sshd_config.d/` :

```
PasswordAuthentication no
PermitRootLogin no
MaxAuthTries 3
AllowUsers utilisateur
```

- Debian lit `sshd_config.d/` avant le fichier principal, et pour chaque mot-clé la première valeur
  trouvée l'emporte : ce fichier prévaut.
- Ce qui change : par défaut, les mots de passe sont acceptés (`yes`), root peut entrer par clé
  (`prohibit-password`) et six essais sont permis. Debian règle déjà `KbdInteractiveAuthentication` à
  `no`.

```bash
sudo sshd -t
sudo sshd -T | grep -i -E 'passwordauthentication|permitrootlogin'
sudo systemctl restart ssh
sudo ufw allow proto tcp from 192.168.1.0/24 to any port 22
```

- `-t` vérifie la configuration et les clés ; `-T` affiche la configuration effective. Garder la session
  ouverte et tester une nouvelle connexion depuis un second terminal avant de la fermer.
- La règle UFW n'ouvre SSH qu'au réseau local. Ne pas y ajouter `ufw limit ssh/tcp`, qui ouvrirait SSH à
  toutes les adresses, avec une simple limite de débit.
- `sudo apt install fail2ban` : sous Debian 13, le paquet surveille d'emblée SSH (la prison `sshd`) dans le
  journal systemd et bannit par nftables ; `sudo fail2ban-client status sshd` en donne l'état.
- Les mises à jour automatiques de la section 3 valent aussi pour cette machine ;
  `journalctl -u ssh --since today` y montre les connexions du jour.

## 10. Joindre son réseau à distance : WireGuard

Utile seulement pour administrer la maison depuis l'extérieur. Le serveur ne va pas sur l'ordinateur : il
va sur la box, si elle le propose (suivre alors sa notice), ou sur la machine administrée de la section 9.
La tablette et l'ordinateur en sont les clients. Il faut que la box redirige vers le serveur un port UDP
— 51820, celui des exemples de wireguard.com — et qu'elle ait une adresse publique joignable : à vérifier
auprès du fournisseur d'accès.

**Sur le serveur Debian**

```bash
sudo apt install wireguard qrencode
sudo -i
cd /etc/wireguard
( umask 0077 && wg genkey | tee serveur.key | wg pubkey > serveur.pub )
( umask 0077 && wg genkey | tee tablette.key | wg pubkey > tablette.pub )
```

`/etc/wireguard/wg0.conf` ; le second bloc `[Peer]` est celui de l'ordinateur :

```
[Interface]
Address = 10.8.0.1/24
ListenPort = 51820
PrivateKey = <contenu de serveur.key>

[Peer]
PublicKey = <contenu de tablette.pub>
AllowedIPs = 10.8.0.2/32

[Peer]
PublicKey = <contenu de ordinateur.pub>
AllowedIPs = 10.8.0.3/32
```

`tablette.conf`, tunnel partiel vers le seul serveur :

```
[Interface]
PrivateKey = <contenu de tablette.key>
Address = 10.8.0.2/24

[Peer]
PublicKey = <contenu de serveur.pub>
AllowedIPs = 10.8.0.1/32
Endpoint = <adresse publique ou nom de la box>:51820
PersistentKeepalive = 25
```

```bash
qrencode -t ansiutf8 < tablette.conf
systemctl enable wg-quick@wg0
systemctl start wg-quick@wg0
wg show wg0
exit
```

Pare-feu du serveur : `sudo ufw allow 51820/udp`, puis SSH par le tunnel,
`sudo ufw allow proto tcp from 10.8.0.0/24 to any port 22`.

**Sur la tablette** : l'application WireGuard importe `tablette.conf` en lisant le code QR. Ensuite,
`ssh utilisateur@10.8.0.1` depuis Termux.

**Sur l'ordinateur** : `sudo apt install wireguard`, puis, dans `/etc/wireguard`, la même commande de
clés pour `ordinateur.key` et `ordinateur.pub` — la clé privée ne quitte pas l'ordinateur, seule
`ordinateur.pub` va au serveur. `/etc/wireguard/wg0.conf` reprend `tablette.conf`, avec la clé de
l'ordinateur et `Address = 10.8.0.3/24`. Le tunnel s'ouvre par `sudo wg-quick up wg0` et se ferme par
`sudo wg-quick down wg0`.

- `PersistentKeepalive = 25` garde la liaison ouverte à travers les NAT et les pare-feu ; wireguard.com
  tient 25 secondes pour un intervalle qui convient à une grande variété de pare-feu.
- Les fichiers `.key` et `tablette.conf` contiennent des clés privées : ne jamais les envoyer par message
  ni les publier ; une fois la tablette configurée, ne pas laisser `tablette.conf` et `tablette.key` sur le
  serveur.
- **Tunnel partiel** (ci-dessus) : seul le trafic vers `10.8.0.1` passe par le tunnel. Ne pas activer
  *Bloquer les connexions sans VPN*, qui couperait tout le reste.
- **Tunnel complet**, pour un Wi-Fi public : `AllowedIPs = 0.0.0.0/0` côté client, et côté serveur le
  transfert et la traduction d'adresses que décrit le [wiki Debian](https://wiki.debian.org/WireGuard)
  (lignes `PostUp` et `PostDown`). Ajouter `DNS = 9.9.9.9` côté client, puisque le DNS privé ne s'applique
  plus. Sur la tablette : *Paramètres* › *Réseau et Internet* › *VPN* › icône *Paramètres* à côté de
  WireGuard › *VPN permanent*, et *Bloquer les connexions sans VPN*.
- **Écart relevé.** La documentation Android pour les développeurs ouvre le VPN permanent aux
  applications VPN depuis Android 7 ; l'aide grand public dit l'option absente pour un VPN configuré par
  une application. Vérifier sur la tablette.

## 11. Plus tard, selon le besoin

| Outil | Où | Ce qu'il fait | Où le trouver |
|---|---|---|---|
| OpenSnitch | ordinateur | pare-feu applicatif interactif : filtre les connexions sortantes, programme par programme | Debian 13 : `opensnitch` et `python3-opensnitch-ui` (1.6.9) |
| Pi-hole | machine dédiée | filtrage DNS pour tout le réseau ; un bloqueur DNS [tient même sur un ESP32](/articles/esp32-c3-adblock/) | [docs.pi-hole.net](https://docs.pi-hole.net/) ; au moins 512 Mo de mémoire et 2 Go de disque, port 53 |
| Cockpit | machine administrée | administration dans le navigateur, `https://adresse:9090` | Debian ; le projet conseille `trixie-backports`. Port 9090 ouvert au seul réseau local ou au tunnel |

## Entretien

- **Chaque semaine** : mises à jour d'Android, de ses applications et de Debian ; sur une machine
  administrée, les connexions SSH et `sudo fail2ban-client status sshd`.
- **Chaque mois** : `arp-scan` ou Fing, comparés à la liste de la box ; `nmap` sur la box et les machines ;
  `sudo ss -tulpn` sur l'ordinateur ; `sudo ufw status numbered` ou `sudo nft list ruleset`, pour retirer
  les règles périmées ; les redirections de la box ; les autorisations *Appareils à proximité* ;
  `sudo lynis audit system`, comparé au rapport précédent.
- **Après chaque changement de pare-feu ou de SSH** : tester depuis une seconde session avant de fermer la
  première ; noter la date, la modification et la manière de l'annuler.

D'après un guide reçu le 24 octobre 2026, condensé et corrigé. Commandes, options, valeurs par défaut
et menus vérifiés le 24 octobre 2026 dans les [pages de manuel de Debian 13](https://manpages.debian.org/trixie/),
le [wiki Debian](https://wiki.debian.org/nftables) (nftables, WireGuard, UnattendedUpgrades, AppArmor,
SSH), le [wiki nftables](https://wiki.nftables.org/), [wireguard.com](https://www.wireguard.com/quickstart/),
l'[aide Android](https://support.google.com/android/answer/9654714?hl=fr), la
[documentation Android](https://developer.android.com/develop/connectivity/vpn?hl=fr),
[source.android.com](https://source.android.com/docs/core/connect/wifi-mac-randomization-behavior), le
[wiki de Wireshark](https://wiki.wireshark.org/CaptureSetup/Ethernet), le
[manuel de VirtualBox](https://docs.oracle.com/en/virtualization/virtualbox/7.2/user/networkingdetails.html),
[Cybermalveillance.gouv.fr](https://www.cybermalveillance.gouv.fr/), la
[documentation de Quad9](https://docs.quad9.net/Setup_Guides/Android/Android_9+_%28Encrypted%29/) et les
sites de Bitwarden, Fing, Rethink et Termux.
