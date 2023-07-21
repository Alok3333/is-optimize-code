// 7.Write a code to print a pattern using for loop.

/*
    1
    1   2
    1   2   3
    1   2   3   4
    1   2   3   4   5
*/

function printPattern(range) {
    for(let i = 1; i <= range; i++){
        let str = '';
        for(let j = 1; j <= i; j++){
            str += j + ' ';
        }   
        console.log(str);
    }
}

printPattern(5);
