const defaultZoom = 17;
const mapMinZoom = 12;
const mapMaxZoom = 20;
const minZoomWithMarkers = 16;
const maxZoomNoMarkers = 15;
const iconSize = 20;
const iconAnchor = 10;
const popupAnchorHor = 0;
const popupAnchorVer = -8;
const iconsPath = "images";
const iconSizeFactor = 1.4;

const method = 'POST';
const protocol = 'https';
const serverUrl = 'localhost'
const serverPort = 443;

var mymap;
var numOfStores;
var popups = [];
var stores = [];
var storesTypes =[];
var theMarker = {};

function loadMap(){
	//creates the map	
	mymap = L.map('mapid').setView([32.07518, 34.78728], defaultZoom);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		maxZoom: mapMaxZoom,
		minZoom: mapMinZoom,
		zoomDelta: 0.1,
		id: 'mapbox.streets',
		accessToken: 'pk.eyJ1IjoiaWdvcmwzMDA5IiwiYSI6ImNqYWEzZnU2bjBlZTAyd3M0Z20zM2xkYjAifQ.AWTI7mLMA6ZQUJ8QmBY8xw'
	}).addTo(mymap);
	
	navigator.geolocation.getCurrentPosition(function(location) {
		var personIcon = L.icon({
			iconUrl: iconsPath + '/person.png',
			iconSize: [iconSize, iconSize],
			iconAnchor: [iconAnchor, iconAnchor],
			popupAnchor: [popupAnchorHor, popupAnchorVer],});
		L.marker([location.coords.latitude, location.coords.longitude], {icon: personIcon}).addTo(mymap).bindPopup("You are here");
	});

	//creates icons by types
	var beddingIcon = L.icon({
		iconUrl: iconsPath + '/bedding.png',
		iconSize: [iconSize, iconSize],
		iconAnchor: [iconAnchor, iconAnchor],
		popupAnchor: [popupAnchorHor, popupAnchorVer],});
		
	var clothesIcon = L.icon({
		iconUrl: iconsPath + '/clothes.png',
		iconSize: [iconSize, iconSize],
		iconAnchor: [iconAnchor, iconAnchor],
		popupAnchor: [popupAnchorHor, popupAnchorVer],});
		
	var cobblerIcon = L.icon({
		iconUrl: iconsPath + '/cobbler.png',
		iconSize: [iconSize, iconSize],
		iconAnchor: [iconAnchor, iconAnchor],
		popupAnchor: [popupAnchorHor, popupAnchorVer],});
		
	var electricityIcon = L.icon({
		iconUrl: iconsPath + '/electricity.png',
		iconSize: [iconSize, iconSize],
		iconAnchor: [iconAnchor, iconAnchor],
		popupAnchor: [popupAnchorHor, popupAnchorVer],});
	
	var kitchenIcon = L.icon({
		iconUrl: iconsPath + '/kitchen.png',
		iconSize: [iconSize, iconSize],
		iconAnchor: [iconAnchor, iconAnchor],
		popupAnchor: [popupAnchorHor, popupAnchorVer],});
		
	var plantsIcon = L.icon({
		iconUrl: iconsPath + '/plants.png',
		iconSize: [iconSize, iconSize],
		iconAnchor: [iconAnchor, iconAnchor],
		popupAnchor: [popupAnchorHor, popupAnchorVer],});
		
	var shoesIcon = L.icon({
		iconUrl: iconsPath + '/shoes.png',
		iconSize: [iconSize, iconSize],
		iconAnchor: [iconAnchor, iconAnchor],
		popupAnchor: [popupAnchorHor, popupAnchorVer],});
	
	var stationeryIcon = L.icon({
		iconUrl: iconsPath + '/stationery.png',
		iconSize: [iconSize, iconSize],
		iconAnchor: [iconAnchor, iconAnchor],
		popupAnchor: [popupAnchorHor, popupAnchorVer],});
		
	var tailorIcon = L.icon({
		iconUrl: iconsPath + '/tailor.png',
		iconSize: [iconSize, iconSize],
		iconAnchor: [iconAnchor, iconAnchor],
		popupAnchor: [popupAnchorHor, popupAnchorVer],});
		
	var toysIcon = L.icon({
		iconUrl: iconsPath + '/toys.png',
		iconSize: [iconSize, iconSize],
		iconAnchor: [iconAnchor, iconAnchor],
		popupAnchor: [popupAnchorHor, popupAnchorVer],});	
	
	var watchesIcon = L.icon({
		iconUrl: iconsPath + '/watches.png',
		iconSize: [iconSize, iconSize],
		iconAnchor: [iconAnchor, iconAnchor],
		popupAnchor: [popupAnchorHor, popupAnchorVer],});
		
	var workshopIcon = L.icon({
		iconUrl: iconsPath + '/workshop.png',
		iconSize: [iconSize, iconSize],
		iconAnchor: [iconAnchor, iconAnchor],
		popupAnchor: [popupAnchorHor, popupAnchorVer],});		
	
	//creates layer of markers
	var bedding = L.layerGroup();	
	var clothes = L.layerGroup();
	var cobblers = L.layerGroup();
	var electricity = L.layerGroup();
	var kitchen = L.layerGroup();
	var plants = L.layerGroup();
	var shoes = L.layerGroup();
	var stationery = L.layerGroup();
	var tailors = L.layerGroup();
	var toys = L.layerGroup();
	var watches = L.layerGroup();
	var workshops = L.layerGroup();	

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
				if(response[i].type == 'Bedding'){
					stores[i].setIcon(beddingIcon);
					stores[i].addTo(bedding);
				} else if(response[i].type == 'Cobbler') {
					stores[i].setIcon(cobblerIcon);
					stores[i].addTo(cobblers);
				} else if(response[i].type == 'Clothes') {
					stores[i].setIcon(clothesIcon);
					stores[i].addTo(clothes);
				} else if(response[i].type == 'Electricity') {
					stores[i].setIcon(electricityIcon);
					stores[i].addTo(electricity);
				} else if(response[i].type == 'Kitchen') {
					stores[i].setIcon(kitchenIcon);
					stores[i].addTo(kitchen);
				} else if(response[i].type == 'Plants') {
					stores[i].setIcon(plantsIcon);
					stores[i].addTo(plants);
				} else if(response[i].type == 'Shoes') {
					stores[i].setIcon(shoesIcon);
					stores[i].addTo(shoes);
				} else if(response[i].type == 'Stationery') {
					stores[i].setIcon(stationeryIcon);
					stores[i].addTo(stationery);
				} else if(response[i].type == 'Tailor') {
					stores[i].setIcon(tailorIcon);
					stores[i].addTo(tailors);
				} else if(response[i].type == 'Toys') {
					stores[i].setIcon(toysIcon);
					stores[i].addTo(toys);
				} else if(response[i].type == 'Watches') {
					stores[i].setIcon(watchesIcon);
					stores[i].addTo(watches);
				} else if(response[i].type == 'Workshop') {
					stores[i].setIcon(workshopIcon);
					stores[i].addTo(workshops);
				}
			};
		}
	};
	xhttp.open(config.method, config.protocol + "://" + config.host + ":" + config.port + "?method=retrieveAllStores", false);
	xhttp.send();
	
	//adds and manages a layer control
	var overlayMaps = {
		"Bedding": bedding,
		"Clothes": clothes,
		"Cobblers": cobblers,
		"Electricity": electricity,
		"Kitchen": kitchen,
		"Plants": plants,
		"Shoes": shoes,
		"Stationery": stationery,
		"Tailors": tailors,
		"Toys": toys,
		"Watches": watches,
		"Workshops": workshops};
	var layersControl = L.control.layers(null, overlayMaps).addTo(mymap);

	//listeners for layers control check box on the initial map zoom level
	var checkBox1 = document.getElementsByClassName("leaflet-control-layers-selector")[0];
	checkBox1.addEventListener('change', function(){
		if(this.checked){
			isBeddingLayerOn = true;
		} else {
			isBeddingLayerOn = false;
		};
	});
	
	var checkBox2 = document.getElementsByClassName("leaflet-control-layers-selector")[1];
	checkBox2.addEventListener('change', function(){
		if(this.checked){
			isClothesLayerOn = true;
		} else {
			isClothesLayerOn = false;
		};
	});
	
	var checkBox3 = document.getElementsByClassName("leaflet-control-layers-selector")[2];
	checkBox3.addEventListener('change', function(){
		if(this.checked){
			isCobblersLayerOn = true;
		} else {
			isCobblersLayerOn = false;
		};
	});
	
	var checkBox4 = document.getElementsByClassName("leaflet-control-layers-selector")[3];
	checkBox4.addEventListener('change', function(){
		if(this.checked){
			isElectricityLayerOn = true;
		} else {
			isElectricityLayerOn = false;
		};
	});
	
	var checkBox5 = document.getElementsByClassName("leaflet-control-layers-selector")[4];
	checkBox5.addEventListener('change', function(){
		if(this.checked){
			isKitchenLayerOn = true;
		} else {
			isKitchenLayerOn = false;
		};
	});
	
	var checkBox6 = document.getElementsByClassName("leaflet-control-layers-selector")[5];
	checkBox6.addEventListener('change', function(){
		if(this.checked){
			isPlantsLayerOn = true;
		} else {
			isPlantsLayerOn = false;
		};
	});
	
	var checkBox7 = document.getElementsByClassName("leaflet-control-layers-selector")[6];
	checkBox7.addEventListener('change', function(){
		if(this.checked){
			isShoesLayerOn = true;
		} else {
			isShoesLayerOn = false;
		};
	});
	
	var checkBox8 = document.getElementsByClassName("leaflet-control-layers-selector")[7];
	checkBox8.addEventListener('change', function(){
		if(this.checked){
			isStationeryLayerOn = true;
		} else {
			isStationeryLayerOn = false;
		};
	});
	
	var checkBox9 = document.getElementsByClassName("leaflet-control-layers-selector")[8];
	checkBox9.addEventListener('change', function(){
		if(this.checked){
			isTailorsLayerOn = true;
		} else {
			isTailorsLayerOn = false;
		};
	});
	
	var checkBox10 = document.getElementsByClassName("leaflet-control-layers-selector")[9];
	checkBox10.addEventListener('change', function(){
		if(this.checked){
			isToysLayerOn = true;
		} else {
			isToysLayerOn = false;
		};
	});
	
	var checkBox11 = document.getElementsByClassName("leaflet-control-layers-selector")[10];
	checkBox11.addEventListener('change', function(){
		if(this.checked){
			isWatchesLayerOn = true;
		} else {
			isWatchesLayerOn = false;
		};
	});
	
	var checkBox12 = document.getElementsByClassName("leaflet-control-layers-selector")[11];
	checkBox12.addEventListener('change', function(){
		if(this.checked){
			isWorkshopsLayerOn = true;
		} else {
			isWorkshopsLayerOn = false;
		};
	});
	
	//manages appearance of layers and control depending on zooming
	var prevZoom = mymap.getZoom();
	var isBeddingLayerOn = false;
	var isClothesLayerOn = false;
	var isCobblersLayerOn = false;
	var isElectricityLayerOn = false;
	var isKitchenLayerOn = false;
	var isPlantsLayerOn = false;
	var isShoesLayerOn = false;
	var isStationeryLayerOn = false;
	var isTailorsLayerOn = false;
	var isToysLayerOn = false;
	var isWatchesLayerOn = false;
	var isWorkshopsLayerOn = false;
	mymap.on('zoomend', zoomAdjust );
	function zoomAdjust(){
	//on zooming at min zoom level with markers and above
		//adds layer control if not present
		if (mymap.getZoom() >= minZoomWithMarkers && layersControl == null){
			layersControl = L.control.layers(null, overlayMaps).addTo(mymap);
		};

		//listener for layer control check box on zooming
		checkBox1 = document.getElementsByClassName("leaflet-control-layers-selector")[0];
		if (checkBox1 != null){
			checkBox1.addEventListener('change', function(){
				if(this.checked){
					isBeddingLayerOn = true;
				} else {
					isBeddingLayerOn = false;
				};
			});
		};
		
		checkBox2 = document.getElementsByClassName("leaflet-control-layers-selector")[1];
		if (checkBox2 != null){
			checkBox2.addEventListener('change', function(){
				if(this.checked){
					isClothesLayerOn = true;
				} else {
					isClothesLayerOn = false;
				};
			});
		};
		
		checkBox3 = document.getElementsByClassName("leaflet-control-layers-selector")[2];
		if (checkBox3 != null){
			checkBox3.addEventListener('change', function(){
				if(this.checked){
					isCobblersLayerOn = true;
				} else {
					isCobblersLayerOn = false;
				};
			});
		};
		
		checkBox4 = document.getElementsByClassName("leaflet-control-layers-selector")[3];
		if (checkBox4 != null){
			checkBox4.addEventListener('change', function(){
				if(this.checked){
					isElectricityLayerOn = true;
				} else {
					isElectricityLayerOn = false;
				};
			});
		};
		
		checkBox5 = document.getElementsByClassName("leaflet-control-layers-selector")[4];
		if (checkBox5 != null){
			checkBox5.addEventListener('change', function(){
				if(this.checked){
					isKitchenLayerOn = true;
				} else {
					isKitchenLayerOn = false;
				};
			});
		};
		
		checkBox6 = document.getElementsByClassName("leaflet-control-layers-selector")[5];
		if (checkBox6 != null){
			checkBox6.addEventListener('change', function(){
				if(this.checked){
					isPlantsLayerOn = true;
				} else {
					isPlantsLayerOn = false;
				};
			});
		};
		
		checkBox7 = document.getElementsByClassName("leaflet-control-layers-selector")[6];
		if (checkBox7 != null){
			checkBox7.addEventListener('change', function(){
				if(this.checked){
					isShoesLayerOn = true;
				} else {
					isShoesLayerOn = false;
				};
			});
		};
		
		checkBox8 = document.getElementsByClassName("leaflet-control-layers-selector")[7];
		if (checkBox8 != null){
			checkBox8.addEventListener('change', function(){
				if(this.checked){
					isStationeryLayerOn = true;
				} else {
					isStationeryLayerOn = false;
				};
			});
		};
		
		checkBox9 = document.getElementsByClassName("leaflet-control-layers-selector")[8];
		if (checkBox9 != null){
			checkBox9.addEventListener('change', function(){
				if(this.checked){
					isTailorsLayerOn = true;
				} else {
					isTailorsLayerOn = false;
				};
			});
		};
		
		checkBox10 = document.getElementsByClassName("leaflet-control-layers-selector")[9];
		if (checkBox10 != null){
			checkBox10.addEventListener('change', function(){
				if(this.checked){
					isToysLayerOn = true;
				} else {
					isToysLayerOn = false;
				};
			});
		};
		
		checkBox11 = document.getElementsByClassName("leaflet-control-layers-selector")[10];
		if (checkBox11 != null){
			checkBox11.addEventListener('change', function(){
				if(this.checked){
					isWatchesLayerOn = true;
				} else {
					isWatchesLayerOn = false;
				};
			});
		};
		
		checkBox12 = document.getElementsByClassName("leaflet-control-layers-selector")[11];
		if (checkBox12 != null){
			checkBox12.addEventListener('change', function(){
				if(this.checked){
					isWorkshopsLayerOn = true;
				} else {
					isWorkshopsLayerOn = false;
				};
			});
		};
		
		//adds layers which was checked before zooming out
		if(mymap.getZoom() >= minZoomWithMarkers){
			if(isBeddingLayerOn){
				mymap.addLayer(bedding);
			};

			if(isClothesLayerOn){
				mymap.addLayer(clothes);
			};
			
			if(isCobblersLayerOn){
				mymap.addLayer(cobblers);
			};

			if(isElectricityLayerOn){
				mymap.addLayer(electricity);
			};
			
			if(isKitchenLayerOn){
				mymap.addLayer(kitchen);
			};

			if(isPlantsLayerOn){
				mymap.addLayer(plants);
			};
			
			if(isShoesLayerOn){
				mymap.addLayer(shoes);
			};

			if(isStationeryLayerOn){
				mymap.addLayer(stationery);
			};
			
			if(isTailorsLayerOn){
				mymap.addLayer(tailors);
			};

			if(isToysLayerOn){
				mymap.addLayer(toys);
			};
			
			if(isWatchesLayerOn){
				mymap.addLayer(watches);
			};

			if(isWorkshopsLayerOn){
				mymap.addLayer(workshops);
			};
		};	
		
		//removes layer control and layers on zooming at max zoom level without markers and below
		if(mymap.getZoom() <= maxZoomNoMarkers && layersControl){
			mymap.removeLayer(bedding);
			mymap.removeLayer(clothes);
			mymap.removeLayer(cobblers);
			mymap.removeLayer(electricity);
			mymap.removeLayer(kitchen);
			mymap.removeLayer(plants);
			mymap.removeLayer(shoes);
			mymap.removeLayer(stationery);
			mymap.removeLayer(tailors);
			mymap.removeLayer(toys);
			mymap.removeLayer(watches);
			mymap.removeLayer(workshops);
			mymap.removeControl(layersControl);
			layersControl = null;
		};
	
	//manages the size of the markers depends on zoom level
		//zooming out
		if(prevZoom > mymap.getZoom()){
			beddingIcon.options.iconSize = [beddingIcon.options.iconSize[0] / iconSizeFactor, beddingIcon.options.iconSize[1] / iconSizeFactor];
			beddingIcon.options.iconAnchor = [beddingIcon.options.iconAnchor[0] / iconSizeFactor, beddingIcon.options.iconAnchor[1] / iconSizeFactor];
			
			clothesIcon.options.iconSize = [clothesIcon.options.iconSize[0] / iconSizeFactor, clothesIcon.options.iconSize[1] / iconSizeFactor];
			clothesIcon.options.iconAnchor = [clothesIcon.options.iconAnchor[0] / iconSizeFactor, clothesIcon.options.iconAnchor[1] / iconSizeFactor];
			
			cobblerIcon.options.iconSize = [cobblerIcon.options.iconSize[0] / iconSizeFactor, cobblerIcon.options.iconSize[1] / iconSizeFactor];
			cobblerIcon.options.iconAnchor = [cobblerIcon.options.iconAnchor[0] / iconSizeFactor, cobblerIcon.options.iconAnchor[1] / iconSizeFactor];
			
			electricityIcon.options.iconSize = [electricityIcon.options.iconSize[0] / iconSizeFactor, electricityIcon.options.iconSize[1] / iconSizeFactor];
			electricityIcon.options.iconAnchor = [electricityIcon.options.iconAnchor[0] / iconSizeFactor, electricityIcon.options.iconAnchor[1] / iconSizeFactor];
			
			kitchenIcon.options.iconSize = [kitchenIcon.options.iconSize[0] / iconSizeFactor, kitchenIcon.options.iconSize[1] / iconSizeFactor];
			kitchenIcon.options.iconAnchor = [kitchenIcon.options.iconAnchor[0] / iconSizeFactor, kitchenIcon.options.iconAnchor[1] / iconSizeFactor];
			
			plantsIcon.options.iconSize = [plantsIcon.options.iconSize[0] / iconSizeFactor, plantsIcon.options.iconSize[1] / iconSizeFactor];
			plantsIcon.options.iconAnchor = [plantsIcon.options.iconAnchor[0] / iconSizeFactor, plantsIcon.options.iconAnchor[1] / iconSizeFactor];
			
			stationeryIcon.options.iconSize = [stationeryIcon.options.iconSize[0] / iconSizeFactor, stationeryIcon.options.iconSize[1] / iconSizeFactor];
			stationeryIcon.options.iconAnchor = [stationeryIcon.options.iconAnchor[0] / iconSizeFactor, stationeryIcon.options.iconAnchor[1] / iconSizeFactor];
			
			shoesIcon.options.iconSize = [shoesIcon.options.iconSize[0] / iconSizeFactor, shoesIcon.options.iconSize[1] / iconSizeFactor];
			shoesIcon.options.iconAnchor = [shoesIcon.options.iconAnchor[0] / iconSizeFactor, shoesIcon.options.iconAnchor[1] / iconSizeFactor];
			
			tailorIcon.options.iconSize = [tailorIcon.options.iconSize[0] / iconSizeFactor, tailorIcon.options.iconSize[1] / iconSizeFactor];
			tailorIcon.options.iconAnchor = [tailorIcon.options.iconAnchor[0] / iconSizeFactor, tailorIcon.options.iconAnchor[1] / iconSizeFactor];
			
			toysIcon.options.iconSize = [toysIcon.options.iconSize[0] / iconSizeFactor, toysIcon.options.iconSize[1] / iconSizeFactor];
			toysIcon.options.iconAnchor = [toysIcon.options.iconAnchor[0] / iconSizeFactor, toysIcon.options.iconAnchor[1] / iconSizeFactor];
			
			watchesIcon.options.iconSize = [watchesIcon.options.iconSize[0] / iconSizeFactor, watchesIcon.options.iconSize[1] / iconSizeFactor];
			watchesIcon.options.iconAnchor = [watchesIcon.options.iconAnchor[0] / iconSizeFactor, watchesIcon.options.iconAnchor[1] / iconSizeFactor];
			
			workshopIcon.options.iconSize = [workshopIcon.options.iconSize[0] / iconSizeFactor, workshopIcon.options.iconSize[1] / iconSizeFactor];
			workshopIcon.options.iconAnchor = [workshopIcon.options.iconAnchor[0] / iconSizeFactor, workshopIcon.options.iconAnchor[1] / iconSizeFactor];
			
			for(i = 0; i < numOfStores; i++){
				if(storesTypes[i] == 'Bedding'){
					stores[i].setIcon(beddingIcon);
				} else if(storesTypes[i] == 'Clothes'){
					stores[i].setIcon(clothesIcon);
				} else if(storesTypes[i] == 'Cobbler'){
					stores[i].setIcon(cobblerIcon);
				} else if(storesTypes[i] == 'Electricity'){
					stores[i].setIcon(electricityIcon);
				} else if(storesTypes[i] == 'Kitchen'){
					stores[i].setIcon(kitchenIcon);
				} else if(storesTypes[i] == 'Plants'){
					stores[i].setIcon(plantsIcon);
				} else if(storesTypes[i] == 'Shoes'){
					stores[i].setIcon(shoesIcon);
				} else if(storesTypes[i] == 'Stationery'){
					stores[i].setIcon(stationeryIcon);
				} else if(storesTypes[i] == 'Tailor'){
					stores[i].setIcon(tailorIcon);
				} else if(storesTypes[i] == 'Toys'){
					stores[i].setIcon(toysIcon);
				} else if(storesTypes[i] == 'Watches'){
					stores[i].setIcon(watchesIcon);
				} else if(storesTypes[i] == 'Workshop'){
					stores[i].setIcon(workshopIcon);
				}
			};
		}
		
		//zooming in
		else if(prevZoom < mymap.getZoom()){
			beddingIcon.options.iconSize = [beddingIcon.options.iconSize[0] * iconSizeFactor, beddingIcon.options.iconSize[1] * iconSizeFactor];
			beddingIcon.options.iconAnchor = [beddingIcon.options.iconAnchor[0] * iconSizeFactor, beddingIcon.options.iconAnchor[1] * iconSizeFactor];
			
			clothesIcon.options.iconSize = [clothesIcon.options.iconSize[0] * iconSizeFactor, clothesIcon.options.iconSize[1] * iconSizeFactor];
			clothesIcon.options.iconAnchor = [clothesIcon.options.iconAnchor[0] * iconSizeFactor, clothesIcon.options.iconAnchor[1] * iconSizeFactor];
			
			cobblerIcon.options.iconSize = [cobblerIcon.options.iconSize[0] * iconSizeFactor, cobblerIcon.options.iconSize[1] * iconSizeFactor];
			cobblerIcon.options.iconAnchor = [cobblerIcon.options.iconAnchor[0] * iconSizeFactor, cobblerIcon.options.iconAnchor[1] * iconSizeFactor];
			
			electricityIcon.options.iconSize = [electricityIcon.options.iconSize[0] * iconSizeFactor, electricityIcon.options.iconSize[1] * iconSizeFactor];
			electricityIcon.options.iconAnchor = [electricityIcon.options.iconAnchor[0] * iconSizeFactor, electricityIcon.options.iconAnchor[1] * iconSizeFactor];
			
			kitchenIcon.options.iconSize = [kitchenIcon.options.iconSize[0] * iconSizeFactor, kitchenIcon.options.iconSize[1] * iconSizeFactor];
			kitchenIcon.options.iconAnchor = [kitchenIcon.options.iconAnchor[0] * iconSizeFactor, kitchenIcon.options.iconAnchor[1] * iconSizeFactor];
			
			plantsIcon.options.iconSize = [plantsIcon.options.iconSize[0] * iconSizeFactor, plantsIcon.options.iconSize[1] * iconSizeFactor];
			plantsIcon.options.iconAnchor = [plantsIcon.options.iconAnchor[0] * iconSizeFactor, plantsIcon.options.iconAnchor[1] * iconSizeFactor];
			
			stationeryIcon.options.iconSize = [stationeryIcon.options.iconSize[0] * iconSizeFactor, stationeryIcon.options.iconSize[1] * iconSizeFactor];
			stationeryIcon.options.iconAnchor = [stationeryIcon.options.iconAnchor[0] * iconSizeFactor, stationeryIcon.options.iconAnchor[1] * iconSizeFactor];
			
			shoesIcon.options.iconSize = [shoesIcon.options.iconSize[0] * iconSizeFactor, shoesIcon.options.iconSize[1] * iconSizeFactor];
			shoesIcon.options.iconAnchor = [shoesIcon.options.iconAnchor[0] * iconSizeFactor, shoesIcon.options.iconAnchor[1] * iconSizeFactor];
			
			tailorIcon.options.iconSize = [tailorIcon.options.iconSize[0] * iconSizeFactor, tailorIcon.options.iconSize[1] * iconSizeFactor];
			tailorIcon.options.iconAnchor = [tailorIcon.options.iconAnchor[0] * iconSizeFactor, tailorIcon.options.iconAnchor[1] * iconSizeFactor];
			
			toysIcon.options.iconSize = [toysIcon.options.iconSize[0] * iconSizeFactor, toysIcon.options.iconSize[1] * iconSizeFactor];
			toysIcon.options.iconAnchor = [toysIcon.options.iconAnchor[0] * iconSizeFactor, toysIcon.options.iconAnchor[1] * iconSizeFactor];
			
			watchesIcon.options.iconSize = [watchesIcon.options.iconSize[0] * iconSizeFactor, watchesIcon.options.iconSize[1] * iconSizeFactor];
			watchesIcon.options.iconAnchor = [watchesIcon.options.iconAnchor[0] * iconSizeFactor, watchesIcon.options.iconAnchor[1] * iconSizeFactor];
			
			workshopIcon.options.iconSize = [workshopIcon.options.iconSize[0] * iconSizeFactor, workshopIcon.options.iconSize[1] * iconSizeFactor];
			workshopIcon.options.iconAnchor = [workshopIcon.options.iconAnchor[0] * iconSizeFactor, workshopIcon.options.iconAnchor[1] * iconSizeFactor];

			for(i = 0; i < numOfStores; i++){
				if(storesTypes[i] == 'Bedding'){
					stores[i].setIcon(beddingIcon);
				} else if(storesTypes[i] == 'Clothes'){
					stores[i].setIcon(clothesIcon);
				} else if(storesTypes[i] == 'Cobbler'){
					stores[i].setIcon(cobblerIcon);
				} else if(storesTypes[i] == 'Electricity'){
					stores[i].setIcon(electricityIcon);
				} else if(storesTypes[i] == 'Kitchen'){
					stores[i].setIcon(kitchenIcon);
				} else if(storesTypes[i] == 'Plants'){
					stores[i].setIcon(plantsIcon);
				} else if(storesTypes[i] == 'Shoes'){
					stores[i].setIcon(shoesIcon);
				} else if(storesTypes[i] == 'Stationery'){
					stores[i].setIcon(stationeryIcon);
				} else if(storesTypes[i] == 'Tailor'){
					stores[i].setIcon(tailorIcon);
				} else if(storesTypes[i] == 'Toys'){
					stores[i].setIcon(toysIcon);
				} else if(storesTypes[i] == 'Watches'){
					stores[i].setIcon(watchesIcon);
				} else if(storesTypes[i] == 'Workshop'){
					stores[i].setIcon(workshopIcon);
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

function addToMap(){
	//creates the map
	mymap1 = L.map('mapid').setView([32.07310, 34.76639], defaultZoom);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		maxZoom: mapMaxZoom,
		minZoom: mapMinZoom,
		zoomDelta: 0.1,
		id: 'mapbox.streets',
		accessToken: 'pk.eyJ1IjoiaWdvcmwzMDA5IiwiYSI6ImNqYWEzZnU2bjBlZTAyd3M0Z20zM2xkYjAifQ.AWTI7mLMA6ZQUJ8QmBY8xw'
	}).addTo(mymap1);

	//puts a marker on map and gets the coordinates
	mymap1.on('click', onMapClick);
	function onMapClick(e) {
		if (theMarker != undefined) {
              mymap1.removeLayer(theMarker);
        };

		theMarker = L.marker([e.latlng.lat.toFixed(5), e.latlng.lng.toFixed(5)]).addTo(mymap1);
		//final values of e.latlng.lat.toFixed(5) and e.latlng.lng.toFixed(5) must be saved in db 'address.latitude' and 'address.longitude';
	}
};