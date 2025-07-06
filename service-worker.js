
self.addEventListener('install', function(event) {
  console.log('[Service Worker] Instalado');
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activado');
});

self.addEventListener('fetch', function(event) {
  // Podrías manejar caché aquí si quieres
});
