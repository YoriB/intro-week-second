const { createQueue } = require("../queue");

describe("createQueue", () => {
  test.only("testQueue storage is a type of object.", () => {
    const testQueue = createQueue(5);
    console.log(testQueue);
    expect(typeof testQueue.storage).toEqual('object');
  });

  test.only("testQueue quantity returns 0.", () => {
    const testQueue = createQueue(5);
    console.log(testQueue);
    expect(testQueue.quantity).toEqual(0);
  });

  test.only("testQueue maxSize returns the maximum number 5.", () => {
    const testQueue = createQueue(5);
    console.log(testQueue);
    expect(testQueue.maxSize).toEqual(5);
  });


  test.only("front is the first item that returns 0.", () => {
    const testQueue = createQueue();
    testQueue.front;
   
    console.log(testQueue );
    expect(testQueue.front).toEqual(0);
  });



  test.only("back is the last item on the queue.", () => {
    const testQueue = createQueue();
    testQueue.back;
   
    console.log(testQueue );
    expect(testQueue.back).toEqual(0);
  });


  test("front function returns adds an item to the front of the queue storage.", () => {
    const testQueue = createQueue();
    testQueue.enQueue("a");
   
    console.log(testQueue);
    expect(testQueue.storage).toEqual({ 1: "a"});
  });

  test.only("enqueue function returns adds items to the front of the queue storage.", () => {
    const testQueue = createQueue();
    testQueue.enQueue("a");
    testQueue.enQueue("b");
    testQueue.enQueue("c");
    testQueue.enQueue("d");
    testQueue.enQueue("e");
    console.log(testQueue );
    expect(testQueue.storage).toEqual({ 1: "a", 2: "b", 3: "c", 4: "d", 5: "e"});
  });

  test.only("dequeue function returns the queue with item in front removed.", () => {
    const testQueue = createQueue();
    testQueue.enQueue("a");
    testQueue.enQueue("b");
    testQueue.enQueue("c");
    testQueue.deQueue();
 
    console.log(testQueue );
    expect(testQueue.storage).toEqual({ 2: "b", 3: c});
  });

});
