/*
* palindrome for a string.
*/
function testPalindrome(testString) {
    let reverseString = '';
    reverseString = testString.trim().split("").reverse().join("");
    return reverseString == testString
}


/**
* palindrome for a Number
*/

function palindrome(x) {

    let input = x.toString().slice("");
    //     while(input>0){
    //         output=output*10+(input%10);
    //         input=Math.floor(input/10);
    //     }
    //     return output==x;

    let start_index = 0, end_index = input.length - 1;
    while (start_index != end_index - 1) {
        if (input[start_index] != input[end_index]) {
            return false;
        }
        start_index += 1;
        end_index -= 1;
    }
    return true;
}