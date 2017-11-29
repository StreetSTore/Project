const mapMinZoom = 12;
const mapMaxZoom = 20;
const minZoomWithMarkers = 16;
const maxZoomNoMarkers = 15;
const iconSize = 20;
const iconAnchor = 10;
const popupAnchorHor = 0;
const popupAnchorVer = -8;
const iconsPath = "images";
const defaultZoom = 17;
const iconSizeFactor = 1.5;
var mymap;

function loadMap(){
	//creates the map
	mymap = L.map('mapid').setView([32.07310, 34.76639], defaultZoom);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		maxZoom: mapMaxZoom,
		minZoom: mapMinZoom,
		zoomDelta: 0.1,
		id: 'mapbox.streets',
		accessToken: 'pk.eyJ1IjoiaWdvcmwzMDA5IiwiYSI6ImNqYWEzZnU2bjBlZTAyd3M0Z20zM2xkYjAifQ.AWTI7mLMA6ZQUJ8QmBY8xw'
	}).addTo(mymap);

	//creates markers with popups
	var shopIcon = L.icon({
		iconUrl: iconsPath + '/shop.png',
		iconSize: [iconSize, iconSize],
		iconAnchor: [iconAnchor, iconAnchor],
		popupAnchor: [popupAnchorHor, popupAnchorVer],});
	
	var popup1 = L.popup()
		.setContent("Best shop<br>Food, drinks and more")
	var shop1 = L.marker([32.07315, 34.76639], {icon: shopIcon});
	shop1.bindPopup(popup1);
	
	var popup2 = L.popup()
		.setContent("All you need<br>24/7")
	var shop2 = L.marker([32.07353, 34.76649], {icon: shopIcon});
	shop2.bindPopup(popup2);
		
	var cobblerIcon = L.icon({
		iconUrl: iconsPath + '/cobbler.png',
		iconSize: [iconSize, iconSize],
		iconAnchor: [iconAnchor, iconAnchor],
		popupAnchor: [popupAnchorHor, popupAnchorVer],});
	
	var tailorIcon = L.icon({
		iconUrl: iconsPath + '/tailor.png',
		iconSize: [iconSize, iconSize],
		iconAnchor: [iconAnchor, iconAnchor],
		popupAnchor: [popupAnchorHor, popupAnchorVer],});
	
	var popup3 = L.popup()
		.setContent("Repair all kind of shoes for 30 years!")
	var cobbler = L.marker([32.07298, 34.76610], {icon: cobblerIcon});
	cobbler.bindPopup(popup3);
		
	var popup4 = L.popup()
		.setContent("Tailor made is us")
	var tailor = L.marker([32.07310, 34.76672], {icon: tailorIcon});
	tailor.bindPopup(popup4);
	
	//creates layer of markers
	var shops = L.layerGroup([shop1, shop2]);
	var masters = L.layerGroup([cobbler, tailor]);
	
	//adds and manages a layer control
	var overlayMaps = {
		"Shops": shops,
		"Masters": masters};
	var layersControl = L.control.layers(null, overlayMaps).addTo(mymap);

	//listener for shop layer control check box on the initial map zoom level
	var checkBox1 = document.getElementsByClassName("leaflet-control-layers-selector")[0];
	checkBox1.addEventListener('change', function(){
		if(this.checked){
			isShopsLayerOn = true;
		}
		
		else{
			isShopsLayerOn = false;
		};
	});
	
	//listener for master layer control check box on the initial map zoom level
	var checkBox2 = document.getElementsByClassName("leaflet-control-layers-selector")[1];
	checkBox2.addEventListener('change', function(){
		if(this.checked){
			isMastersLayerOn = true;
		}
		
		else{
			isMastersLayerOn = false;
		};
	});
	
	//manages appearance of layers and control depending on zooming
	var prevZoom = mymap.getZoom();
	var isShopsLayerOn = false;
	var isMastersLayerOn = false;
	mymap.on('zoomend', zoomAdjust );
	function zoomAdjust(){
	//on zooming at min zoom level with markers and above
		//adds layer control if not present
		if (mymap.getZoom() >= minZoomWithMarkers && layersControl == null){
			layersControl = L.control.layers(null, overlayMaps).addTo(mymap);
		};

		//listener for shops layer control check box on zooming
		checkBox1 = document.getElementsByClassName("leaflet-control-layers-selector")[0];
		if (checkBox1 != null){
			checkBox1.addEventListener( 'change', function(){
				if(this.checked){
					isShopsLayerOn = true;
				}
				
				else {
					isShopsLayerOn = false;
				}
			});
		};
		
		//listener for shops layer control check box on zooming
		checkBox2 = document.getElementsByClassName("leaflet-control-layers-selector")[1];
		if (checkBox2 != null){
			checkBox2.addEventListener( 'change', function(){
				if(this.checked){
					isMastersLayerOn = true;
				}
				
				else {
					isMastersLayerOn = false;
				}
			});
		};
		
		//adds layers which was checked before zooming out
		if(mymap.getZoom() >= minZoomWithMarkers){
			if(isShopsLayerOn){
				mymap.addLayer(shops);
			};

			if(isMastersLayerOn){
				mymap.addLayer(masters);
			};
		};

	//removes layer control and layers on zooming at max zoom level without markers and below
		if(mymap.getZoom() <= maxZoomNoMarkers && layersControl){
			mymap.removeLayer(shops);
			mymap.removeLayer(masters);
			mymap.removeControl(layersControl);
			layersControl = null;
		};
	
	//manages the size of the markers depends on zoom level
		//zooming out
		if(prevZoom > mymap.getZoom()){
			shopIcon.options.iconSize = [shopIcon.options.iconSize[0] / iconSizeFactor, shopIcon.options.iconSize[1] / iconSizeFactor];
			shopIcon.options.iconAnchor = [shopIcon.options.iconAnchor[0] / iconSizeFactor, shopIcon.options.iconAnchor[1] / iconSizeFactor];
			shop1.setIcon(shopIcon);
			shop2.setIcon(shopIcon);
			cobblerIcon.options.iconSize = [cobblerIcon.options.iconSize[0] / iconSizeFactor, cobblerIcon.options.iconSize[1] / iconSizeFactor];
			cobblerIcon.options.iconAnchor = [cobblerIcon.options.iconAnchor[0] / iconSizeFactor, cobblerIcon.options.iconAnchor[1] / iconSizeFactor];
			cobbler.setIcon(cobblerIcon);
			tailorIcon.options.iconSize = [tailorIcon.options.iconSize[0] / iconSizeFactor, tailorIcon.options.iconSize[1] / iconSizeFactor];
			tailorIcon.options.iconAnchor = [tailorIcon.options.iconAnchor[0] / iconSizeFactor, tailorIcon.options.iconAnchor[1] / iconSizeFactor];
			tailor.setIcon(tailorIcon);
		}
		
		//zooming in
		else if(prevZoom < mymap.getZoom()){
			shopIcon.options.iconSize = [shopIcon.options.iconSize[0] * iconSizeFactor, shopIcon.options.iconSize[1] * iconSizeFactor];
			shopIcon.options.iconAnchor = [shopIcon.options.iconAnchor[0] * iconSizeFactor, shopIcon.options.iconAnchor[1] * iconSizeFactor];
			shop1.setIcon(shopIcon);
			shop2.setIcon(shopIcon);
			cobblerIcon.options.iconSize = [cobblerIcon.options.iconSize[0] * iconSizeFactor, cobblerIcon.options.iconSize[1] * iconSizeFactor];
			cobblerIcon.options.iconAnchor = [cobblerIcon.options.iconAnchor[0] * iconSizeFactor, cobblerIcon.options.iconAnchor[1] * iconSizeFactor];
			cobbler.setIcon(cobblerIcon);
			tailorIcon.options.iconSize = [tailorIcon.options.iconSize[0] * iconSizeFactor, tailorIcon.options.iconSize[1] * iconSizeFactor];
			tailorIcon.options.iconAnchor = [tailorIcon.options.iconAnchor[0] * iconSizeFactor, tailorIcon.options.iconAnchor[1] * iconSizeFactor];
			tailor.setIcon(tailorIcon);
		};
		
		if(prevZoom > mymap.getZoom()){
			prevZoom--;
		}
		
		else if(prevZoom < mymap.getZoom()){
			prevZoom++;
		};
	};
};