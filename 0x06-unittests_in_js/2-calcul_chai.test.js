const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {

  describe('SUM operation', () => {
    it('should return 4 for inputs 1 and 3', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('should return 5 for inputs 1 and 3.7', () => {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });

    it('should return 6 for inputs 1.5 and 3.7', () => {
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });

    it('should return 0 for inputs -0.7 and 0.7', () => {
      expect(calculateNumber('SUM', -0.7, 0.7)).to.equal(0);
    });

    it('should return -2 for inputs -0.8 and -0.7', () => {
      expect(calculateNumber('SUM', -0.8, -0.7)).to.equal(-2);
    });

    it('should return 3 for inputs 1.4 and 2.4', () => {
      expect(calculateNumber('SUM', 1.4, 2.4)).to.equal(3);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should return -4 for inputs 1.4 and 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return -3 for inputs 1.2 and 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.2, 4.5)).to.equal(-3);
    });

    it('should return 1 for inputs 1.5 and 0.5', () => {
      expect(calculateNumber('SUBTRACT', 1.5, 0.5)).to.equal(1);
    });

    it('should return 2 for inputs 2 and 0', () => {
      expect(calculateNumber('SUBTRACT', 2, 0)).to.equal(2);
    });

    it('should return -9 for inputs -7 and 2.1', () => {
      expect(calculateNumber('SUBTRACT', -7, 2.1)).to.equal(-9);
    });
  });

  describe('DIVIDE operation', () => {
    it('should return 0.25 for inputs 1 and 4', () => {
      expect(calculateNumber('DIVIDE', 1, 4)).to.equal(0.25);
    });

    it('should return 0.25 for inputs 1 and 3.7', () => {
      expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
    });

    it('should return -1 for inputs -0.7 and 0.7', () => {
      expect(calculateNumber('DIVIDE', -0.7, 0.7)).to.equal(-1);
    });

    it('should return 1 for inputs -0.8 and -0.7', () => {
      expect(calculateNumber('DIVIDE', -0.8, -0.7)).to.equal(1);
    });

    it('should return "Error" for division by zero', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  describe('Error handling', () => {
    it('should throw error for invalid operation type', () => {
      expect(() => calculateNumber('INVALID', 1, 2)).to.throw(TypeError, 'Invalid operation type. Valid types are "SUM", "SUBTRACT", and "DIVIDE".');
    });

    it('should throw error for NaN inputs', () => {
      expect(() => calculateNumber('SUM', NaN, 3)).to.throw(TypeError, 'Arguments must be valid numbers');
    });
  });

});
