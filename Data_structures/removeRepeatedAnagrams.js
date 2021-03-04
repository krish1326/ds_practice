function removeRepeatedAnagrams(array){

    let ref_map = {};
    let result = new Set();
    for( let str of array){
        let current_string = str.toLowerCase().split('').sort().join('');
        if(!ref_map[current_string]){
            ref_map[current_string] = str;
        }
        else{
            result.add(ref_map[current_string]);
        }
    }
    return Array.from(result);
}

console.log(removeRepeatedAnagrams(['code','doce','odce','eodc','aeid','idea','fame','mafe','eafm']));