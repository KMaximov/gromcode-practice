const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

// input: callback, init acc(optional)
// output: num

// callback
// acc, el, index, array (optional)
// new acc

transactions.reduce((acc, el) => {
    // console.log(acc);
    // console.log(el);

    // acc += 100;
    // return acc;
    acc += el;
    return acc;
})

const res = transactions.reduce((acc, el) => acc + el);
console.log(res);

// 
