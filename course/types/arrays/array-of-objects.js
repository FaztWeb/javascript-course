function Point(x, y) {
  this.x = x;
  this.y = y;
}

function displayPoints(arr = []) {
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i].x + ', ' + arr[i].y);
  }
}

const points = [
  new Point(1, 2),
  new Point(3, 5),
  new Point(2, 8),
  new Point(4, 4)
];


//displayPoints(points);

// add a new point to the array
points.push(new Point(12, -3));
// displayPoints(points);

// removing the first element
points.shift();
displayPoints(points);
