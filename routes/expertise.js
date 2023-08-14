var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('expertise', { title: 'Michael Shelby Blanton - Phoenix, AZ - Expertise' });
});

module.exports = router;