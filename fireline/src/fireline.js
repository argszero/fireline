var program = require('commander');
var web = require('./app/web');
var signin = require('./app/signin');
program
  .version('0.0.1')
  .option('-p, --port <n>', 'the port with you want to access fireline though browser')
  .parse(process.argv);
web.listen(program.port);
signin.signin();
signin.listen();


//var http = require('http');
//var signin = require('./signin');
//
//
//http.createServer(function (request, response) {
//	response.writeHead(200, {'Content-Type': 'text/plain'});
//	response.end('Hello World\n');
//}).listen(8124);
//

//console.log('Server running at http://127.0.0.1:8124/');
