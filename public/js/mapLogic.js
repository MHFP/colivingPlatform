var markers;
var foo = "test";

function initialize() {
  var mapOptions = {
    center: {lat: 41.385063, lng: 2.173403},
    zoom: 3,
  };

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var contentString = '<div>wtf<div>';


  var infowindow = new google.maps.InfoWindow({
      content: contentString
    });


  function eqfeed_callback(places) {
    markers = [];

   var infowindow = new google.maps.InfoWindow();
    for (var i = 0; i < places.length; i++) {
      var label = places[i].name;
      var coords = places[i].geolocation.coordinates;
      var latLng = new google.maps.LatLng(coords[0], coords[1]);
      var marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: latLng,
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

  eqfeed_callback(window.places);

marker.addListener('click', toggleBounce);
marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}


google.maps.event.addDomListener(window, 'load', initialize);
