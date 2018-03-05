/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a, b=a-1) => {
  if (b === 1) return true;
  if ((a%b) === 0) return false;
  return solution(a, b-1);
};

module.exports = {
  solution,
};
