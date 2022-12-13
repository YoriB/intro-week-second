function createQueue(value) {
  // build your stack object inside this factory function
 
  const queue = {
   storage: {},
   quantity : 0,
    maxSize : 5,
    front : 0,
    back : 0,
    enQueue : enQueue,
    deQueue : deQueue,
    // getQuantity :getQuantity,
    isEmpty : isEmpty,
    isFull : isFull,
     peek : peek
  };
 return queue;
}

function peek() {
 return queue.storage[front];
} 

function isFull() {
  if(back == maxSize - 1)
     return true;
  else
     return false;
}

  function isEmpty() {
  if(front < 0 || front > back) 
     return true;
  else
     return false;
}

function enQueue(element) {
  if (this.quantity < this.maxSize) {
    this.quantity++;
    this.front++
    this.back++
    this.storage[this.quantity] = element;
    //obj[key] = value
  }
}

function deQueue() {
  if (this.quantity === 0) {
    const removedFirstItem = this.storage[this.quantity];
    delete this.storage[this.quantity];
    this.quantity--;
    this.front--;
    this.back--;
    return removedFirstItem;
  }
}
// function enQueue(value)      
//    if(isFull())
//       return 0;
   
//    back = back + 1;
//    queue[back] = value;
   
//    return 1;


//    function deQueue() {
//     if(isEmpty())
//        return 0;
 
//     value = queue[front];
//     front = front + 1;
 
//     return value;
 
module.exports = {createQueue}