var obj = {
    a:'1',
    b:'2'
}

var obj2 = Object.create(obj);
console.log(obj2.__proto__,Object.getPrototypeOf(obj2));

var obj3 = Object.assign(obj);
console.log(obj3.__proto__);

Object.defineProperties(obj3,{
    "jio":{
        value:"hello",
        // enumerable:true,
        configurable:true,
        writable:true
    }
})

Object.defineProperty(obj3,'hey',{enumerable:true,configurable:false,get hey(){
    return "hello"
}})
console.log(obj3['hey'])
console.log(obj3['jio'],Object.getOwnPropertyDescriptor(obj3,'jio'))
for(let key in obj3){
    console.log(key,obj3[key]);
}
console.log(obj3);

/**
 * Property descriptors
 * 
 * 2 sets : 
 * 
 * value based  or set/get based.
 * 
 */