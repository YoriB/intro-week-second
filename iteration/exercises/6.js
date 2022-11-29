const { check, runTest } = require("../../test-api");

const alternatingChars = [];

// your loop here...
for (let i = 0; i < 8; i++ ){
if (i% 2 === 1) {
    alternatingChars.push('o')
}
else{
  alternatingChars.push('x')
}
}
console.log(alternatingChars)


runTest("can push alternating characters into an array", function () {
  check(alternatingChars).isEqualTo(["x", "o", "x", "o", "x", "o", "x", "o"]);
});
