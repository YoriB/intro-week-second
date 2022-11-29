const { check, runTest } = require("../../test-api");

function capitaliseString(word) {
  // return the passed string as upper case
  return word.toUpperCase()
}

runTest("capitaliseString() can capitalise a single word", function () {
  check(capitaliseString("bang")).isEqualTo("BANG");
  check(capitaliseString("apple")).isEqualTo("APPLE");
  check(capitaliseString("abc")).isEqualTo("ABC");
});
