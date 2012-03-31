var http = require('http');

var listen = function(port){
    http.createServer(function (request, response) {
    	response.writeHead(200, {'Content-Type': 'text/plain'});
    	response.end('Hello ,Fire Line!\n');
    }).listen(port);
    console.log('Server running at http://localhost:%d/',port);
}

exports.listen=listen;



