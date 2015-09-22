// UTILITY
function extend(Child, Parent) {
  var F = function () {};
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
  Child.uber = Parent.prototype;
}

function extend2(Child, Parent) {
  var p = Parent.prototype;
  var c = Child.prototype;
  for (var i in p) {
    c[i] = p[i];
  }
  c.uber = p;
}

// SHAPE
function Shape() {}
Shape.prototype.name = 'Shape';
Shape.prototype.toString = function () {
  return this.constructor.uber ?
          this.constructor.uber.toString() + ', ' + this.name :
          this.name;
};

// 2D SHAPE
function TwoDShape() {}
extend2(TwoDShape, Shape);
TwoDShape.prototype.name = '2D shape';

// TRIANGLE
function Triangle(side, height) {
  this.side = side;
  this.height = height;
}
extend(Triangle, Shape);
Triangle.prototype.name = 'Triangle';
Triangle.prototype.getArea = function () {
  return this.side * this.height / 2;
};

// INSTANCES
var first = new TwoDShape();
var second = new Triangle(10, 20);
