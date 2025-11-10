const { NotImplementedError } = require("../lib");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let encode = "";

  for (let i = 0; i < str.length; i += 1) {
    let letterCount = 1;

    while (str[i] === str[i + 1]) {
      letterCount += 1;
      i += 1;
    }

    encode += letterCount > 1 ? `${letterCount}${str[i]}` : `${str[i]}`;
  }

  return encode;
}

module.exports = {
  encodeLine,
};
