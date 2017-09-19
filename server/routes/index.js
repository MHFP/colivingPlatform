var express = require('express');
var router = express.Router();
var passportLinkedIn = require('../auth/linkedin');
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');

router.get('/', function(req, res, next) {
  console.log(req.user);
  res.render('index', { title: "Welcome to nomad's portale" });
});

router.get('/login', ensureLoggedIn('/'), (req, res) => {
    res.render('welcome');
});


router.get('/auth/linkedin', ensureLoggedOut(),
  passportLinkedIn.authenticate('linkedin',
  { scope: ['r_basicprofile', 'r_emailaddress', 'w_share', 'rw_company_admin'] }));

router.get('/auth/linkedin/callback', ensureLoggedOut(),
  passportLinkedIn.authenticate('linkedin', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication
    // res.json(req.user);
    res.render('welcome');
    });
    

  // route for logging out
  router.get('/logout', function(req, res) {
      req.session.destroy(function(e){
          console.log("Here:", req.user);
          req.logout();
          res.redirect('/');
      });
  });

module.exports = router;
