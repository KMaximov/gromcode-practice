// algo
// 1. iterate keysList array
// 2. add key-value to the obj

// V1
// function buildObject(keysList, valuesList) {
//     const newObj = {}
//     for(let i = 0; i < keysList.length; i += 1) {
//         newObj[keysList[i]] = valuesList[i]
//     }
//     return newObj;
// }

// V2
// function buildObject(keysList, valuesList) {
//     return keysList.reduce((acc, key, index) => {
//         console.log(acc, key, index)
//         acc[key] = valuesList[index];
//         return acc;
//     }, {});
// }

// V3
// function buildObject(keysList, valuesList) {
//     return keysList.reduce((acc, key, index) => {
//         return {...acc, [key]: valuesList[index]}
//     }, {});
// }


// V4
function buildObject(keysList, valuesList) {
    return keysList.reduce((acc, key, index) => ({...acc, [key]: valuesList[index]}), {});
}

// V5
// const buildObject = (keysList, valuesList) => keysList.reduce((acc, key, index) => ({...acc, [key]: valuesList[index]}), {});

// if code doesn't work - split by steps

// test data
const names = ['Tom', 'Jack', 'Bob'];
const age = [16, 33, 25]
console.log(buildObject(names, age))

const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values)
console.log(result)

