const { NotImplementedError } = require("../lib");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;

  let additionString = addition + additionSeparator;
  additionString = additionString.repeat(additionRepeatTimes);
  let lastAdditionSeparator = additionString.lastIndexOf(additionSeparator);
  additionString = additionString.slice(0, lastAdditionSeparator);

  let mainString = str + additionString + separator;
  mainString = mainString.repeat(repeatTimes);
  let lastSeparator = mainString.lastIndexOf(separator);
  mainString = mainString.slice(0, lastSeparator);

  return mainString;
}

module.exports = {
  repeater,
};
