//16. Sum of two
//Question: From a unsorted array, check whether there are any 
//two numbers that will sum up to a given number ?



function sumFinder(arr, sum) {
    var len = arr.length;

    for (var i = 0; i < len - 1; i++){
        for (var j = i + 1; j < len; j++){
            if (arr[i] + arr[j] == sum)
                console.log(true)
            return true;
        }
    }
    console.log(false)
    return false
}

sumFinder([6,4,3,2,1,7], 9);

sumFinder([6,4,3,2,1,7], 2);
