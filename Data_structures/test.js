var worker = require("./worker");

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
function returnValue(list) {
    var list1 = list
    var values = []
    while (list1) {
        values.push(list1.val);
        list1 = list1.next;
    }
    let value = BigInt(values.reverse().join(""));
    return value;
}
var addTwoNumbers = function (l1, l2) {
    var resultingValue = returnValue(l1) + returnValue(l2);
    let listOfNodes = (resultingValue.toString().split("").reverse().map((val) => { let NodeValue = Number(val); let node = new ListNode(NodeValue); return node }));
    for (let i = 0; i < listOfNodes.length - 1; i++) {
        listOfNodes[i].next = listOfNodes[i + 1]
    }
    return listOfNodes[0]

};
let nodes = []

Array.from([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]).forEach(val => { nodes.push(new ListNode(val)); })
for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
}
let nodes1 = [];
Array.from([5, 6, 4]).forEach(val => { nodes1.push(new ListNode(val)) });
for (let j = 0; j < nodes1.length - 1; j++) {
    nodes1[j].next = nodes1[j + 1];
}
let result = addTwoNumbers(nodes[0], nodes1[0]);
console.log(result)

// result.forEach((val, index) => {
//     result[index] = Number(val)
// })
// console.log(result);

// /**
//  * 
//  * Reverse:
//  * 
//  * @param {*} x The number to get reversed 
//  * 
//  * This function is to reverse the number in the range < 2 power 31.
//  * 
//  * @return if number is within range it will return reverse or else it
//  * 
//  * will return 0.
//  */
// var reverse = function (x) {
//     let limit = Math.pow(2, 31);
//     let absoluteNum = Math.abs(x);
//     let reverseNum = null;
//     while (absoluteNum > 0) {
//         reverseNum = (reverseNum * 10) + (absoluteNum % 10);
//         absoluteNum = Math.floor(absoluteNum / 10)
//     }
//     if (reverseNum > limit) {
//         return 0;
//     }
//     return x > 0 ? reverseNum : (reverseNum - 2 * reverseNum);
// };

// [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
// [5, 6, 4]

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function (s) {
//     let counters = [];
//     let letters = {};
//     let tempCount = 0;
//     if (s.length == 0) {
//         return 0;
//     }
//     if (s.length == 0) {
//         return 0;
//     }
//     if (s.trim().length == 0) {
//         return 1;
//     }
//     let inChar = new Set(s.trim().split());
//     if(inChar.size== s.length){
//         return s.length;
//     }

//     s.split("").forEach(letter => {
//         if (!letters[letter]) {
//             letters[letter] = 1;
//             tempCount += 1;
//         }
//         else {
//             if (tempCount > 0) counters.push(tempCount);
//             letters[letter] += 1;
//             tempCount = 1;
//         }
//     })
//     return Math.max(...counters);
// };

// console.log(lengthOfLongestSubstring("   "));







/**
 *
 *  2 1 1 2 3 1 2 3 4
 *
 *  1 2 4 5  6 1 2 4 6 7 8 9 9
 *
 */



