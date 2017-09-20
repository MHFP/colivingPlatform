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
  geolocation: { type: { type: String, default: "Point" }, coordinates: [Number] },
  descripion: String,
  price: String,
  ratings: Number,
  amenities : [String],
  vetVisits: [Date]
});

PlaceSchema.index({ location: '2dsphere' });

//module.exports  = mongoose.model('place', placeSchema);
const Place = mongoose.model('places', PlaceSchema);
module.exports = Place;
