var http = require('http');
var url = require('url');

http.createServer(function (req, res) {

	var res = 
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write();
	res.end();
}).listen(8080);