var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  console.log(req);

  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  var resnum = 2 + parseInt(query.num1) + parseInt(query.num2);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(resnum.toString());
  res.end();
}).listen(8080);