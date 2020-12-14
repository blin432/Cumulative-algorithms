//Question: How would you find the largest sum of any two elements?

function topSum(arr) {
    var biggest = arr[0];
    var second = arr[1];
    var len = arr.length;
    var i = 2;
    //edge case
    if (len < 2) return null;
    if (biggest < second) {
        biggest = arr[1];
        second = arr[0];
    }
    //main loop through starting from third
    //var i =2
    for (; i < len; i++){
        if (arr[i] > biggest) {
            second = biggest;
            biggest = arr[i];
        }
        else if (arr[i] > second) {
            second = arr[i];
        }
    }
    console.log(biggest + second);
    return biggest + second;
}

topSum([1,2,3,45,6,6,4,1,34,9])