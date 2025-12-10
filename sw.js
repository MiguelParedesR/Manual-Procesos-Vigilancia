// Service worker configured for static hosting (dist/ is the published root, e.g., GitHub Pages).
// All cached URLs are relative to that root and reference files that exist under dist/.
const CACHE_NAME = "manual-vigilancia-v7";
const OFFLINE_URL = "./html/index.html";
const URLS_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./assets/css/style.css",
  "./assets/js/app.js",
  "./assets/logo.png",
  "./assets/fondo-checklist.png",
  "./css/index.css",
  "./css/puestos.css",
  "./css/puesto.css",
  "./css/identificacion.css",
  "./css/tailwind.css",
  "./css/tw-input.css",
  "./html/index.html",
  "./html/puestos.html",
  "./html/puesto.html",
  "./html/identificacion.html",
  "./js/index.js",
  "./js/main.js",
  "./js/menuModal.js",
  "./js/puestos.js",
  "./js/puesto.js",
  "./js/supabase.js",
  "./js/backup.js",
  "./js/camera.js",
  "./js/funciones.js",
];

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
