/**
 * @return {Function}
 */
function createHelloWorld() {
  return function hello() {
    return "Hello World";
  };
}
const c = createHelloWorld();


module.exports = { c };
