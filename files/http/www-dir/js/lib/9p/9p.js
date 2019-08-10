NineP = function(webSocketUrl) { 
	var that = this;
	this.websock = new WebSocket(webSocketUrl, ["binary"]);
	this.websock.onopen = this.connected;

	this.maxBufSize = 8096;

	return this;
}; 

NineP.packetTypes = {
	Tversion: 100,
} 

NineP.prototype.connected = function(event) {
	console.log("connected");
};

NineP.prototype.Rversion = function(data) {
	console.log("Rversion received");	
}; 

NineP.prototype.Tversion = function(tag) {
	console.log("Tversion");
	var buf2 = [ 0x0, 0x0, 0x0, 0x0, NineP.packetTypes.Tversion ];
	buf2.push.apply(buf2, tag);
	buf2 = buf2.concat(buf2, this.maxBufSize);


  var buf = [
    0x13, 0x00, 0x00, 0x00, 0x64, 0xff, 0xff, 0x18,
    0x20, 0x00, 0x00, 0x06, 0x00, 0x39, 0x50, 0x32,
    0x30, 0x30, 0x31
  ]; 


	this.websock.onmessage = this.Rversion();
	return this.websock.send(new Uint8Array(buf));
}; 
