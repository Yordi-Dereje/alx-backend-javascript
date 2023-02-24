const assert = require('assert');
const calcul = require('./0-calcul');

describe('calculateNumber', () => {
  describe('ceilings', () => {
    it('test both ceilings ', () => {
      assert.equal(6, calcul(1.7, 3.6));
    });
    it('test one ceiling ', () => {
      assert.equal(5, calcul(1.2, 3.6));
    });
  });
  describe('floors', () => {
    it('test both floors ', () => {
      assert.equal(4, calcul(1.1, 3.4));
    });
    it('test one floor ', () => {
      assert.equal(5, calcul(1.3, 3.5));
    });
  });
  describe('negatives', () => {
    it('ceilings ', () => {
      assert.equal(-6, calcul(-1.7, -3.6));
    });
    it('floors ', () => {
      assert.equal(-4, calcul(-1.3, -3.2));
    });
  });
});
