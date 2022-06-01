// input: arr, callback
// output: arr

// callback
// el
// boolean

// algo
// 1. iterate arr
// 2. apply callback to el
// 3. if true = push to res arr
const filterArrayElements = (arr, callback) => {
    const res = [];
    for(let i = 0; i < arr.length; i += 1) {
        if (callback(arr[i])) {
            res.push(arr[i])
        }
    }
    return res;
  };
  
  // test data
//   const callback = el => el > 500;
//   const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];
//   console.log(filterArrayElements(transactions, callback))

//   const callback = el => el % 2 == 0;
//   const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];
//   console.log(filterArrayElements(transactions, callback))

//   const names = ['Oleg', 'Andrey', 'Vitalii', 'Vlad', 'Yaroslav'];
//   const callback = el => el.includes('a');
//   console.log(filterArrayElements(names, callback))

//   function sum(a, b) {
//       console.log(arguments);
//   }

//   console.log(sum(5, 9, 4, 32))