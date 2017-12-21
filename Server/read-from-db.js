const mysql = require('mysql');
const config = require('./config.json');

const con = mysql.createConnection({
	host: config.host,
	user: config.user,
	password: config.password,
	database: config.database
});

con.connect(function(err) {
	if (err) throw err;
		console.log("Connected!");
});
		
module.exports = {
	//retrieve all the stores to display on map
	retrieveAllStores(Callback){
		var sql = "SELECT stores.hp_id, stores.name, stores.type, stores.sub_type, stores.phone, stores.description, stores.logo, address.latitude, address.longitude FROM address INNER JOIN stores ON address.address_id = stores.address_id";
		con.query(sql, function (err, result, fields) {
			if (err) throw err;
			Callback(result);
		});
	},
	
	verifyCredentials(Callback){
		var sql = "SELECT password FROM users_data WHERE email =" + con.escape(email);
		con.query(sql, function (err, result, fields) {
			if (err) throw err;
			Callback(result);
		});
	},
	
	checkIfUserExists(params, Callback){
		var sql = "SELECT COUNT(user_id) AS numberOfUsers FROM users_data WHERE email =" + con.escape(params.email);
		con.query(sql, function (err, result, fields) {
			if (err) throw err;
			Callback(result);
		});
	},
	
	//retrieve specific store information
	// retrieveStoreForPopup(Callback){
			
		// var sql = "SELECT hp_id, name, type, sub_type, phone, description, logo FROM stores";
		//var sql = "SELECT hp_id, name, type, sub_type, phone, description, logo FROM stores WHERE hp_id =" + con.escape(hpid);
		// con.query(sql, function (err, result, fields) {
			// if (err) throw err;
			// Callback(result);
		// });
	// }
}