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