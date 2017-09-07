var expect = require('chai').expect;

var farg;
var targ;

setTimeout = function(f, t) {
    farg = f;
    f("hey");
    targ = t;
}

var greet = require('../../src/callbacks/problem1.js');

describe('bind', function() {
    it('it should shout after 1 second ', function() {
        expect(targ).to.eql(1000);
    });
    it('the first argument must make sense', function() {
        expect(typeof farg).to.eq("function");
    });
    

});