//Question: How will you verify a word as palindrome?



function isPalindrome(str) {
    var i = '';
    var len = str.length;
    for (i = 0; i < len / 2; i++){
        //compare first and last letter and diverge len-1-i to get last letter and diverge
        if (str[i] !== str[len - 1 - i]) {
            console.log(false)
            console.log(i)
            console.log(str[i])
            return false;
        }
        console.log(i);
        console.log(str[i]);
        console.log(true);
        return true;
    }
    
}
isPalindrome('madam')
