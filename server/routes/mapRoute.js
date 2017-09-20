var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/mapRoute', function(req, res, next) {
  res.render('welcome', { title: 'My Places' });
});



module.exports = router;
