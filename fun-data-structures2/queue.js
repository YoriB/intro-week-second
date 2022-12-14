function createQueue(value = 5) {
  // build your stack object inside this factory function
 
  const queue = {
  
    storage: {}, 
    queueLength : 5,   
    front : 0,
    back : 0,
    enQueue : enQueue,
    deQueue : deQueue,
   getQuantity : getQuantity,
    isEmpty : isEmpty,
    isFull : isFull,
     peek : peek
  };
 return queue;
}


function isFull() {
  if (this.back == this.queueLength){
     return true;
  }
  else
     return false;
}

function enQueue(item) { 
  if (this.getQuantity < this.queueLength)
  this.storage[this.back] = item;
  this.back++;
  }


  function deQueue(){
  const item = this.storage[this.front];
      delete this.storage[this.front];
      this.front++;
      return item;
    }

    function peek() {
      return this.storage[this.front];
    }

    function getQuantity() {
      return this.back - this.front;
    }

    function isEmpty() {
      return this.back == 0;
    }





  
 
module.exports = {createQueue}