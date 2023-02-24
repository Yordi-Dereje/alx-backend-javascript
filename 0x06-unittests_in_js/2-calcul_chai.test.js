const { expect } = require('chai');
const calcul = require('./2-calcul_chai');

describe('test sum with chai', () => {
  it('test result', () => {
    expect(calcul('SUM', 2, 5)).to.equal(7);
  });
  it('test type', () => {
    expect(calcul('SUM', 2, 5)).to.be.a('number');
  });
});
describe('test subtract with chai', () => {
  it('test result', () => {
    expect(calcul('SUBTRACT', 22.1, 7.6)).to.equal(14);
  });
});
describe('test divide with chai', () => {
  it('test result', () => {
    expect(calcul('DIVIDE', 2.2, 5)).to.equal(0.4);
  });
  it('test result', () => {
    expect(calcul('DIVIDE', 2.2, 0)).to.equal('Error');
  });
});
