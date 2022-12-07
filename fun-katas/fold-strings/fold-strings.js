// Please do not change the name of this function
function foldString (string) {
  // Your code here
let arr = string.split(" "); //splits into two or more words inside an array
    let holder = []; //word holder
    let word; //combined word
    let fold1; // 1st half of the word
    let fold2;// 2nd half of the word
    let len; // length of each word
for (let i = 0; i < arr.length; i++) { //loops through each word
      len = arr[i].length;
    if (len % 2 === 0) { // if statement for even numbered words
   fold1 = arr[i].slice(0, len/2).split("").reverse().join(""); //slices from 1st letter to middle, splits into an array of letters, reverses, joins
  fold2 = arr[i].slice(len/2, len).split("").reverse().join("");//same as above from middle to last letter
  word = fold1 + fold2; // combines both folds
  holder.push(word);// move to place holder
      } 
   else if (len % 2 !== 0) { // same as above for odd numbered words
  fold1= arr[i].slice(0, len/2).split("").reverse().join("");
  fold2 = arr[i].slice(len/2 + 1, len).split("").reverse().join("");
 word = fold1 + arr[i].charAt(len/2) + fold2;// combines middle, and folds either side
holder.push(word);//push into holder
      } 
    }
return holder.join(" ");
  }
  

module.exports = {foldString}
