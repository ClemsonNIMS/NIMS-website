function initMap() {
  var clemson = {lat: 34.6761, lng: -82.8364};
  var watt = {lat: 34.676071, lng: -82.837038};
  var makerspace = {lat: 34.676285, lng:-82.836909};
  var immersive = {lat: 34.676003, lng:-82.837025};
  var rhodes = {lat: 34.676997, lng: -82.837205};
  var tillman = {lat: 34.680067, lng: -82.837398};
  var lee = {lat: 34.674526, lng: -82.838369};
  var cook = {lat: 34.676536, lng: -82.837771};
  var fDaniel = {lat: 34.675490, lng: -82.839139};
  var library = {lat: 34.6761, lng: -82.8364};

  var map = new google.maps.Map(document.getElementById('mapBox'), {
    zoom: 17,
    center: watt,
    mapTypeId: 'hybrid'
  });

  var prev_infowindow =false; 

  var mDEN = new google.maps.Marker({
    position: rhodes,
    map: map
  });

  //Makerspace
  var infoMakerspace ='<div class="row iw-row">'+
                        '<div class="col-12">' +
                          '<h1 class="infoHeader"><a href="http://cumaker.space/" target="_blank">Makerspace</a></h2>'+
                          '<h4 class="infoSubHeader">Watt 110</h4>'+
                        '</div>' +
                        '<div class="col-4 col-md-3 col-lg-2"><img src="assets/img/resourceIcons/3dprinting.svg">3D Printing</div>'+
                        '<div class="col-4 col-md-3 col-lg-2"><img src="assets/img/resourceIcons/3dscanning.svg">3D Scanning</div>'+
                        '<div class="col-4 col-md-3 col-lg-2"><img src="assets/img/resourceIcons/laserCutter.svg"><figcaption>Laser Cutting</div>'+
                        '<div class="col-4 col-md-3 col-lg-2"><img src="assets/img/resourceIcons/cnc.svg">CNC Milling</div>'+
                        '<div class="col-4 col-md-3 col-lg-2"><img src="assets/img/resourceIcons/tools.svg">Hand Tools</div>'+
                        '<div class="col-4 col-md-3 col-lg-2"><img src="assets/img/resourceIcons/vinylCutter.svg">Vinyl Cutting</div>'+
                        '<div class="col-4 col-md-3 col-lg-2"><img src="assets/img/resourceIcons/button.svg">Button Making</div>'+
                      '</div>';
  var infoWindowMakerspace = new google.maps.InfoWindow({
          content: infoMakerspace
  });
  var mMakerspace = new google.maps.Marker({
    position: makerspace,
    map: map
  });
  mMakerspace.addListener('click', function() {
    if(prev_infowindow) prev_infowindow.close();
    infoWindowMakerspace.open(map, mMakerspace);
    prev_infowindow = infoWindowMakerspace;
  });

  //Makerspace
  var infoImmersive ='<div class="row iw-row">'+
                        '<div class="col-12">' +
                          '<h1 class="infoHeader"><a href="http://vrclub.people.clemson.edu/index.html" target="_blank">Immersive Space</a></h2>'+
                          '<h4 class="infoSubHeader">Watt 308</h4>'+
                        '</div>' +
                        '<div class="col-4 col-md-3"><img src="assets/img/resourceIcons/vr.svg">Virtual Reality</div>'+
                        '<div class="col-4 col-md-3"><img src="assets/img/resourceIcons/3dscanning.svg">3D Scanning</div>'+
                        '<div class="col-4 col-md-3"><img src="assets/img/resourceIcons/vrDev.svg">VR Dev Kit</div>'+
                      '</div>';
  var infoWindowImmersive = new google.maps.InfoWindow({
          content: infoImmersive
  });
  var mImmersive = new google.maps.Marker({
    position: immersive,
    map: map
  });
  mImmersive.addListener('click', function() {
    if(prev_infowindow) prev_infowindow.close();
    infoWindowImmersive.open(map, mImmersive);
    prev_infowindow = infoWindowImmersive;
  });

  //Mech Engineering Student Shop
  var infoCook ='<div class="row iw-row">'+
                  '<div class="col-12">'+
                    '<h1 class="infoHeader"><a href="https://cecas.clemson.edu/mestudentshop/" target="_blank">Student Shop</a></h2>'+
                    '<h4 class="infoSubHeader">Cook Labs</h4>'+
                  '</div>'+
                  '<div class="col-4 col-md-3 col-lg-2"><img src="assets/img/resourceIcons/3dprinting.svg">3D Printing</div>'+
                  '<div class="col-4 col-md-3 col-lg-2"><img src="assets/img/resourceIcons/cnc.svg">CNC Milling</div>'+
                  '<div class="col-4 col-md-3 col-lg-2"><img src="assets/img/resourceIcons/electricTools.svg">Electric Tools</div>'+
                  '<div class="col-4 col-md-3 col-lg-2"><img src="assets/img/resourceIcons/tools.svg">Hand Tools</div>'+
                '</div>';
  var infoWindowCook = new google.maps.InfoWindow({
          content: infoCook
  });
  var mCookLabs = new google.maps.Marker({
    position: cook,
    map: map
  });
  mCookLabs.addListener('click', function() {
    if(prev_infowindow) prev_infowindow.close();
    infoWindowCook.open(map, mCookLabs);
    prev_infowindow = infoWindowCook;
  });


  var infoGeo = "";
  var infoWindowGeo = new google.maps.InfoWindow({
          content: infoGeo
  });
  var mGeospatial = new google.maps.Marker({
    position: library,
    map: map
  });
  mGeospatial.addListener('click', function() {
    if(prev_infowindow) prev_infowindow.close();
    infoWindowGeo.open(map, mGeospatial);
    prev_infowindow = infoWindowGeo;
  });


}