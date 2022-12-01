function printHello() {
  console.log('Hello');
}

function add() {}

const combined = { printHello: printHello, add: add }
module.exports = { combined};
