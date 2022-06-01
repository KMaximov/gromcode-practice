// input: obj, obj
// output: boolean

// algo 
// 1. get keys, values
// 2. check keys lenght
// 3. compare every key/value with .every method
// ** compare some key/value, if some if not equal - false

// function compareObjects(obj1, obj2) {
//     console.log(JSON.stringify(obj1))
//     return JSON.stringify(obj1) === JSON.stringify(obj2)
//   }

// function compareObjects(obj1, obj2) {
//       const arr1 = Object.values(obj1);
//       const arr2 = Object.values(obj2);
//       if(arr1.length != arr2.length) {
//             return false
//         }
//       for(let i = 0; i < arr1.length; i++) {
//           if(arr1[i] != arr2[i]) {
//               return false
//           }
//       }
//     return true
// }

// function compareObjects(obj1, obj2) {
//     const arr1 = Object.values(obj1);
//     const arr2 = Object.values(obj2);
//     if(arr1.length != arr2.length) {
//         return false
//     }
//     const check = () => {
//           for(let i = 0; i < arr1.length; i += 1) {
//               if(arr1[i] != arr2[i]) {
//                   return false
//               }
//               return true
//           }
//       }
//       return arr1.every(check)
//   }

function compareObjects(obj1, obj2) {
	const keys = Object.keys(obj1);
    console.log(keys)
	if (keys.length != Object.keys(obj2).length){
		return false;
	}
	return keys.every(key => obj1[key] === obj2[key])
}

// function compareObjects(obj1, obj2) {
//   const result = Object.keys({ ...obj1, ...obj2 });
//   if (Object.keys(obj1).length != Object.keys(obj2).length) {
//     return false;
//   }
//   return result.every(key => obj1[key] === obj2[key]);
// }

// bad

// function compareObjects(obj1, obj2) {
//   const keys = Object.keys({ ...obj1, ...obj2 });
//   if (Object.keys(obj1).length != Object.keys(obj2).length) {
//     return false;
//   }
//   return keys.every(key => obj1[key] === obj2[key]);
// }

// bad

// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   const values1 = Object.values(obj1);
//   const values2 = Object.values(obj2);

//   const isKeysEqual = keys1.every((value, index) => value === keys2[index]);
//   const isValueEqual = values1.every((value, index) => value === values2[index]);

//   if (!isKeysEqual || !isValueEqual || keys1.length !== keys2.length) {
//     return false;
//   }

//   return true;
// }

// bad

// function compareObjects(obj1, obj2) {
//   const firstArrKeyVal = [...Object.keys(obj1), ...Object.values(obj1)];
//   const secondArrKeyVal = [...Object.keys(obj2), ...Object.values(obj2)];

//   if (!(firstArrKeyVal.length === secondArrKeyVal.length)) {
//     return false;
//   }

//   return firstArrKeyVal.every((value, index) => value === secondArrKeyVal[index]);
// }

// bad

// function compareObjects(obj1, obj2) {
//   const keys = Object.keys(obj1);

//   if (keys.length !== Object.keys(obj2).length) {
//     return false;
//   }

//   for (let key of keys) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// bad

// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const values1 = Object.values(obj1);
//   const keys2 = Object.keys(obj2);
//   const values2 = Object.values(obj2);
//   if (keys1.length !== keys2.length) {
//     return false;
//   }
//   return keys1.every((el, index) => {
//     return el === keys2[index] && values1[index] === values2[index];
//   });
// }

// norm

// function compareObjects(obj1, obj2) {
//   const entriesObj1 = Object.keys(obj1);
//   const entriesObj2 = Object.keys(obj2);

//   if (entriesObj1.length !== entriesObj2.length) {
//     return false;
//   }

//   return entriesObj1.reduce((acc, key) => {
//     return acc && obj1[key] === obj2[key];
//   }, true);
// }

// bad

// function compareObjects(obj1, obj2) {
//   // const prop1 = Object.entries(obj1);
//   // const prop2 = Object.entries(obj2);

//   // if (prop1.length !== prop2.length) {
//   //   return false;
//   // }

//   return _.isEqual(obj1, obj2);
// }

// V2 good

// function compareObjects(obj1, obj2) {
//   return Object.keys({ ...obj1, ...obj2 }).every(element => obj1[element] === obj2[element]);
// }

// V3 bad

// function compareObjects4(obj1, obj2) {
//   let arr = Object.entries(obj1).join() === Object.entries(obj2).join();
//   return arr;
// }

// bad

// function compareObjects(obj1, obj2) {
//   if (!(Object.keys(obj1).length === Object.keys(obj2).length)) {
//     return false;
//   }
//   const objFirstKeys = Object.keys(obj1);
//   const objSecondKeys = Object.keys(obj2);
//   const objFirstValues = Object.values(obj1);
//   const objSecondValues = Object.values(obj2);

//   return objFirstKeys.every(
//     (key, index) =>
//       (key === objSecondKeys[index]) === (objFirstValues[index] === objSecondValues[index]),
//   );
// } 

// norm

// function compareObjects(obj1, obj2) {
//   return Object.keys(obj1).length === Object.keys(obj2).length &&
//     Object.keys(obj1).every(key => obj1[key] === obj2[key]);
// }

// bad

// function compareObjects(obj1, obj2) {

// const arr1 = Object.entries(obj1);
// const arr2 = Object.entries(obj2);

// if (arr1.length != arr2.length) {
//   return false;
// }

// // return arr1.every(
// //   (arr, index) => arr[0] === arr2[index][0] && arr[1] === arr2[index][1]
// // );

// return !arr1.some(
//   (arr, index) => arr[0] != arr2[index][0] || arr[1] != arr2[index][1]
// );
// }

  // test data
  const obj1 = {
    name: 'Tom',
    age: 17,
  };
  
  const obj2 = {
    name: 'Bob',
    age: 17,
  };
  
  const obj3 = {
    name: 'Bob',
    age: 17,
    student: false,
  };
  
  const obj4 = {
    name: 'Tom',
    age: 17,
  };
  
  // console.log(compareObjects4(obj1, obj2))
  // console.log(compareObjects(obj1, obj2)); // ==> false
  // console.log(compareObjects(obj2, obj3)); // ==> false
  // console.log(compareObjects(obj1, obj4)); // ==> true


  // var species = "human";
 
  // function transform() {
  //   // Initialize a local, function-scoped variable
  //   var species = "werewolf";
  //   console.log(species);
  // }
  
  // // Log the global and local variable
  // // console.log(species);
  // transform();
  // console.log(species);

  let species = "human";
  var fullMoon = true;
  
  if (fullMoon) {
    let species = "werewolf";
    console.log(`It is a full moon. Lupin is currently a ${species}.`);
  }
  
  console.log(`It is not a full moon. Lupin is currently a ${species}.`);
  console.log(species)

  
  function one(){
 
    function two(){
     console.log(a);
    }
 
    var a=2;
    console.log(a);
    two();
  }
 