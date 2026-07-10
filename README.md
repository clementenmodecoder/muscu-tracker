# Muscu Tracker 🏋️

Application web de suivi de séance de musculation — **100 % hors-ligne**, données stockées en local sur ton appareil (rien sur le serveur).

👉 **Ouvrir l'app : https://clementenmodecoder.github.io/muscu-tracker/**

Fonctions : programme du jour, timers de repos auto (son + vibration), log des séries, suivi de progression, double progression. Conçu pour un usage sur téléphone en salle.

## v3 — design « blanc premium »

- Thème blanc pur, typographie **Inter** + **Space Grotesk** (embarquées dans `assets/fonts/`)
- Hero avec **haltère 3D temps réel** (three.js, embarqué en local), % d'objectif hebdo animé, segments de progression, streaks
- Animations : compteurs, graphiques qui se dessinent, apparitions en cascade, **confettis en fin de séance**
- Graphiques d'assiduité et de volume par semaine, répartition des séries par muscle (palette daltonisme-compatible), courbes de 1RM estimé par exercice
- Données 100 % compatibles avec les versions précédentes (même stockage local `localStorage`)

## Structure

- `index.html` — l'app complète (logique + UI)
- `assets/fonts/` — Inter variable & Space Grotesk variable (woff2, sous-ensembles latin)
- `assets/three.module.min.js` + `assets/three.core.min.js` + `assets/room-env.js` — three.js r171 (MIT), servi en local pour rester hors-ligne

La 3D nécessite d'être servi en HTTP(S) (GitHub Pages ✓) — en ouverture directe `file://`, l'app fonctionne, seule la 3D est désactivée.
