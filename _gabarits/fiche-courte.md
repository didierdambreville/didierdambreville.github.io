---
# GABARIT — forme courte. C'est la forme par défaut : neuf pièces sur dix.
# Copiez ce fichier dans  src\data\realisations\  et renommez-le <identifiant>.md
# (minuscules, tirets, sans accent : « lecteur-de-releves », pas « Lecteur de relevés »).

titre: "Le nom de la pièce, tel qu'on la nomme"

# Dites ce qu'elle REMPLACE ou ÉPARGNE, jamais ce qu'elle est.
# « Ce qui remplace deux heures de saisie » vaut mieux que « Outil de saisie ».
# 220 caractères au maximum.
resume: "Ce qui remplace …"

# Doit être identique au nom du fichier. Ne changera JAMAIS, même si le titre change :
# c'est l'adresse de la page, et une adresse morte ne se rattrape pas.
identifiant: "nom-du-fichier-sans-md"

# Une seule case, sans hésiter. Le critère : qu'est-ce que le lecteur en fait ?
#   methode      il en tire une manière de faire
#   outil        il s'en sert, il ne le lit pas
#   publication  la pièce a une existence hors du site
#   image        le jugement porte sur le rendu
discipline: "methode"

date: 2026-01-31          # date de livraison ou de publication, format AAAA-MM-JJ
role: ["conception"]      # votre part réelle : conception, rédaction, développement…

# Facultatifs — supprimez les lignes inutilisées plutôt que de les laisser vides.
# commanditaire: "Pour qui"
# techniques: ["Markdown", "WeasyPrint"]

couverture: "../../assets/realisations/nom-du-fichier-sans-md/couverture.png"
# Décrivez L'IMAGE, pas la pièce. Obligatoire : le site refuse de se construire sans.
couvertureAlt: "Ce que l'on voit sur l'image"

licence: "CC BY 4.0"
miseEnAvant: false        # true = la pièce apparaît sur l'accueil
brouillon: true           # true = invisible partout. Passez à false pour publier.
---

Deux phrases. Ce que la pièce résout, et le parti pris qui a permis d'y arriver.
Pas davantage : la forme courte tire sa force de sa brièveté.
