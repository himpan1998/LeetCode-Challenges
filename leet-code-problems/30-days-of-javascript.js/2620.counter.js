/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter = function (n) {
  function counter() {
    let count = n;
    n += 1;
    return count;
  }
  return counter;
};

module.exports = {createCounter};
