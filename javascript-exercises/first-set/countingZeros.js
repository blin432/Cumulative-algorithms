//Question: Count Total number of zeros from 1 upto n?


function countZero(n) {
    var count = 0;
    while (n > 0) {
        count += Math.floor(n / 10);
        console.log("first count")
        console.log(n);
        n = n / 10;
    }
    console.log(count);
    return count;
}

countZero(20);
