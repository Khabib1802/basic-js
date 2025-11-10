const { NotImplementedError } = require("../lib");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainsObj = {};
  for (const domain of domains) {
    const domainParts = domain.split(".").reverse();
    let domainString = "";

    for (const domainPart of domainParts) {
      domainString += `.${domainPart}`;
      if (domainsObj[domainString]) {
        domainsObj[domainString] += 1;
      } else {
        domainsObj[domainString] = 1;
      }
    }
  }
  return domainsObj;
}

module.exports = {
  getDNSStats,
};
