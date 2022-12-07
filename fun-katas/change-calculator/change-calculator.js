function changeCalculator(num){
  let change = {};
  let coinTypes = ['10', '5', '2', '1'] ;
  let coinValues = [10, 5, 2, 1] ;
  let amount = 0;
  let val = num;
  
  for (let i = 0; i < coinValues.length; i++) {
      amount = Math.floor(val/coinValues[i]);
      if (amount > 0) {
        change[coinTypes[i]] = amount;
        val = val%coinValues[i];
      }
    }
    return change;
  }

module.exports = {changeCalculator};
