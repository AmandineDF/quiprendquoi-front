window.addEventListener('load', () => {
  if (navigator.clipboard) {
    console.log("Support du presse papier");
    document.querySelectorAll('[data-clipboard]').forEach(($clipboardEl) => {
      const $button = document.createElement('button');
      $button.classList.add('inline__button')
      $button.innerHTML = 'Copier';
      $clipboardEl.parentNode.append($button);
    
      $button.addEventListener(
        'click',
        copyToClipboard.bind(this, $clipboardEl, $button)
      );
    });
    
    function copyToClipboard($clipboardEl, $button) {
      navigator.clipboard
      .writeText($clipboardEl.getAttribute('data-clipboard'))
      .then(() => {
        $button.innerHTML = 'Copié';
        setTimeout(() => ($button.innerHTML = 'Copier'), 2000); 
      })
      .catch((err) => console.warn(err));
    }
  } else {
    console.warn("Pas de support de clipboard")
  }
})