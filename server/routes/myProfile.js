var express = require('express');
var router = express.Router();
var passportLinkedIn = require('../auth/linkedin');
const { ensureLoggedIn } = require('connect-ensure-login');


router.get('/myProfile',
  ensureLoggedIn("/"),
  function(req, res) {
    res.render('myprofile', { user: req.user });
  });



module.exports = router;
