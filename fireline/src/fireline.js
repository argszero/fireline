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

