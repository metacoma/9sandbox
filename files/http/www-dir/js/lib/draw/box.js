DrawBox = function(arg) {
  this.rect = this.box(arg);
  this.title = this.SetText(arg.title);
  this.group = new Group();
  this.group.addChild(this.rect);
  this.group.addChild(this.title);

  this.group.onMouseEnter = function(event) {
    console.log(event)
  } 

  return this;
}; 

DrawBox.prototype.box = function(arg) { 
  rect = Path.Rectangle({
    point: [arg.x,arg.y],
    size: [arg.width, arg.height],
    strokeColor: strokeColor,
    selected: false,
    fillColor: fillColor,
  });

  return rect;
};


DrawBox.prototype.SetText = function(title) {

  var x = this.rect.point[0] + (this.rect.size[0])/2;
  var y = this.rect.point[1] + (this.rect.size[1])/2;
  var fontSize = 20;


  text = new PointText(new Point(x, y));

  text.fillColor = 'black';
  text.content =  title;
  text.fontSize =  fontSize;
  text.fontFamily = "arial";
  text.point.x = text.point.x - (text.bounds.width)/2; 
  text.point.y = text.point.y + fontSize/2; 

  return text;
}; 

strokeColor = "black";
fillColor = '#55C8C1';
