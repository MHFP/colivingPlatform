const express = require('express');
const router = express.Router();
const passportLinkedIn = require('../auth/linkedin');
const Place = require('../models/place');

router.get('/welcome', (req, res, next) => {
  // todo ensure Logged In

  //use mongoose to retrieve all places from DB:
  Place.find({}, (err, places) => {
    if (err) {
      return next(err);
    }
    res.render('welcome', {
      places: places,
      user: req.user
    });
  });

  // var continent = document.getElementById('continent');
  // console.log(continent);

});



module.exports = router;
