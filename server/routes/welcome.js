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
    console.log(places);

    // places.get('/welcome', (req, res, next) => {
    //   places.find({}).populate('creator', '').exec((err, places) => {
    //     if (err) {
    //       return next(err);
    //     }
    //     res.render('/welcome', {req, places});
    //   });
    // });
  });
});



module.exports = router;
