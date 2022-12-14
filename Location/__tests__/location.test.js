const {updateRemoteStudents} = require('../location');

describe('updateRemoteStudents', () => {
  test('pass an empty array, returns an empty array', () => {
  //arrange
  const input = ([]);
  const expected = ([]);
  //act
  const result = updateRemoteStudents(input);
  //arrange
  expect(result).toEqual(expected);
  });

  test('returns an unmutated array when an array is passed', () => {
      //arrange
  const input = ([{ name: 'Tao', age: 47, location: 'manchester' }]);
  const inputCopy = ([{ name: 'Tao', age: 47, location: 'manchester' }]);
  //act
  const result = updateRemoteStudents(input);
  //arrange
  expect(input).toEqual(inputCopy);
  });

  test('return a *new array* of an object that has a missing a location now updated', () =>{
    //arrange
  const input = ([
     { name: 'Ramanujan', age: 22 }   
    ]);
  const expected = ([   
    { name: 'Ramanujan', age: 22, location: 'remote' } 
  ]);
  //act
  const result = updateRemoteStudents(input);
  //arrange
  expect(result).toEqual(expected);
  });

test('return a *new array*, where all objects that were missing a location have been updated', () =>{
  //arrange
const input = ([
  { name: 'Hypatia', age: 31, location: 'leeds' },
  { name: 'Ramanujan', age: 22 },
  { name: 'Tao', age: 47, location: 'manchester' }
  ]);
const expected = ([
  { name: 'Hypatia', age: 31, location: 'leeds' },
  { name: 'Ramanujan', age: 22, location: 'remote' },
  { name: 'Tao', age: 47, location: 'manchester' }
]);
//act
const result = updateRemoteStudents(input);
//arrange
expect(result).toEqual(expected);
});

})
