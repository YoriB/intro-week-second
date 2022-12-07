const {foldString} = require('../fold-strings/fold-strings');

describe('foldString', () => {
  test('returns an empty string when empty string is passed.', () => {
    const String = foldString;
    console.log(String);
    expect(String(" ")).toEqual(" ");
  })

test('returns a string folded inside out from the middle when an even string is passed.', () => {
const String = foldString;
console.log(String);
expect(String("code")).toEqual("oced");
expect(String("abcdef")).toEqual("cbafed");
expect(String("javascript")).toEqual("savajtpirc");
})

test('returns a string folded inside out from the middle when an odd string is passed.', () => {
  const String = foldString;
  console.log(String);
expect(String("debut")).toEqual("edbtu");
expect(String("Northcoders")).toEqual('htroNcsredo');
 })

test('returns a string folded inside out from the middle when a sentence with spaces is passed.', () => {
  const String = foldString;
  console.log(String);expect(String("javascript is cool")).toEqual('savajtpirc is oclo');
})
})