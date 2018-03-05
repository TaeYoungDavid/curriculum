/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */

const solution = (a, b, c = b()) => {
  if(a === 1) {
    return c;
  }
  return c+solution(a-1, b, c);
};

module.exports = {
  solution,
};
