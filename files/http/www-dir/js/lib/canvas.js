var rect = new Path.Rectangle({
    point: [0, 0],
    size: [view.size.width, view.size.height],
    strokeColor: 'white',
    selected: true
});
rect.sendToBack();

var rect2 = new Path.Rectangle({
    point: [30, 30],
    size: [view.size.width / 2, view.size.height /2],
    strokeColor: 'white',
    selected: true
});
rect.fillColor = '#AEE9EA';
rect2.fillColor = '#55C8C1';


var path = new Path();
path.strokeColor = 'black';
var start = new Point(100, 100);
path.moveTo(start);
path.lineTo(start + [ 100, -50 ]);
