if (navigator.clipboard) {
  console.log("Support du presse papier")
} else {
  console.warn("Pas de support")
}

document.querySelectorAll('[data-clipboard]').forEach(($clipboardEl) => {
  const $button = document.createElement('button');
  $button.innerHTML = 'Copier';
  $clipboardEl.parentNode.append($button);
});