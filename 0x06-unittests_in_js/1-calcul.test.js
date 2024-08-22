const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber() tests", function () {
    it("should return the correct sum of rounded numbers", function () {
        assert.strictEqual(calculateNumber(1, 3), 4);  // Test for whole numbers
        assert.strictEqual(calculateNumber(1, 3.7), 5); // Test for decimal rounding
        assert.strictEqual(calculateNumber(1.2, 3.7), 5); // Test for both numbers with decimals
        assert.strictEqual(calculateNumber(1.5, 3.7), 6); // Test for rounding midpoint cases
        assert.strictEqual(calculateNumber(0.1, 0.3), 0); // Test for small decimals rounding down to 0
        assert.strictEqual(calculateNumber(-0.7, 0.7), 0); // Test for negatives and positives canceling out
        assert.strictEqual(calculateNumber(-0.8, -0.7), -2); // Test for two negative numbers rounding
    });

    it("should handle negative numbers correctly", function () {
        assert.strictEqual(calculateNumber(-1, -3), -4);  // Test for negative integers
        assert.strictEqual(calculateNumber(-1.4, -3.6), -5); // Test for negative decimals rounding
        assert.strictEqual(calculateNumber(8.4, -3), 5); // Test for positive and negative combinations
        assert.strictEqual(calculateNumber(-10.9, -3.6), -15); // Test for larger negative decimal numbers
    });

    it("should handle edge cases with zero", function () {
        assert.strictEqual(calculateNumber(0, 0), 0); // Test for two zeros
        assert.strictEqual(calculateNumber(2, 0), 2); // Test for number with zero
        assert.strictEqual(calculateNumber(0, -1), -1); // Test for zero and a negative
    });

    it("should throw an error when non-numeric inputs are passed", function () {
        assert.throws(() => calculateNumber(NaN, 3), TypeError); // Test for NaN input
        assert.throws(() => calculateNumber("foo", 3), TypeError); // Test for string input
        assert.throws(() => calculateNumber(undefined, 3), TypeError); // Test for undefined input
    });
});
