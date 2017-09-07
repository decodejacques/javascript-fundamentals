var expect = require('chai').expect;

var f = require('../../src/return/problem1.js');

var fs = require('fs')
var source = fs.readFileSync(__dirname + '/../../src/return/problem1.js').toString();
source = source.replace(/\s/g, "")
console.log(source);


describe('Source', function() {
    it('is less than 85 characters', function() {
        expect(source.length).to.be.below(85);
    });
    it('returns correct value on 6', function() {
        expect(f(6)).to.be.eq("goodbye");
    });
    it('returns correct value on 11', function() {
        expect(f(11)).to.be.eq("hello");
    });
    it('returns correct value on 2', function() {
        expect(f(2)).to.be.eq(undefined);
    });


});
