const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numStr = n.toString();
  let maxNum = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < numStr.length; i++) {
    const numArr = numStr.split('');
    numArr.splice(i, 1);
    const newNum = Number(numArr.join(''));
    if (newNum > maxNum) {
      maxNum = newNum;
    }
  }
  return maxNum;
}


module.exports = {
  deleteDigit
};
