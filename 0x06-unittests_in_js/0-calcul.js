function calculateNumber(a, b = 0) {
  // Convert inputs to numbers
  const numA = Number(a);
  const numB = Number(b);

  // Validate that inputs are valid numbers
  if (Number.isNaN(numA) || Number.isNaN(numB)) {
    throw new TypeError('Parameters must be numbers');
  }

  // Return the sum of the rounded numbers
  return Math.round(numA) + Math.round(numB);
}

module.exports = calculateNumber;
