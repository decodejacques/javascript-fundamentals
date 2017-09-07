var expect = require('chai').expect;

var funcs = require('../../src/exceptions/problem1.js');
var first = funcs.first;
var detective = funcs.detective;
var assignFlight = funcs.assignFlight;
describe('first', function() {
    it('throws an exception on an empty array', function() {
        expect(() => first([])).to.throw()
    });
    it('returns the first element on a nonempty array', function() {
        expect(first([1, 2])).to.eq(1);
    });
});

describe('detective', function() {
    it('finds something fishy', function() {
        expect(detective(21)).to.eq("something fishy");
    });
    it('everything ok', function() {
        expect(detective(22)).to.eq("everything ok");
    });
});

describe('assignFlight', function() {
    it('Finds a terrorist', function() {
        expect(() => assignFlight("bob")).to.throw();
    });
    it('Gets a flight number', function() {
        expect(assignFlight("peter")).to.eq("150");
    });
});