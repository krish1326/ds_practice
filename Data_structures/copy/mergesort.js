function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    else {
        let mid = Math.floor(array.length / 2);
        let left = mergeSort(array.slice(0, mid));
        let right = mergeSort(array.slice(mid));
        return mergeSorted(left, right);
    }
}
// helper method to merge two sorted arrays
function mergeSorted(arr1, arr2) {
    let i = 0, j = 0;
    let resultingArray = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            resultingArray.push(arr2[j]);
            j++;
        }
        else {
            resultingArray.push(arr1[i]); i++;
        }
        if (i == arr1.length) {
            for (let k = j; k < arr2.length; k++) {
                resultingArray.push(arr2[k])
            }
        }
        if (j == arr2.length) {
            for (let k = i; k < arr1.length; k++) {
                resultingArray.push(arr1[k]);
            }
        }

    }
    return resultingArray;

    // 2,3   1,10
}
mergeSort([132, 1, 23, 2, 3, 7, 3]);
    // mergeSort()

    // uses divide and conquer pattern. The idea is like if the size of array is 1 or 0 then they are sorted so that means that we split them into individual
    // elements so that they are already sorted and then they are compared with other arrays so that we can find the way to merge and then sort them again.
    // split ==> merge ==> Sort 