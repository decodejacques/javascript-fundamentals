var expect = require('chai').expect;

var funcs = require('../../src/HOF/problem1.js');
var callNoException =  funcs.callNoException;
var callNoNull = funcs.callNoNull;
var exceptionalize = funcs.exceptionalize; 
var nullify = funcs.nullify;
var map = funcs.map; 
var filter = funcs.filter; 
var every = funcs.every;

function throwsZero(x){
    if(x==0) throw new Error("woops");
    return x;
}
function nullZero(x) {
    if(x==0) return null;
    return x;
}


describe('callNoException', function() {
    it('suppresses exceptions', function() {
        expect(callNoException(throwsZero, 0)).to.eq(null);
    });
    it('otherwise returns the same value', function() {
        expect(callNoException(throwsZero, 12)).to.eq(12);
    });
});

describe('callNoNull', function() {
    it('suppresses null', function() {
        expect(() => callNoNull(nullZero, 0)).to.throw();
    });
    it('otherwise returns the same value', function() {
        expect(callNoNull(nullZero, 12)).to.eq(12);
    });
});

describe('exceptionalize', function() {
    it('suppresses exceptions', function() {
        expect(() => exceptionalize(nullZero)(0)).to.throw();
    });
    it('otherwise returns the same value', function() {
        expect(exceptionalize(nullZero)(12)).to.eq(12);        
    });
});

describe('nullify', function() {
    it('suppresses exceptions', function() {
        expect(nullify(throwsZero)(0)).to.eq(null);
    });
    it('otherwise returns the same value', function() {
        expect(nullify(throwsZero)(12)).to.eq(12);        
    });
});

describe('map', function() {
    it('maps', function() {
        expect(map(["a", "b"], x => x.toUpperCase())).to.eql(["A", "B"]);
    });
});

describe('filter', function() {
    it('removes even numbers', function() {
        expect(filter([1, 2, 3, 4], x => x % 2 == 1)).to.eql([1, 3]);
    });
});

describe('every', function() {
    it('correctly returns true if every element satisfies the predicate', function() {
        expect(every([2, 4], x => x % 2 == 0)).to.eql(true);
    });
    it('correctly returns false if one element does not satisfy the predicate', function() {
        expect(every([2, 3, 4],x => x % 2 == 0)).to.eql(false);
    });
});
