var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('education', { title: 'Michael Shelby Blanton - Phoenix, AZ - Education' });
});

module.exports = router;