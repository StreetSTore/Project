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
	//registers new user
	registerUser(params, Callback) {
		var sql = "INSERT INTO users_data (first_name, last_name, email, role, registration_date, active, password) VALUES ("+con.escape(params.fName)+', '+con.escape(params.lName)+', '+con.escape(params.email)+', '
				+con.escape(params.role)+', '+con.escape(params.date)+', 1, '+con.escape(params.hashedPass)+')';
		con.query(sql, function (err, result) {
			if (err) throw err;
			Callback(result);
		});
	}
}  
  
  
  // //Creating address
  // var sql = "INSERT INTO address (address_id, latitude, longitude) VALUES ?";
  // var values = [
	// ['7954', '32.07315', '34.76639']
  // ];
  // con.query(sql, [values], function (err, result) {
    // if (err) throw err;
    // console.log("Result: " + result + " " + result.insertId);
  // });
  
  //// Creating store
  // sql = "INSERT INTO stores (hp_id, name, type, address_id, description) VALUES ?";
  // values = [
	// ['65481', 'SuperIT', '1', '7954', 'Best shop<br>Food, drinks and more']
  // ];
  // con.query(sql, [values], function (err, result) {
    // if (err) throw err;
    // console.log("Result: " + result);
  // });
// });




