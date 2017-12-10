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
var numOfStores;
var popups = [];
var stores = [];
var storesTypes =[];

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

	//creates icons by types
	var shopIcon = L.icon({
		iconUrl: iconsPath + '/shop.png',
		iconSize: [iconSize, iconSize],
		iconAnchor: [iconAnchor, iconAnchor],
		popupAnchor: [popupAnchorHor, popupAnchorVer],});
		
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
		
	//creates layer of markers
	var shops = L.layerGroup();
	var masters = L.layerGroup();

	//retrieves all stores, put them on the map and creates popups for them
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var response = JSON.parse(this.responseText);
			numOfStores = response.length;
			for (i = 0; i < numOfStores; i++){
				storesTypes[i] = response[i].type;
				stores[i] = L.marker([response[i].latitude, response[i].longitude]);
				popups[i] = L.popup()
					.setContent("<b>"+response[i].name+"</b><br>Type: "+response[i].type+"<br>Syb-type: "+response[i].sub_type+"<br>Phone: "+response[i].phone+"<br>"+response[i].description)
				stores[i].bindPopup(popups[i]);
				//adds icon to each marker depends on type
				if(response[i].type == 'shop'){
					stores[i].setIcon(shopIcon);
					shops.addLayer(stores[i]);
				} else if(response[i].type == 'cobbler') {
					stores[i].setIcon(cobblerIcon);
					stores[i].addTo(masters);
				} else if(response[i].type == 'tailor') {
					stores[i].setIcon(tailorIcon);
					stores[i].addTo(masters);
				}
			};
		}
	};
	xhttp.open("GET", "http://localhost:8080?method=retrieveAllStores", false);
	xhttp.send();
	
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
		} else{
			isShopsLayerOn = false;
		};
	});
	
	//listener for master layer control check box on the initial map zoom level
	var checkBox2 = document.getElementsByClassName("leaflet-control-layers-selector")[1];
	checkBox2.addEventListener('change', function(){
		if(this.checked){
			isMastersLayerOn = true;
		} else{
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
				} else{
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
				} else{
					isMastersLayerOn = false;
				};
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
			cobblerIcon.options.iconSize = [cobblerIcon.options.iconSize[0] / iconSizeFactor, cobblerIcon.options.iconSize[1] / iconSizeFactor];
			cobblerIcon.options.iconAnchor = [cobblerIcon.options.iconAnchor[0] / iconSizeFactor, cobblerIcon.options.iconAnchor[1] / iconSizeFactor];
			tailorIcon.options.iconSize = [tailorIcon.options.iconSize[0] / iconSizeFactor, tailorIcon.options.iconSize[1] / iconSizeFactor];
			tailorIcon.options.iconAnchor = [tailorIcon.options.iconAnchor[0] / iconSizeFactor, tailorIcon.options.iconAnchor[1] / iconSizeFactor];
			
			for(i = 0; i < numOfStores; i++){
				if(storesTypes[i] == 'shop'){
					stores[i].setIcon(shopIcon);
				} else if(storesTypes[i] == 'cobbler'){
					stores[i].setIcon(cobblerIcon);
				} else if(storesTypes[i] == 'tailor'){
					stores[i].setIcon(tailorIcon);
				}
			};
		}
		
		//zooming in
		else if(prevZoom < mymap.getZoom()){
			shopIcon.options.iconSize = [shopIcon.options.iconSize[0] * iconSizeFactor, shopIcon.options.iconSize[1] * iconSizeFactor];
			shopIcon.options.iconAnchor = [shopIcon.options.iconAnchor[0] * iconSizeFactor, shopIcon.options.iconAnchor[1] * iconSizeFactor];
			cobblerIcon.options.iconSize = [cobblerIcon.options.iconSize[0] * iconSizeFactor, cobblerIcon.options.iconSize[1] * iconSizeFactor];
			cobblerIcon.options.iconAnchor = [cobblerIcon.options.iconAnchor[0] * iconSizeFactor, cobblerIcon.options.iconAnchor[1] * iconSizeFactor];
			tailorIcon.options.iconSize = [tailorIcon.options.iconSize[0] * iconSizeFactor, tailorIcon.options.iconSize[1] * iconSizeFactor];
			tailorIcon.options.iconAnchor = [tailorIcon.options.iconAnchor[0] * iconSizeFactor, tailorIcon.options.iconAnchor[1] * iconSizeFactor];

			for(i = 0; i < numOfStores; i++){
				if(storesTypes[i] == 'shop'){
					stores[i].setIcon(shopIcon);
				} else if(storesTypes[i] == 'cobbler'){
					stores[i].setIcon(cobblerIcon);
				} else if(storesTypes[i] == 'tailor'){
					stores[i].setIcon(tailorIcon);
				}
			};
		};
		
		if(prevZoom > mymap.getZoom()){
			prevZoom--;
		} else if(prevZoom < mymap.getZoom()){
			prevZoom++;
		};
	};
};