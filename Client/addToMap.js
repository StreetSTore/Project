const defaultZoom = 17;
const mapMinZoom = 12;
const mapMaxZoom = 20;

var mymap;
var theMarker = {};

function addToMap(){
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

	//puts a marker on map and gets the coordinates
	mymap.on('click', onMapClick);
	function onMapClick(e) {
		if (theMarker != undefined) {
              mymap.removeLayer(theMarker);
        };

		theMarker = L.marker([e.latlng.lat.toFixed(5), e.latlng.lng.toFixed(5)]).addTo(mymap);
		console.log(e.latlng.lat.toFixed(5)+ " " + e.latlng.lng.toFixed(5));
	}
};