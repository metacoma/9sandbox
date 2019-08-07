var _9p = require('9p');
var WebSocket = require('ws') 

var sock = new _9p.WebSocketReadWriter("ws://http/alpha")
var enc = new _9p.Encoder(sock.socket._socket)

console.log('enc.tattach(0,1,"foobar", "/")')
