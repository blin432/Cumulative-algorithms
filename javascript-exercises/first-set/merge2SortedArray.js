//6. merge two sorted array


function mergeSortedArray(a, b) {
    var newArr = [];
    var a = a[0];
    var b = b[0];

    i = 1;
    j = 1;

    //edge cases
    if (a.lentgth == 0)
        return b;
    if (b.length == 0)
        return a;
    
    while (a || b) {
        if ((a && !b) || a < b) {
            newArr.push(a);
            a = a[i++];
        } else {
            newArr.push(b);
            b = b[j++];
        }
        console.log(newArr);
        return newArr;
    }
}

mergeSortedArray([1, 2, 3, 4, 4], [2, 3, 4, 5]);
