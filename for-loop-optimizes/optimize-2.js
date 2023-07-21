// // 2.write a js code to print a 2D array.

// let arr = [[1, 2], [3, 4], [5, 6]];

// function printArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[0].length; j++) {
//             console.log(arr[i][j]);
//         }
//     }
// }

// printArray(arr);


// 11.Write a code to find the number of Zeros in 2D matrix.

let arr = [[0, 1, 1, 4], [0, 1, 0], [1, 0, 0]];
let zeroCount = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
        // if (arr[i][j] == 0) {
        //     zeroCount++;
        // }
        zeroCount = arr[i][j] == 0 ? zeroCount+1 : zeroCount;
    }
}

console.log(zeroCount);