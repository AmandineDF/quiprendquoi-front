window.addEventListener('load', () => {
  if(apiUrl != undefined){
    // 1RST DISPLAY
    reload();
    // RELOAD EVERY 5 SEC
    setInterval(reload, 5000);
  }
  
  let oldJSON = "";
  
  function reload() {
    fetch(apiUrl)
      .then(response => response.json())
      .then(response => {
        if( oldJSON !== JSON.stringify(response)) {
          oldJSON = JSON.stringify(response);
          console.log('Update détectée !');
  
          //Array for all items (duplicated item names as well)
          let itemsList = [];
          //Array for duplicated items (items that have the same name)
          let duplicatedItems = [];
  
          //Add a new item object in itemsList
          response.items.forEach(item => {
            //Check that the new item object doesn't exist in itemsList (bool)
            const isNewItem = itemsList.find(type => type.name == item.name) == null && item.user == "EMPTY_USER";
            if (isNewItem) {
              itemsList.push(item);
              console.log('Liste des items :', itemsList);
            }
          });
          
          //DOM Update
          let listContainer = document.querySelector(".items__container");
          listContainer.innerHTML="";
          itemsList.forEach(type => {
            //Add duplicated items in the same array
            duplicatedItems = response.items.filter(item => item.name == type.name && item.user != "EMPTY_USER");
  
            //DOM container for every item object
            let itemContainer = document.createElement("div");
            itemContainer.classList.add("item__container");
            itemContainer.innerHTML += `
              <li class="item__name">
                <span>${duplicatedItems.length}</span>
                ${type.name}
              </li>
            `;
  
            //DOM container for user(s) who bring an item
            let usersContainer = document.createElement("div");
            usersContainer.classList.add('item__users');

            //Add a new user
            usersContainer.innerHTML += `
            <form method="post" action="${url}/items" class="form__new-user">
              <input name="user" type="text" placeholder="Nom">
              <input name="name" type="hidden" value="${type.name}">
            </form>
            `
  
            if (duplicatedItems.length > 0) {
              console.log('Items dupliqués :',duplicatedItems);
  
              //Button to remove users
              duplicatedItems.forEach((item) => {
                usersContainer.innerHTML += `
                <form method="post" action="${url}/items/${item._id}/delete" class="user__name">
                  <button type="submit" class="link__button">${item.user}
                    <span>X</span>
                  </button>
                </form>
                `
              });
            } else {
              //Button to delete an item object (possible only if there are no users)
              usersContainer.innerHTML += `
              <form method="post" action="${url}/items/${type._id}/delete" class="cross__button">
                <button type="submit" class="deleteItem__button">+</button>
              </form>
              `
            }
  
            itemContainer.append(usersContainer);
            listContainer.append(itemContainer);
          });
        }
      })
      .catch(error => console.log("Erreur : " + error));
  }
})