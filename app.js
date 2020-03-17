const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');

//INDEX
app.get('/', function(req, res) {
  res.render('index', { title: 'Qui prend quoi ?' });
});

app.post('/party', function(req, res) {
  //console.log(req.body);
  axios
    .post(`${process.env.API_URL}/party`, req.body)
    .then(({ data }) => res.redirect(`/party/${data._id}`))
    .catch((err) => res.send(err));
});



//EVENEMNT
app.get('/party/:id', function(req, res) {
  /*
  var itemList = [
    {
      author: "Francis",
      name: "Champagne"
    },
    {
      author: "Sarah",
      name: "Mojito"
    }
  ];
  */
  axios
    .get(`${process.env.API_URL}/party/${req.params.id}`)
    .then(({ data }) =>
      res.render('party', {
        party: data,
        title: data.name,
        url: `${process.env.FRONT_URL}:${process.env.PORT}/party/${data._id}`,
        //itemList: itemList
      }),
    )
    .catch((err) => console.log(err));
});

app.post('/party/:id', function(req, res) {
  console.log(req.body);
  axios
    .post(`${process.env.API_URL}/party`, req.body)
    .then(({ data }) => res.redirect(`/party/${res.params.id}`))
    .catch((err) => res.send(err));
});

app.listen(port, () => console.log(`Front app listening on port ${port}!`));