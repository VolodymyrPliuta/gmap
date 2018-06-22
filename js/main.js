      // If you're adding a number of markers, you may want to drop them on the map
      // consecutively rather than all at once. This example shows how to use
      // window.setTimeout() to space your markers' animation.

      var neighborhoods = [
        {lat: 30.274438, lng:  -81.388347},
        {lat: 28.546863, lng: -81.373917},
        {lat: 28.392157, lng: -80.596978},
        {lat: 25.774763, lng: -80.130467},
        {lat: 29.906616, lng: -81.314784},
        {lat: 29.991212, lng: -81.689631},
        {lat: 30.104096, lng:  -81.430318},
        {lat: 32.838814, lng: -96.786518},
        {lat: 33.774483, lng: -84.382849},
        {lat: 40.736701, lng: -73.989334},
        {lat: 20.508578, lng: -86.947737},
        {lat: 21.165197, lng: -86.827264},
        {lat: 18.735196, lng:  -87.691022},
        {lat: 17.490481,  lng: -88.202213},
        {lat: 16.357849, lng:  -86.442765},
        {lat: 18.339866, lng: -64.9249165},
        {lat: 18.0308266, lng: -63.0736329},
        {lat: 21.428566, lng: -71.143985},
        {lat: 25.078643, lng:  -77.338089},
      ];

      var markers = [];
      var map;

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: {lat: 30.274438, lng: -81.388347}
        });
      }

      function drop() {
        clearMarkers();
        for (var i = 0; i < neighborhoods.length; i++) {
          addMarkerWithTimeout(neighborhoods[i], i * 500);
        }
      }

      function addMarkerWithTimeout(position, timeout) {
        window.setTimeout(function() {
          markers.push(new google.maps.Marker({
            position: position,
            map: map,
            animation: google.maps.Animation.DROP
          }));
        }, timeout);
      }

      function clearMarkers() {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
        markers = [];
      }
//       function initMap() {

//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 3,
//           center: {lat: 30.274438, lng: -81.388347}
//         });

//         // Create an array of alphabetical characters used to label the markers.
//         var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//         // Add some markers to the map.
//         // Note: The code uses the JavaScript Array.prototype.map() method to
//         // create an array of markers based on a given "locations" array.
//         // The map() method here has nothing to do with the Google Maps API.
//         var markers = locations.map(function(location, i) {
//           return new google.maps.Marker({
//             position: location,
//             label: labels[i % labels.length]
//           });
//         });

//         // Add a marker clusterer to manage the markers.
//         var markerCluster = new MarkerClusterer(map, markers,
//             {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
//       }
//       var locations = [
//         {lat: 30.274438, lng:  -81.388347},
//         {lat: 28.546863, lng: -81.373917},
//         {lat: 28.392157, lng: -80.596978},
//         {lat: 25.774763, lng: -80.130467},
//         {lat: 29.906616, lng: -81.314784},
//         {lat: 29.991212, lng: -81.689631},
//         {lat: 30.104096, lng:  -81.430318},
//         {lat: 32.838814, lng: -96.786518},
//         {lat: 33.774483, lng: -84.382849},
//         {lat: 40.736701, lng: -73.989334},
//         {lat: 20.508578, lng: -86.947737},
//         {lat: 21.165197, lng: -86.827264},
//         {lat: 18.735196, lng:  -87.691022},
//         {lat: 17.490481,  lng: -88.202213},
//         {lat: 16.357849, lng:  -86.442765},
//         {lat: 18.339866, lng: -64.9249165},
//         {lat: 18.0308266, lng: -63.0736329},
//         {lat: 21.428566, lng: -71.143985},
//         {lat: 25.078643, lng:  -77.338089},

//       ]
// function drop() {
//   for (var i =0; i < markerArray.length; i++) {
//     setTimeout(function() {
//       addMarkerMethod();
//     }, i * 200);
//   }
// }