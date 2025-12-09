const CACHE_NAME = "V1-Manual de Agentes-44";
const OFFLINE_URL = "html/index.html";
const ASSETS = [
  "html/index.html",
  "html/identificacion.html",
  "html/puestos.html",
  "html/puesto.html",
  "manifest.webmanifest",
  "css/index.css",
  "css/tailwind.css",
  "css/identificacion.css",
  "css/puestos.css",
  "css/puesto.css",
  "js/main.js",
  "js/index.js",
  "js/puestos.js",
  "js/puesto.js",
  "js/funciones.js",
  "js/camera.js",
  "js/supabase.js",
  "assets/logo.png",
  "assets/fondo-checklist.png",
];

const ASSET_URLS = ASSETS.map((path) => new URL(path, self.location.origin).toString());

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) =>
        Promise.all(
          URLS_TO_CACHE.map((url) =>
            cache.add(url).catch((err) => {
              console.warn("[SW] Failed to cache", url, err);
              return null;
            })
          )
        )
      )
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const { request } = event;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) {
    return;
  }
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(request)
        .then((networkResponse) => {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          return networkResponse;
        })
        .catch(() => caches.match(OFFLINE_URL));
    })
  );
});
