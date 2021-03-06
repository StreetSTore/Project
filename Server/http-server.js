const https = require('https');
const fs = require('fs');
const url = require('url');
const bcrypt = require('bcrypt');

const read = require('./read-from-db.js');
const write = require('./write-to-db.js');

const serverPort = 443;
const options = {
  pfx: fs.readFileSync('localhost.pfx'),
  passphrase: '1234'
};
const saltRounds = 10;

https.createServer(options, (req, res) => {
	var query = url.parse(req.url, true).query;
	
	if (query.method == 'verifyCredentials'){
		email = query.email;
		password = query.password;
		
		read.verifyCredentials(function(data){
			bcrypt.compare(password, data[0].password, function(err, result) {
				res.writeHead(200, {'Content-Type': 'text/plain'});
				res.write(JSON.stringify(result));
				res.end();
			});
		});
	}
	
	if (query.method == 'registerUser'){
		email = query.email;	
		read.checkIfUserExists({email}, function(data){
			if(!data[0].numberOfUsers){
				fName = query.fName;
				lName = query.lName;
				role = query.role;
				d = new Date();
				date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
		
				bcrypt.genSalt(saltRounds, function(err, salt){
					bcrypt.hash(query.password, salt, function(err, hashedPass){
						write.registerUser({fName, lName, email, role, date, hashedPass}, function(result){
							res.writeHead(200, {'Content-Type': 'text/plain'});
							res.write(JSON.stringify("User created"));
							res.end();
						});
					});
				});
			}
			
			else {
				res.writeHead(200, {'Content-Type': 'text/plain'});
				res.write(JSON.stringify("Email already exists"));
				res.end();
			};
		});
	}
	
	if (query.method == 'retrieveAllStores'){
		read.retrieveAllStores(function(data){
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.write(JSON.stringify(data));
			res.end();
		});
	}
}).listen(serverPort);


