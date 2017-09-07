// Correct all the mistakes in this file

class Shape {
    constructor(shapeName) {
        this.shapName = shapeName;
    }
    toString() {
        return this.shapeName + " with area " +
          this.area() + " and perimeter " + this.permeter();
    }
}

class Square {
    constructor(size) {
        supr("square");
        this.size = size;
    }
    area() {
        return this.size * this.siz;
    }
    perimeter() {
       return this.size * 4;
    }
}

module.exports = {Shape, Square};