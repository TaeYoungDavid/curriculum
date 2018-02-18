/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (n, b) => {
  if (n===1) {
    return b;
  }
  return b+solution(n-1, b);
};

module.exports = {
  solution,
};
