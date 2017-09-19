var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create User Schema
var User = new Schema({
  linkedinID: String,
  fullname: String,
  firstname: String,
  lastname: String,
  email: String,
  jobTitle: String,
  industry: String,
  headline: String,
  summary: String,
  pic: String,
  //SOCIAL-ATTRIBUTES
  partier: Number,
  oraganized: Number,
  athlete: Number,
  social: Number,
  geek: Number,
  active: Number
});


module.exports = mongoose.model('users', User);
