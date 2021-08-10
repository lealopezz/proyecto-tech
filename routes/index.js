var express = require('express');
var router = express.Router();
const api = require('../api');

/* GET home page. */
router.get('/', async (req, res) => {
  const products = await api.getProducts();
  const arrivals = require('../public/json/arrivals.json');
  res.render('pages/home', { products , arrivals });
});

router.get('/home', async (req,res) => {
  const products = await api.getProducts();
  const arrivals = require('../public/json/arrivals.json');
  res.render('pages/home', { products , arrivals });
});

router.get('/about', (req,res) => {
  res.render('pages/about');
});
router.get('/contact', (req,res) => {
  res.render('pages/contact');
});

router.get('/login', (req,res) => {
  res.render('pages/login');
});

router.get('/product/:id', async(req,res) => {
  const product = await api.getProductById(req.params.id);
  const arrivals = require('../public/json/arrivals.json');
  // res.send(product);
  res.render('pages/product', {product, arrivals});
});
router.get('/search', async (req,res) => {
  const products = await api.findProductBy(req.query.q);
  const arrivals = require('../public/json/arrivals.json');
  res.render('pages/busqueda', {products, arrivals});
});

module.exports = router;
