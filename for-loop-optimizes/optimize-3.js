// 3.write a js code to print Even numbers in given array.

var arr = [13,23,12,45,22,48,66,100];

function printArray(arr) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            console.log(arr[i]);
        }
    }
}

printArray(arr);