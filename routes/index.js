var express = require('express');
var router = express.Router();


router.get('/background', function(req, res, next) {
  res.render('background', { title: 'Michael Shelby Blanton - Phoenix, AZ - Background' });
});

router.get('/certifications', function(req, res, next) {
  res.render('certifications', { title: 'Michael Shelby Blanton - Phoenix, AZ - Certifications' });
});

router.get('/education', function(req, res, next) {
  res.render('education', { title: 'Michael Shelby Blanton - Phoenix, AZ - Education' });
});

router.get('/experience', function(req, res, next) {
  res.render('experience', { title: 'Michael Shelby Blanton - Phoenix, AZ - Experience' });
});

router.get('/expertise', function(req, res, next) {
  res.render('expertise', { title: 'Michael Shelby Blanton - Phoenix, AZ - Expertise' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Michael Shelby Blanton - Phoenix, AZ - Projects' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Michael Shelby Blanton - Phoenix, AZ' });
});

module.exports = router;