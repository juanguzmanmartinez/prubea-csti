const CACHE_NAME = "my-app-cache";
const urlsToCache = [
  "/",
  "/index.html",
  "/js/app.js", // Ajusta las rutas según la estructura de tu proyecto
  "/css/app.css",
  // Agrega aquí todos los archivos que deseas cachear
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
