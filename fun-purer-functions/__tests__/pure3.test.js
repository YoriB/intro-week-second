const {updateTasks } = require('../pure3');

describe('updateTasks', () => {
  test('passes an empty array and two empty strings, returns an empty array', () => {
  //arrange
  const input1 = ({});
  const input2 =('')
  const input3 =('')
  const expected = ({});
  //act
  const result = updateTasks(input1, input2, input3);
  //arrange
  expect(result).toEqual(expected);
  });
  
  test('passes an array with the tasks property from the input not mutated ', () => {
    //arrange
    const input1 = { name: 'Anat', tasks: ['feed Schnitzel', 'Go to pottery'] };
    const input2 =('');
    const input3 =('');
    const inputCopy = ({ name: 'Anat', tasks: ['feed Schnitzel', 'Go to pottery'] });
    //act
    const result = updateTasks(input1, input2, input3);
    //arrange
    expect(input1).toEqual(inputCopy);
    });
  
  test('should return a new person object with a new tasks properties.', () => {
      //arrange
      const input1 = { name: 'Anat', tasks: ['feed Schnitzel', 'Go to pottery'] };
    const input2 =('read books')
    const input3 =('tidy room')
    const expected = {name: 'Anat',
    tasks: ['feed Schnitzel', 'Go to pottery', 'read books', 'tidy room']
  };    
    //act
      const result = updateTasks(input1, input2, input3);
      //arrange
      expect(result).toEqual(expected);
      });
  })