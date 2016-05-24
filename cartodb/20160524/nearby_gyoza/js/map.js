;(function() {
  function main() {
    cartodb.createVis('map', 'https://kaitokinjo.cartodb.com/api/v2/viz/ac088c18-1fe0-11e6-96a1-0e787de82d45/viz.json', {
    })
    .done(function(vis, layers) {
      var map = vis.getNativeMap();

      if (navigator.geolocation) {
        var timeoutVal = 10 * 1000 * 1000;
        navigator.geolocation.watchPosition(
          mapToPosition,
          alertError,
          { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
          );
      }
      else {
        console.log("Geolocation is not supported by this browser");
      }

      function alertError(error) {
        var errors = {
          1: 'Permission denied',
          2: 'Position unavailable',
          3: 'Request timeout'
        };
        console.log("Error: " + errors[error.code]);
      }
      function mapToPosition(position) {
        lon = position.coords.longitude;
        lat = position.coords.latitude;
        map.setView(new L.LatLng(lat,lon), 16,{animate:true});
        new L.CircleMarker([lat,lon],{radius: 12}).addTo(map);
      }

    })
    .error(function(err) {
      console.log(err);
    });
  }
  window.onload = main;
})();
