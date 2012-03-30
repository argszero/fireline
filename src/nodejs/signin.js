//签到
//发送广播告知其他fireline"我来了"
//侦听广播地址，从而得知其他firelien的签到信息
var dgram = require("dgram");

var signin = function(){
//      var message = new Buffer("Some bytes");
//      var client = dgram.createSocket("udp4");
////      client.send(message, 0, message.length, 41234, "239.255.255.250");
//      client.send(message, 0, message.length, 41234, "localhost");
//      console.log("send");
//      client.close();
}

var listen = function(){
    var server = dgram.createSocket("udp4");
//    server.setMulticastTTL(128);
//    server.setBroadcast(true);
//    server.addMembership("239.66.69.18");
    server.on("message", function (msg, rinfo) {
    	console.log("server got: " + msg + " from " +
    		rinfo.address + ":" + rinfo.port);
    });
    server.on("listening", function () {
    	var address = server.address();
    	console.log("server listening " + address.address + ":" + address.port);
    });
    server.bind("239.66.69.17",41234);
}

exports.signin = signin;
exports.listen = listen;