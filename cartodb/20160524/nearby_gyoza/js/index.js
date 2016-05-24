;(function() {
  function main() {

   if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition(function(position){
       var data = position.coords;
       var lat = data.latitude;
       var lon = data.longitude;

       var cartodb_sql = new cartodb.SQL({ user: 'kaitokinjo' });
       var sql = 'SELECT address,latitude,longitude,place_name,tel,url, '
       + 'ROUND(CAST(ST_Distance(the_geom,ST_SetSRID(ST_MakePoint({{lon}},{{lat}}),4326),false)as numeric),1) distance '
       + 'FROM shibuya_gyoza '
       + 'ORDER BY distance';
       cartodb_sql.execute(sql,{lat:lat,lon:lon})
       .done(function(data) {
        console.log(data.rows);
        var place ="";
        $.each(data.rows, function(i, val) {
          place +=
          '<div><h3 class="margin" id="place_name">' + val.place_name + '</h3>'
          + '<h3 id="distance">' + val.distance + 'm</h3>'
          + '<h3 id="address">'+val.address + '</h3>'
          + '<h3 id="tel">'+val.tel+'</h3>'
          + '<h4 id="url"><a href="'+val.url+'" target="_brank">'+ val.url + '</a></h4></div>';
        });
        $('#place').html(place);
        $('#place').slick({
          infinite: true,
          dots:true,
          slidesToShow: 1,
          centerMode: true,
          autoplay:true,
          responsive: [{
            breakpoint: 480,
            settings: {
              centerMode: false,
            }
          }]

        });
      })
       .error(function(errors) {
        console.log("errors:" + errors);
      })
     });
   }
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
      if(typeof circle !== 'undefined'){
        map.removeLayer(circle);
      }else{
        map.setView(new L.LatLng(lat,lon), 16,{animate:true});
      }
      circle = new L.CircleMarker([lat,lon],{radius: 5}).addTo(map);
    }

  })
   .error(function(err) {
    console.log(err);
  });

 }
 window.onload = main;
})();
