caches.open('parties').then((cache) =>
  cache.keys().then((keys) =>
    keys.forEach((key) => {
      const name = localStorage.getItem(key.url);
      //console.log(key, name);

      if (name) {
        const $link = document.createElement('a');
        $link.href = key.url;
        $link.innerHTML = name;
        document.getElementById('savedEvents').appendChild($link);
      }
    })
  )
);