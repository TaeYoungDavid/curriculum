/**
 * Find next multiple of 7: returns the next number that is divisible by 7
 * @param {number} a
 * @returns {number}
 */

const solution = (a, b = (a%7)) => {
  if (b===0) {
    return a+7;
  }
  return a+(7-b)
};

module.exports = {
  solution,
};
