const { check, runTest } = require("../../test-api");

function connectStrings(word1, word2) {
  // This function should take 2 strings and join them together with a space in between
  // return this newly created string
  return word1 + ' ' + word2;
}

runTest("connectStrings() can join 2 strings together", function () {
  check(connectStrings("hello", "world")).isEqualTo("hello world");
  check(connectStrings("paul", "rogerson")).isEqualTo("paul rogerson");
  check(connectStrings("blue", "sky")).isEqualTo("blue sky");
});
