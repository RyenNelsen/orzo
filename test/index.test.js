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
    it('should return a number between 4 and 6 if only min is supplied in all 20 rolls', function() {
      for (var i = 0; i < 20; i++) {
        expect(orzo.dice({min: 4})).to.be.at.least(4).and.at.most(6);
      }
    });
    it('should return a number between 1 and 4 if only max is supplied in all 20 rolls', function() {
      for (var i = 0; i < 20; i++) {
        expect(orzo.dice({max: 4})).to.be.at.least(1).and.at.most(4);
      }
    });
    it('should return a number between -20 and 20 in all 100 rolls', function() {
      for (var i = 0; i < 100; i++) {
        expect(orzo.dice({min: -20, max: 20})).to.be.at.least(-20).and.at.most(20);
      }
    });
    it('should throw an error if max is less than min', function() {
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
    it('should throw an error if length is less than 1', function() {
      expect(function() { orzo.chars({len: -1}); }).to.throw(RangeError);
    });
    it('should throw an error if the supplied character set is anything but a string', function() {
      expect(function() { orzo.chars({chars: 1}); }).to.throw(TypeError);
    });
  });

  describe('using the uuidv4 feature', function() {
    it('should return a valid UUIDv4', function() {
      expect(orzo.uuid()).to.match(/[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/);
    });
  });
});
