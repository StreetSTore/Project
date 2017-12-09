var http = require('http');
var url = require('url');

var retrieve = require('./read-from-db.js');

http.createServer(function (req, res){
	var query = url.parse(req.url, true).query;
	
	if (query.method == 'retrieveAllStores'){
		retrieve.retrieveAllStores(function(data){
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.write(JSON.stringify(data));
			res.end();
		});
	}
	
	if (query.method == 'retrieveStoreForPopup'){
		hpid = query.hpid;
		retrieve.retrieveStoreForPopup(function(data, hpid){
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.write(JSON.stringify(data));
			res.end();
		});
	}

}).listen(8080);




