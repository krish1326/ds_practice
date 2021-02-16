var obj = {
    a:'1',
    b:'2',
    getInfo(){
        console.log("inside obj");
    }

};

var obj2 = {
    c: 10,
    getInfo(){
        console.log("inside obj2");
    }
}
obj2.__proto__ = obj;

console.log(obj2.a);
console.log(obj2.getInfo())

class test1 {
    constructor (){
        this.a = 10;
        this.b = 12;
    }
    getInfo(){
        console.log("get info from test1");
    }
}
class test2 extends test1{
    constructor(){
        super();
        this.c = 100;
    }
    getInfo(){
        console.log('get Info from test2');
    }
}

var x = new test2();
console.log(x.a);
console.log(x.getInfo());
