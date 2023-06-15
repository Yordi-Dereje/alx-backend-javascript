const { expect } = require('chai');
const request = require('request');

describe('Integration Testing', () => {
  describe('Index Page', () => {
    it('try root', (done) => {
      const options = {
        url: 'http://localhost:7865',
        method: 'GET',
      };
      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('Cart page', () => {
    it('try cart 1', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/1',
        method: 'GET',
      };
      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 1');
        done();
      });
    });
  });

  describe('Fail', () => {
    it('404 Message', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/abc',
        method: 'GET',
      };
      request(options, (error, response) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
});
