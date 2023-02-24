const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

const sspy = sinon.spy(Utils, 'calculateNumber');
describe('test the math used', () => {
  it('test', () => {
    sendPaymentRequestToApi(100, 20);
    expect(sspy.calledOnce).to.be.true;
    expect(sspy.calledWith('SUM', 100, 20)).to.be.true;
  });
  it('again', () => {
    sendPaymentRequestToApi(100, 20);
    expect(sspy.calledTwice).to.be.true;
    sspy.restore();
  });
});
