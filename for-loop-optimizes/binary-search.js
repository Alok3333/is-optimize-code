var arr = [13, 45, 34, 2, 56, 3, 57, 34, 88, 55];
var target = 88;
let start = 0;
let end = arr.length - 1;
arr.sort((a, b) => a > b ? 1 : -1);
console.log(arr);

function binarySearch(arr, start, end) {
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        if (arr[mid] === target) {
            return mid;
        }
        if (target < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1
}

let result = binarySearch(arr, start, end);
console.log(result);