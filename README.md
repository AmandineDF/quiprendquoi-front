# Qui prend quoi - Amandine Donat-Filliod

## Le TP - Installation

`npm install`

`npm run start`



## Améliorations apportées

### TP - Poursuite en autonomie

- 17.A - Ajout d'un item (**V1, cf commit**) (`app.js`, `party.pug`)
- 17.B - Affichage des items avec _each_ (**V1, cf commit**) (`app.js`, `party.pug`)
- 17.C - Possibilité de supprimer un item (**V1, cf commit**) (`app.js`, `party.pug`)
- 29.B - Rafraîchissement automatique des items avec _fetch_ et affichage dynamique (`script.js`)
- 29.C - Un **gros** coup de peinture avec la méthodologie _BEM_ (`style.scss`)

### Perso - Améliorations personnelles

- Ajouter un évément à **Google Agenda**. Traitement d'URL pour Google Agenda avec _.split()_, _.replace()_, _regex_. (`app.js`, `party.pug`).
- **V2 de l'app (old, cf commit)** : Possibilité de créer un item "à amener", et possibilité de désigner quel invité sera chargé de l'apporter. Création d'une nouvelle route avec _.patch()_ (`app.js`, `party.pug`)
- Affichage des événements enregistrés sur la home (`savedEvents.js`, `index.pug`)
- **V3 de l'app (actuelle)** : Plusieurs personnes peuvent apporter un item (Inspiré du sondage de Facebook). Les items ayant le même _name_ sont regroupés et un compteur de quantité augmente. La liste des invités qui apporte un item est générée. Chaque membre peut être supprimé, et un item dont personne n'est en charge peut être également supprimé. Création et manipultation de tableaux avec _.find()_, _.push()_, _.forEach()_, _.filter()_, etc. (`script.js`, `party.pug`)
- Personnalisation de la couleur du navigateur (`header.pug`)



## Article personnel : Le Port Forwarding

### Introduction

Durant cette semaine de TP, j’ai été amenée à tester pour la première fois le **Port Forwarding**. Etant surtout UX/UI Designer dans ma vie professionnelle, je n’avais pas encore eu l’occasion de m’y pencher dessus. Je connaissais déjà *Figma Mirror* et *Sketch Mirror*, les applications mobiles des outils de design *Figma* et *Sketch*, permettant de visualiser et tester ses prototypes en temps réel sur son smartphone. S’il est possible de designer/développer pour du responsive sans bouger de son Desktop, en utilisant les fonctionnalités des inspecteurs de la plupart des navigateurs par exemple, pouvoir visualiser et tester sa création directement sur le device souhaité est toujours un plus.

Pour les développeurs, ceci est donc rendu possible par plusieurs méthodes, notamment grâce au Port Forwarding, très simple et rapide à mettre en place.

### Pré-requis

Le **câble USB** de votre smartphone. Oui oui, c’est tout.

### Qu'est-ce que le Port Forwarding ?

La francophonie lui préfère le doux nom de **Redirection de port** (à ne pas prononcer près de marins). Il s’agit d’une redirection de paquets réseaux reçus sur un port d’un ordinateur (ou autre équipement réseau) vers un autre ordinateur/équipement réseau, sur un port donné. En d’autres termes et dans notre cas précis, cela signifie que le contenu hébergé par notre serveur Express.js sur notre machine de développement seront accessibles par une autre machine, notre smartphone en l'occurence. Cela est rendu possible grâce à la création d’un *port TCP « d’écoute »* (vive la francophonie) sur le smartphone, qui correspondra à un port TCP spécifié sur l’ordinateur. Le trafic entre les deux ports passe par la connexion USB entre les deux machines. Ainsi, pas besoin de dépendre de la configuration de son réseau Internet.

### Comment le mettre en place ?

#### 1.	Autoriser le Port Forwarding sur son smartphone

##### A.	Accéder aux Options pour Développeurs

Partons à la découverte de votre smartphone. Rendez-vous dans les `Paramètres`. Saviez-vous qu’il existe un panneau d’option spécialement pour les développeurs ? Ce dernier est masqué de base. Pour l’afficher, il faut accéder au `Numéro de Build` de son smartphone *(Paramètres > A propos du téléphone > Numéro de Build)*. La commande magique : taper l’onglet Numéro de Build **7 fois**. Une pop-in apparaîtra, vous informant que les `Options pour développeurs` sont désormais disponibles.

##### B.	Autoriser le Débogage USB

Rendez-vous dans les `Options pour développeurs` (*Paramètres > Options pour Développeurs,* ou bien *Paramètres > Système et mise à jour > Options pour Développeurs*). Il y en a beaucoup à découvrir, mais celle qui nous intéresse est d’**activer le Débobage USB** (Toggle à activer dans la panneau *Débogage*). Le Port Forwarding a bien été autorisé ! Branchez votre câble USB pour relier votre ordinateur et votre smartphone.

#### 2.	Paramétrer les appareils distants depuis son ordinateur

De retour sur votre ordinateur, ouvrez *Chrome*. A l’origine, un panneau *Remote Devices* était présent dans l’inspecteur, mais ce dernier a été déprécié, en faveur de la nouvelle interface accessible à l’adresse [chrome://inspect/#devices](chrome://inspect/#devices). Vérifiez que l’option **Discover USB devices** est bien cochée. Si votre câble USB est bien branché, vous devriez voir votre smartphone dans le panneau *Remote Target*.

Cliquez sur le bouton `Port Forwarding`: Dans le champs de gauche, entrer le `numéro de port localhost` depuis lequel vous souhaitez accéder à votre site depuis votre smartphone (vous pouvez laisser le même port que celui qu’utilise votre ordinateur). Dans le champs de droite, entrez le nom d’hôte (*par exemple `localhost:3000`*), ou bien `l’adresse IP` sur lequel le site est en train de tourner.
Vérifiez bien que la checkbox **Enable Port forwarding** est cochée, et validez. Et voilà, notre port forwarding est mis en place !

Sur votre smartphone, ouvrez *Chrome* et rendez-vous sur le `port localhost` que vous avez renseigné. Vous devriez voir votre site sur mobile. Si votre poignet est fatigué, vous pouvez même directement ouvrir un nouvel onglet depuis l’ordinateur via l’interface [chrome://inspect/#devices](chrome://inspect/#devices) (ainsi que recharger une page, fermer un onglet, etc.)

