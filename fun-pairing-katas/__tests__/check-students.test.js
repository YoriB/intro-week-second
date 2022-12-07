const checkStudents = require('../katas/check-students');

describe('checkStudents', () => {
  test('returns false when passed an empty array or an empty string', () => {
    //arrange
    const input = ([], '');
    const expected = undefined;
    //act
    const result = checkStudents(input);
    //assert
    expect(result).toEqual(expected);
  });

  test('returns true when passed an array with one object and a month value which matches the cohort month', () => {
    //arrange
    const input1 = [ {name: 'Ben', cohort: 'October' }]
    const input2 =  'October';
    const expected = true;
    //act
    const result = checkStudents(input1, input2);
    //assert
    expect(result).toEqual(expected);
  });
  test('returns false when passed an array with one object and a month value which does not match the cohort month', () => {
    //arrange
    const input1 = [{ name: 'Ben', cohort: 'October' }]
    const input2 = 'April';
    const expected = false;
    //act
    const result = checkStudents(input1, input2);
    //assert
    expect(result).toBe(expected);
  });

  test('returns true when passed an array with multiple objects that all have a matching month value with the cohort month', () => {
    //arrange
    const input1 = [{ name: 'Ben', cohort: 'October' },{ name: 'Matt', cohort: 'October' }]
    const input2 = 'October';
    const expected = true;
    //act
    const result = checkStudents(input1, input2);
    //assert
    expect(result).toEqual(expected);
  });
});

//   test( 'returns true when passed an an array with one object and i')
// })
