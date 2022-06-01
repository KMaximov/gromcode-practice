'use strict';

// function sum(from, to, resolver) {
//   let sum = 0;
//   for (let i = from; i <= to; i++) {
//     sum += i;
//   }
//   resolver(sum)
// }
// // input: num
// // return: undefined
// function printResult(res) {
//   console.log('Result is: ' + res);
// }

// sum(10, 16, printResult);

// function alertResult(res) {
//   alert('Result is ' + res);
// }

// sum(10, 16, alertResult);

// function sentResult(res) {

// }

// sum(10, 16, sentResult);

const arr = [0, 2, 3]
const f = arr => arr.reverse()

console.log(f(arr))
console.log(arr)