// input: object, string, any
// output: object

function addPropertyV1(obj, key, value) {
    obj[key] = value; 
    return obj;
  }

// input: object, string, any
// output: object
function addPropertyV2(obj, key, value) {
    return Object.assign(obj, {[key] : value})
}

// input: object, string, any
// output: new object

function addPropertyV3(obj, key, value) {
    return Object.assign({}, obj, {[key]: value})
}

function addPropertyV4(obj, key, value) {
    return {...obj, [key]: value}
}
  const transaction = {
    value: 170,
  };

  // console.log(addPropertyV1(transaction, 'currency', 'USD'));
  // console.log(addPropertyV1(transaction, 'name', 'Bob'))
  // console.log(addPropertyV2(transaction, 'value', 500))
  // console.log(addPropertyV3(transaction, 'name', 'john'))
  // console.log(addPropertyV4(transaction, 'lenght', 10))
  // console.log(transaction)

  function sum(...args) {
      console.log(args);
      console.log(typeof args)
  }
  sum(1, 2)
  let map = new Map()
  map.set(1, 150)
  map.set('1', 222)
  console.log(map.get(1), map.get('1'))

  let obj = {name: 'Ivan'};
  let age = new Map();
  age.set(obj, 33);
  console.log(age.get(obj))

let set = new Set();

let ivan = { name: "Іван" };
let petro = { name: "Петро" };
let maria = { name: "Марія" };

set.add(ivan);
set.add(petro);
set.add(maria);
set.add(ivan);
set.add(maria);

console.log(set)
console.log(set.size)
let a = new Set(["апельсини", "яблука", "банани"]);

a.add('апельсини')
for (let value of a) console.log(value);

// те ж саме з forEach:
// a.forEach((value, valueAgain, a) => {
//   console.log(value);
// });

let profile = ["Bruce",{"language":["English","Spanish","French"]}];

let profile_copy = Object.assign({}, ...profile)
// profile_copy[1].language[0] = 'DADA'
console.log(profile_copy)
console.log(profile)

// (function() {
//   console.log('test')
//  })()

