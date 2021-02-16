/**
 * Scope of a variable : The place where the variable is defined and is used.
 * 
 * There are 2 types of scopes : 
 * 
 * 1. Global scope.: the variables has existence all over the place
 * 
 * 2. Local Scope : 2 sub types (Functional and block scope)
 *  
 * a. block scope: the scope between two curly braces is called block scope (ex: {},if(){}...)
 *  
 * b. Function scope: The scope of variable which is inside that of a function.
 * 
 */

 console.log(index_var);
var x = 10;
let y = 100;

{
    console.log(x,y);
}

(function test (){
     var x = 100; // this will create a new variable in the local scope.
})();

(function (){
    console.log(x);
    x = 1000 // this changes the global scope variable.
})()

console.log(x);


/**
 * block scope : 
 * 
 * var is function scope, so it is available in the global scope in the file.
 * 
 * which is a bad practice as we have the variable to be having it's existence 
 * 
 * through out the overall time of execution of the script.
 * 
 * let/ const are block scoped.. i.e. they are only limited to be held inside 
 *  
 * the block that they are defined, so they do not pollute the global namespace.
 * 
 *  */ 


for( var index_var = 0; index_var<4;index_var++){
    // console.log(var)
}
console.log(index_var);

for(let index_let = 0 ; index_let < 10; index_let++){
}
// console.log(index_let); 