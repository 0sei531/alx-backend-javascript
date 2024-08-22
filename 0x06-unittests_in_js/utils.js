const Utils = {
  isNegZero(n) {
    const num = Number(n);
    return num === 0 && 1 / num === -Infinity;
  },
  calculateNumber(type, a, b) {
    const numA = Number(a);
    const numB = Number(b);

    if (Number.isNaN(numA) || Number.isNaN(numB))
      throw new TypeError('Parameters must be numbers or able to coerce to number');

    switch (type) {
      case 'SUM':
        return Math.round(numA) + Math.round(numB);
      case 'SUBTRACT':
        return Math.round(numA) - Math.round(numB);
      case 'DIVIDE':
        if (Math.round(numB) === 0) return 'ERROR';
        const quotient = Math.round(numA) / Math.round(numB);
        return this.isNegZero(quotient) ? 0 : quotient;
      default:
        throw new Error('Invalid operation type. Valid types are "SUM", "SUBTRACT", and "DIVIDE".');
    }
  }
};

module.exports = Utils;
