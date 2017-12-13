const mysql = require('mysql');
const bcrypt = require('bcrypt');

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
		
var sql = "SELECT password FROM users_data WHERE user_id = 1";
con.query(sql, function (err, result, fields) {
	if (err) throw err;
	console.log(result[0].password);
	
	
	//good password = Aa123 - will return true
	bcrypt.compare("Aa123", result[0].password, function(err, res) {
		console.log(res);
	});
});