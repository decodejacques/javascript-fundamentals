class Shape {
    constructor(){

    }
    toString() {
        return "This shape has an area of " + this.area() + " and perimeter " + this.perimeter();
    }
}

class Rectangle extends Shape {

    constructor(w,h){
        super();
        this.width = w;
        this.height = h;
    }
    
    area(){
        return this.width * this.height;
    }
    
    perimeter(){
        return (this.width * 2 + this.height * 2);
    }

}

class Square extends Rectangle {
    
    constructor (h){
        super (h,h);
    
}
}

module.exports = {Shape, Rectangle, Square};