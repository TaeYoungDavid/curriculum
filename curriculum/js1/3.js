/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (x) => {
  if(x<1) {
    return "";}
  if(x===1){
    return "hello";}
  return "hello"+solution(x-1);
};

module.exports = {
  solution,
};
