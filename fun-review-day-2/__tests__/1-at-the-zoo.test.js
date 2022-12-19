const {
  classifyAnimals,
  createZooDisplays,
  createAnimalTally
} = require('../sections/1-at-the-zoo.js');
const NcArk = require("../data/zoo-data")


describe('classifyAnimals', () => {
  test('pass an empty array and an empty string, return undefined', () => {
  //arrange
  const input1 = [];
  const input2 = ''
  const expected = (undefined);
  //act
  const result = classifyAnimals(input1, input2);
  //arrange
  expect(result).toEqual(expected);
  });


test('returns an unmutated array when an array and a string  is passed', () => {
//arrange
const input1 = ([{ name: 'koala bear', type: 'mammal' }])
const input2 = 'mammal'
const inputCopy = ([{ name: 'koala bear', type: 'mammal' }]);
//act
const result = classifyAnimals(input1, input2);
//arrange
expect(input1).toEqual(inputCopy);
});


test('pass an array of one animal and its type and return a particular type of animal', () => {
  //arrange
 const input1 = [
  { name: 'eagle', type: 'bird' }
];
const input2 = 'bird'
const expected = [{ name: 'eagle', type: 'bird' }];
  //act
const result = classifyAnimals(input1, input2);
  //arrange
expect(result).toEqual(expected);
  });

test('pass an array of animals and their type and return a particular type of animal', () => {
  //arrange
 const input1 = [
  { name: 'koala bear', type: 'mammal' },
  { name: 'python', type: 'reptile' },
  { name: 'otter', type: 'mammal' },
  { name: 'eagle', type: 'bird' }
];
const input2 = 'mammal'
const expected = [{ name: 'koala bear', type: 'mammal' }, { name: 'otter' , type: 'mammal' }];
  //act
const result = classifyAnimals(input1, input2);
  //arrange
expect(result).toEqual(expected);
  });
});


describe('createZooDisplays', () => {
test('pass an empty array, returns an empty array', () => {
    //arrange
  const input = ([]);
  const expected = ([]);
    //act
  const result = createZooDisplays(input);
    //arrange
  expect(result).toEqual(expected);
    });

test('returns an unmutated array when an array is passed', () => {
      //arrange
const input = ([
  {
    name: 'Montgomery',
    species: 'Southern African meerkat',
    nativeRegion: 'Botswana'
  }
]);
const inputCopy = ([
  {
    name: 'Montgomery',
    species: 'Southern African meerkat',
    nativeRegion: 'Botswana'
  }
]);
  //act
const result = createZooDisplays(input);
  //arrange
expect(input).toEqual(inputCopy);
});

test("pass an array of an animal and return a console.log with a statement formatted as `My name is <name>, and I am a <species> and I'm originally from <nativeRegion>` for the animal ", () => {
   //arrange
   const input = ([ {
    name: 'Montgomery',
    species: 'Southern African meerkat',
    nativeRegion: 'Botswana'
  }]);
  const expected = (["My name is Montgomery, and I am a Southern African meerkat and I'm originally from Botswana"]);
     //act
  const result = createZooDisplays(input);
     //arrange
  expect(result).toEqual(expected);
 });

 test("pass an array of animals and return a console.log with statements formatted as `My name is <name>, and I am a <species> and I'm originally from <nativeRegion>` for each animal ", () => {
  //arrange
  const input = ([
    {
      name: 'Montgomery',
      species: 'Southern African meerkat',
      nativeRegion: 'Botswana'
    },
    {
      name: 'Salome',
      species: 'Rattlesnake',
      nativeRegion: 'Argentina'
    }
  ]);
 const expected = (["My name is Montgomery, and I am a Southern African meerkat and I'm originally from Botswana",
 "My name is Salome, and I am a Rattlesnake and I'm originally from Argentina"])
    //act
 const result = createZooDisplays(input);
    //arrange
 expect(result).toEqual(expected);
});  
});

describe('createAnimalTally', () => {
test('pass an empty array, returns an empty object', () => {
    //arrange
  const input = ([]);
  const expected = ({});
    //act
const result = createAnimalTally(input);
    //arrange
expect(result).toEqual(expected);
});

test('returns an object with one item and 1 when an item is passed into the array', () => {
      //arrange
  const input = (['tiger']);
  const expected = ({ tiger: 1 })
        //act
const result = createAnimalTally(input);
        //arrange

expect(result).toEqual(expected);
});


test('returns an object with more than one of the same item and its total value when same items are passed into the array', () => {
  //arrange
const input = (['tiger', 'tiger', 'tiger']);
const expected = ({ tiger: 3 })
    //act
const result = createAnimalTally(input);
    //arrange
    
expect(result).toEqual(expected);
});

test('returns an object with different items and their respective total values when different items are passed into the array', () => {
  //arrange
const input = (['tiger', 'parrot', 'parrot', 'parrot', 'parrot']);
const expected = ({ tiger: 1, parrot: 4 })
    //act
const result = createAnimalTally(input);
    //arrange
    
expect(result).toEqual(expected);
});


test('return an object with keys for each same item and their respective total values when passed an array containing a mixture of same and different items', () => {
  //arrange
const input = (['tiger', 'parrot', 'parrot', 'parrot', 'parrot', 'rattlesnake', 'rattlesnake', 'rattlesnake', 'dolphin', 'dolphin']);
const expected = ({ tiger: 1, parrot: 4 , rattlesnake : 3, dolphin : 2})
    //act
const result = createAnimalTally(input);
    //arrange
    
expect(result).toEqual(expected);
});


test('return an object with keys for each same item and their respective total values when passed an array containing a mixture of same and different items from the zoo data file', () => {
  //arrange 
  const expected = ({ platypus: 69,
    lion: 85,
    seal: 80,
    eagle: 74,
    elephant: 67,
    parrot: 83,
    chimp: 106,
    snake: 83,
    tiger: 71,
    koala: 82 })
      //act
  const result = createAnimalTally(NcArk);
      //arrange
      
  expect(result).toEqual(expected);
  });
})
