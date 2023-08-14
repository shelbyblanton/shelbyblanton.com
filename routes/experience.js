var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('experience', { title: 'Michael Shelby Blanton - Phoenix, AZ - Experience' });
});

module.exports = router;