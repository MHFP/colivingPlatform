function initialize() {
  var mapOptions = {
    center: {lat: 42.75873, lng: -9.075063},
    zoom: 13,
  };
  var location = document.getElementById('xyz').value;
  console.log(location);
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var marker = new google.maps.Marker({
           position: location,
           map: map
         });
  var input =  document.getElementById('pac-input');
  var autocomplete = new google.maps.places.Autocomplete(input);

  // window.eqfeed_callback = function(places) {
  //   for (var i = 0; i < places.length; i++) {
  //     var coords = places[i].geolocation;
  //     var latLng = new google.maps.LatLng(coords.lat, coords.long);
  //     var marker = new google.maps.Marker({
  //       position: latLng,
  //       map: map
  //     });
  //   }
  // };

}



google.maps.event.addDomListener(window, 'load', initialize);



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
