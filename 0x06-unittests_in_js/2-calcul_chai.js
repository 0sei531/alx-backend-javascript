function calculateNumber(type, a, b) {
  // Ensure valid types and numbers
  const validTypes = ['SUM', 'SUBTRACT', 'DIVIDE'];
  
  if (!validTypes.includes(type)) {
    throw new TypeError('Invalid operation type. Valid types are "SUM", "SUBTRACT", and "DIVIDE".');
  }

  const numA = Number(a);
  const numB = Number(b);

  // Ensure valid numbers
  if (Number.isNaN(numA) || Number.isNaN(numB)) {
    throw new TypeError('Arguments must be valid numbers');
  }

  // Round the numbers
  const n1 = Math.round(numA);
  const n2 = Math.round(numB);

  // Perform operations based on type
  if (type === 'SUM') {
    return n1 + n2;
  } else if (type === 'SUBTRACT') {
    return n1 - n2;
  } else if (type === 'DIVIDE') {
    if (n2 === 0) {
      return 'Error'; // Handle division by zero
    }
    return n1 / n2;
  }
}

module.exports = calculateNumber;
