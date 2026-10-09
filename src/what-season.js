const { NotImplementedError } = require("../lib");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }

  try {
    const monthNumber = date.getMonth();

    switch (true) {
      case (monthNumber >= 0 && monthNumber <= 1) || monthNumber === 11:
        return "winter";
      case monthNumber >= 2 && monthNumber <= 4:
        return "spring";
      case monthNumber >= 5 && monthNumber <= 7:
        return "summer";
      case monthNumber >= 8 && monthNumber <= 10:
        return "autumn";
      default:
        break;
    }
  } catch (err) {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason,
};
