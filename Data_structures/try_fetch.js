const axios = require('axios')
async function getRequestsInSeries(){
    let request_url = 'https://jsonplaceholder.typicode.com/todos?userId='
    let result = [];
    for(let i = 1; i<=4;i++){
    await axios.get(request_url + i).then((data)=>data.data).then((data)=>{
        console.log(i,result);
        result.push(data);}).catch((err)=>{console.log(err)})
        console.log(i);
    }
//  console.log(result);
return result;
}
getRequestsInSeries().then(data=>{console.log(data[0].length)});


function getRequestsInParallel (){
    let request_url = 'https://jsonplaceholder.typicode.com/todos?userId=';
    
    let res = [];

    for(let i = 1; i<=4 ; i++){
        let new_promise = axios.get(request_url +i);
        res.push(new_promise);
    }
    Promise.all(res).then(data=>{
        let result = data.map(ele=>ele.data);
        console.log(result.length);
    })
}
getRequestsInParallel();
