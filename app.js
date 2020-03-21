//IMPORTS
const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static('pwa'));
app.set('view engine', 'pug');

//INDEX
app.get('/', function(req, res) {
  res.render('index', { title: 'Qui prend quoi ?' });
});

//CREATE AN EVENT
app.post('/party', function(req, res) {
  axios
    .post(`${process.env.API_URL}/party`, req.body)
    .then(({ data }) => res.redirect(`/party/${data._id}`))
    .catch((err) => res.send(err));
});


//EVENT CREATED
app.get('/party/:id', function(req, res) {
  axios
    .get(`${process.env.API_URL}/party/${req.params.id}`)
    .then(({ data }) => {
        console.log(data);

        //Event URL manipulation (for Google Agenda)
        let date = data.date.split('T')[0].replace(/-/gi, '');
        let name = data.name.replace(/ /gi, '+');
        let url = `${process.env.FRONT_URL}:${process.env.PORT}/party/${data._id}`
        //Prblm with end of month (parseInt(date) + 1)
        let googleAgendaLink = `https://calendar.google.com/calendar/r/eventedit?text=${name}&dates=${date}/${parseInt(date) + 1}&ctz=Europe/Paris&trp=true&location=${url}&details=`;

        res.render('party', {
          party: data,
          title: data.name,
          url: url,
          apiUrl: `${process.env.API_URL}/party/${req.params.id}`,
          googleAgendaLink: googleAgendaLink
        });
      }
    )
    .catch((err) => console.log(err));
});

//ADD AN ITEM TO BRING
app.post('/party/:id/items', function(req, res) {
  console.log(req.body);
  axios
    .post(`${process.env.API_URL}/party/${req.params.id}/items`, req.body)
    .then(() => res.redirect(`/party/${req.params.id}`))
    .catch((err) => res.send(err));
});

//DESIGNATE WHO BRINGS AN ITEM
app.post('/party/:id/items/:itemId/user', function(req, res) {
  axios
    .patch(`${process.env.API_URL}/party/${req.params.id}/items/${req.params.itemId}`, req.body)
    .then(() => res.redirect(`/party/${req.params.id}`))
    .catch((err) => res.send(err));
});

//DELETE AN ITEM
app.post('/party/:id/items/:itemId/delete', function(req, res) {
  axios
    .delete(`${process.env.API_URL}/party/${req.params.id}/items/${req.params.itemId}`, req.body)
    .then(() => res.redirect(`/party/${req.params.id}`))
    .catch((err) => res.send(err));
});

//CONSOLE MESSAGE
app.listen(port, () => console.log(`Front app listening on port ${port}!`));