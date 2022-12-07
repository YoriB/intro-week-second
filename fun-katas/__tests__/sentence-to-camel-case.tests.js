const {sentenceToCamelCase} = require('../sentence-to-camel-case/sentence-to-camel-case');

describe('sentenceToCamelCase', () => {
  test.only('returns a combined upper camel case sentence with the first letter of each word in capitals if a lower case sentence and true are passed.', () => {
    const Case = sentenceToCamelCase;
    console.log(Case);
    expect(Case("this sentence", true)).toEqual("ThisSentence");
    expect(Case("This Bigger strange Sentence", true)).toEqual("ThisBiggerStrangeSentence");
  })
test.only('returns a combined upper camel case sentence with the first letter of each word in capitals if a lower case sentence and true are passed.', () => {
  const Case = sentenceToCamelCase;
  console.log(Case);
  expect(Case("this sentence", false)).toEqual("thisSentence");

})
})
