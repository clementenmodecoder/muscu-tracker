# Muscu Tracker 🏋️

Application web de suivi de séance de musculation — **100 % hors-ligne**, données stockées en local sur ton appareil (rien sur le serveur).

👉 **Ouvrir l'app : https://clementenmodecoder.github.io/muscu-tracker/**

Fonctions : programme du jour, timers de repos auto (son + vibration), log des séries, suivi de progression, double progression. Conçu pour un usage sur téléphone en salle.

## v3.2 — poids corporel, journal interactif, durées corrigeables

- **Tracker de poids corporel** : relevés en 2 taps, courbe de tendance, delta sur ~1 mois, historique avec suppression
- **Jours de la semaine cliquables** sur l'accueil : détail de la séance du jour choisi, ou ce qui est prévu au programme
- **Chaque séance du journal s'ouvre en détail** : stats, séries réalisées par exercice, **durée corrigeable** (si tu as oublié d'arrêter la séance) et suppression possible — raccourci « Corriger la durée » aussi dans l'écran de fin
- Journal complet (« Voir tout l'historique »)

## v3.1 — app installable (PWA) + tutos vidéo

- **Lien « Tuto » sur chaque exercice** (cartes de séance + programme) : ouvre une recherche YouTube de la technique du mouvement
- **PWA installable** : « Ajouter à l'écran d'accueil » → l'app s'ouvre en plein écran et fonctionne **entièrement hors-ligne** (service worker + manifest + icônes)
- Journal des dernières séances (date, durée, volume, séries), delta de volume vs semaine passée
- Appui long sur les boutons −/+ des séries pour incrémenter en continu
- Focus clavier visibles, neutres légèrement réchauffés

## v3 — design « blanc premium »

- Thème blanc pur, typographie **Inter** + **Space Grotesk** (embarquées dans `assets/fonts/`)
- Hero avec **haltère 3D temps réel** (three.js, embarqué en local), % d'objectif hebdo animé, segments de progression, streaks
- Animations : compteurs, graphiques qui se dessinent, apparitions en cascade, **confettis en fin de séance**
- Graphiques d'assiduité et de volume par semaine, répartition des séries par muscle (palette daltonisme-compatible), courbes de 1RM estimé par exercice
- Données 100 % compatibles avec les versions précédentes (même stockage local `localStorage`)

## Structure

- `index.html` — l'app complète (logique + UI)
- `manifest.webmanifest` + `sw.js` — installation PWA & hors-ligne
- `assets/fonts/` — Inter variable & Space Grotesk variable (woff2, sous-ensembles latin)
- `assets/three.module.min.js` + `assets/three.core.min.js` + `assets/room-env.js` — three.js r171 (MIT), servi en local pour rester hors-ligne
- `assets/icon-*.png` — icônes d'app (192/512/180)

La 3D et le mode hors-ligne nécessitent d'être servis en HTTP(S) (GitHub Pages ✓) — en ouverture directe `file://`, l'app fonctionne, seule la 3D est désactivée.
