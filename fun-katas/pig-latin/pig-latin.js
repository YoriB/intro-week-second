// Please do not change the name of this function

const atternpay = /^([^aeiou]+)[aeiou]/i;
const chaVow = 'way';
const chaCon = 'ay';

function pigLatin(word) {

  if (word.length  === 0) {
    return ''
  }
  else {
    let str = word.split(' ')
  for (let i = 0; i < str.length; i++){
  let con_prefix = str[i].match(atternpay);
  if (null === con_prefix)
    return str[i] + chaVow;

  return str[i].substring(con_prefix[1].length) + con_prefix[1] + chaCon
}
}
}


module.exports = {pigLatin}
