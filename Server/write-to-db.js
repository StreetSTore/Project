var mysql = require('mysql');
// var lat = 32.07315;
// var lon = 34.76639;
// var addressId = 756;

var con = mysql.createConnection({
  host: "vmedu138.mtacloud.co.il",
  user: "root",
  password: "StreetSt0re!",
  database: "test"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  
  //Creating address
  var sql = "INSERT INTO address (address_id, latitude, longitude) VALUES ?";
  var values = [
	['7954', '32.07315', '34.76639'],
	['7955', '32.07353', '32.07353'],
	['7956', '32.07298', '34.76610'],
	['7957', '32.07310', '34.76672']
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Result: " + result + " " + result.insertId);
  });
  
  //Creating stores
  sql = "INSERT INTO stores (hp_id, name, type, address_id, description) VALUES ?";
  values = [
	['65481', 'SuperIT', '1', '7954', 'Best shop<br>Food, drinks and more'],
	['65482', 'BuyMe24', '1', '7955', 'All you need<br>24/7'],
	['65483', 'CobblerZ', '2', '7955', 'Repair all kind of shoes for 30 years!'],
	['65484', 'Tailor Made', '2', '7957', 'Tailor made is us']
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
});



