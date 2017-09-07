class Shape {
    constructor(shapeName) {
        this.shapeName = shapeName;
    }
    toString() {
        return "This shape has " + this.area() + " and perimeter " + this.perimeter();
    }
}

class Rectangle {
    // A rectangle is a shape
    // Every rectangle has a width and a height
    // Implement the constructor
    // Implement the area and perimeter methods
}

class Square {
    // A square is a rectangle
    // Every square has a width and a height
    // The height and width of a square are always the same
    // Implement the constructor
    // Implement the area and perimeter methods

}

module.exports = {Shape, Rectangle, Square};