'use strict';

const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];
//   Filter
//input: func;
//output: arr;

//input: elem;
//input: boolean;

//option 1
// function filterCallback(num) {
//   return num > 5
// }

//option 2
//  const filterRes = anotherNumbersList.filter(function (num) {
//    return num > 5;
//  });

//option 3

// const filterCallback = num => num.filter(el => el > 5);
// const evenPositions = arr => arr.filter(el => el > 5 && el % 2 === 0);

//   Map  будь-яке преобразование масива в новий масив
// input: elem;
// output: elem(змінений);

const mapRes = anotherNumbersList.map(el => el * el);
console.log(mapRes);

// const mapRes = anotherNumbersList.map;
// el => {
//   if (el < 0) {
//     return 'number is negative';
//   }
//   return el * el;
// };

// find
// input: func
// output: elem

// callback
// input: elem;
// output: boolean;
// якщо під умову не підходить не один елемент = undefined

// option 1
// const findRes = anotherNumbersList.find(el => {
//   if (el % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(findRes);

// option 2

// const findRes = anotherNumbersList.find(el => el % 2 === 0);
// console.log(findRes);

// some - знаходить якщо знаходить хоть одне значення яке підходить == true
// input: func
// output: boolean

// every - якщо кожен елемент підходить під умову == true

// forEach якщо будемо писати return - forEach нічого не верне
// input: func;
// output: undefined;

// callback
// input: elem;
// output: undefined;

anotherNumbersList.forEach(el => {
  if (el < 0) {
    console.log(el);
  }
});

function User(name, age) {
  this.name = name,
  this.age = age,
  User.prototype.sayHi = function () {
    console.log(`Hi, I am ${this.name}`);
  },
  User.prototype.requestNewPhoto = function () {
      console.log(`New photo request was sent for ${this.name}`);
  },
  User.prototype.setAge = function (age) {
      this.age = age;
      if (age >= 25) {
        console.log(`New photo request was sent for ${this.name}`);
      } else if (age < 0) {
        return false;
      }
      return age;
  };
}