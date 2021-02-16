/**
 * References: 
 * https://medium.com/@pvivek4/hoisting-demystified-with-popular-interview-questions-38a93ea441ff
 * 
*/

/**
 * 
 * Hoisting in javascript is : 
 * 1. To initialise the variables before executing the code.
 * 2. variables and functions both are hoisted.
 * 3. functions are hoisted and the name is assigned with the code of the function.
 * 4. function expressions are similar to variable hoisting where they are given undefined until they 
 * are executed in the run time of code.
 * 5. variables have 2 classifications :
 *  a. var.
 *  b. let and const.
 * 
 * var will be hoisted and is assigned with undefined until it is executed in the code.
 * let/const are hoisted but we cannot use them until they are executed in the code where they are initialised 
 * 
 */

 // Variable lifecycle
let a;        // Declaration
a = 100;      // Assignment
console.log(a);  // Usage

/**
 * 
 * Order of precedence in javascript hoisting;
 * variable assignment > function declaration > variable declaration 
 * 
*/

function hello (){};
var hello;
/**
 * in the statement below :
 * if hello is not assigned a value/ just declared the output ==> function
 * if hello is assigned a value then it's type  ==> number/string basically a variable.
 */
// here it prints function as it takes the precedence
console.log(typeof hello,hello);
hello = 10;
// here it takes as 10 as the number is assigned to it;
console.log(typeof hello);



// output: "Hoisted" 
// because the function is hoisted so the function is executed as expected.
functionDeclaration() 

function functionDeclaration() {
  console.log('Hoisted')
}

function hero(exec){
exec();
}





/**
 * variable behaviour with immediately invoked function
 * expression.
 */

var variable = 10;

(function (){
    // here it will be undefined because variable is hoisted in the local scope and is undefined.
    console.log(variable);
    
    var variable = 100;

    console.log(variable);
})()

console.log(variable);



var test = 'test';

(function(){
    /** ReferenceError: Cannot access 'test' before initialization
     let would not be accessible as it is called the temporal dead zone. 
     */
    console.log(test);
    let test = 199;
    console.log(test);
});

var variable = 100;
// const variable = 200;
(function(){
    // here there is no variable in the local scope which is hoisted so it will see in the 
    //parent's scope which is global and returns 100
    console.log(variable);
    // here we are actually changing the global variable declared.
    variable = 190;

    console.log(variable);
})()
console.log(variable);
/**
 *  In Classes
 */
// This will throw a similar initialization error like let and const where they are hoisted but then they are 
// not in the scope to be used in temporal dead zone.
// var jio_user = new jio();
//  console.log(jio_user); 
class jio {
    constructor(){
        this.subs = 1;
    }
}
var jio_user = new jio();
 console.log(jio_user); 


 