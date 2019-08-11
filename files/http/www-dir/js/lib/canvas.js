var rect = new Path.Rectangle({
    point: [0, 0],
    size: [view.size.width, view.size.height],
    strokeColor: 'white',
    selected: true
});
rect.sendToBack();

rect.fillColor = '#AEE9EA';
