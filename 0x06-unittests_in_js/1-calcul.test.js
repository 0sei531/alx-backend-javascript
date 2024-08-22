const assert = require('assert');
const calculateNumber = require('./1-calcul');

const SUM = 'SUM';
const SUBTRACT = 'SUBTRACT';
const DIVIDE = 'DIVIDE';
const INVALID = 'INVALID';

describe('calculateNumber', () => {
  
  describe('type SUM', () => {
    it('should return sum of rounded integers and floats', () => {
      // Integer sum tests
      assert.strictEqual(calculateNumber(SUM, 1, 3), 4);
      assert.strictEqual(calculateNumber(SUM, 2, -2), 0);
      assert.strictEqual(calculateNumber(SUM, 1, -4), -3);
      
      // Float sum tests
      assert.strictEqual(calculateNumber(SUM, 1.4, 5), 6);
      assert.strictEqual(calculateNumber(SUM, 1, 4.5), 6);
      assert.strictEqual(calculateNumber(SUM, 1.4, 4.5), 6);
      assert.strictEqual(calculateNumber(SUM, 7.8, -8.2), 0);
      assert.strictEqual(calculateNumber(SUM, 3.1, -5.2), -2);
      
      // Single number rounding
      assert.strictEqual(calculateNumber(SUM, 8.7), 9);
      assert.strictEqual(calculateNumber(SUM, 0.3), 0);
      assert.strictEqual(calculateNumber(SUM, -8.7), -9);
    });
  });

  describe('type SUBTRACT', () => {
    it('should return difference of rounded integers and floats', () => {
      // Integer subtraction tests
      assert.strictEqual(calculateNumber(SUBTRACT, 5, 1), 4);
      assert.strictEqual(calculateNumber(SUBTRACT, 1, 5), -4);
      
      // Float subtraction tests
      assert.strictEqual(calculateNumber(SUBTRACT, 8.6, 4.1), 5);
      assert.strictEqual(calculateNumber(SUBTRACT, 10.2, 9.8), 0);
      assert.strictEqual(calculateNumber(SUBTRACT, 8.2, 9.2), -1);

      // Single number rounding
      assert.strictEqual(calculateNumber(SUBTRACT, 8.7), 9);
      assert.strictEqual(calculateNumber(SUBTRACT, 0.3), 0);
      assert.strictEqual(calculateNumber(SUBTRACT, -8.7), -9);
    });
  });

  describe('type DIVIDE', () => {
    it('should return quotient of rounded integers and floats', () => {
      // Integer division tests
      assert.strictEqual(calculateNumber(DIVIDE, 9, 4), 2.25);
      assert.strictEqual(calculateNumber(DIVIDE, -9, 4), -2.25);
      
      // Float division tests
      assert.strictEqual(calculateNumber(DIVIDE, 1.6, 5.2), 0.4);
      assert.strictEqual(calculateNumber(DIVIDE, -1.6, 5.2), -0.4);
      assert.strictEqual(calculateNumber(DIVIDE, -2, 5.2), -0.4);
      assert.strictEqual(calculateNumber(DIVIDE, -1.6, -5.2), 0.4);

      // Handling 0 in division
      assert.strictEqual(calculateNumber(DIVIDE, 0.3, 3.6), 0);
      assert.strictEqual(calculateNumber(DIVIDE, 8.4, 0), 'ERROR');
      assert.strictEqual(calculateNumber(DIVIDE, 8.4, 0.4), 'ERROR');
    });
  });

  describe('invalid cases', () => {
    it('should throw error for invalid operation types', () => {
      assert.throws(() => calculateNumber(INVALID, 5.7, 4.6), {
        message:
          'Invalid operation type. Valid types are "SUM", "SUBTRACT", and "DIVIDE".'
      });
      assert.throws(() => calculateNumber('INVALID', 2, 3), TypeError);
    });

    it('should throw error if NaN is passed', () => {
      assert.throws(() => calculateNumber(SUM, NaN, 3), TypeError);
      assert.throws(() => calculateNumber(DIVIDE, 2, NaN), TypeError);
    });
  });
});
