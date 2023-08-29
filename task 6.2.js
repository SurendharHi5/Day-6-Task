// 2. Circle - Class
//------------------------

class Circle {
    constructor(radius = 1.0, color = "red") {
      this._radius = radius;
      this._color = color;
    }
  
    get radius() {
      return this._radius;
    }
  
    set radius(radius) {
      this._radius = radius;
    }
  
    get color() {
      return this._color;
    }
  
    set color(color) {
      this._color = color;
    }
  
    toString() {
      return `Circle [radius = ${this._radius} , color = ${this._color}]`;
    }
  
    getArea() {
      return Math.PI * (this._radius**2);
    }
  
    getCircumference() {
      return 2 * Math.PI * this._radius;
    }
  }
  
  let circle1 = new Circle(3, "black");
 
  console.log(circle1.toString());
  console.log("Area:", circle1.getArea());
  console.log("Circumference:", circle1.getCircumference());
  
  // output :
  //----------

//   Circle [radius = 3 , color = black]
//   Area: 28.274333882308138
//   Circumference: 18.84955592153876
