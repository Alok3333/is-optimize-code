// Print Fibonacci series given a number
// let N = 20;

// function fibo(num) {
//     let n1 = 0;
//     let n2 = 1;
//     let fn = n1 + n2;

//     console.log(n1);
//     while(fn < num){
//         console.log(fn);
//         fn = n1+n2;
//         n1 = n2;
//         n2 = fn;
//     }
// }

// fibo(N);

// 14. Write a code to find N value in the fibonacci series for given a number.

let num = 21;

function fibo(num) {
    let x = 0;
    let y = 1;
    let indexCount = 2;
    let fn;

    if (x == num) {
        console.log(`Element ${num} is present in index 0`);
    } else if(y == num) {
        console.log(`Element ${num} is present in index 1 & 2`);
    } else {

        while (true) {
            fn = x + y;
            if (fn == num) {
                console.log(`Element ${num} is present in index ${indexCount}`);
                break;
            } else if (fn > num) {
                console.log("Element not present");
                break;
            }
            x = y;
            y = fn;
            indexCount++;
        }
    }
}

fibo(num);

