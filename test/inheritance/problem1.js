var expect = require('chai').expect;

var classes = require('../../src/inheritance/problem1.js');

var Shape = classes.Shape;
var Rectangle = classes.Rectangle;
var Square = classes.Square;

var s = new Square(5);
var r = new Rectangle(10, 4);

describe('Rectangle', function() {
    it('Seeing how a rectangle converts to a string', function() {
        expect(r.toString()).to.eq("This shape has an area of 40 and perimeter 28");
    });
    it('is a shape', function() {
        expect(r.__proto__.__proto__.constructor).to.eq(Shape);
    });
});

describe('Square', function() {
    it('Seeing how a square converts to a string', function() {
        expect(s.toString()).to.eq("This shape has an area of 25 and perimeter 20");
    });
    it('is a rectangle', function() {
        expect(s.__proto__.__proto__.constructor).to.eq(Rectangle);
    });
});

