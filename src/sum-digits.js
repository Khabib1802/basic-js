const { NotImplementedError } = require("../lib");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum;
  if (n.toString().length > 1) {
    let arr = n.toString().split("");
    sum = arr.reduce((acc, val) => +acc + +val, 0);
    if (sum.toString().length > 1) {
      console.log(3);
      let num = sum;
      return getSumOfDigits(num);
    }
  }

  return sum || n;
}

module.exports = {
  getSumOfDigits,
};
