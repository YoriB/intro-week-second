const {getTweetData} = require('../get-tweet-data/get-tweet-data');


describe('getTweetData', () =>{ 
test('returns an object when an empty string is passed through ', () => {
//arrange
 const input = "";
 const expected = "object";
 //act
 const result = getTweetData(input);
 //assert
 expect(typeof(result)).toBe(expected);
 });

test('returns an object with the length of the tweet  when a tweet is passed through ', () => {
  //arrange
 const input = "My awesome tweet";
 const expected = { tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 16 };
 //act
 const result = getTweetData(input);
 //assert
 expect(result).toEqual(expected);
 });

  const Tweet = getTweetData;

  test('returns the amount of hashtags and arrays, as well as an array with them ', () => {
  expect(Tweet("My awesome tweet to @northcoders")).toEqual({ tags: [], mentions: ['@northcoders'], tagCount: 0, mentionCount: 1, length: 32 });

  expect(Tweet("My awesome tweet about #coding")).toEqual({ tags: ['#coding'], mentions: [], tagCount: 1, mentionCount: 0, length: 30 });

  expect(Tweet("My awesome tweet about #coding to @northcoders")).toEqual({ tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 46 });
    
  expect(Tweet("I am #coding with @northcoders I love #coding and @northcoders")).toEqual({ tags: ['#coding','#coding' ], mentions: ['@northcoders', '@northcoders'], tagCount: 2, mentionCount: 2, length: 62 });

    
});
});