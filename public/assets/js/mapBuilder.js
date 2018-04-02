var mapMarkers,
	clearFiltersButton,
	filterTexts;

function initMap() {
	var locations = [
			{
				"coordinates": {
					"lat": 34.676071,
					"lng": -82.837038
				},
				"infoWindowHTML": "<div style=\"padding: 0 0 10px 10px; width: 55vw; max-width: 400px; max-height: 20rem\"><div><H2>Makerspace</H2><H4 style=\"font-size: 20px; margin-bottom: 25px\">Watt 110</H4><div style=\"text-align: center; margin-bottom: 20px\"><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/3dprinting.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">3D Printing</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/3dscanning.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">3D Scanning</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/laserCutter.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">Laser Cutting</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/cnc.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">CNC Milling</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/tools.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">Hand Tools</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/vinylCutter.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">Vinyl Cutting</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/button.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">Button Making</span></div></div><a href=\"http://cumaker.space/\" style=\"display: block; width: 110px; background: #007bff; color: #ffffff; padding: 6px 0; text-align: center; margin: 0 auto; border-radius: 8px; font-size: 18px\">More Info</a></div></div>",
				"resources": [
					"3D Printing",
					"3D Scanning",
					"Laser Cutting",
					"CNC Milling",
					"Hand Tools",
					"Vinyl Cutting",
					"Button Making"
				]
			},
			{
				"coordinates": {
					"lat": 34.676003,
					"lng": -82.837025
				},
				"infoWindowHTML": "<div style=\"padding: 0 0 10px 10px; width: 55vw; max-width: 400px; max-height: 20rem\"><div><H2>Immersive Space</H2><H4 style=\"font-size: 20px; margin-bottom: 25px\">Watt 308</H4><div style=\"text-align: center; margin-bottom: 20px\"><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/vr.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">Virtual Reality</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/3dscanning.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">3D Scanning</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/vrDev.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">VR Dev Kit</span></div></div><a href=\"http://vrclub.people.clemson.edu/index.html\" style=\"display: block; width: 110px; background: #007bff; color: #ffffff; padding: 6px 0; text-align: center; margin: 0 auto; border-radius: 8px; font-size: 18px\">More Info</a></div></div>",
				"resources": [
					"Virtual Reality",
					"3D Scanning",
					"VR Dev Kit"
				]
			},
			{
				"coordinates": {
					"lat": 34.676536,
					"lng": -82.837771
				},
				"infoWindowHTML": "<div style=\"padding: 0 0 10px 10px; width: 55vw; max-width: 400px; max-height: 20rem\"><div><H2>ME Shop</H2><H4 style=\"font-size: 20px; margin-bottom: 25px\">Cook labs</H4><div style=\"text-align: center; margin-bottom: 20px\"><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/lathe.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">Lathes</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/bandsaw.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">Bandsaws</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/drillpress.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">Drill Press</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/cnc.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">CNC Milling</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/grinder.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">Grinders</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/electricTools.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">Electric Tools</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/tools.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">Hand Tools</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/3dprinting.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">3D Printing</span></div></div><a href=\"https://cecas.clemson.edu/mestudentshop/\" style=\"display: block; width: 110px; background: #007bff; color: #ffffff; padding: 6px 0; text-align: center; margin: 0 auto; border-radius: 8px; font-size: 18px\">More Info</a></div></div>",
				"resources": [
					"Lathes",
					"Bandsaws",
					"Drill Press",
					"CNC Milling",
					"Grinders",
					"Electric Tools",
					"Hand Tools",
					"3D Printing"
				]
			},
			{
				"coordinates": {
					"lat": 34.680067,
					"lng": -82.837398
				},
				"infoWindowHTML": "<div style=\"padding: 0 0 10px 10px; width: 55vw; max-width: 400px; max-height: 20rem\"><div><H2>DML Labs</H2><H4 style=\"font-size: 20px; margin-bottom: 25px\">Tillman 213</H4><div style=\"text-align: center; margin-bottom: 20px\"><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/microphone.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">Audio Production</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/videocamera.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">Video Production</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/greenscreen.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">Green Screen</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/3dprinting.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">3D Printing</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/vr.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">Virtual Reality</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/vrDev.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">VR Dev Kit</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/circuits.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">Circuit Kits</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/microcontrollers.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">Micro-controllers</span></div></div><a href=\"https://www.clemson.edu/education/dmll/dml-labs.html\" style=\"display: block; width: 110px; background: #007bff; color: #ffffff; padding: 6px 0; text-align: center; margin: 0 auto; border-radius: 8px; font-size: 18px\">More Info</a></div></div>",
				"resources": [
					"Audio Production",
					"Video Production",
					"Green Screen",
					"3D Printing",
					"Virtual Reality",
					"VR Dev Kit",
					"Circuit Kits",
					"Micro-controllers"
				]
			},
			{
				"coordinates": {
					"lat": 34.674526,
					"lng": -82.838369
				},
				"infoWindowHTML": "<div style=\"padding: 0 0 10px 10px; width: 55vw; max-width: 400px; max-height: 20rem\"><div><H2>Digital Design Shop</H2><H4 style=\"font-size: 20px; margin-bottom: 25px\">Lee Hall</H4><div style=\"text-align: center; margin-bottom: 20px\"><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/laserCutter.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">Laser Cutting</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/cnc.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">CNC Milling</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/bandsaw.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">Bandsaws</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/3dprinting.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">3D Printing</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/tools.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">Hand Tools</span></div></div><a href=\"http://www.clemson.edu/caah/departments/architecture/campuses/cusa-dds/index.html\" style=\"display: block; width: 110px; background: #007bff; color: #ffffff; padding: 6px 0; text-align: center; margin: 0 auto; border-radius: 8px; font-size: 18px\">More Info</a></div></div>",
				"resources": [
					"Laser Cutting",
					"CNC Milling",
					"Bandsaws",
					"3D Printing",
					"Hand Tools"
				]
			},
			{
				"coordinates": {
					"lat": 34.67549,
					"lng": -82.839139
				},
				"infoWindowHTML": "<div style=\"padding: 0 0 10px 10px; width: 55vw; max-width: 400px; max-height: 20rem\"><div><H2>Design Innovation Studio</H2><H4 style=\"font-size: 20px; margin-bottom: 25px\">Fluor Daniel 111</H4><div style=\"text-align: center; margin-bottom: 20px\"><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/tools.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">Hand Tools</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/soldering.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">Soldering</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/laserCutter.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">Laser Cutting</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/cnc.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">CNC Milling</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/tools.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">Hand Tools</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/vinylCutter.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">Vinyl Cutting</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/button.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">Button Making</span></div></div><a href=\"https://www.clemson.edu/cecas/departments/me/academics/undergraduate/design/design_innovation_studio.html\" style=\"display: block; width: 110px; background: #007bff; color: #ffffff; padding: 6px 0; text-align: center; margin: 0 auto; border-radius: 8px; font-size: 18px\">More Info</a></div></div>",
				"resources": [
					"Hand Tools",
					"Soldering",
					"Laser Cutting",
					"CNC Milling",
					"Hand Tools",
					"Vinyl Cutting",
					"Button Making"
				]
			},
			{
				"coordinates": {
					"lat": 34.676776,
					"lng": -82.836178
				},
				"infoWindowHTML": "<div style=\"padding: 0 0 10px 10px; width: 55vw; max-width: 400px; max-height: 20rem\"><div><H2>Adobe Creative Studio</H2><H4 style=\"font-size: 20px; margin-bottom: 25px\">Cooper 5th Floor</H4><div style=\"text-align: center; margin-bottom: 20px\"><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/microphone.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">Audio Production</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/videocamera.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">Video Production</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/greenscreen.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">Green Screen</span></div><div style=\"display: inline-block; padding: 10px; width: 85px; vertical-align: top\"><img src=\"/assets/img/resourceIcons/teleprompter.svg\" style=\"display: block; margin: 0 5px\"><span style=\"display: block; text-align: center; font-size: 14px\">Teleprompter</span></div></div><a href=\"http://coe.clemson.edu/adobe-digital-studio/\" style=\"display: block; width: 110px; background: #007bff; color: #ffffff; padding: 6px 0; text-align: center; margin: 0 auto; border-radius: 8px; font-size: 18px\">More Info</a></div></div>",
				"resources": [
					"Audio Production",
					"Video Production",
					"Green Screen",
					"Teleprompter"
				]
			}
		],
		mapOptions = {
			zoom: 17,
			center: {lat: 34.676071, lng: -82.837038},
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
		},
		mapDiv = document.getElementById('mapBox'),
		map = new google.maps.Map(mapDiv, mapOptions),
		filterIcons = document.querySelectorAll('.filter-icons div'),
		prevInfowindow,
		infoWindow,
		marker,
		locClickFunction;

	mapMarkers = [];
	clearFiltersButton = document.querySelector('.clear-filters');
	filterTexts = [];

	function ClickFunction(infoWindow, marker) {
		this.click = function () {
			if (prevInfowindow)
				prevInfowindow.close();

			infoWindow.open(map, marker);
			prevInfowindow = infoWindow;
		};
	}

	for (loc of locations) {
		infoWindow = new google.maps.InfoWindow({
			'content': loc.infoWindowHTML
		});

		marker = new google.maps.Marker({
			'position': loc.coordinates,
			'map': map,
			'location': loc
		});

		locClickFunction = new ClickFunction(infoWindow, marker);

		marker.addListener('click', locClickFunction.click);
		mapMarkers.push(marker);
	}

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
			if (!mapMarkers[i].location.resources.includes(filterText)) {
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
			mapMarkers[i].setVisible(visibleMapMarkers.includes(i));
		}
	} else {
		filterTexts.pop();
		$('.modal.no-matches').modal();
	}

	// If there are filters applied, show the 'Clear filters' button
	if (filterTexts.length > 0) {
		clearFiltersButton.classList.toggle('visible', true);
	} else {
		clearFiltersButton.classList.toggle('visible', false);
	}
}
