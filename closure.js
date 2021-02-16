/**
 * Closures:
 * 
 * A closure is the combination of a function and the lexical environment
 * within which that function was declared.
 * 
 * 
 */


 function closures_let (){
    let array = [];
    
    for(let i =1; i<4;i++){ // here as let is block scoped every time a new i is created 
        array.push(function(){console.log(i)});
    }
    return array
 }
 var arr = closures_let()[0]
 arr();

 function closures_var(){
    var arr = [];
    for(var index = 1; index< 5 ; index ++){
        arr.push(function(){console.log(index)});
    }
    return arr;
 }

var array = [...closures_var()];
for(let fun of array){
    /**
     *  everything is printed 5 in the console as the 
     *  reference to the live location is taken by only a single
     *  variable index which is scoped to that function. 
     */
    fun(); 
}


for(let t = 0 ; t<5;t++){
    setTimeout(function(){
        console.log(t + ' first loop'); // here it prints 0 to 4 as let is block and new reference is created.
    },t*1000)
}

for(var y = 0 ;y<6;y++){
    setTimeout(function(){
        console.log(y + ' second loop'); // always 6 second loop as the var is already incremented to 6.
    },y*1000)
}


for(var var_ind = 0; var_ind<7 ; var_ind++){
    /** 
     * this is similar to let behaviour as 
     * we are creating a new reference with j which preserves the
     * value of var_ind by a closure.
     * */ 
    setTimeout((function(j){
        return function(){console.log(j + ' ' + 'third loop')} 
    })(var_ind),var_ind*1000)
}