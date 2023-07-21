// 9.Write a code to calculate the sum of digit in a number;

let number = 2341;

function sumDigit(num) {
    let sum = 0;
    while(num != 0){
        sum = sum + num % 10;
        num = Math.floor(num/10);
    }
    console.log(sum);
}

sumDigit(number);