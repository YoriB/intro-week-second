const {calculateDivisors} = require('../calculate-divisors/calculate-divisors');

describe('calculateDivisors', () => {
  test('returns the sum of multiples of 3 and 5 when passed a number less than 12', () => {
    const Divisors = calculateDivisors;
    expect(Divisors(1)).toEqual(0);
    expect(Divisors(6)).toEqual(8);
    expect(Divisors(10)).toEqual(23);
    expect(calculateDivisors(12)).toEqual(33);
  });
});
  

