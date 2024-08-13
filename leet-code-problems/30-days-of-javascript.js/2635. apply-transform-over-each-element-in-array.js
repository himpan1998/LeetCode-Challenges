/**
 * @param {number<Array>} arr
 * @param {Function} fn
 * @return {number<Array>}
 */

function map(arr, fn) {
  newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray[i] = fn(arr[i], i);
  }
  return newArray;
}

function map(arr, fn) {
  newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i], i));
  }
  return newArray;
}

// with array map:
function map(arr, fn) {
  return arr.map((val, i) => fn(val, i));
}
const arr = [1, 2, 3, 4];
const fn = (val, i) => val * i;
console.log(map(arr, fn));
// Output: [0, 2, 6, 12]

module.exports = { map };
