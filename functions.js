
/**
 * constructor functions: These are the functions that are 
 * implicitly bound to the this variable which are used with
 * the new keyword in javascript.
 * 
 *  when we do creating objects by new key word the following things
 * will happen : 
 * 
 * 1. an empty object is created.
 * 2. the __proto__ will be set to the prototype of the
 * constructor function.
 * 3. The this implicit binding is done in the object, where 
 * this refers to the newly created object.
 * 4. the reference to the this returned if a return value is not a
 * object.
 * 
 * with refernce to return type in function constructors :
 * 
 * 1. return type is object then the object returned will be stored in the variable.
 * 2. if return type is not of object type then this is returned by default.
 */

function test (){
    this.a = 10;
    this.b = 100;    
    //return 1; if we use this the output will be the implicit this so ==> test { a: 10, b: 100 }
    // return [1,2,3,4]; if we use this the output is an array as the type is a object.
}

var test1 = new test();
console.log(test1);

