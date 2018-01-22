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
    center: watt;
    mapTypeId: 'roadmap'
  });

  var prev_infowindow =false; 

  var mDEN = new google.maps.Marker({
    position: rhodes,
    map: map
  });

  //Makerspace
  var infoMakerspace ='<div>'+
                        '<div>' +
                          '<h1 class="infoHeader"><a href="http://cumaker.space/" target="_blank">Makerspace</a></h2>'+
                          '<h4 class="infoSubHeader">Watt 110</h4>'+
                        '</div>' +
                        '<div class="row popupResourceList">'+
                          '<div class="col"><img src="assets/img/resourceIcons/3dprinting.svg">3D Printing</div>'+
                          '<div class="col"><img src="assets/img/resourceIcons/3dscanning.svg">3D Scanning</div>'+
                          '<div class="col"><img src="assets/img/resourceIcons/laserCutter.svg"><figcaption>Laser Cutting</div>'+
                          '<div class="col"><img src="assets/img/resourceIcons/cnc.svg">CNC Milling</div>'+
                          '<div class="col"><img src="assets/img/resourceIcons/tools.svg">Hand Tools</div>'+
                          '<div class="col"><img src="assets/img/resourceIcons/vinylCutter.svg">Vinyl Cutting</div>'+
                          '<div class="col"><img src="assets/img/resourceIcons/button.svg">Button Making</div>'+
                        '</div>'+
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


  //Mech Engineering Student Shop
  var infoCook ='<div>'+
                  '<div>'+
                    '<h1 class="infoHeader"><a href="https://cecas.clemson.edu/mestudentshop/" target="_blank">Mech Eng Student Shop</a></h2>'+
                    '<h4 class="infoSubHeader">Cook Labs</h4>'+
                  '</div>' +
                  '<div class="row popupResourceList">'+
                    '<div class="col"><img src="assets/img/resourceIcons/3dprinting.svg">3D Printing</div>'+
                    '<div class="col"><img src="assets/img/resourceIcons/cnc.svg">CNC Milling</div>'+
                    '<div class="col"><img src="assets/img/resourceIcons/electricTools.svg">Electric Tools</div>'+
                    '<div class="col"><img src="assets/img/resourceIcons/tools.svg">Hand Tools</div>'+
                  '</div>'+
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

/*
  var infoGeo = '<div id="iw-container">' +
                    '<div class="iw-title">Porcelain Factory of Vista Alegre</div>' +
                    '<div class="iw-content">' +
                      '<div class="iw-subTitle">History</div>' +
                      '<img src="assets/img/resourceIcons/tools.svg" alt="Porcelain Factory of Vista Alegre" height="115" width="83">' +
                      '<p>Founded in 1824, the Porcelain Factory of Vista Alegre was the first industrial unit dedicated to porcelain production in Portugal. For the foundation and success of this risky industrial development was crucial the spirit of persistence of its founder, José Ferreira Pinto Basto. Leading figure in Portuguese society of the nineteenth century farm owner, daring dealer, wisely incorporated the liberal ideas of the century, having become "the first example of free enterprise" in Portugal.</p>' +
                      '<div class="iw-subTitle">Contacts</div>' +
                      '<p>VISTA ALEGRE ATLANTIS, SA<br>3830-292 Ílhavo - Portugal<br>'+
                      '<br>Phone. +351 234 320 600<br>e-mail: geral@vaa.pt<br>www: www.myvistaalegre.com</p>'+
                    '</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>';
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
*/

}