const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const freq1 = getCharFrequency(s1);
  const freq2 = getCharFrequency(s2);
  let count = 0;
  for (const char in freq1) {
    if (char in freq2) {
      count += Math.min(freq1[char], freq2[char]);
    }
  }
  return count;
}

function getCharFrequency(str) {
  const freq = {};
  for (const char of str) {
    freq[char] = freq[char] + 1 || 1;
  }
  return freq;
}


module.exports = {
  getCommonCharacterCount
};
