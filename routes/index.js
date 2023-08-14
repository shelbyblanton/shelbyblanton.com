var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Michael Shelby Blanton - Phoenix, AZ' });
});

module.exports = router;