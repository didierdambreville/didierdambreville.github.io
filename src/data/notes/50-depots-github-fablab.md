---
titre: "50 dépôts open source pour équiper un FabLab"
resume: "Cinquante projets libres pour un atelier de fabrication numérique : conception, électronique, impression 3D, CNC, laser, machines open hardware, gestion d'atelier — liens et activité vérifiés."
identifiant: "50-depots-github-fablab"
categories: ["fabrication", "logiciel-libre", "informatique"]
motsCles: ["FabLab", "logiciel libre", "open hardware", "fabrication numérique", "GitHub"]
date: 2026-10-05
---

## Par où commencer

- **Le socle** : FreeCAD et KiCad pour concevoir, PrusaSlicer ou OrcaSlicer pour trancher, Marlin
  ou Klipper sur les imprimantes, OctoPrint ou Mainsail pour les piloter.
- **Ensuite** : VisiCut pour le laser, grblHAL ou FluidNC pour la CNC, Fab-Manager pour les
  réservations et la facturation.
- **Pour réduire les coûts** : construire ses machines à partir des plans ouverts (Open Lab Starter
  Kit, Voron, Fabulaser).

## Conception 3D et 2D

1. [FreeCAD](https://github.com/FreeCAD/FreeCAD) — modeleur 3D paramétrique, la référence libre pour les pièces mécaniques.
2. [LibreCAD](https://github.com/LibreCAD/LibreCAD) — CAO 2D : plans et fichiers DXF pour la découpe.
3. [OpenSCAD](https://github.com/openscad/openscad) — la 3D écrite en code, idéale pour les pièces paramétriques.
4. [Blender](https://github.com/blender/blender) — modélisation, animation et rendu (miroir officiel).
5. [SolveSpace](https://github.com/solvespace/solvespace) — CAO paramétrique 2D et 3D, légère et précise.

## Électronique

6. [KiCad](https://github.com/KiCad/kicad-source-mirror) — schéma et circuit imprimé ; miroir du dépôt principal, hébergé sur GitLab.
7. [LibrePCB](https://github.com/LibrePCB/LibrePCB) — conception de circuits imprimés, plus simple à prendre en main.
8. [Fritzing](https://github.com/fritzing/fritzing-app) — montages sur plaque d'essai, très visuel pour débuter.

## Impression 3D — trancheurs

9. [PrusaSlicer](https://github.com/prusa3d/PrusaSlicer) — trancheur de référence, pour le dépôt de fil comme pour la résine.
10. [Cura](https://github.com/Ultimaker/Cura) — trancheur répandu, aux nombreux profils de machines.
11. [OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer) — dérivé de Bambu Studio, lui-même issu de PrusaSlicer ; très riche en réglages.
12. [Slic3r](https://github.com/slic3r/Slic3r) — l'ancêtre de PrusaSlicer (dernière activité : juin 2024).

## Impression 3D — micrologiciels et pilotage

13. [Marlin](https://github.com/MarlinFirmware/Marlin) — le micrologiciel d'imprimante 3D le plus répandu.
14. [Klipper](https://github.com/Klipper3d/klipper) — micrologiciel rapide, qui confie les calculs à un ordinateur monocarte, souvent un Raspberry Pi.
15. [RepRapFirmware](https://github.com/Duet3D/RepRapFirmware) — le micrologiciel des cartes Duet, héritier du projet RepRap.
16. [OctoPrint](https://github.com/OctoPrint/OctoPrint) — interface web pour lancer et surveiller les impressions.
17. [Mainsail](https://github.com/mainsail-crew/mainsail) — interface web pour Klipper.
18. [Fluidd](https://github.com/fluidd-core/fluidd) — autre interface web pour Klipper.

## CNC

19. [Grbl](https://github.com/grbl/grbl) — le contrôleur CNC historique pour Arduino (dernière activité : juin 2024 ; grblHAL a pris le relais).
20. [grblHAL](https://github.com/grblHAL/core) — Grbl réécrit pour les microcontrôleurs 32 bits.
21. [FluidNC](https://github.com/bdring/FluidNC) — contrôleur de mouvement pour ESP32.
22. [LinuxCNC](https://github.com/LinuxCNC/linuxcnc) — commande numérique professionnelle sous Linux : fraiseuses, tours, imprimantes 3D, lasers.
23. [bCNC](https://github.com/vlachoudis/bCNC) — envoi de G-code, palpage et nivellement pour Grbl.
24. [Universal G-Code Sender](https://github.com/winder/Universal-G-Code-Sender) — envoi de G-code multiplateforme (Grbl, Smoothieware, TinyG).
25. [CNCjs](https://github.com/cncjs/cncjs) — interface web de pilotage pour Grbl, Marlin et Smoothieware.

## Découpe et gravure laser

26. [VisiCut](https://github.com/t-oster/VisiCut) — préparer et envoyer un travail au laser ; très présent dans les FabLabs.
27. [LaserWeb4](https://github.com/LaserWeb/LaserWeb4) — interface web pour lasers et CNC.
28. [MeerK40t](https://github.com/meerk40t/meerk40t) — pilotage des lasers K40, GRBL et fibre.
29. [K40 Whisperer](https://www.scorchworks.com/K40whisperer/k40whisperer.html) — pilotage des lasers K40 ; distribué sur le site de son auteur, hors GitHub.

## Machines open hardware

30. [Open Lab Starter Kit](https://github.com/Open-Lab-Starter-Kit) — organisation de dix dépôts : CNC, laser, imprimante, pensés pour les FabLabs.
31. [Fabricatable machines](https://github.com/fellesverkstedet/fabricatable-machines) — systèmes de mouvement faciles à fabriquer soi-même (Fellesverkstedet, Oslo).
32. [Fabulaser Mini](https://github.com/fab-machines/Fabulaser-Mini) — découpeuse laser open source compacte.
33. [Voron 2](https://github.com/VoronDesign/Voron-2) — imprimante 3D CoreXY haut de gamme, entièrement documentée.
34. [Original Prusa i3](https://github.com/prusa3d/Original-Prusa-i3) — les pièces imprimées de l'i3 MK2 (dernière activité : mars 2024).

## Gestion d'atelier et de communauté

35. [Fab-Manager](https://github.com/sleede/fab-manager) — réservations, abonnements, facturation et documentation d'un FabLab.
36. [FabApp](https://github.com/UTA-FabLab/fabapp) — machines, files d'attente et inventaire.
37. [fablabs.io](https://github.com/fablabbcn/fablabs.io) — la plateforme du réseau mondial des Fab Labs.

## FAO, imbrication et assemblage

38. [Deepnest](https://github.com/deepnest-next/deepnest) — imbrication des pièces pour économiser la matière ; reprise communautaire du projet d'origine, en sommeil depuis 2020.
39. [jscut](https://github.com/tbfleming/jscut) — FAO de fraisage dans le navigateur (dernière activité : juillet 2023).
40. [Kiri:Moto](https://github.com/GridSpace/grid-apps) — trancheur 3D, FAO et laser dans le navigateur.
41. [OpenPnP](https://github.com/openpnp/openpnp) — logiciel et matériel de placement de composants électroniques.

## Listes de référence

42. [awesome-foss-manufacturing](https://github.com/bruno-dogancic/awesome-foss-manufacturing) — les outils libres de la fabrication numérique.
43. [awesome-open-hardware](https://github.com/delftopenhardware/awesome-open-hardware) — ressources pour mener un projet open hardware.
44. [FabLab](https://github.com/geobruce/FabLab) — outils libres pour concevoir et fabriquer (dernière activité : mars 2022).
45. [Awesome Digital Fabrication](https://github.com/MohammedRashad/Awesome-Digital-Fabrication) — ressources de la fabrication numérique (dernière activité : janvier 2020).
46. [awesome-fabacademy](https://github.com/Academany/awesome-fabacademy) — ressources de la Fab Academy (dernière activité : novembre 2021).

## Pour aller plus loin

47. [FarmBot](https://github.com/FarmBot/Farmbot-Web-App) — robot de jardinage open source, un bon exemple d'automatisation.
48. [Open Source Ecology](https://github.com/OpenSourceEcology) — machines agricoles et industrielles ouvertes (organisation, une trentaine de dépôts).
49. [Precious Plastic](https://www.preciousplastic.com/) — machines de recyclage du plastique ; plans publiés sur leur site, le compte GitHub ne porte aucun dépôt public.
50. [LumenPnP](https://github.com/opulo-inc/lumenpnp) — machine de placement de composants open source.

Liens, adresses et activité des dépôts vérifiés le 5 octobre 2026. Sauf mention contraire, chaque
dépôt a reçu des modifications en 2025 ou 2026.
