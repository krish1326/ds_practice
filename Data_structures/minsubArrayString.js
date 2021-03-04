// longest substring with k different characters.
function minSubArrayString(string,number_of_characters){

    let ref_map = {};
    let startIndex = 0;
    let maxCount = 0;
    for(let i = 0;i< string.length;i++){
        if(ref_map[string[i]]){
            ref_map[string[i]]+=1
        }
        else{
            ref_map[string[i]] =1;
        }
        while(Object.keys(ref_map).length>number_of_characters){    
            ref_map[string[startIndex]]-=1;
            if(ref_map[string[startIndex]]==1) delete ref_map[string[startIndex]];
            startIndex+=1;
        }
        maxCount+=1;
        // a,a,a,h,h,i,b,c
    }
    console.log(maxCount);
}

minSubArrayString('AAAHHIBC',2);

// 'AAAHHIBC' 2