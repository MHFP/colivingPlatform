/*jshint esversion: 6 */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/colivingPlatform', {
  useMongoClient: true
});
const Place = require('../models/place');


const listOfPlaces = [{
    "city": "Dahab",
    "country": "Egypt",
    "continent": "Africa",
    "name": "CoworkInn Dahab",
    "url": "https://www.coworkinn-dahab.com/",
    "imageURL": "https://image.jimcdn.com/app/cms/image/transf/dimension=568x10000:format=jpg/path/sc79f5fb5f5450daa/image/i6f4b934003853b9e/version/1465116560/image.jpg",
    "geolocation": { coordinates: [28.4956014, 34.4829166] },
    "description": "Come and work in the Land of 1001 Nights and the Village of the True Nomads. Escape the cold and enjoy the team-spirit of creative Co-workers.",
    "price": 10,
    "rating": 4,
    "amenities": ["wifi", "facilities", "office-only", "private", "same-building", "activities"],
    "category": ["educational", "historical", "mountain", "nature", "beach"]
  },
  {
    "city": "Taghazout",
    "country": "Morocco",
    "continent": "Africa",
    "name": "SunDesk",
    "url": "https://www.sun-desk.com/",
    "imageURL": "https://s-ec.bstatic.com/images/hotel/max1024x768/923/92322064.jpg",
    "geolocation": { coordinates: [30.545943, -9.7107997] }
    "description": "Work remotely and keep your productivity levels high, all while exploring beautiful Morocco. Join a community of like-minded people!",
    "price": 20,
    "rating": 4,
    "amenities": ["wifi", "facilities", "office-only", "private", "same-building", "activities"],
    "category": ["educational", "historical", "mountain", "nature", "beach"]
  },
  {
    "city": "Tokyo",
    "country": "Japan",
    "continent": "Asia",
    "name": "Roam Tokyo",
    "url": "https://www.roam.co/places/tokyo",
    "imageURL": "https://www.roam.co/dist/roam-tokyo-coliving-bedroom-4afa5986e3ae74e66f743c930ac43753.jpg",
    "geolocation": { coordinates: [35.6680191, 139.7299235] }
    "description": "Imperial Palace? Arts and shops at Omote-Sando? Work and after in Roppongi? Roam puts all of this and more within walking distance of your perfect home.",
    "price": 85,
    "rating": 5,
    "amenities": ["wifi", "facilities", "office-only", "private", "same-building", "activities"],
    "category": ["educational", "historical", "mountain", "nature", "beach"]
  },
  {
    "city": "Siem Reap",
    "country": "Cambodia",
    "continent": "Asia",
    "name": "AngkorHUB",
    "url": "https://angkorhub.com/",
    "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdypWMgoNKFX48ik07yxWJrEvUrz__QWTUAb35m_wMX5nFylTb",
    "geolocation": { coordinates: [13.352544, 103.851029] }
    "description": "AngkorHUB is also a social innovation centre dedicated to sustainable growth and development in Cambodia.  We bring together ideas, entrepreneurs, mentors and impact investors to nurture creative communities",
    "price": 18,
    "rating": 5,
    "amenities": ["wifi", "facilities", "office-only", "private", "same-building", "activities"],
    "category": ["educational", "historical", "mountain", "nature", "beach"]
  },
  {
    "city": "Phuket",
    "country": "Thailand",
    "continent": "Asia",
    "name": "Phuket Stash",
    "url": "http://phuketstash.com/",
    "imageURL": "https://cowoli.com/wp-content/uploads/2016/01/12.jpg",
    "geolocation": { coordinates: [7.955946, 98.3812783] }
    "description": "Are you a digital nomad just like us? Come to work, live and make friends.",
    "price": 6,
    "rating": 4,
    "amenities": ["wifi", "facilities", "office-only", "private", "same-building", "activities"],
    "category": ["educational", "historical", "mountain", "nature", "beach"]
  },
  {
    "city": "Bali",
    "country": "Indonesia",
    "continent": "Asia",
    "name": "Roam Bali",
    "url": "https://www.roam.co/places/ubud",
    "imageURL": "https://www.roam.co/dist/bali-coliving-space-703eda97ef4d355aa89309ecf5661a5a.jpg",
    "geolocation": { coordinates: [-8.5067106, 115.2495269] }
    "description": "A contemporary refuge in Ubud, the cultural and artistic heart of the island.",
    "price": 72,
    "rating": 5,
    "amenities": ["wifi", "facilities", "office-only", "private", "same-building", "activities"],
    "category": ["educational", "historical", "mountain", "nature", "beach"]
  },
  {
    "city": "Copenhagen",
    "country": "Denmark",
    "continent": "Europe",
    "name": "Nest Copenhagen",
    "url": "http://nestcopenhagen.dk/",
    "imageURL": "http://nestcopenhagen.dk/wp-content/uploads/2015/05/12094906_973693396027343_5839683422396793640_o-3-1024x683.jpg",
    "geolocation": { coordinates: [55.6729419, 12.5607542] }
    "description": "20 ambitious entrepreneurs as your roommates. A house of diverse backgrounds and skills. Community dinners and social gatherings.",
    "price": 22,
    "rating": 5,
    "amenities": ["wifi", "facilities", "office-only", "private", "same-building", "activities"],
    "category": ["educational", "historical", "mountain", "nature", "beach"]
  },
  {
    "city": "Berlin",
    "country": "Germany",
    "continent": "Europe",
    "name": "Coconat",
    "url": "http://coconat-space.com/",
    "imageURL": "http://coconat-space.com/wp-content/uploads/2017/01/barn.jpg",
    "geolocation": { coordinates: [52.1321216, 12.5144704] }
    "description": "Coconat: a Workation Retreat",
    "price": 20,
    "rating": 5,
    "amenities": ["wifi", "facilities", "office-only", "private", "same-building", "activities"],
    "category": ["educational", "historical", "mountain", "nature", "beach"]
  },
  {
    "city": "Costa da Caparica",
    "country": "Portugal",
    "continent": "Europe",
    "name": "The Sea Office",
    "url": "http://www.theseaoffice.com/",
    "imageURL": "http://www.theseaoffice.com/wp-content/uploads/2015/07/surfista-com-pescadores-ao-fundo-e1453481594604.jpg",
    "geolocation": { coordinates: [38.6469761, -9.2388469] }
    "description": "Sleep, Work & Fun",
    "price": 22,
    "rating": 5,
    "amenities": ["wifi", "facilities", "office-only", "private", "same-building", "activities"],
    "category": ["educational", "historical", "mountain", "nature", "beach"]
  },
  {
    "city": "Grimentz",
    "country": "Switzerland",
    "continent": "Europe",
    "name": "The Swiss Escape",
    "url": "https://www.swissescape.co/",
    "imageURL": "https://st.hzcdn.com/simgs/9ae1ec7b01892891_4-8461/contemporary-exterior.jpg",
    "geolocation": { coordinates: [46.178379, 7.57169] }
    "description": "Let nature drive your focus. Great things happen by getting together in a place where you love to work. Welcome to your Swiss Escape",
    "price": 38,
    "rating": 5,
    "amenities": ["wifi", "facilities", "office-only", "private", "same-building", "activities"],
    "category": ["educational", "historical", "mountain", "nature", "beach"]
  },
  {
    "city": "Javea",
    "country": "Spain",
    "continent": "Europe",
    "name": "Sun and Co",
    "url": "https://sun-and-co.com/",
    "imageURL": "https://sun-and-co.com/wp-content/uploads/2016/08/photos-2-2.jpg",
    "geolocation": { coordinates: [38.7886793, 0.1588801] }
    "description": "Work smarter. Live better. We are the home to location independent workers",
    "price": 20,
    "rating": 5,
    "amenities": ["wifi", "facilities", "office-only", "private", "same-building", "activities"],
    "category": ["educational", "historical", "mountain", "nature", "beach"]
  },
  {
    "city": "Tenerife",
    "country": "Spain",
    "continent": "Europe",
    "name": "Coworking in the Sun",
    "url": "https://www.coworkinginthesun.com/",
    "imageURL": "https://www.coworkinginthesun.com/wp-content/uploads/2015/04/coworking-breakfast.jpg",
    "geolocation": { coordinates: [28.410507, -16.5386737] }
    "description": "Work, live and party together with digital nomads, online marketing students, Spanish learners and other like-minded people from all over the world.",
    "price": 30,
    "rating": 4,
    "amenities": ["wifi", "facilities", "office-only", "private", "same-building", "activities"],
    "category": ["educational", "historical", "mountain", "nature", "beach"]
  },
  {
    "city": "Vilanova de Sau",
    "country": "Barcelona",
    "continent": "Spain",
    "name": "Nectar Rural Coworking",
    "url": "http://www.nectarconectar.com/",
    "imageURL": "http://www.nectarconectar.com/uploads/8/0/4/2/80427392/7543585_1.jpg",
    "geolocation": { coordinates: [41.944931, 2.4281736] }
    "description": "Rural Co-working & Coliving. An inspiring & creative place in the midst of nature where you can combine your work and ​projects with your passions.",
    "price": 33,
    "rating": 4,
    "amenities": ["wifi", "facilities", "office-only", "private", "same-building", "activities"],
    "category": ["educational", "historical", "mountain", "nature", "beach"]
  },
  {
    "city": "Bejuco",
    "country": "Costa Rica",
    "continent": "Central America",
    "name": "Outsite Costa Rica",
    "url": "https://outsite.co/locations/costa-rica/",
    "imageURL": "https://cdn.outsite.co/wp-content/uploads/2016/10/costarica6.png",
    "geolocation": { coordinates: [9.521437, -84.4380137] }
    "description": "Surround yourself with exeptional nature and a great community. Trade your office for a beach villa, and join us in beautiful Costa Rica!",
    "price": 40,
    "rating": 4,
    "amenities": ["wifi", "facilities", "office-only", "private", "same-building", "activities"],
    "category": ["educational", "historical", "mountain", "nature", "beach"]
  },
  {
    "city": "Cali",
    "country": "Colombia",
    "continent": "South America",
    "name": "Miraflores",
    "url": "https://www.casamiraflorescali.com/",
    "imageURL": "https://media-cdn.tripadvisor.com/media/photo-s/0f/49/9e/e5/casa-miraflores.jpg",
    "geolocation": { coordinates: [3.437958, -76.5432827] }
    "description": "Give and receive, everyday in Casa Miraflores is about embracing the moment and living the life of your dreams.",
    "price": 22,
    "rating": 5,
    "amenities": ["wifi", "facilities", "office-only", "private", "same-building", "activities"],
    "category": ["educational", "historical", "mountain", "nature", "beach"]
  },
  {
    "city": "Isla Colón",
    "country": "Panama",
    "continent": "Central America",
    "name": "Coco Vivo",
    "url": "http://www.cocovivo.com/",
    "imageURL": "http://www.cocovivo.com/images/cocovivo-hotel-retreat-bocas-del-toro.jpg",
    "geolocation": { coordinates: [9.22191, -82.2663987] }
    "description": "Shake off the stress of daily modern life and submerge in the magic of unspoiled nature!",
    "price": 32,
    "rating": 4.8,
    "amenities": ["wifi", "facilities", "office-only", "private", "same-building", "activities"],
    "category": ["educational", "historical", "mountain", "nature", "beach"]
  },
  {
    "city": "San Juan del Sur",
    "country": "Nicaragua",
    "continent": "Central America",
    "name": "Nomad Life",
    "url": "https://a0.muscache.com/im/pictures/97076b04-0ca4-4393-9f8a-720325ce74ae.jpg?aki_policy=large",
    "imageURL": "https://goo.gl/maps/vt2TjHxkGBE2",
    "geolocation": { coordinates: [11.2576212, -85.8739757] }
    "description": "NomadLife is a Co-Working, Co-Living Space in Nicaragua. Where freelancers, remote workers, entrepreneurs, and other location independent creatives come to work online and find the perfect balance between productivity and enjoyment.",
    "price": 20,
    "rating": 4,
    "amenities": ["wifi", "facilities", "office-only", "private", "same-building", "activities"],
    "category": ["educational", "historical", "mountain", "nature", "beach"]
  },
  {
    "city": "Miami",
    "country": "USA",
    "continent": "North America",
    "name": "Roam Miami",
    "url": "https://www.roam.co/places/miami",
    "imageURL": "https://www.venuereport.com/uploads_cache/venue_carousel/venues/29594/originals/andrew-litsch-roam-print-122.jpg",
    "geolocation": { coordinates: [25.7724601,
 -80.2032782] }
    "description": "An experimental community testing the boundaries between work, travel and life adventure.",
    "price": 85,
    "rating": 5,
    "amenities": ["wifi", "facilities", "office-only", "private", "same-building", "activities"],
    "category": ["educational", "historical", "mountain", "nature", "beach"]
  },
  {
    "city": "Canary Islands",
    "country": "Spain",
    "continent": "Europe",
    "name": "Hub Fuerteventura",
    "url": "https://hubfuerteventura.co/",
    "imageURL": "http://s3.amazonaws.com/desksurfing_test/datas/2101/large/DSC_0037.jpg?1417786816",
    "geolocation": { coordinates: [28.74269, -13.867457] }
    "description": "A coworking & coliving space in Fuerteventura, Canary Islands, Surfer's paradise.",
    "price": 20,
    "rating": 5,
    "amenities": ["wifi", "facilities", "office-only", "private", "same-building", "activities"],
    "category": ["educational", "historical", "mountain", "nature", "beach"]
  },
  {
    "city": "Mokrin",
    "country": "Serbia",
    "continent": "Europe",
    "name": "Mokrin House of Ideas",
    "url": "http://www.mokrinhouse.com/",
    "imageURL": "http://stillinbelgrade.com/wp-content/uploads/2016/04/mokrin-house.jpg",
    "geolocation": { coordinates: [45.934021, 20.4202293] }
    "description": "Perfect place for freelancers, entrepreneurs and digital nomads.",
    "price": 29,
    "rating": 5,
    "amenities": ["wifi", "facilities", "office-only", "private", "same-building", "activities"],
    "category": ["educational", "historical", "mountain", "nature", "beach"]
  }
];

Place.create(listOfPlaces, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach((Place) => {
    console.log(Place.name);
  });
});

mongoose.connection.close();
