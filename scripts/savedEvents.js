window.addEventListener('load', () => {
  caches.open('parties').then((cache) =>
    cache.keys().then((keys) =>
      keys.forEach((key) => {
        const name = localStorage.getItem(key.url);
        //console.log(key, name);

        if (name) {
          //console.log(name);
          const $link = document.createElement('a');
          $link.classList.add('link__button');
          $link.href = key.url;
          $link.innerHTML = name;
          document.getElementById('savedEvents').appendChild($link);
        } else {
          //console.log('Pas d'événements enregistrés');
        }
      })
    )
  );
})