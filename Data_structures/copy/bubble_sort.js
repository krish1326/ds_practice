function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}
function bubbleSort(array) {
  if (array.length === 0) {
    return;
  } else {
    var no_swap;
    for (let i = array.length; i > 0; i--) {
      no_swap = true;
      for (let j = 0; j < i - 1; j++) {
        if (array[j] > array[j + 1]) {
          swap(array, j, j + 1);
          no_swap = false;
        }
      }
      console.log(no_swap);
      if (no_swap) break; // this is in a case like [1,2,8,3,4] ==> where the array will be sorted in one pass and
      //in the next pass we don't see any of swaping which prevents the further iterations.
    }

    //     let k=0;
    //         for(let i=0;i<array.length;i++){
    //                 for(let j=0;j<array.length-k-1;j++){
    //                    if(array[j]>array[j+1]) swap(array,j,j+1);
    //                 }
    //                 k++;
    //             }
  }
  return array;
}
//   0 1  2  3
// [23,45,12,2]
// console.log(bubbleSort([32, 1, 4, 14, 67, 56, 1, 23, 2]));
console.log(bubbleSort([32, 1, 2, 3, 4]));
