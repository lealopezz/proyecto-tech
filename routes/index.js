var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Tech' });
});

router.get('/home', (req,res) => {
  res.render('pages/home');
});

router.get('/about', (req,res) => {
  res.render('pages/about');
});

router.get('/login', (req,res) => {
  res.render('pages/login');
});

module.exports = router;
