var express = require('express');
var router = express.Router();
var passportLinkedIn = require('../auth/linkedin');
const { ensureLoggedIn }     = require('connect-ensure-login');



router.get('/welcome',
  ensureLoggedIn("/login"),
  function(req, res) {
    res.render('welcome', { user: req.user });
  });



module.exports = router;
