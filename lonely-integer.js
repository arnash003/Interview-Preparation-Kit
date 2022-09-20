console.log(2 ^ 0); // 2
console.log(1 ^ 0); // 1
console.log(0 ^ 0); // 0
console.log(1 ^ 1); // 0
console.log(2 ^ 2); // 0
console.log(2 ^ 2 ^ 3) // 3

function lonelyinteger(a) {
    // Write your code here
    // Notes
    // console.log( 2^ 0); // 2
    // console.log(1 ^ 0); // 1
    // console.log(0 ^ 0); // 0
    // console.log(1 ^ 1); // 0
    // console.log(2 ^ 2); // 0
    // console.log(2 ^ 2 ^ 3) // 3

    let result = 0;
    for (let i = 0; i < a.length; i++) result ^= a[i];
    return result;
}

