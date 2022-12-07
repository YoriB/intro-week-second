const {updateTasks} = require('../pure3');

describe('removeLastNumber', () => {
  test('pass an empty array, returns an empty array', () => {
    expect(updateTasks([])).toEqual([]);
});
test('pass an empty array with person object, and return an array with new task properties', () => {
    expect(updateTasks([{ name: 'Anat', tasks: ['feed Schnitzel', 'Go to pottery']}])).toEqual([{name: 'Anat',
    tasks: ['feed Schnitzel', 'Go to pottery', 'read books', 'tidy room']
    }])
  
  });
  
});