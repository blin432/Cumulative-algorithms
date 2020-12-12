//Question: from a unsorted array of numbers 1 to 100 excluding one number, 
//how will you find that number.


function missingNumber(arr){
    var n = arr.length + 1;
    var sum = 0;
    //sum of linear series is the sum of all numbers in a series
    var expectedSum = n * (n + 1) / 2;
    for (var i = 0, len = arr.length; i < len; i++){
        sum += arr[i];
        // console.log(sum)
    }
    console.log(sum)
    console.log(expectedSum)
    console.log(expectedSum - sum);
    return expectedSum - sum;
}


missingNumber([5, 2, 6, 1, 3]);

