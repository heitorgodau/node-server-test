const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const data = require('./data');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about', { lists: data });
});

app.get('/about/contact', (req, res) => {
  const { name } = req.query;
  res.render('contact', { name });
});

app.get('/about/:name', (req, res) => {
  const { name } = req.params;
  res.render('about', { name });
});

app.get('/character', (req, res) => {
  res.render('character');
});

app.post('/character/file', (req, res) => {
  const { name, warYells, charClass } = req.body;
  res.render('character-file', { name, warYells, charClass });
});

app.listen(3000);
