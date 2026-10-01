---
titre: "Scénario d'éclairage circadien"
resume: "Une teinte de lumière pour chaque moment des 24 heures — neutre au réveil, froide le jour, chaude le soir, rouge la nuit — et la façon de la programmer."
identifiant: "eclairage-circadien"
categorie: "maison"
motsCles: ["domotique", "éclairage", "Home Assistant"]
date: 2026-10-01
---

## Principe

Faire suivre à l'éclairage intérieur la progression d'une journée : lumière neutre au matin, plus
froide en journée, de plus en plus chaude le soir, rouge la nuit.

## Programme

| Horaire | Lumière | Ambiance |
|---|---|---|
| 06:00 – 09:00 | 4000 K | blanc neutre, pour le réveil |
| 09:00 – 16:00 | 6000 K | blanc froid, proche de la lumière du jour |
| 16:00 – 17:00 | 6000 K → 3300 K | transition d'une heure |
| 17:00 – 22:00 | 3300 K | blanc chaud |
| 22:00 – 00:00 | 2200 K | flamme de bougie |
| 00:00 – 06:00 | rouge | veilleuse |

## Réglages

- **Transitions** : jamais brutales — 15 à 30 minutes à chaque changement, une heure en fin
  d'après-midi.
- **Intensité** : forte le jour, réduite le soir, minimale la nuit.
- **Rouge de nuit** : à faible intensité, c'est la lumière qui agit le moins sur l'horloge
  biologique.

## Matériel

- Vérifier la plage des ampoules : certaines s'arrêtent à 4000 K, d'autres vont de 2200 à 6500 K.
- Le rouge demande une ampoule couleur (RGB ou RGBW).

## Dans Home Assistant

L'intégration [Adaptive Lighting](https://github.com/basnijholt/adaptive-lighting), à installer
par HACS, fait varier la teinte en continu d'après la course du soleil, et règle aussi les lampes
qu'on allume en cours de route.

Pour suivre exactement le programme ci-dessus : une automatisation par palier.

```yaml
alias: Circadien — soirée
triggers:
  - trigger: time
    at: "17:00:00"
conditions:
  - condition: state
    entity_id: light.salon
    state: "on"
actions:
  - action: light.turn_on
    target:
      entity_id: light.salon
    data:
      color_temp_kelvin: 3300
      transition: 900
```

- Sans la condition, l'automatisation allumerait la lampe éteinte.
- `transition` se compte en secondes (900 = 15 minutes).
- Pour la nuit, `rgb_color: [255, 0, 0]` remplace `color_temp_kelvin`.
- Une lampe allumée plus tard garde sa dernière teinte — c'est ce que corrige Adaptive Lighting.
