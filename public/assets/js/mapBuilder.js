var mapMarkers,
	clearFiltersButton,
	filterTexts;

function initMap() {
	var coordinates = {
		clemson: {lat: 34.6761, lng: -82.8364},
		watt: {lat: 34.676071, lng: -82.837038},
		makerspace: {lat: 34.676285, lng:-82.836909},
		immersive: {lat: 34.676003, lng:-82.837025},
		rhodes: {lat: 34.676997, lng: -82.837205},
		tillman: {lat: 34.680067, lng: -82.837398},
		lee: {lat: 34.674526, lng: -82.838369},
		cook: {lat: 34.676536, lng: -82.837771},
		fDaniel: {lat: 34.675490, lng: -82.839139},
		adobe: {lat: 34.676776, lng: -82.836178},
		dml: {lat: 34.679914, lng:-82.837424}
	}

	var map = new google.maps.Map(document.getElementById('mapBox'), {
		zoom: 17,
		center: coordinates.watt,
		zoomControl: true,
		mapTypeControl: false,
		scaleControl: false,
		streetViewControl: false,
		rotateControl: false,
		fullscreenControl: false,
		styles: [
			{
				"featureType": "administrative.land_parcel",
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "labels.text",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "poi.business",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "poi.business",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			}
		]
	});

	var prev_infowindow =false;

	mapMarkers = [];

	//Makerspace
	var infoMakerspace = '<div style="width: 50vw; max-width: 400px;">' +
			'<div class="iw-container">'+
				'<div class="row iw-row">'+
					'<div class="col-12">' +
						'<h2 class="infoHeader">Makerspace</h2>'+
						'<h4 class="infoSubHeader">Watt 110</h4>'+
					'</div>' +
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/3dprinting.svg">3D Printing</div>'+
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/3dscanning.svg">3D Scanning</div>'+
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/laserCutter.svg"><figcaption>Laser Cutting</div>'+
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/cnc.svg">CNC Milling</div>'+
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/tools.svg">Hand Tools</div>'+
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/vinylCutter.svg">Vinyl Cutting</div>'+
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/button.svg">Button Making</div>'+
				'</div>'+
			'</div>'+
			'<div class="iw-footer">'+
				'<a class="btn btn-primary" role="button" href="http://cumaker.space/" target="_blank">More Info</a>'+
			'</div>' +
		'</div>';

	var infoWindowMakerspace = new google.maps.InfoWindow({
		content: infoMakerspace
	});
	var mMakerspace = new google.maps.Marker({
		position: coordinates.makerspace,
		map: map
	});
	mMakerspace.addListener('click', function() {
		if(prev_infowindow) prev_infowindow.close();
		infoWindowMakerspace.open(map, mMakerspace);
		prev_infowindow = infoWindowMakerspace;
	});

	mapMarkers.push([mMakerspace, infoMakerspace]);

	//Makerspace
	var infoImmersive = '<div style="width: 50vw; max-width: 400px;">' +
		'<div class="iw-container" style="width: 50vw;">'+
			'<div class="row iw-row">'+
				'<div class="col-12">' +
					'<h2 class="infoHeader">Immersive Space</h2>'+
					'<h4 class="infoSubHeader">Watt 308</h4>'+
				'</div>' +
				'<div class="col-4 col-md-3"><img src="assets/img/resourceIcons/vr.svg">Virtual Reality</div>'+
				'<div class="col-4 col-md-3"><img src="assets/img/resourceIcons/3dscanning.svg">3D Scanning</div>'+
				'<div class="col-4 col-md-3"><img src="assets/img/resourceIcons/vrDev.svg">VR Dev Kit</div>'+
			'</div>'+
		'</div>'+
		'<div class="iw-footer">'+
			'<a class="btn btn-primary" role="button" href="http://vrclub.people.clemson.edu/index.html" target="_blank">More Info</a>'+
		'</div>' +
		'</div>';
	var infoWindowImmersive = new google.maps.InfoWindow({
		content: infoImmersive
	});
	var mImmersive = new google.maps.Marker({
		position: coordinates.immersive,
		map: map
	});
	mImmersive.addListener('click', function() {
		if(prev_infowindow) prev_infowindow.close();
		infoWindowImmersive.open(map, mImmersive);
		prev_infowindow = infoWindowImmersive;
	});

	mapMarkers.push([mImmersive, infoImmersive]);

	//Mech Engineering Student Shop
	var infoCook = '<div style="width: 50vw; max-width: 400px;">' +
			'<div class="iw-container">'+
				'<div class="row iw-row">'+
					'<div class="col-12">'+
						'<h2 class="infoHeader">ME Shop</h2>'+
						'<h4 class="infoSubHeader">Cook Labs</h4>'+
					'</div>'+
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/lathe.svg">Lathes</div>'+
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/bandsaw.svg">Bandsaws</div>'+
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/drillpress.svg">Drill Press</div>'+
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/cnc.svg">CNC Milling</div>'+
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/grinder.svg">Grinders</div>'+
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/electricTools.svg">Electric Tools</div>'+
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/tools.svg">Hand Tools</div>'+
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/3dprinting.svg">3D Printing</div>'+
				'</div>'+
			'</div>'+
			'<div class="iw-footer">'+
				'<a class="btn btn-primary" role="button" href="https://cecas.clemson.edu/mestudentshop/" target="_blank">More Info</a>'
			'</div>' +
			'</div>';
	var infoWindowCook = new google.maps.InfoWindow({
		content: infoCook
	});
	var mCookLabs = new google.maps.Marker({
		position: coordinates.cook,
		map: map
	});
	mCookLabs.addListener('click', function() {
		if(prev_infowindow) prev_infowindow.close();
		infoWindowCook.open(map, mCookLabs);
		prev_infowindow = infoWindowCook;
	});

	mapMarkers.push([mCookLabs, infoCook]);

	//Digital Media and Learning
	var infoDML = '<div style="width: 50vw; max-width: 400px;">' +
			'<div class="iw-container">'+
				'<div class="row iw-row">'+
					'<div class="col-12">'+
						'<h2 class="infoHeader">DML Labs</h2>'+
						'<h4 class="infoSubHeader">Tillman 213</h4>'+
					'</div>' +
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/microphone.svg">Audio Production</div>'+
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/videocamera.svg">Video Production</div>'+
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/3dprinting.svg">3D Printing</div>'+
					'<div class="col-4 col-md-3"><img src="assets/img/resourceIcons/vr.svg">Virtual Reality</div>'+
					'<div class="col-4 col-md-3"><img src="assets/img/resourceIcons/vrDev.svg">VR Dev Kit</div>'+
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/circuits.svg">Circuit Kits</div>'+
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/microcontrollers.svg">Micro-controllers</div>'+
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/greenscreen.svg">Green Screen</div>'+
				'</div>'+
			'</div>'+
			'<div class="iw-footer">'+
				'<a class="btn btn-primary" role="button" href="https://www.clemson.edu/education/dmll/dml-labs.html" target="_blank">More Info</a>'
			'</div>' +
			'</div>';
	var infoWindowDML = new google.maps.InfoWindow({
		content: infoDML
	});
	var mDML = new google.maps.Marker({
		position: coordinates.tillman,
		map: map
	});
	mDML.addListener('click', function() {
		if(prev_infowindow) prev_infowindow.close();
		infoWindowDML.open(map, mDML);
		prev_infowindow = infoWindowDML;
	});

	mapMarkers.push([mDML, infoDML]);

	//Digital Design Shop
	var infoDDS = '<div style="width: 50vw; max-width: 400px;">' +
			'<div class="iw-container">'+
				'<div class="row iw-row">'+
					'<div class="col-12">'+
						'<h2 class="infoHeader">Digital Design Shop</h2>'+
						'<h4 class="infoSubHeader">Lee Hall</h4>'+
					'</div>'+
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/laserCutter.svg"><figcaption>Laser Cutting</div>'+
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/cnc.svg">CNC Milling</div>'+
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/bandsaw.svg">Band Saws</div>'+
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/3dprinting.svg">3D Printing</div>'+
					'<div class="col-4 col-md-3"><img src="assets/img/resourceIcons/3dscanning.svg">3D Scanning</div>'+
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/tools.svg">Hand Tools</div>'+
				'</div>'+
			'</div>'+
			'<div class="iw-footer">'+
				'<a class="btn btn-primary" role="button" href="http://www.clemson.edu/caah/departments/architecture/campuses/cusa-dds/index.html" target="_blank">More Info</a>'
			'</div>' +
			'</div>';
	var infoWindowDDS = new google.maps.InfoWindow({
		content: infoDDS
	});
	var mDDS = new google.maps.Marker({
		position: coordinates.lee,
		map: map
	});
	mDDS.addListener('click', function() {
		if(prev_infowindow) prev_infowindow.close();
		infoWindowDDS.open(map, mDDS);
		prev_infowindow = infoWindowDDS;
	});
	mapMarkers.push([mDDS, infoDDS]);

	//Design Innovation Studio
	var infoDIS = '<div style="width: 50vw; max-width: 400px;">' +
			'<div class="iw-container">'+
				'<div class="row iw-row">'+
					'<div class="col-12">'+
						'<h2 class="infoHeader">Design Innovation Studio</h2>'+
						'<h4 class="infoSubHeader">Fluor Daniel 111</h4>'+
					'</div>'+
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/tools.svg">Hand Tools</div>'+
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/soldering.svg">Soldering</div>'+
				'</div>'+
			'</div>'+
			'<div class="iw-footer">'+
				'<a class="btn btn-primary" role="button" href="https://www.clemson.edu/cecas/departments/me/academics/undergraduate/design/design_innovation_studio.html" target="_blank">More Info</a>'
			'</div>' +
			'</div>';
	var infoWindowDIS = new google.maps.InfoWindow({
		content: infoDIS
	});
	var mDIS = new google.maps.Marker({
		position: coordinates.fDaniel,
		map: map
	});
	mDIS.addListener('click', function() {
		if(prev_infowindow) prev_infowindow.close();
		infoWindowDIS.open(map, mDIS);
		prev_infowindow = infoWindowDIS;
	});
	mapMarkers.push([mDIS, infoDIS]);

	//Adobe Creative Studio
	var infoAdobe = '<div style="width: 50vw; max-width: 400px;">' +
			'<div class="iw-container">'+
				'<div class="row iw-row">'+
					'<div class="col-12">'+
						'<h2 class="infoHeader">Adobe Creative Studio</h2>'+
						'<h4 class="infoSubHeader">Cooper 5th Floor</h4>'+
					'</div>'+
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/microphone.svg">Audio Production</div>'+
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/videocamera.svg">Video Production</div>'+
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/greenscreen.svg">Green Screen</div>'+
					'<div class="col-4 col-sm-3"><img src="assets/img/resourceIcons/teleprompter.svg">Teleprompter</div>'+
				'</div>'+
			'</div>'+
			'<div class="iw-footer">'+
				'<a class="btn btn-primary" role="button" href="http://coe.clemson.edu/adobe-digital-studio/" target="_blank">More Info</a>'
			'</div>' +
			'</div>';
	var infoWindowAdobe = new google.maps.InfoWindow({
		content: infoAdobe
	});
	var mAdobe = new google.maps.Marker({
		position: coordinates.adobe,
		map: map
	});
	mAdobe.addListener('click', function() {
		if(prev_infowindow) prev_infowindow.close();
		infoWindowAdobe.open(map, mAdobe);
		prev_infowindow = infoWindowAdobe;
	});
	mapMarkers.push([mAdobe, infoAdobe]);

	/*
	var infoGeo = "";
	var infoWindowGeo = new google.maps.InfoWindow({
		content: infoGeo
	});
	var mGeospatial = new google.maps.Marker({
		position: coordinates.library,
		map: map
	});
	mGeospatial.addListener('click', function() {
		if(prev_infowindow) prev_infowindow.close();
		infoWindowGeo.open(map, mGeospatial);
		prev_infowindow = infoWindowGeo;
	});

	mapMarkers.push([mGeospatial, infoGeo]);
	*/

	var locationResources,
		mockInfoWindow,
		markerCol4Divs,
		filterIcons;

	for (mapMarker of mapMarkers) {
		// Google heavily abstracts their API from the DOM so instead of using
		// regex to extract the resources from the HTML text, an element is
		// created from it
		mockInfoWindow = document.createElement('div');
		mockInfoWindow.innerHTML = mapMarker[1];
		markerCol4Divs = mockInfoWindow.querySelectorAll('div.col-4');
		locationResources = [];

		for (markerCol4Div of markerCol4Divs) {
			locationResources.push(markerCol4Div.innerText);
		}

		mapMarker[1] = locationResources;
	}

	filterIcons = document.querySelectorAll('.filter-icons div');
	clearFiltersButton = document.querySelector('.clear-filters');
	filterTexts = [];

	for (filterIcon of filterIcons) {
		filterIcon.addEventListener('click', function () {
			var filterText,
				index;

			// Add the filter to the list and apply it, or removes the filter if
			// it is already applied
			filterText = this.innerText.trim();
			index = filterTexts.indexOf(filterText);

			if (index < 0) {
				filterTexts.push(filterText);
			} else {
				filterTexts.splice(index, 1);
			}

			filterMap(this);
		});
	}

	clearFiltersButton.addEventListener('click', function () {
		// Deselect all filters
		filterTexts = [];

		filterMap();

		$('.filter-icons div').each((i, icon) => {
			icon.classList.toggle('selected', false);
		});
	});
}

function filterMap(filterDiv) {
	var visible;
		visibleMapMarkers = [];

	// Get all markers visible after the filter is applied
	for (var i = 0; i < mapMarkers.length; i++) {
		visible = true;

		for (filterText of filterTexts) {
			if (!mapMarkers[i][1].includes(filterText)) {
				visible = false;
				break;
			}
		}

		if (visible)
			visibleMapMarkers.push(i);
	}

	// If there are still matches after the filter is applied, display
	// the filter. Otherwise, remove the filter and alert the user.
	if (visibleMapMarkers.length > 0) {
		if (filterDiv !== undefined)
			filterDiv.classList.toggle('selected');

		for (var i = 0; i < mapMarkers.length; i++) {
			mapMarkers[i][0].setVisible(visibleMapMarkers.includes(i));
		}
	} else {
		filterTexts.pop();
		$('.modal.no-matches').modal();
	}

	// If there are filters applied, show the 'Clear filters' button
	if (filterTexts.length > 0) {
		$('.clear-filters').toggleClass('visible', true);
	} else {
		$('.clear-filters').toggleClass('visible', false);
	}
}
