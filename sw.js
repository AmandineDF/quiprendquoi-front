addEventListener('install', (event) => {
  console.log('Le service worker est installé');
  event.waitUntil(
    caches.open('offline').then((cache) => {
      cache.add('offline.html');
    })
  );
});

addEventListener('fetch', (event) => {
  console.log(event);
  if (event.request.headers.get('Accept').includes('text/html')) {
    event.respondWith(
      fetch(event.request).catch(() => caches.match('offline.html')),
    );
  }
});