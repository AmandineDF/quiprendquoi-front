const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index', { title: 'Qui prend quoi ?' });
});

app.post('/party', function(req, res) {
  console.log(req.body);
  res.send('Post ok !');
});

app.listen(port, () => console.log(`Front app listening on port ${port}!`));