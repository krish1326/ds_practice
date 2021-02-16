/**
 * this key word 
 */

 function f(){
    /**
     *  window object in browser or global object in node.js 
     * this refers to the call site or the execution context
     * where it is executed.
     */
    console.log(this);
    this.x = 100;
 }
 f();

/** 
 * when we use new key word a new object is created with the this 
 * refering to that object and properties are added to that object
 * and the object is returned. 
 * */ 

 var f_obj = new f();
 console.log(f_obj);

/**
 * Explicit binding methods :
 * call apply bind methods : 
 * call, apply, bind will take this as the first argument, where the 
 * this refers to the execution context that's needed while execution of function
 * 
 * call and apply are similar but then the difference is the way that 
 * arguments are passed into the function call. 
 * a. call arguments are passed from the second parameter as a list.
 * b. apply in this the arguments are passed as array in the second parameter.
 * 
 * bind method will return a reference of the function with populating this as the execution
 * context which we call with the parameters.
 * @param {*} x 
 * @param {*} y 
 */

function displayAB(x,y){
    console.log(this.a,this.b,x,y);
}
 var obj_1 = {
     a: 10,
     b: 17
 }
 var obj_2 = {
     a: 12,
     b:16
 }
 // execution context is obj_1
 displayAB.call(obj_1,2,2);
 // execution context is obj_2
 displayAB.apply(obj_2,[1,3,3]);
 let obj2_ref = displayAB.bind(obj_2);
obj2_ref(5,7);

/**
 * Implicit binding methods :
 * 
 * These methods are which the this is determined 
 * during the run time.
 */
var obj = {
    a: 1,
    fun : function (){
        console.log(this);
    },
    g(){
        console.log(this);
    }
}
obj.fun();
obj.g();
var fun = obj.fun;
console.log(fun);
/**  here the this points to the window because the 
 * context where it is getting called is the 
 * window .  
*/

fun();

function f4() {
    console.log(this.a);
  }
  let obj1 = {
    a: 1,
    f4: f4, // direct reference to f()
  };
  let obj2 = {
    a: 2,
    obj1: obj1,
  };
  let obj3 = {
    a: 3,
    f4: obj1.f4,// direct reference to f()
    test:function (){
      (fu)
    }
  };
  obj1.f4(); // value is 1 - implicit binding
  obj2.obj1.f4(); // value is 1 - implicit binding
  obj3.f4(); // value is 3 - implicit binding lost
