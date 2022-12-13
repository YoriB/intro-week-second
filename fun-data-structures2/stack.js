function createStack(maxSize) {
  // build your stack object inside this factory function
  // this.quantity = 0;

  // this.storage ={};

  const stack = {
    quantity: 0,
    storage: {},
    maxSize: maxSize || 5,
    push: push,
    pop: pop,
    peek: peek,
    isEmpty: isEmpty,
    isFull: isFull,
  };

  return stack;
}

//functions here

function push(fruit) {
  if (this.quantity < this.maxSize) {
    this.quantity++;
    this.storage[this.quantity] = fruit;
    //obj[key] = value
  }
}

function pop() {
  if (this.quantity > 0) {
    const removedFruit = this.storage[this.quantity];
    delete this.storage[this.quantity];
    this.quantity--;
    return removedFruit;
  }
}

function peek() {
  return this.storage[this.quantity];
}

function isEmpty() {
  if (this.quantity === 0) {
    return true;
  }
}

function isFull() {
  if (this.quantity <= 5) {
    return true;
  }
  return false;
}
function maxSize() {
  return this.maxSize;
}

module.exports = createStack;
