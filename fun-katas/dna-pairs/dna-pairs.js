// Please do not change the name of this function
function dnaPairs(dna) {
  let pairs = { 'G': 'C', 'C': 'G', 'A': 'T', 'T': 'A' };


return dna.split('').map((char) => [char, pairs[char]]);
  };

module.exports = {dnaPairs};
//
