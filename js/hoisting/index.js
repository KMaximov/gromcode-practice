// вспливають var і function declaration
// Всі змінні 

// hoisting var example 1
// console.log(message);
// var message = 'Hoisting is here!';

// hoisting var example 1
// var message;
// console.log(message);
// message = 'Hoisting is here!';

// example 2
// var a = 55;
// console.log(a);

// if (a) {
//   var a = 1;

//   console.log(a);
// }

// console.log(a);

// hoisting var example 2
// var a = 55;
// console.log(a);

// if (a) {
//   var a = 1;
//   console.log(a);
// }

// console.log(a);


// hoisting var example 2
// var a;
// a = 55;
// console.log(a);

// if (a) {
//   var a;
//   a = 1;
//   console.log(a);
// }

// console.log(a);


// hoisting var example 3
// var a = 77;
// console.log(a);

// function print() {
//   var a = 2;
//   console.log(a);
// }
// print();

// console.log(a);

// example 3 
// var a;
// a = 77;
// console.log(a);

// function print() { 
//   var a;
//   a = 2;
//   console.log(a);
// }
// print();

// console.log(a);

// example 3 
// var a;
// a = 77;
// console.log(a);

// function print() { 
//   var a;
//   a = 2;
//   console.log(a);
// }
// print();

// console.log(a);

// hoisting func example 4
// run();

// function run() {
//   console.log('RUN');
// }

// stop();
// const stop = function () {
//     console.log('STOP')
// }

// console.log(typeof(stop))
// var stop = function () {
//   console.log('STOP');
// };

// declaration vs expression:
// 1. вспливає - не вспливає; 
// 2. не анонімна - експрешен може бути анонімной;
// 3. експрешен можна відразу визвати декларейшен не можна;
// 4. найкраще всього робити експрешен стрілковою функцією;
// 5. експрешен найчастіше юзається в колбеках в інших випадках декларейшен