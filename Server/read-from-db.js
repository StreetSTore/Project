const mysql = require('mysql');

const con = mysql.createConnection({
	host: "vmedu138.mtacloud.co.il",
	user: "root",
	password: "StreetSt0re!",
	database: "test"
});

con.connect(function(err) {
	if (err) throw err;
		console.log("Connected!");
});
		
module.exports = {
	//retrieve all the stores to display on map
	retrieveAllStores(Callback) {
			
		var sql = "SELECT stores.hp_id, stores.name, stores.type, stores.sub_type, stores.phone, stores.description, stores.logo, address.latitude, address.longitude FROM address INNER JOIN stores ON address.address_id = stores.address_id";
		con.query(sql, function (err, result, fields) {
			if (err) throw err;
			Callback(result);
		});
	},
	
	
	
	//retrieve specific store information
	// retrieveStoreForPopup(Callback) {
			
		// var sql = "SELECT hp_id, name, type, sub_type, phone, description, logo FROM stores";
		//var sql = "SELECT hp_id, name, type, sub_type, phone, description, logo FROM stores WHERE hp_id =" + con.escape(hpid);
		// con.query(sql, function (err, result, fields) {
			// if (err) throw err;
			// Callback(result);
		// });
	// }
}