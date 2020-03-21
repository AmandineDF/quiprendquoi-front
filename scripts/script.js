if(apiUrl != undefined){
  //premier affichage car supprimé du fichier pug
  reload();
  //reload
  setInterval(reload,5000);
}

let oldJSON = "";

function reload() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(response => {
      if( oldJSON !== JSON.stringify(response)) {
        oldJSON = JSON.stringify(response);
        console.log('Update détectée !');
        /*
        let container = document.querySelector(".items__container");
        container.innerHTML="";
        response.items.forEach(item => {
          container.innerHTML += `
          <div class="newItems__grid">
            <li class="col-1">${item.user}</li>
            <li class="col-2">${item.name}</li>
            <form method="post" action="${url}/items/${item._id}/delete" class="col-3">
             <button type="submit" class="deleteItem__button">Supprimer</button>
            </form>
          </div>
          `;
        });
        */
      }
    })
    .catch(error => console.log("Erreur : " + error));
}