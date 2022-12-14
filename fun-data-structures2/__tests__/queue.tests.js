const { createQueue } = require("../queue");

describe("createQueue", () => {
  test.only("testQueue storage is a type of object.", () => {
    const testQueue = createQueue();
   
    expect(typeof testQueue.storage).toEqual('object');
  });

  test.only("testQueue initial front position returns 0 when the queue is empty.", () => {
    const testQueue = createQueue();
    
    expect(testQueue.front).toEqual(0);
  });

  test.only("testQueue initial back position returns 0 when the queue is empty.", () => {
    const testQueue = createQueue();
  
    expect(testQueue.back).toEqual(0);
  });

  test.only("returns a number for the maximum number of items in the queue.", () => {
    const testQueue = createQueue();
  expect(testQueue.queueLength).toEqual(5);
  });

  test.only("enqueue function returns adds items to the queue storage in order from thr front to the back.", () => {
    const testQueue = createQueue();
    testQueue.enQueue(1);
    testQueue.enQueue(2);
    testQueue.enQueue(3);
    testQueue.enQueue(4);
    testQueue.enQueue(5);
   console.log(testQueue.storage)
  expect(testQueue.storage).toEqual({ '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 })
  })  
 

  test.only("dequeue function returns the queue with item in front removed.", () => {
    const testQueue = createQueue();
    testQueue.enQueue("a");
    testQueue.enQueue("b");
    testQueue.enQueue("c");
    testQueue.deQueue();
 
    console.log(testQueue.storage );
    expect(testQueue.storage).toEqual({ '1': "b", '2': 'c'});
  });

  test.only("peek function returns the item at the front.", () => {
    const testQueue = createQueue();  
    testQueue.enQueue(2);
    testQueue.enQueue(3);
    testQueue.enQueue(4);
    testQueue.enQueue(5);
   console.log(testQueue.storage);

   console.log(testQueue.peek());
  expect(testQueue.peek()).toEqual(2)
  }) 

  test.only("getQuantity function returns the number of items in the queue at an instance.", () => {
    const testQueue = createQueue();
    testQueue.enQueue(1);
    testQueue.enQueue(2);
    testQueue.enQueue(3);
    testQueue.enQueue(4);
    
   console.log(testQueue.storage)
   console.log(testQueue.getQuantity())
  expect(testQueue.getQuantity()).toEqual(4)
  })

   test.only("isEmpty function returns true if there are no items in the queue.", () => {
    const testQueue = createQueue();
   
   console.log(testQueue.storage)
   console.log(testQueue.getQuantity())
   console.log(testQueue.isEmpty())
  expect(testQueue.isEmpty()).toEqual(true)
  }) 

  test.only("isEmpty function returns false if there are one or more items in the queue.", () => {
    const testQueue = createQueue();
    testQueue.enQueue(1);
    testQueue.enQueue(2);
    testQueue.enQueue(3);
    testQueue.enQueue(4);
   
   console.log(testQueue.storage)
   console.log(testQueue.getQuantity())
   console.log(testQueue.isEmpty())
  expect(testQueue.isEmpty()).toEqual(false)
  }) 

  test.only("isFull function returns true if the queue is full.", () => {
    const testQueue = createQueue();
    testQueue.enQueue(1);
    testQueue.enQueue(2);
    testQueue.enQueue(3);
    testQueue.enQueue(4);
    testQueue.enQueue(5);
    
   console.log(testQueue.storage)
   console.log(testQueue.getQuantity())
  expect(testQueue.isFull()).toEqual(true)

  })

  test.only("isFull function returns false if the queue is not full.", () => {
    const testQueue = createQueue();
    testQueue.enQueue(1);
    testQueue.enQueue(2);
    testQueue.enQueue(3);
    
    console.log(testQueue);
   console.log(testQueue.storage)
   console.log(testQueue.getQuantity())
   console.log(testQueue.isFull())
  expect(testQueue.isFull()).toEqual(false)

  })

  test.only("isFull function returns false if the queue has exceeded its capacity.", () => {
    const testQueue = createQueue();
    testQueue.enQueue(1);
    testQueue.enQueue(2);
    testQueue.enQueue(3);
    testQueue.enQueue(4);
    testQueue.enQueue(5);
    testQueue.enQueue(6);
    
    console.log(testQueue)
   console.log(testQueue.storage)
   console.log(testQueue.getQuantity())
   console.log(testQueue.isFull())
   console.log(testQueue.queueLength);
  expect(testQueue.isFull()).toEqual(false)

  })

});
