const { createQueue } = require("../queue");

describe("createQueue", () => {
  test.only("testQueue storage returns an empty object.", () => {
    const testQueue = createQueue(5);
    console.log(testQueue);
    expect(typeof (testQueue.storage)).toEqual('object');
  });

  test.only("testQueue maxSize returns the maximum number 5.", () => {
    const testQueue = createQueue(5);
    console.log(testQueue);
    expect(testQueue.maxSize).toEqual(5);
  });

  test.only("testQueue the element in front of the queue.", () => {
    //arrange 
    const testQueue = createQueue(5);
    //act
  
    console.log(testQueue);
    //assert
    expect(testQueue.front).toEqual({1 : 'a'});
  });
});
