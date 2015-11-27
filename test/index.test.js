var assert = require('assert');
var orzo = require('../index');
var expect = require('chai').expect;

describe('The main library', function() {
    it('should import', function() {
        assert(orzo);
    });
    describe('using the dice feature', function() {
        it('should return a random number between 1 and 6 in all 20 rolls', function() {
            for (var i = 0; i < 20; i++) {
                expect(orzo.dice()).to.be.at.least(1).and.at.most(6);
            }
        });
        it('should return an error if max is less than min', function() {
            expect(function() { orzo.dice({min: 6, max: 5}); }).to.throw(RangeError);
        });
    });
});
