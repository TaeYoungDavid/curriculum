/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b, c=a) => {
  if (c<=1) {
    return c;
  }
  if ((a%c)===0) {
    if ((b%c)===0) {
      return c
    }
    return solution(a,b,c-1)
  }
  return solution(a,b,c-1)

};

module.exports = {
  solution,
};
