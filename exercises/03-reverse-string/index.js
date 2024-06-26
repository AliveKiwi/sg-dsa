// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution #1
// function reverse(str) {
// return str.split('').reverse().join('');
// }

// Solution #2
// function reverse(str) {
//   let revStr = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     revStr = revStr + str[i];
//   }
//   return revStr;
// }

// Solution #3
// function reverse(str) {
//   let reversed = '';
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

// Solution #4
function reverse(str) {
  debugger;
  return str
    .split('')
    .reduce((reversed, character) => character + reversed, '');
}

module.exports = reverse;
