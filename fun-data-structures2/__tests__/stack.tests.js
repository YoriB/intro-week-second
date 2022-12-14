const createStack = require("../stack");

describe("createStack", () => {
  test("returns a property with an initial value of 0", () => {
    const testStack = createStack(0);
    console.log(testStack);
    expect(testStack.quantity).toBe(0);
  });
  test("returns a property, which can either be passed as an argument when creating the stack, or when no argument is passed it uses a default value.", () => {
    const testStack = createStack();
    console.log(testStack);
    expect(testStack.maxSize).toBe(5);
  });

  test("returns a number when max size is passed.", () => {
    const testStack = createStack(3);
    console.log(testStack);
    expect(testStack.maxSize).toBe(3);
  });

  test("returns a storage property to an empty object", () => {
    const testStack = createStack();
    console.log(testStack);
    expect(testStack.storage).toEqual({});
  });

  test("push function returns added items to the storage.", () => {
    //add item to storage
    //not an item if storage is full
    //increase quantity

    const testStack = createStack();
    testStack.push("apple");
    console.log(testStack);
    expect(testStack.storage).toEqual({ 1: "apple" });
    testStack.push('banana')
    expect(testStack.storage).toEqual({ 1: "apple", 2 : 'banana'});
  });

  test("push function returns one added items to the storage.", () => {
    const testStack = createStack();
    testStack.push("apple");
    testStack.push("orange");
    testStack.push("banana");
    console.log(testStack);
    expect(testStack.storage).toEqual({ 1: "apple", 2: "orange", 3: "banana" });
  });

  test("it should ensure that the max size is not exceeded.", () => {
    const testStack = createStack();
    testStack.push("apple");
    testStack.push("orange");
    testStack.push("banana");
    testStack.push("kiwi");
    testStack.push("pear");
    testStack.push("melon");

    console.log(testStack);
    expect(testStack.storage).toEqual({ 1: "apple", 2: "orange", 3: "banana", 4: "kiwi", 5: "pear" });
  });

  test("pop() return the last item removed from the storage.", () => {
    //remove an item from storage
    //doesn't remove if storage is empty
    //returns the removed item


    const testStack = createStack();
    testStack.push("apple");
    testStack.push("orange");
    testStack.push("banana");
    expect(testStack.pop()).toEqual("banana");
    console.log(testStack);
    expect(testStack.storage).toEqual({ 1: "apple", 2: "orange" });
  })
  expect(testStack.quantity).toEqual();
});


  test("returns a boolean when the stack is empty.", () => {
    const testStack = createStack();
    testStack.quantity === 0;
    expect(testStack.isEmpty()).toBe(true);
  });




  test("returns a boolean when the stack reaches max size.", () => {
    const testStack = createStack();
    //testStack.maxSize === 5;
    testStack.push("apple");
    testStack.push("orange");
    testStack.push("banana");
    testStack.push("kiwi");
    testStack.push("pear");
    testStack.push("melon");

    console.log(testStack);
    expect(testStack.isFull()).toBe(true);
  });
  test("returns the element at the top of the stack.", () => {
    const testStack = createStack();
    testStack.push("apple");
    testStack.push("orange");
    testStack.push("banana");
    testStack.push("kiwi");
    testStack.push("pear");
    testStack.peek();
    expect(testStack.peek()).toEqual("pear");
  });
  // test("returns a property, which can either be passed as an argument when creating the stack, or when no argument is passed it uses a default value. .", () => {
  //   const testStack = createStack();
  //   testStack.maxSize === 5 || maxSize;

  //   expect((testStack.maxSize)).toEqual(5);
  //   expect((testStack.maxSize)).toEqual(maxSize);
  // });
});
