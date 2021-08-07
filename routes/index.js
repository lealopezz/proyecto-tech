var express = require('express');
var router = express.Router();
const api = require('../api');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('pages/index', { title: 'Tech' });
});

router.get('/home', async (req,res) => {
  const products = await api.getProducts();
  const arrivals = require('../public/json/arrivals.json');
  console.log(products);
  res.render('pages/home', { products , arrivals });
});

router.get('/about', (req,res) => {
  res.render('pages/about');
});

router.get('/login', (req,res) => {
  res.render('pages/login');
});

module.exports = router;
