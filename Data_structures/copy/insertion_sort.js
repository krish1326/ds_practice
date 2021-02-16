function insertionSort(array) {
    for (var i = 1; i < array.length - 1; i++) {
        var currentvalue = array[i];
        for (var j = i - 1; j >= 0 && array[j] > currentvalue; j--) {
            console.log(j);
        }
        console.log(j);
    }


    return array;


}
insertionSort([7, 4, 1, 3, 2]);