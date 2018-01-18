class Shape {
    toString() {
        return "This shape has an area of " + this.area() + " and perimeter " + this.perimeter();
    }
}

class Rectangle extends Shape{
    constructor (x, y) {
        super();
        this.width = x;
        this.length = y;
    }

    area() {
        return this.width * this.length;
    }

    perimeter() {
        return this.width * 2 + this.length * 2;
    }
    // A rectangle is a shape
    // Every rectangle has a width and a height
    // Implement the constructor
    // Implement the area and perimeter methods
    // The constructor has two arguments: width and height
}

class Square extends Rectangle{
    constructor (x) {
        super();
        this.length = x;
        this.width = x;
    }

    // A square is a rectangle
    // Every square has a width and a height
    // The height and width of a square are always the same
    // Implement the constructor
    // Do not implement the area and perimeter methods. They should be inherited from Rectangle
    // The constructor has one argument
}


module.exports = {Shape, Rectangle, Square};