---
titre: "Supprimer la télémétrie de Windows 11 (méthode Korben)"
resume: "Réduire au minimum ce que Windows 11 envoie à Microsoft : réglages natifs, compte local, service de télémétrie, puis les outils libres recommandés par Korben.info."
identifiant: "telemetrie-windows-11"
categories: ["informatique", "logiciel-libre"]
motsCles: ["Windows 11", "vie privée", "télémétrie", "logiciel libre"]
date: 2026-10-01
---

## Avant de commencer

- **Ce qu'on peut attendre.** Sur Windows 11 Famille et Professionnel, les données de diagnostic
  « obligatoires » ne se coupent pas entièrement : seules les éditions Entreprise et Éducation
  permettent de les désactiver. On réduit la collecte, on ne la supprime pas tout à fait.
- **Créer un point de restauration** : rechercher « Créer un point de restauration », puis
  *Protection du système* › *Créer*.

## 1. Réglages natifs

- *Paramètres* › *Confidentialité et sécurité* › *Diagnostics et commentaires* : désactiver les
  données de diagnostic facultatives et les expériences personnalisées ; fréquence des commentaires :
  *Jamais*.
- *Paramètres* › *Confidentialité et sécurité* › *Général* : tout désactiver (identifiant de
  publicité, suivi du lancement des applications, contenu suggéré).
- *Paramètres* › *Confidentialité et sécurité* › *Historique des activités* : désactiver.
- DNS chiffré : *Paramètres* › *Réseau et Internet* › *Wi-Fi* ou *Ethernet* › *Propriétés du
  matériel* › *Attribution du serveur DNS* › *Modifier* : choisir un résolveur qui accepte le DNS over
  HTTPS et régler le chiffrement sur *Chiffré uniquement*.

## 2. Compte local

Sans compte Microsoft, Windows collecte nettement moins. Les astuces pour l'éviter à l'installation
changent d'une version à l'autre ([tutoriel Korben](https://korben.info/windows-11-installation-sans-compte-microsoft-contournement.html)) ;
les voies les plus stables restent un fichier de réponse ou Flyoobe (point 5).

## 3. Le service de télémétrie

`services.msc` › **Expériences des utilisateurs connectés et télémétrie** (DiagTrack) › type de
démarrage *Désactivé*, puis *Arrêter*.

## 4. BloatyNosy Nue — tout au même endroit

L'outil mis en avant par Korben : un seul `.exe`, libre, sans installation, qui regroupe
confidentialité, applications préinstallées et publicités.

1. Télécharger la dernière version sur [github.com/builtbybel/Bloatynosy](https://github.com/builtbybel/Bloatynosy/releases).
2. Clic droit › *Exécuter en tant qu'administrateur*.
3. Cocher ce qui relève de la télémétrie et des diagnostics, puis les applications et publicités
   indésirables ; appliquer, redémarrer.

Dernière version : 1.0.20, janvier 2025 — l'outil n'a pas été mis à jour depuis.

## 5. Partir d'une installation propre

- [**Flyoobe**](https://github.com/builtbybel/Flyoobe) — du même auteur, successeur de Flyby11 :
  règle l'installation et le premier démarrage (compte, applications, mises à jour) et contourne les
  exigences matérielles. En développement actif (version 3). Des imitations circulent : le
  télécharger uniquement depuis `github.com/builtbybel`.
- [**UnattendedWinstall**](https://github.com/memstechtips/UnattendedWinstall) — fichiers de
  réponse qui allègent et personnalisent Windows dès l'installation.
- [**Tiny11**](https://github.com/ntdevlabs/tiny11builder) — scripts qui fabriquent une image
  allégée de Windows 11.
- [**OFGB**](https://github.com/xM4ddy/OFGB) — retire les publicités des menus de Windows 11
  (non mis à jour depuis 2024).

## Après chaque mise à jour majeure

Certaines rétablissent des réglages : repasser les points 1, 3 et 4. Ne pas pour autant différer
les mises à jour de sécurité.

D'après les articles de [Korben.info](https://korben.info/) (2024-2025) ; outils et liens vérifiés
le 1er octobre 2026.
