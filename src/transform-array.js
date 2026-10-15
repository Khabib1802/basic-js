const { NotImplementedError } = require("../lib");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const res = [];
  let skipNext = false;
  let isDeleted = false;

  arr.forEach((el, i) => {
    switch (el) {
      case "--discard-next":
        skipNext = true;
        isDeleted = true;
        return;

      case "--discard-prev":
        if (isDeleted) {
          isDeleted = false;
          return;
        }
        res.pop();
        return;

      case "--double-next":
        if (i === arr.length - 1) return;
        res.push(arr[i + 1]);
        return;

      case "--double-prev":
        if (i === 0) return;
        if (isDeleted) {
          isDeleted = false;
          return;
        }
        res.push(arr[i - 1]);
        return;

      default:
        if (skipNext) {
          skipNext = false;
          return;
        }
        if (isDeleted) {
          isDeleted = false;
          return;
        }
        res.push(el);
        return;
    }
  });

  return res;
}

module.exports = {
  transform,
};
