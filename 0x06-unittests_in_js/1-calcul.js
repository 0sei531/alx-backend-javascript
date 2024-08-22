const SUM = 'SUM';
const SUBTRACT = 'SUBTRACT';
const DIVIDE = 'DIVIDE';

function isNegZero(n) {
  n = Number(n);
  return n === 0 && 1 / n === -Infinity;
}

module.exports = function calculateNumber(type, a, b = 0) {
  let aNum = Number(a);
  let bNum = Number(b);

  if (Number.isNaN(aNum) || Number.isNaN(bNum)) {
    throw new TypeError('Parameters must be numbers or coercible to numbers');
  }

  // Round the numbers before performing the operation
  aNum = Math.round(aNum);
  bNum = Math.round(bNum);

  switch (type) {
    case SUM:
      return aNum + bNum;

    case SUBTRACT:
      return aNum - bNum;

    case DIVIDE:
      if (bNum === 0) return 'ERROR'; // Handle division by zero
      const quotient = aNum / bNum;
      return isNegZero(quotient) ? 0 : quotient; // Handle negative zero case

    default:
      throw new Error('Invalid operation type. Valid types are "SUM", "SUBTRACT", and "DIVIDE".');
  }
};
