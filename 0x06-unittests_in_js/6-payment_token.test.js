const { expect } = require('chai');

const getPaymentTokenFromApi = require('./6-payment_token');

describe('test getPaymentTokenFromApi', () => {
  it('check return of function', (done) => {
    getPaymentTokenFromApi(true).then((res) => {
      expect(res).to.include({ data: 'Successful response from the API' });
      done();
    }).catch((err) => done(err));
  });
});
