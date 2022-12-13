function createQueue(value) {
  // build your stack object inside this factory function
 
  const queue = {
   storage: {1 : 'a', 2 : 'b', 3 : 'c', 4 : 'd', 5 : 'e'},
    maxSize : 5,
    front : queue.storage[0]
    //back : storage[storage.length - 1],
    // enqueue : enqueue,
    // deQueue : dequeue,
    // getQuantity :getQuantity,
    // isEmpty : isEmpty,
    // isFull : isFull,
    // peek : peek
  };
 

  return queue;


}




module.exports = {createQueue}