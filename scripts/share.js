if (navigator.share) {
  console.log("Support du partage");
  document.querySelectorAll('[data-share-url]').forEach(($shareEl) => {
    const $button = document.createElement('button');
    $button.innerHTML = 'Partager';
    $shareEl.parentNode.append($button);
  
    $button.addEventListener(
      'click',
      copyToClipboard.bind(this, $shareEl, $button)
    );

    function copyToClipboard($shareEl, $button) {
      navigator
        .share({
          title: $shareEl.getAttribute('data-share-title'),
          text: $shareEl.getAttribute('data-share-text'),
          url: $shareEl.getAttribute('data-share-url'),
        })
        .catch((err) => console.warn(err));
    }
  });
} else {
  console.warn("Pas de support")
}