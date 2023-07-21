// 16.Write a to remove duplicate value from an array

let arr = [1, 5, 9, 1, 4, 9, 10, 5, 2, 3];

let unique = arr.filter((ele, index) => {
    return arr.indexOf(ele) === index;
});

console.log(unique);

// let newUniqueArr = [...new Set(arr)];
// console.log(newUniqueArr);