const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

const sspy = sinon.spy(console, 'log');
const sstub = sinon.stub(Utils, 'calculateNumber').returns(10);

describe('test stub', () => {
  it('test', () => {
    sendPaymentRequestToApi(100, 20);

    expect(sstub.calledOnce).to.be.true;
    expect(sstub.calledWith('SUM', 100, 20)).to.be.true;
    expect(sstub.alwaysReturned(10)).to.be.true;
    expect(sspy.calledWith('The total is: 10')).to.be.true;

    sspy.restore();
    sstub.restore();
  });
});
