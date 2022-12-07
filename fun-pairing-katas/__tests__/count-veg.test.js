const countVeg = require('../katas/count-veg');

describe('countVeg', () => {
  test('returns an array of objects when an array of objects is passed', () => {
    const veg = [
      { name: 'Parsnip', type: 'root', quantity: 4 },
      { name: 'Broccoli', type: 'brassica', quantity: 1 },
      { name: 'Carrot', type: 'root', quantity: 5 },
      { name: 'Onion', type: 'bulb', quantity: 3 },
      { name: 'Chard', type: 'leaf', quantity: 3 },
      { name: 'Runner beans', type: 'legume', quantity: 8 },
    ];
    const result = countVeg(veg);

    expect(result).toBe(veg);
  });
  test('returns a type  of vegetable when an array of vegetable objects is passed ', () => {
    const veg = [
      { name: 'Parsnip', type: 'root', quantity: 4 },
      { name: 'Broccoli', type: 'brassica', quantity: 1 },
      { name: 'Carrot', type: 'root', quantity: 5 },
      { name: 'Onion', type: 'bulb', quantity: 3 },
      { name: 'Chard', type: 'leaf', quantity: 3 },
      { name: 'Runner beans', type: 'legume', quantity: 8 },
    ];
    const result = countVeg(veg[0].type);
    expect(result).toBe('root');
  });
  test('returns an array of objects that has bulb type', () => {
    const veg = [
      { name: 'Parsnip', type: 'root', quantity: 4 },
      { name: 'Broccoli', type: 'brassica', quantity: 1 },
      { name: 'Carrot', type: 'root', quantity: 5 },
      { name: 'Onion', type: 'bulb', quantity: 3 },
      { name: 'Chard', type: 'leaf', quantity: 3 },
      { name: 'Runner beans', type: 'legume', quantity: 8 },
    ];
    const result = countVeg(veg[3]);
    expect(result).toEqual({ name: 'Onion', type: 'bulb', quantity: 3 });
  });
  test.only('returns a quantity of 3 when the type bulb is passed', () => {
    const veg = [
      { name: 'Parsnip', type: 'root', quantity: 4 },
      { name: 'Broccoli', type: 'brassica', quantity: 1 },
      { name: 'Carrot', type: 'root', quantity: 5 },
      { name: 'Onion', type: 'bulb', quantity: 3 },
      { name: 'Chard', type: 'leaf', quantity: 3 },
      { name: 'Runner beans', type: 'legume', quantity: 8 },
    ];
    
    const count = countVeg(veg, 'bulb');
    expect(count).toEqual(3);
  });
});
