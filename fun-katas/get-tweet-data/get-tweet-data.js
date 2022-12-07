// Please do not change the name of this function
function getTweetData (tweet) {
  // Your code here
const newObj = {
        tags: [],
        mentions: [],
        tagCount: 0,
        mentionCount: 0,
        length: 0,
      };
    
      
      newObj.length = tweet.length;
    
      const findMention = tweet.split("@").length - 1;
     newObj.mentionCount = findMention;
      
      const atRegex = tweet.match(/@(.[a-z0-9]+)/g);
     newObj.mentions = atRegex === null ? [] : atRegex;
    
      const findHashtag = tweet.split("#").length - 1;
      newObj.tagCount = findHashtag;
      
      const regex = tweet.match(/#(.[a-z0-9]+)/g);
      newObj.tags = regex === null ? [] : regex;
    
    return newObj;
    }

module.exports = {getTweetData};
