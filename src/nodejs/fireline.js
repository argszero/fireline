var http = require('http');
var signin = require('./signin');


//http.createServer(function (request, response) {
//	response.writeHead(200, {'Content-Type': 'text/plain'});
//	response.end('Hello World\n');
//}).listen(8124);
signin.signin();
signin.listen();



console.log('Server running at http://127.0.0.1:8124/');

