const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const total = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${total}`);
    return total;  // Ensure the result can be used elsewhere if needed
}

module.exports = sendPaymentRequestToApi;
