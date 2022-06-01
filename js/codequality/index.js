'use strict';

// BAD
// function withdraw(clients, balances, client, amount) {
//   for (let i = 0; i < clients.length; i++) {
//     if (clients[i] === client && balances[i] >= amount) {
//       return (balances[i] -= amount);
//     }
//     if (clients[i] === client && balances[i] < amount) {
//       return -1;
//     }
//   }
// }

// BAD
// const withdraw = (clients, balances, client, amount) => {
//     let result = 0;
//     clients.forEach(function (name, index) {
//       if (name.includes(client) && balances[index] >= amount) {
//         result = balances[index] - amount;
//       } else if (name.includes(client) && balances[index] < amount) {
//         result = -1;
//       }
//     });
//     return result;
//   };

// BAD
// function withdraw(clients, balances, client, amount) {
//     for (let i = 0; i < clients.length; i++) {
//       if (clients[i] === client && balances[i] >= amount) {
//         return (balances[i] -= amount);
//       } else if (clients[i] === client && balances[i] < amount) {
//         return -1;
//       }
//     }
//   }

// NORM
// const withdraw = (clients, balances, client, amount) => {
//     const indexClient = clients.indexOf(client);
//     return (balances[indexClient] <= amount)? -1 : balances[indexClient] - amount; 
//   }

// NORM
// const withdraw = (clients, balances, client, amount) => {
//     const balance = balances[clients.indexOf(client)];
//     condition ? value1 : value2;
//     return balance > amount ? balance - amount : -1;
//   };

// NORM
// const withdraw = (clients, balances, client, amount) => {
//     const indexClient = clients.indexOf(client);
//       if(amount > balances[indexClient]) {
//         return -1;
//       } 

//       balances[indexClient] -= amount
//       return balances[indexClient];
//     }

// // 

// NORM
// let result;
// function withdraw(clients, balances, client, amount) {
//   let index = clients.indexOf(client);

//   if (balances[index] >= amount) {
//     return (balances[index] -= amount);
//   }

//   return -1;
// }

// GOOD
const withdraw = (clients, balances, client, amount) => {
    const indexOfClient = clients.indexOf(client);
      if (balances[indexOfClient] < amount) {
        return -1;
      }
      balances[indexOfClient] -= amount;
      return balances[indexOfClient];
}
// test data
const users = ['Ann', 'John', 'User'];
const balances = [1400, 87, -6];
console.log(withdraw(users, balances, 'John', 50));
console.log(balances);

let a = {name: 'John', sane: 'kk'}
let b = a;
b.name = 'Bob';
console.log(b)
console.log(a)

let c = [1, 2, 20]
let d = c;
d[1] = 22;
console.log(c)
console.log(d)

console.log(typeof c)

console.log('p' === 'p')