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
  pic: String
});


module.exports = mongoose.model('users', User);
