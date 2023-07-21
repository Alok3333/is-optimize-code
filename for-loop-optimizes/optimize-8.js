// 8.Write a code to find the no of digit in a number.

let number = 45355343525;

function countDigit(num) {
    let count = 0;
    while(num != 0){
        num = Math.floor(num/10);
        count++;
    }
    console.log(count);
}

countDigit(number);