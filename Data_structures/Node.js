class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
        this.next = null;
        this.previous = null;
    }
}
exports.Node = Node;

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var hashFunction = function (numbers) {
    return numbers.sort((a, b) => { return a - b }).join("")
}
var threeSum = function (nums) {
    if (nums.length < 3) { return null }
    let numbers = nums.sort((a, b) => { return a - b });
    if (numbers.length == 3) {
        if (numbers[0] + numbers[1] + numbers[2] == 0) {
            return nums;
        }
    }
    let hashcontainer = {}
    let result = [];
    let indexB = null, indexC = nums.length - 1;
    for (let i = 0; i < numbers.length - 2; i++) {
        indexB = i + 1;
        indexC = numbers.length - 1;
        while (indexB < indexC) {
            let sum = numbers[i] + numbers[indexB] + numbers[indexC];
            if (sum > 0) {
                indexC--;
            }
            else if (sum < 0) {
                indexB++;
            }
            else {
                let currentNumbers = [numbers[i], numbers[indexB], numbers[indexC]];
                let hash = hashFunction(currentNumbers);
                if (!hashcontainer[hash]) {
                    result.push(currentNumbers);
                    hashcontainer[hash] = "exists";
                }
                indexB++;
                indexC--;
            }
        }
    }
    return result;
};

// for (j = i + 1; j < numbers.length - 1; j++) {
//     for (k = j + 1; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] == 0) {
//             let hash = hashFunction([nums[i], nums[j], nums[k]]);
//             if (!hashcontainer[hash]) {
//                 hashcontainer[hash] = "Something"
//                 result.push([nums[i], nums[j], nums[k]])
//             }
//         }
//     }
// }
console.log(threeSum([-1, -1, 2, 0, 1]))