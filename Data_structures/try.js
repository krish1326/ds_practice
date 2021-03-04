/**Complete the function goodStatement in the editor below. The function must return an 
 * integer denoting the length of the longest contiguous range of 
 * natural number in the range l to r, inclusive, which does not include any bad numbers.

goodSegment has the following parameter(s): badNumbers[badNumbers[0],...badNumbers[n-1]]: an array of integers
l: an integer, the lower bound, inclusive
r: an integer, the upper bound, inclusive

Constraints
1 ≤ n ≤10^5
1 ≤ badNumbers[i]≤ 10^9
badNumbers contains distinct elements
1 ≤ l≤ r ≤10^9

Input Format for Custom Testing
Sample Case 0
Sample Case 1

*/
function goodStatement(badNumbers,l,r){
    let range = [];
    let lengthOfNumbers = 0;
     badNumbers.filter((elem)=>{return elem>=l && elem<=r}).forEach((number)=>{
        lengthOfNumbers = Math.max(number-l,r-number);
    })
    console.log(lengthOfNumbers);
    for(let i =l;i<=r;i++){
        range.push(i);
    }
    for(let j = 0; j<badNumbers.length;j++){
        if(badNumbers[j]>=l && badNumbers[j]<=r){
            range = range.slice(range.indexOf(badNumbers[j]+1));
        }
    }
    console.log(range.length);
}

goodStatement([12,18,34,56,76,45],10,30);