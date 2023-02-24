const assert = require('assert');
const calcul = require('./1-calcul');

describe('test calculateNumber', () => {
  describe('test sum', () => {
    it('test 1', () => {
      assert.equal(calcul('SUM', 1.2, 3.7), 5);
    });
  });
  describe('test sub', () => {
    it('test', () => {
      assert.equal(calcul('SUBTRACT', 5.6, 3.2), 3);
    });
  });
  describe('test div', () => {
    it('test 1', () => {
      assert.equal(calcul('DIVIDE', 12.1, 4.2), 3);
    });
    it('test 2', () => {
      assert.equal(calcul('DIVIDE', 1.2, 0.2), 'Error');
    });
  });
});
