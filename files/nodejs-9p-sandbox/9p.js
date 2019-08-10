var _9p = require('9p');
var WebSocket = require('ws');

var sock = new _9p.WebSocketReadWriter("ws://http/alpha");
var enc = new _9p.Encoder(sock);
var dec = new _9p.Decoder(sock);

enc.tversion(1024, "9P2000");

//console.log('enc.tattach(0,1,"foobar", "/")')
