// 4.Write a code to delete all occurrence(same) of element in given array.

let arr = [23,56,4,78,5,63,45,210,56];
let ele = 56;

function printArray(arr) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === ele){
            arr.splice(i, 1);
        }
    }
    return arr;
}

let result = printArray(arr);
console.log(result);