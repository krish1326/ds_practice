var util = require('util');
function singlyLinkedList(value){
    this.value = value || null;
    this.next = null;
}

singlyLinkedList.prototype.addNext = function (value){
    if(!this.next){
        this.next = new singlyLinkedList(value);
    }
    else {
        let self = this;
        while(self.next){
            self = self.next;
        }
        self.next = new singlyLinkedList(value);
    }
}
function splitPairWise(head){
    let newList = new singlyLinkedList(head.next.value);
    let currentPosition = null;

    let currentNode = head;
    let nextNode = head.next;

    while(nextNode){
        if(!newList.next){
            newList.next = new singlyLinkedList(currentNode.value);
            currentPosition = nextNode;
        }
        else{
            currentPosition = new singlyLinkedList()
        }
        currentNode = nextNode;
        nextNode = nextNode.next;
    }
}
let head = new singlyLinkedList(1);
[2,3,4,5].forEach(elem=>{head.addNext(elem)})
console.log(util.inspect(head,false,null,null));


