/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */

const solution = (X, F) => {
  if(X===1) {
    return F()}
  return F()+solution(X-1,F);
};

module.exports = {
  solution,
};
