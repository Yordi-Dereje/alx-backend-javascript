const Utils = require('./utils');

const sendPaymentRequestToApi = function (totalAmount, totalShipping) {
  const stotal = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${stotal}`);
};
module.exports = sendPaymentRequestToApi;
