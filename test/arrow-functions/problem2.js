var expect = require('chai').expect;

var arrowfuncs = require('../../src/arrow-functions/problem2.js');

var fs = require('fs')
var source = fs.readFileSync(__dirname + '/../../src/arrow-functions/problem2.js').toString();

describe('arrow functions', function() {
    it('The file should contain no arrows', function() {
        expect(source.indexOf('=>')).to.eql(-1);
    });
    it('x stays the same', function() {
        expect(arrowfuncs.x(3)).to.eql(4);
    });
    it('y stays the same', function() {
        expect(arrowfuncs.y(5, 10)).to.eql(15);
    });
    it('z stays the same', function() {
        expect(arrowfuncs.z(3)).to.eql(2);
    });
});