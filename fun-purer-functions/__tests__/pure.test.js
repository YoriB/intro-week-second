const { removeLastNumber } = require('../pure');

describe('removeLastNumber', () => {
  test('pass an empty array, returns an empty array', () => {
    //arrange
    const input = ([]);
    const expected = ([]);
    //act
    const result = removeLastNumber(input);
    //arrange
    expect(result).toEqual(expected);
  });
  test('pass an array of numbers, and return a new array of numbers with the last one removed', () => {
     //arrange
     const input = ([1, 2, 3, 4]);
     const expected = ([1, 2, 3]);
     //act
     const result = removeLastNumber(input);
     //arrange
     expect(result).toEqual(expected);
  });


  test('test an array has not been mutated', () => {
    const input = [];
  })
});
