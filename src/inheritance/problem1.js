class Shape {
    toString() {
        return "This shape has an area of " + this.area() + " and perimeter " + this.perimeter();
    }
}

class Rectangle extends Shape {

    // A rectangle is a shape
    // Every rectangle has a width and a height
    // Implement the constructor
    // Implement the area and perimeter methods
    // The constructor has two arguments: width and height
    constructor(width, height){
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.height * this.width;
    }
    perimeter() {
       return (this.width + this.height) * 2;
    }
}

class Square extends Rectangle{
    // A square is a rectangle
    // Every square has a width and a height
    // The height and width of a square are always the same
    // Implement the constructor
    // Do not implement the area and perimeter methods. They should be inherited from Rectangle
    // The constructor has one argument
    constructor(size){
        super();
        this.width = size;
        this.height = size;
    }
}


module.exports = {Shape, Rectangle, Square};