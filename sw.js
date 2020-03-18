addEventListener('install', (event) => {
  console.log('Hello from the service worker');
});

addEventListener('fetch', (event) => {
  console.log(event);
  if (event.request.headers.get('Accept').includes('text/html')) {
    event.respondWith(fetch(event.request));
  }
});