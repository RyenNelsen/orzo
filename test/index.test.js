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

    describe('using the chars feature', function() {
        it('should return a string of 10 random characters by default', function() {
            expect(orzo.chars()).to.have.length(10);
        });
        it('should return a string of 5 random characters when supplied the length 5', function() {
            expect(orzo.chars({len: 5})).to.have.length(5);
        });
        it('should return all the same characters if only 1 char is supplied', function() {
            expect(orzo.chars({chars: 'a'})).to.equal('aaaaaaaaaa');
        });
        it('should return an error if length is less than 1', function() {
            expect(function() { orzo.chars({len: -1}); }).to.throw(RangeError);
        });
        it('should return an error if the supplied character set is anything but a string', function() {
            expect(function() { orzo.chars({chars: 1}) }).to.throw(TypeError);
        });
    });
});
