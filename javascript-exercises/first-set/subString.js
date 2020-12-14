//Question: How can you match substring of a sting?


function subStringFinder(str, subStr){
    var idx = 0;
    var i = 0;
    var j = 0;
    var len = str.length;
    var sublen = subStr.length;

    for (; i < len; i++){
        if (str[i] == subStr[j])
            j++;
        else
            j = 0;
        //check starting point or a match
        if (j == 0)
            idx = i;
        else if (j == subLen)
            console.log(idx);
            return idx;
    }
    return -1;
}

subStringFinder('abbcdabbbbbck', 'ab')
