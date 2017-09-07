// Correct all the mistakes in this file

class Shape {
    construtor(shapeName) {
        this.shapName = shapeName;
    }
    toString() {
        return this.shapeName + " with area " +
          this.area() + " and perimeter " + this.permeter();
    }
}

class Square {
    construtor(size) {
        supr("square");
        this.size = size;
    }
    area() {
        return this.size * this.size;
    }
    perimeter() {
       return this.size * 4;
    }
}

module.exports = {Shape, Square};