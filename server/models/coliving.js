/*jshint esversion: 6 */
var mongoose = require('mongoose');
const Schema   = mongoose.Schema;

//Create Place Schema
const PlaceSchema = new Schema({
  city     : String,
  country    : String,
  continent    : String,
  name    : String,
  url: String,
  imageURL: String,
//  geolocation: { lat: Number, long: Number },
  descripion: String,
  price: String,
  ratings: Number,
  amenities : [String],
  vetVisits: [Date]
});

//module.exports  = mongoose.model('place', placeSchema);
const Place = mongoose.model('placeCollectionModel', PlaceSchema);
module.exports = Place;
