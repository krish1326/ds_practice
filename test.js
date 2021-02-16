 function test(name='buddy'){
     this.name = 'hello ' + name;
 }

 var ex = new test();
 console.log(ex);

 var person = {
    name : 'krishna',
    age:10
 };
//  Object.freeze(person);
//  person.address = 'india';
 Object.seal(person);
 person.age = 11;
 console.log(person);
console.log(Object.getOwnPropertyDescriptor(person,'age'))
Array.prototype.findDuplicate = function (){

    let arr = [...this];
    let result = {};
    let ref_map = {};
        
    for(let i = 0 ; i< arr.length;i++){
            if(!ref_map[arr[i]]){
                ref_map[arr[i]] = true;
            }
            else{
                result['index'] = i;
                result['val'] = arr[i];
                return result;
            }
    }

}

console.log([1,2,2,3,4,1].findDuplicate());

function sum(...args){
    let count = args.length;
    if(count ==1){
        return function(b){
            return args[0] + b;
        }
    }
    else{
        return args[0] + args[1];
    }
}

console.log(sum(10)(20));
console.log(sum(10,20));

console.log(Object.getOwnPropertyDescriptor(person,"name"));