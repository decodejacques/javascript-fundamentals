var expect = require('chai').expect;

var classes = require('../../src/inheritance/problem2.js');

var Shape = classes.Shape;
var Square = classes.Square;
var s = new Square(5);

describe('Square', function() {
    it('converts nicely to a string', function() {
        expect(s.toString()).to.eq("square with area 25 and perimeter 20");
    });
});