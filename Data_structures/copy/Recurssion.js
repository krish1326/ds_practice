function capitalizeFirst(array) {
    // add whatever parameters you deem necessary - good luck!
    if (array.length === 0) {
        return null;
    }
    if (array.length === 1) {
        let result = array[0].split('');
        result[0] = result[0].toUpperCase();
        result = result.join("");
        array[0] = result;
        return array[0];
    }
    let result = array[0].split('');
    result[0] = result[0].toUpperCase();
    result = result.join("");
    array[0] = result;

    return [array[0]].concat(capitalizeFirst(array.slice(1)));
}
console.log(capitalizeFirst(["cat", "bat", "banana"]))

function sumRange(number) {
    if (number === 1) return 1;
    return number + sumRange(number - 1);
}
console.log(sumRange(10));

function factorial(number) {
    if (number === 1) return 1;
    return number * factorial(number - 1);
}
console.log(factorial(5));
