var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('certifications', { title: 'Michael Shelby Blanton - Phoenix, AZ - Certifications' });
});

module.exports = router;