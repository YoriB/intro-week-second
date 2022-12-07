const {changeCalculator} = require('../change-calculator/change-calculator');


describe('changeCalculator', () => {
  test('returns an object of coins passed', () => {
  const Divisors = changeCalculator;
  console.log(Divisors)
    expect(Divisors(1)).toEqual({ 1: 1 });
    expect(Divisors(2)).toEqual({ 2: 1 });
    expect(Divisors(7)).toEqual({ 5: 1, 2: 1 });
    expect(Divisors(13)).toEqual({'10':1,'2':1,'1':1});
  });
})