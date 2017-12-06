module.exports = {
	retrieveStores(Callback) {

		var mysql = require('mysql');

		var con = mysql.createConnection({
			host: "vmedu138.mtacloud.co.il",
			user: "root",
			password: "StreetSt0re!",
			database: "test"
		});

		con.connect(function(err) {
			if (err) throw err;
			console.log("Connected!");
			
			var sql = "SELECT stores.hp_id, stores.type, address.latitude, address.longitude FROM address INNER JOIN stores ON address.address_id = stores.address_id";
			con.query(sql, function (err, result, fields) {
				if (err) throw err;
				Callback(result);
			});
		});
	}
}