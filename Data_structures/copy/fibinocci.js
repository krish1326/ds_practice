var fibonacciTest = function () {
    
    let memmoized_cache = {};
    return function(number){
    // store the Fibonacci sequence you're going
    // to generate inside an array and
    // initialize the array with the first two
    // numbers of the sequence
    const result = [0, 1]
    memmoized_cache[0]=0;
    memmoized_cache[1]=1;
    if(memmoized_cache[number]){
        console.log('inside cache');
        console.log(memmoized_cache);
        return memmoized_cache[number];
    }
    for (let i = 2; i <= number; i++) {
        // push the sum of the two numbers
        // preceding the position of i in the result array
        // at the end of the result array
        const prevNum1 = result[i - 1]
        const prevNum2 = result[i - 2]
        memmoized_cache[i] = prevNum1 + prevNum2;
        result.push(prevNum1 + prevNum2)
    }
    // return the last value in the result array
    return result[number]
    }
}
let fib_number = Number(process.argv.slice(2,process.argv.length)[0]);
let fib_function = fibonacciTest();
console.log(fib_function(fib_number));
console.log(fib_function(5));