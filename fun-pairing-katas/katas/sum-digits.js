/*
  The function sumDigits should take a number (not necessarily an integer) and return the total of its digits.
  E.g.
  sumDigits(99)
    --> 18
  sumDigits(10.5)
    --> 6
*/

const { number } = require("yargs");

function sumDigits(num) {
  let sum = num.toString().split("").map(Number).reduce(function(a,b){
    return a+b;
  }, 0);

  return sum

  
}

module.exports = sumDigits;
