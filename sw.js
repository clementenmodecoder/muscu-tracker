/* Muscu Tracker — service worker : app installable + 100 % hors-ligne.
   Navigations : réseau d'abord (pour récupérer les mises à jour), cache en secours.
   Assets : cache d'abord (fontes, three.js, icônes ne changent presque jamais). */
var CACHE = 'muscu-v4.0.0';
var ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/three.module.min.js',
  './assets/three.core.min.js',
  './assets/room-env.js',
  './assets/fonts/inter-var-latin.woff2',
  './assets/fonts/inter-var-latinext.woff2',
  './assets/fonts/space-grotesk-var-latin.woff2',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/icon-180.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== location.origin) return; /* YouTube & co : laisser passer */

  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(function (r) {
        var copy = r.clone();
        caches.open(CACHE).then(function (c) { c.put('./index.html', copy); });
        return r;
      }).catch(function () { return caches.match('./index.html'); })
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(function (hit) {
      return hit || fetch(req).then(function (r) {
        var copy = r.clone();
        caches.open(CACHE).then(function (c) { c.put(req, copy); });
        return r;
      });
    })
  );
});
