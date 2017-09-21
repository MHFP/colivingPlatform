var markers;
var foo = "test";

function initialize() {
  var mapOptions = {
    center: {lat: 41.385063, lng: 2.173403},
    zoom: 4,
  };

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);


  function eqfeed_callback(places) {
    markers = [];

   var infowindow = new google.maps.InfoWindow();
    for (var i = 0; i < places.length; i++) {

      var label = places[i].name;
      var coords = places[i].geolocation.coordinates;
      var latLng = new google.maps.LatLng(coords[0], coords[1]);
      var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: label
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(places[i].name);
          infowindow.open(map, marker);
        };
      })(marker, i));


      markers.push(marker);
    }
    console.log(markers);
  }


  // for (i = 0; i < locations.length; i++) {
  //   marker = new google.maps.Marker({
  //     position: new google.maps.LatLng(locations[i][1], locations[i][2]),
  //     map: map
  //   });




  eqfeed_callback(window.places);

}

google.maps.event.addDomListener(window, 'load', initialize);


// var location = document.getElementById('xyz').value;
// console.log(location);

// var input =  document.getElementById('pac-input');
// var autocomplete = new google.maps.places.Autocomplete(input);

// var marker = new google.maps.Marker({
//          position: location,
//          map: map
//        });





// var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//       var labelIndex = 0;
//
//       function initialize() {
//         var bangalore = { lat: 12.97, lng: 77.59 };
//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 12,
//           center: bangalore
//         });
//
//         // This event listener calls addMarker() when the map is clicked.
//         google.maps.event.addListener(map, 'click', function(event) {
//           addMarker(event.latLng, map);
//         });
//
//         // Add a marker at the center of the map.
//         addMarker(bangalore, map);
//       }
//
//       // Adds a marker to the map.
//       function addMarker(location, map) {
//         // Add the marker at the clicked location, and add the next-available label
//         // from the array of alphabetical characters.
//         var marker = new google.maps.Marker({
//           position: location,
//           label: labels[labelIndex++ % labels.length],
//           map: map
//         });
//       }
//
//       google.maps.event.addDomListener(window, 'load', initialize);
