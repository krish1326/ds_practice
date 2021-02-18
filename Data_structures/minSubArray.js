
/**
 * This method returns the minimum length of contiguous 
 * sub array whose sum is greater than or equal to 
 * provided sum value.
 * 
 * 
 * @param {*} array 
 * @param {*} sum 
 */
function minSubArray(array,sum){
    let start = 0;
    let minWindowLength = Infinity;
    let currentWindowSum = 0;
    if(!sum && sum !=0) return null;
    for(let j = 0; j<array.length;j++){
        currentWindowSum+=array[j];
        while(currentWindowSum>=sum && minWindowLength>1){
            console.log(currentWindowSum,sum,j,start,minWindowLength)
            minWindowLength = Math.min((j-start+1),minWindowLength);
            currentWindowSum-= array[start];
            start+=1;
        }
        if(minWindowLength==1) {break;}
    }   
    return minWindowLength;
}

console.log(minSubArray([4,2,2,7,8,1,2,3,0],16))