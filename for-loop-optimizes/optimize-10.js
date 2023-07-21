// 10.Write a code to fine largest number in an array.

let arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];

let max = arr[0];

for (let i = 0; i < arr.length; i++) {
    max = arr[i] > max ? arr[i] : max;
}

console.log(max);