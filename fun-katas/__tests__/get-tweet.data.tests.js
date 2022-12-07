const {getTweetData} = require('../get-tweet-data/get-tweet-data');


describe('getTweetData', () => {
const Tweet = getTweetData;
 
test('returns an object when an empty string is passed through ', () => {
    expect(typeof Tweet(" ")).toBe("object");
});

test('returns the length, the amount of hashtags and arrays, as well as an array with them ', () => {
  expect(Tweet("My awesome tweet")).toEqual({ tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 16 });

  expect(Tweet("My awesome tweet to @northcoders")).toEqual({ tags: [], mentions: ['@northcoders'], tagCount: 0, mentionCount: 1, length: 32 });

  expect(Tweet("My awesome tweet about #coding")).toEqual({ tags: ['#coding'], mentions: [], tagCount: 1, mentionCount: 0, length: 30 });

  expect(Tweet("My awesome tweet about #coding to @northcoders")).toEqual({ tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 46 });
    
  expect(Tweet("I am #coding with @northcoders I love #coding and @northcoders")).toEqual({ tags: ['#coding','#coding' ], mentions: ['@northcoders', '@northcoders'], tagCount: 2, mentionCount: 2, length: 62 });

    
});
})