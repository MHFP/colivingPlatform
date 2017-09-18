var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin');

var User = require('../models/user');
var config = require('../_config');
var init = require('./init');

passport.use('linkedin', new LinkedInStrategy({
    consumerKey: config.linkedin.clientID,
    consumerSecret: config.linkedin.clientSecret,
    callbackURL: config.linkedin.callbackURL,
    scope: [ 'r_basicprofile', 'r_emailaddress', 'w_share', 'rw_company_admin'],
    profileFields: ['id', 'first-name', 'last-name', 'email-address','public-profile-url', 'picture-urls::(original)', 'headline', 'industry', 'positions', 'summary', 'specialties']
  },
  // linkedin sends back the tokens and progile info
  function(token, tokenSecret, profile, done) {
    var searchQuery = {
      fullname: profile.displayName
    };

    let jobTitle = "";
    let pic = "";
    if (profile._json.positions.values){
      jobTitle = profile._json.positions.values[0].title;
    }
    if (profile._json.pictureUrls.values) {
      pic = profile._json.pictureUrls.values[0];
    }

    var updates = {
      linkedinID: profile.id,
      fullname: profile.displayName,
      firstname: profile._json.firstName,
      lastname: profile._json.lastName,
      email: profile._json.emailAddress,
      jobTitle: jobTitle,
      industry: profile._json.industry,
      headline: profile._json.headline,
      summary: profile._json.summary,
      pic: pic
    };

    var options = {
      upsert: true
    };

    // update the user if s/he exists or add a new user
    User.findOneAndUpdate(searchQuery, updates, options, function(err, user) {
      if(err) {
        return done(err);
      } else {
        return done(null, user);
      }
    });
  }

));

// serialize user into the session
init();


module.exports = passport;
