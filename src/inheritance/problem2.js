// Correct all the mistakes in this file

class Shape {
    constructor(shapeName) {
        this.shapeName = shapeName;
    }
    toString() {
        return this.shapeName + " with area " +
          this.area() + " and perimeter " + this.perimeter();
    }
}

class Square extends Shape {
    constructor(size) {
        super("square");
        this.size = size;
    }
    area() {
        return this.size * this.size;
    }
    perimeter() {
       return this.size * 4;
    }
}

var s = new Square(5)
console.log(s.toString())

module.exports = {Shape, Square};