# Gabarits

Trois fichiers à copier, jamais à modifier sur place.

| Gabarit | Copier dans | Pour |
|---|---|---|
| `fiche-courte.md` | `src\data\realisations\` | Une réalisation. **La forme par défaut.** |
| `fiche-longue.md` | `src\data\realisations\` | Une réalisation qui mérite un développement. Une sur quatre au plus. |
| `notice-document.md` | `src\data\documents\` | Un PDF publié. |
| `fiche-de-structuration.md` | `_brouillons\` | **Avant** d'écrire un article : cristalliser l'idée. Ne se publie jamais. |
| `article.md` | `_brouillons\` puis `src\data\articles\` | Un article court. |

Ce dossier commence par un tiret bas : il est ignoré par le site, rien de ce qu'il contient n'est
publié.

Tous les gabarits sont réglés sur `brouillon: true`. Une pièce reste donc invisible jusqu'à ce que
vous passiez cette ligne à `false` — vous pouvez la rédiger en plusieurs fois sans rien exposer.

## Pour un article, deux temps

D'abord `fiche-de-structuration.md`, dans `_brouillons\` : on y cristallise la thèse, l'arc, les
preuves et les sources. Tant que la thèse ne tient pas en une phrase dite à voix haute, on n'écrit
pas.

Ensuite seulement `article.md`. La fiche indique, section par section, où chacune de ses réponses
atterrit dans l'article. La fiche reste dans `_brouillons\` — elle n'est pas publiée, et le dépôt
étant public, c'est ce qui la garde privée.
