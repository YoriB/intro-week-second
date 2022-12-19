function classifyAnimals(array, types) {
if (array.length === 0 || types === ''){
  return undefined
}

else {
  return array.filter((animal) => animal.type === types);
}


}


//behaviours expected 
//return a pure function
//return an unmutated array 
//return a console log identifying name, species and navigation of one animal
//return a console log identifying name, species and navigation of more than one animal.
function createZooDisplays(animals) {

return animals.map((animals) => {
    return `My name is ${animals.name}, and I am a ${animals.species} and I'm originally from ${animals.nativeRegion}`;
  });
}

//behaviours expected 
//return a pure function
//return an unmutated array 
//return a one animal
//return multiple counts of animals of the same type
//return count of one count each of a different type 
//return multiple counts of different types

function createAnimalTally(arr) {
  const counts = {};
  for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  console.log(counts)
  return counts;

}



module.exports = { classifyAnimals, createZooDisplays, createAnimalTally };
