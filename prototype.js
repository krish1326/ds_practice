
/**
 * Prototype : it refers to the __proto__ variable which is present
 * on every object and function created.
 */

 /**
  * functions
  */

function executeMethod(){
    console.log(...arguments)
}

console.log(executeMethod.__proto__);
/**
 * 
 * pollyfill for bind method 
 * which is used in case if it is not 
 * present in the older browsers.
 * @param  {...any} args 
 */
Function.prototype.myBind = function (...args){
    var context = this;
     var parent_params = args.slice(1);

    return function (...args2){
        context.apply(args[0],[...parent_params,...args2]);
    }
}

var obj = {
    a: 10,
    b:20
}
var test = executeMethod.myBind(obj,1,2,3,4);
test(5,6,7,8);


