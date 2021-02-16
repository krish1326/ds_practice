function selectionSort(array) {
    let currentMin;
    let changestatus;
    for (let i = 0; i < array.length; i++) {
        currentMin = i;
        changestatus = false;
        for (j = i; j < array.length; j++) {
            console.log(array[j], currentMin)
            if (array[j] < array[currentMin]) {
                currentMin = j;
                changestatus = true;
            }
        }
        if (changestatus) {
            let temp = array[i];
            array[i] = array[currentMin];
            array[currentMin] = temp;

        }

        console.log(array);
    }
    return array;
}
console.log(selectionSort([12, 3, 4, 2, 6]));