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

  var prev_infowindow =false; 

  var mDEN = new google.maps.Marker({
    position: rhodes,
    map: map
  });

  var infoMakerspace = '<div class="resourceInfoWindow"><h2 class="infoHeader">'+
                        '<a href="http://cumaker.space/" target="_blank">Makerspace</a>'+
                        '</h2>' +
                        '<div><ul class="popupResourceList">'+
                        '<li><figure><img src="assets/img/resourceIcons/laserCutter.svg"><figcaption>Laser Cutting</figcaption></figure></li>'+
                        '<li><figure><img src="assets/img/resourceIcons/cnc.svg"><figcaption>CNC</figcaption></figure></li>'+
                        '</ul></div>'+
                        '</div>';
  var infoWindoMakerspace = new google.maps.InfoWindow({
          content: infoMakerspace
  });
  var mMakerspace = new google.maps.Marker({
    position: watt,
    map: map
  });
  mMakerspace.addListener('click', function() {
    if(prev_infowindow) prev_infowindow.close();
    infoWindoMakerspace.open(map, mMakerspace);
    prev_infowindow = infoWindoMakerspace;
  });


  var infoCook = '<h2 class="infoHeader">'+
                        '<a href="https://cecas.clemson.edu/mestudentshop/" target="_blank">Cook Labs</a>'+
                        '</h2>';
  var infoWindoCook = new google.maps.InfoWindow({
          content: infoCook
  });
  var mCookLabs = new google.maps.Marker({
    position: cook,
    map: map
  });
  mCookLabs.addListener('click', function() {
    if(prev_infowindow) prev_infowindow.close();
    infoWindoCook.open(map, mCookLabs);
    prev_infowindow = infoWindoCook;
  });

  var mGeospatial = new google.maps.Marker({
    position: library,
    map: map
  });

}