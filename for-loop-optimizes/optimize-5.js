// 5.Write a code to demonstrate Async loop.
// print 5 to (5,5,5,5,5) 5 times.

for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}