var dgram = require("dgram");
var LOCAL_BROADCAST_HOST = '224.0.0.114';
var LOCAL_BROADCAST_PORT = 5416;
var signin = function(){
    var sendSocket = dgram.createSocket('udp4');
    sendSocket.bind();
    sendSocket.setTTL(1);
    sendSocket.setBroadcast(true);
    sendSocket.setMulticastTTL(1);
    sendSocket.setMulticastLoopback(true);
    var buf = new Buffer('sign');
    sendSocket.send(buf, 0, buf.length,LOCAL_BROADCAST_PORT, LOCAL_BROADCAST_HOST);
}

var listen = function(){
    var listenSocket = dgram.createSocket('udp4');
    listenSocket.on('message', function(buf, rinfo) {
        console.error('new boy comes');
    });
    listenSocket.bind(LOCAL_BROADCAST_PORT);
    listenSocket.addMembership(LOCAL_BROADCAST_HOST);
}

exports.signin = signin;
exports.listen = listen;