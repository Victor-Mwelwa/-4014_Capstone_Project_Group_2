var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('welcome to', { title: 'Express' });
});

module.exports = router;
