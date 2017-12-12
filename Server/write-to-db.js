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
	//registers new user
	registerUser(Callback) {
		var sql = "INSERT INTO users_data (first_name, last_name, email, role, registration_date, active, password) VALUES ('"+fName+"', '"+lName+"', '"+email+"', '"+role+"', '"+date+"', '"+1+"', '"+password+"')";
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




