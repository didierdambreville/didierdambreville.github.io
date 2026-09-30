---
# GABARIT — forme longue. Une pièce sur quatre au plus : celles qui la méritent.
# Mêmes règles d'en-tête que la forme courte ; seuls les champs supplémentaires
# sont commentés ici.

titre: "Le nom de la pièce"
resume: "Ce qui remplace …"
identifiant: "nom-du-fichier-sans-md"
discipline: "outil"
date: 2026-01-31
role: ["conception", "développement"]
techniques: ["HTML", "CSS", "JavaScript sans dépendance"]

couverture: "../../assets/realisations/nom-du-fichier-sans-md/couverture.png"
couvertureAlt: "Ce que l'on voit sur l'image"

# Fichier pleine résolution proposé au téléchargement. À déposer dans public\doc\.
# hauteRes: "/doc/nom-du-fichier-planche.png"

# Capture enregistrée du démonstrateur, à déposer dans public\apercus\.
# OBLIGATOIRE en pratique dès qu'il y a une démonstration : elle survivra au jour
# où celle-ci cessera de fonctionner, et ce jour viendra.
# apercu: "/apercus/nom-du-fichier.mp4"

# Planches. Chaque légende dit ce que l'image montre, pas ce qu'elle est.
galerie:
  - src: "../../assets/realisations/nom-du-fichier-sans-md/01.png"
    legende: "Ce que montre cette planche."
  - src: "../../assets/realisations/nom-du-fichier-sans-md/02.png"
    legende: "Ce que montre celle-ci."

# Démonstration. mode : "interne" (une page dans /demos/), "externe" (une adresse
# ailleurs) ou "aucun". Le repli décrit ce que la démonstration MONTRE — jamais
# « nécessite JavaScript », qui n'apprend rien à personne.
demo:
  mode: "interne"
  url: "/demos/nom-du-fichier-sans-md/"
  hauteur: 640
  repli: "La démonstration charge …, signale … et propose …"

# Identifiants de notices déposées dans src\data\documents\ — pas des chemins.
documents: []

liens:
  - libelle: "Dépôt public"
    url: "https://github.com/…"

licence: "CC BY 4.0"
miseEnAvant: true
brouillon: true
---

## Le problème

Deux paragraphes au plus : ce qu'il fallait résoudre, et pour qui. Des faits, pas d'intentions.

## Le parti pris

Ce que vous avez décidé, et surtout ce que vous avez **écarté** pour y parvenir. C'est la partie
qu'un lecteur attentif vient chercher, et celle que presque personne n'écrit.

## Ce qu'on en retient

Le résultat, mesuré si possible. Une phrase sur ce que vous feriez autrement.
