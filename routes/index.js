var express = require('express');
var router = express.Router();

/* GET home page. */
// 127.0.0.1 (/)
// 127.0.0.1 (Home)
router.get('/', function(req, res, next) {
  // the title that is used in index.ejs
  //open the index view to see the title
  res.render('index', { title: 'Home Page' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

/* GET About Me page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects Page' });
});


/* GET Contact us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});


module.exports = router;

/*
MVC
Model --> to connect our logic
view --> pages
controller --> the logic behind our routes*/
