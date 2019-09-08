ConnectionGateway =  function() {
	this.title = "Connection";
  this.box = new DrawBox({
    x: 0,
    y: 0,
    width: view.size.width,
    height: view.size.height,
    title: "connection",
    fillColor: '#AEE9EA'
  }); 
  this.box.linkObject(this);
	return this;	
};

