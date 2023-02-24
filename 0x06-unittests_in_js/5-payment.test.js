const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

let sspy;
describe('test console', () => {
  beforeEach(() => {
    sspy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    sspy.restore();
  });

  it('test 1', () => {
    sendPaymentRequestToApi(100, 20);
    expect(sspy.calledOnce).to.be.true;
    expect(sspy.calledWith('The total is: 120')).to.be.true;
  });
  it('again', () => {
    sendPaymentRequestToApi(10, 10);
    expect(sspy.calledOnce).to.be.true;
    expect(sspy.calledWith('The total is: 20')).to.be.true;
  });
});
