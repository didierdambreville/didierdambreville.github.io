---
# GABARIT — notice de document (un PDF).
# Copiez ce fichier dans  src\data\documents\  et renommez-le <identifiant>.md
# Le PDF lui-même va dans  public\doc\
#
# Pourquoi une notice plutôt qu'un lien vers le PDF : c'est la page HTML qui est
# indexée, citée et partagée. Le fichier n'est que la pièce jointe.

titre: "Titre du document"
resume: "Ce que le document remplace ou épargne, en 400 caractères au plus."
type: "methode"           # methode | article | note | dossier
fichier: "/doc/nom-du-fichier.pdf"
pages: 24

# La version vit ICI et nulle part ailleurs. Ne la recopiez jamais dans une fiche :
# deux endroits finissent toujours par diverger, et l'écart se découvre de l'extérieur.
version: "1.0"
date: 2026-01-31
licence: "CC BY 4.0"

sommaire:
  - "Première section"
  - "Deuxième section"

brouillon: true
---

Deux paragraphes : à qui s'adresse le document, et sur quoi repose son classement ou sa méthode.
Le reste est dans le fichier.
