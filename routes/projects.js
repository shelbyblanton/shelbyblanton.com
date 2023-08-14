var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('projects', { title: 'Michael Shelby Blanton - Phoenix, AZ - Projects' });
});

module.exports = router;