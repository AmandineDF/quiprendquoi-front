window.addEventListener('load', () => {
  if (typeof party !== 'undefined') {
    localStorage.setItem(location.href, party.name);
  }
})