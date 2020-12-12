//Question: How could you find the first non repeating char in a string?


function firstNonRepeatChar(str) {
    var len = str.length
    var char = '';
    var chartCount = {};
    
    //loop through the string and add to object count of char
    for (var i = 0; i < len; i++){
        char = str[i];
        if (chartCount[char]) {
            charCount[char]++;
        }
        else
            charCount[char] = 1;
    }
    //loop thourgh object for nonrepeating char
    for (var j in charCount) {
        if (chartCount[j] == 1) {
            console.log(j);
            return j;
        }
    }

}

firstNonRepeatChar('the quick brown fox jumps then quickly blow air');