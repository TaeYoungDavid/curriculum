/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (n, b, c = b) => {
  if (n === 1) {
    return c;
  }
  return solution(n-1, b, c + b);
};

module.exports = {
  solution,
};
