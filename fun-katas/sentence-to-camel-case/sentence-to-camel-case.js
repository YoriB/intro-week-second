// Please do not change the name of this function
// Your code here
  function sentenceToCamelCase(str, boolean){

  const arr = str.split(" ");
    
  //loop through each element of the array and capitalize the first letter.
  for (let i = 0; i < arr.length; i++) {
 arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    
}
const str2 = arr.join("");
 if (boolean === false) {
  return str2.charAt(0).toLowerCase() + str2.slice(1);
    }
else {
return str2;
}
}

module.exports = {sentenceToCamelCase};
