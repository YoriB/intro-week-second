const { raiseSalaries } = require('../pure2');

describe('raiseSalaries', () => {
  test('pass an empty array, returns an empty array', () => {
  //arrange
  const input = ([]);
  const expected = ([]);
  //act
  const result = raiseSalaries(input);
  //arrange
  expect(result).toEqual(expected);
  });
  
  test('does not mutate input array ', () => {
    //arrange
    const input = ([
      { name: 'Alice', salary: 3000 },
      { name: 'Bob', salary: 2000 },
      { name: 'Vel', salary: 4500 },
    ]);
    const inputCopy = ([
      { name: 'Alice', salary: 3000 },
      { name: 'Bob', salary: 2000 },
      { name: 'Vel', salary: 4500 },
    ]);
    //act
    const result = raiseSalaries(input);
    //arrange
    expect(input).toEqual(inputCopy);
    });
  
test('pass an array with an object, returns a new array with salary property increased by 10%', () => {
  
    //arrange
    const input = ([
      { name: 'Alice', salary: 3000 },
      { name: 'Bob', salary: 2000 },
      { name: 'Vel', salary: 4500 },
    ]);
    const expected = ([
      { name: 'Alice', salary: 3300 },
      { name: 'Bob', salary: 2200 },
      { name: 'Vel', salary: 4950 },
    ]);
    //act
    const result = raiseSalaries(input);
    //arrange
    expect(result).toEqual(expected);
    });
  });

    


