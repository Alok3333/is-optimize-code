// Write a code to find power of a numbers using for loop.

function printPow(num, pow) {
    let res = 1;
    for(let i = 0; i < pow; i++){
        res = res * num;
    }
    return res;
}

let result = printPow(5, 3);
console.log(result);
