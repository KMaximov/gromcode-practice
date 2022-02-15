console.log('Hello, FE-19!');
function getSenseOfLife() {
  return 42;
}

const res = getSenseOfLife();
console.log(res);

console.log(getSenseOfLife());

function getSquared(num) {
  return num * num;
}

console.log(getSquared(5));

function getSum(firstNum, secondNum) {
  return firstNum + secondNum;
}

console.log(getSum(5, 10));
console.log(getSum(111));

const first = 8;
const second = 10;

console.log(getSum(first, second));

function print(age) {
  console.log(`I am ${age} years old`);
  console.log('Sense of life is ' + getSenseOfLife());
}

function sendEmail(userId) {
  const email = getEmailById(userId);
}

// const mult = (firstNum, secondNum) => {
//   return firstNum * secondNum;
// };

const mult = (firstNum, secondNum) => firstNum * secondNum;

console.log(mult(1, 5));

const squaredArrow = num => num * num;

const getMagicNumber = () => 17;

console.log(getMagicNumber());

console.log((() => 17) === (() => 17)); // false
console.log(console.log(() => 17) === console.log(() => 17)); // true
