const {createQueue} = require('../queue');

describe("createQueue", () => {
 
   test.only("testQueue storage returns an empty object.", () => {
  const testQueue = createQueue();
console.log(testQueue)
expect((testQueue.storage)).toEqual({});
});
})