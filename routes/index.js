const express = require('express');
const data = require('../data');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/about', (req, res) => {
  res.render('about', { lists: data });
});

router.get('/about/contact', (req, res) => {
  const { name } = req.query;
  res.render('contact', { name });
});

router.get('/about/:name', (req, res) => {
  const { name } = req.params;
  res.render('about', { name });
});

router.get('/character', (req, res) => {
  res.render('character');
});

router.post('/character/file', (req, res) => {
  const { name, warYells, charClass } = req.body;
  res.render('character-file', { name, warYells, charClass });
});

module.exports = router;
