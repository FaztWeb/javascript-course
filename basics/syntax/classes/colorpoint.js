class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString(){
    return `(${this.x},${this.y})`;
  }
}

class ColorPoint extends Point{
  constructor(x, y, color) {
    super(x, y);
    this.color = color;
  }

  toString(){
    return super.toString() + ' in ' + this.color;
  }
}

var point = new Point(5,4);
console.log(point.toString());
console.log(typeof Point);//function


var cp = new ColorPoint(7, 7, 'red');
console.log(cp.toString());
