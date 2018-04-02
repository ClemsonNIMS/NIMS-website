import json
import xml.etree.ElementTree as ET

locationsFilePath = '../public/assets/locations.json'
resourceIcons = {
	'3D Printing': "/assets/img/resourceIcons/3dprinting.svg",
	'3D Scanning': "/assets/img/resourceIcons/3dscanning.svg",
	'Virtual Reality': "/assets/img/resourceIcons/vr.svg",
	'VR Dev Kit':
	"/assets/img/resourceIcons/vrDev.svg",
	'Laser Cutting': "/assets/img/resourceIcons/laserCutter.svg",
	'CNC Milling': "/assets/img/resourceIcons/cnc.svg",
	'Electric Tools': "/assets/img/resourceIcons/electricTools.svg",
	'Hand Tools': "/assets/img/resourceIcons/tools.svg",
	'Vinyl Cutting': "/assets/img/resourceIcons/vinylCutter.svg",
	'Button Making': "/assets/img/resourceIcons/button.svg",
	'Audio Production': "/assets/img/resourceIcons/microphone.svg",
	'Video Production': "/assets/img/resourceIcons/videocamera.svg",
	'Circuit Kits': "/assets/img/resourceIcons/circuits.svg",
	'Lathes': "/assets/img/resourceIcons/lathe.svg",
	'Bandsaws': "/assets/img/resourceIcons/bandsaw.svg",
	'Drill Press': "/assets/img/resourceIcons/drillpress.svg",
	'Grinders': "/assets/img/resourceIcons/grinder.svg",
	'Green Screen': "/assets/img/resourceIcons/greenscreen.svg",
	'Micro-controllers': "/assets/img/resourceIcons/microcontrollers.svg",
	'Soldering': "/assets/img/resourceIcons/soldering.svg",
	'Teleprompter': "/assets/img/resourceIcons/teleprompter.svg"
}

with open(locationsFilePath, 'r') as locationsFile:
	locations = json.loads(locationsFile.read())

for location in locations:
	infoWindowDIV = ET.Element("div")
	infoWindowDIV.set("style", "padding: 0 0 10px 10px; width: 55vw; max-width: 400px; max-height: 20rem")
	contentDIV = ET.Element("div")
	nameH2 = ET.Element("H2")
	nameH2.text = location['name']
	roomH4 = ET.Element("H4")
	roomH4.set("style", "font-size: 20px; margin-bottom: 25px")
	roomH4.text = location['room']
	resourcesDiv = ET.Element("div")
	resourcesDiv.set("style", "text-align: center; margin-bottom: 20px")

	for resource in location['resources']:
		div = ET.Element("div")
		div.set("style", "display: inline-block; padding: 10px; width: 85px; vertical-align: top")
		img = ET.Element("img")
		img.set("src", resourceIcons[resource])
		img.set("style", "display: block; margin: 0 5px")
		span = ET.Element("span")
		span.set("style", "display: block; text-align: center; font-size: 14px")
		span.text = resource

		div.append(img)
		div.append(span)
		resourcesDiv.append(div)

	moreInfoA = ET.Element("a")
	moreInfoA.set("href", location['moreInfoURL'])
	moreInfoA.set("style", "display: block; width: 110px; background: #007bff; color: #ffffff; padding: 6px 0; text-align: center; margin: 0 auto; border-radius: 8px; font-size: 18px")
	moreInfoA.text = "More Info"

	contentDIV.append(nameH2)
	contentDIV.append(roomH4)
	contentDIV.append(resourcesDiv)
	contentDIV.append(moreInfoA)
	infoWindowDIV.append(contentDIV)

	location.pop('name', None)
	location.pop('room', None)
	location.pop('moreInfoURL', None)
	location['infoWindowHTML'] = ET.tostring(infoWindowDIV, encoding="unicode",
		method='html')

print(json.dumps(locations, sort_keys=True, indent=4).replace("    ", '\t'))
