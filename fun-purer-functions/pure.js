//BEHAVIOR This function should as its only argument take:
// takes an empty array and returns an empty array
//This function should return a new array of numbers with the last one removed

function removeLastNumber(arr) {
  const removedElement = arr.pop();
  const newArr = [...arr];
  return newArr;
}

module.exports = { removeLastNumber };
