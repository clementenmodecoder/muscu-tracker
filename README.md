# Muscu Tracker 🏋️

Application web de suivi de séance de musculation — **100 % hors-ligne**, données stockées en local sur ton appareil (rien sur le serveur).

👉 **Ouvrir l'app : https://clementenmodecoder.github.io/muscu-tracker/**

Fonctions : programme du jour, timers de repos auto (son + vibration), log des séries, suivi de progression, double progression. Conçu pour un usage sur téléphone en salle.

## v4.2 — corriger un exercice terminé + gainage de fin de séance

- **Un exercice terminé se rouvre depuis n'importe où sur la carte** (avant, seul le titre réagissait : taper la ligne de charges ou « Dernière fois… » ne faisait rien). Chevron + mention « Toucher pour corriger » pour que ce soit visible, et le lien Tuto garde son comportement.
- **La pastille verte de la quick-nav rouvre l'exercice** au lieu d'y faire défiler une carte repliée.
- **Finisher « Gainage planche (1 min) »** à la fin des 4 séances — 1 série de 60 s, sans timer de repos.
- Affichage nettoyé : `1 × 60s` au lieu de `1 × 60-60s`, plus de « repos 00:00 ».

## v4.1 — programme ajusté (zéro poids de corps, zéro gainage)

- **Lundi (Haut A)** : Push-Up Plus et Développé épaules machine retirés → **Landmine press** (poussée à 45°, pas d'overhead, travaille aussi le dentelé antérieur) et **Écarté poulie basse→haut** (2ᵉ dose de pecs en étirement chargé)
- **Mercredi (Haut B)** : Gainage planche et Prone Y-T retirés → **Straight-arm pulldown** (grand dorsal en isolation)
- Gainage également retiré de la séance bonus « Bras + Core »
- Charge d'épaule inchangée lundi (6 séries deltoïdes, comme avant) ; pecs à 11 séries/semaine
- L'historique des exercices retirés reste lisible dans le journal (nom + unité conservés)

## v4.0 — flow de séance « qualité commerciale »

- Zéro re-rendu pendant la séance : cocher/ajouter une série met à jour uniquement ce qui change (aucun flash, aucun saut)
- Quick-nav sticky : une pastille par exercice (✓ vert terminé, anneau orange = en cours), tap pour y aller
- Les exercices terminés se replient, scroll automatique vers le suivant, champ sélectionné au focus
- Programme v3 : split 3 j 100 % haut du corps (jambes couvertes par le skate), protections épaule conservées

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
