//Question: How would you reverse a string in JavaScript?



function reverse(string) {
    var newStr = '';
    //reverse loop to add to new string
    for (var i = string.length - 1; i >= 0; i--){
        newStr += string[i];
    }
    console.log(newStr)
    return newStr;
}
reverse('string');