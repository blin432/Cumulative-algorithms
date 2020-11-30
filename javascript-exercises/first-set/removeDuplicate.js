//5. remove Duplicate


function removeDuplicate(arr) {
    var exisits = {};
    var newArr = [];
    var eliminated;

    for (var i = 0; i < arr.length; i++){
        eliminated = arr[i]
        if (!exisits[eliminated]) {
            newArr.push(eliminated);
            exisits[eliminated] = true;
        }
    }
    console.log(exists)
    console.log(newArr)
    return newArr;
}

removeDuplicate([1, 2, 3, 1, 2, 12, 1, 1, 12, 2, 4, 5, 6]);