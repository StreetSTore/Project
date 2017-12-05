var mysql = require('mysql');
// var lat = 32.07315;
// var lon = 34.76639;

var con = mysql.createConnection({
	host: "vmedu138.mtacloud.co.il",
	user: "root",
	password: "StreetSt0re!",
	database: "test"
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");

	var places = [
		hp_id = '',
		name = '',
		type = '', 
		addres_id = '',
		description = ''//,
		//latitude = '',
		//longitude = ''
	];
	
	var sql = "SELECT hp_id, name, type, address_id, description FROM stores";
	con.query(sql, function (err, result, fields) {
		if (err) throw err;
		//console.log(result);
		for(i = 0; i < result.length; i++) {
			places[i] = {
				hp_id: result[i].hp_id,
				name: result[i].name,
				type: result[i].type,
				addres_id: result[i].addres_id,
				description: result[i].description
				//latitude = result[i].latitude,
				//longitude = result[i].longitude
			};
			//places.push(tempPlace);
			// console.log(places[i]);
		};
	});

	console.log(places);
	// console.log(places[1]);
	// console.log(places[2]);
	// console.log(places[3]);
	
	// var sql = "SELECT address.latitude, address.longitude FROM address INNER JOIN stores ON address.address_id = stores.address_id";
	// con.query(sql, function (err, result) {
		// if (err) throw err;
		// console.log(result);
		// for(i = 0; i < result.length; i++) {
			// Object.assign(places[i], result[i]);
		// }
	// });
	
	// for(i = 0; i < places.length; i++) {
		// console.log(places[i]);
	// }
	

});



