var expect = require('chai').expect;

var funcs = require('../../src/conditional-operator/problem1.js');


var fs = require('fs')
var source = fs.readFileSync(__dirname + '/../../src/conditional-operator/problem1.js').toString();

describe('source file', function() {
    it('source file should not contain if statements', function() {
        expect(source.indexOf('if')).to.eq(-1);
    });
});

describe('desirability', function() {
    it('Brad Pitt is desirable', function() {
        expect(funcs.desirability('Brad Pitt')).to.eq("very desirable");
    });
    it('Anyone else is not desirable', function() {
        expect(funcs.desirability('Bob Pitt')).to.eq("not so desirable");
    });
});

describe('broadenHorizon', function() {
    it('Brad Pitt is desirable', function() {
        expect(funcs.broadenHorizon('Brad Pitt')).to.eq("very desirable");
    });
    it('Angelina Jolie is also desirable', function() {
        expect(funcs.broadenHorizon('Angelina Jolie')).to.eq("also desirable");
    });
    it('Anyone else is not desirable', function() {
        expect(funcs.broadenHorizon('Bob Pitt')).to.eq("not desirable");
    });
});
