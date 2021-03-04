/**
 * This method works in such a way that 
 * it will replace the values of the val in 
 * each of the element of b if the same id existed in 
 * a with value of a.
 */
function some(){

    var a = [{id: 0, value: 0},{id: 1, value: 100},{id: 2, value: 200},{id: 3, value: 300},{id: 4, value: 400},{id: 5, value: 500},{id: 6, value: 600},
     {id: 7, value: 700},
     {id: 8, value: 800},
     {id: 9, value: 900},
     {id: 10, value: 1000}
        ]
    var b = [{id: 5, value: 250},{id: 6, value: 300},{id: 7, value: 350}, {id: 8, value: 400}, {id: 9, value: 450}, {id: 10, value: 500}]
    
    let ref_a = {};
    
    for (let elem of a ) {
            ref_a[elem['id']] = elem['value'];
        }
    
    for(let ele of b){
            if(ref_a[ele['id']]){
            ele['value'] = ref_a[ele['id']];
            }
        }
    return b;
    }
    console.log(some());