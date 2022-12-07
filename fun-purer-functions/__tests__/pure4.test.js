
const { cloneObject } = require('../pure4');

describe('cloneObject', () => {
  test('pass an empty array, returns an empty array', () => {
    expect(cloneObject([])).toEqual([]);
  });
 
})