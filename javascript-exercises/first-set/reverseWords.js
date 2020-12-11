//Question: How would you reverse words in a sentence?


function reverse(str) {
    var newArr = [];
    var wordlength = 0;
    for (var i = str.length; i >= 0; i--){
        if (str[i] == ' ' || i == 0) {
            newArr.push(str.substr(i, wordlength + 1));
            wordlength = 0;
            console.log(newArr)
        }
        else
            wordlength++;
    }
    console.log(newArr.join(' '));
    return newArr.join(' ')
}

reverse("how are you")