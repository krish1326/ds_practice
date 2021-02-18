// using sliding window pattern, where the window is moved and then the result is calculated.

// like this 1 2 23 12 2 3 4 here if we ask for max sub array of length 3 then 
// we take sum of first 3 elements and keep it as temporary maxsum, then
// we add the next element and remove the first element where the window is
// moved from the element 1->2 at start and 3-> 4 at last. 

// so the window is slided so that result obtained is from 1->3, now we do 
// this till the end and get max value by comparing the current sum and 
// value till then.

/**
 * This function returns the contigous array of specified length
 * from the input array which has maximun sum, also the value of
 * sum.
 *
 * @param {*} array input array
 * @param {*} length length of desired array
 */
function maxSubArraySum(array, length) {
  if (length > array.length) {
    return null;
  }
  let result = {};
  let maxSum = 0;

  for (let i = 0; i < length; i++) {
    maxSum += array[i];
  }
  let temp = maxSum;
  let start_index = 0;
  
  for (let i = length; i < array.length; i++) {
    temp = temp - array[i - length] + array[i];
    if (temp > maxSum) {
      start_index = i;
    }

    maxSum = Math.max(temp, maxSum);
  }

  result["maxSum"] = maxSum;

  if (start_index != 0)
    result["array"] = array.slice(start_index - length + 1, start_index + 1);
  else result["array"] = array.slice(0, length);

  return result;
}


console.log(maxSubArraySum([1,2,34,23,12,1],1));