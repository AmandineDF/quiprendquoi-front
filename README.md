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
- **V3 de l'app (actuelle)** : Plusieurs personnes peuvent apporter un item (Inspiré du sondage de Facebook). Les items ayant le même _name_ sont regroupés et un compteur de quantité augmente. La liste des invités qui apporte un item est générée. Chaque membre peut être supprimé, et un item dont personne n'est en charge peut être également supprimé. (`script.js`, `party.pug`)
- Personnalisation de la couleur du navigateur (`header.pug`)



## Article personnel

### Le Port Forwarding

Plan en cas de panne d'inspiration :

- Description du sujet choisi (sa définition, son but...)
- Exemple d'utitlisation ou d'implémentation (bout de code si pertinent, capture d'écran...)
- Conclusion : avantages, inconvénients et cas d'usage