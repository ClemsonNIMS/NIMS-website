function initMap() {
  var clemson = {lat: 34.6761, lng: -82.8364};
  var watt = {lat: 34.676071, lng: -82.837038};
  var rhodes = {lat: 34.676997, lng: -82.837205};
  var tillman = {lat: 34.680067, lng: -82.837398};
  var lee = {lat: 34.674526, lng: -82.838369};
  var cook = {lat: 34.676536, lng: -82.837771};
  var fDaniel = {lat: 34.675490, lng: -82.839139};
  var library = {lat: 34.6761, lng: -82.8364};
  var map = new google.maps.Map(document.getElementById('mapBox'), {
    zoom: 15,
    center: clemson
  });
  var marker = new google.maps.Marker({
    position: tillman,
    map: map
  });
  var marker1 = new google.maps.Marker({
    position: lee,
    map: map
  });
  var marker2 = new google.maps.Marker({
    position: rhodes,
    map: map
  });
  var marker3 = new google.maps.Marker({
    position: watt,
    map: map
  });
  var marker4 = new google.maps.Marker({
    position: cook,
    map: map
  });
  var marker5 = new google.maps.Marker({
    position: fDaniel,
    map: map
  });
  var marker6 = new google.maps.Marker({
    position: library,
    map: map
  });
}