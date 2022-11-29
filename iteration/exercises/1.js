const { check, runTest } = require("../../test-api");

const items = [];

// your loop here...
for ( let i = 0; i <= 14; i += 2) {
  items.push(i)
 
}
console.log(items)


runTest("check the even numbers 0 to 14 are pushed into items", function () {
  check(items).isEqualTo([0, 2, 4, 6, 8, 10, 12, 14]);
});
