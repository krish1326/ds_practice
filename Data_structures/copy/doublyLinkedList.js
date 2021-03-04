const util = require('util');
class Node {
    constructor(value=null,next=null,previous=null){
        this.value = value;
        this.next = next;
        this.previous = previous;
    }
}
class DoublyLinkedList {
    constructor(root){
        this.root = null;
        this.length = 0;
    }
    addNode(value){
        if(!this.root){
            this.root = new Node(value);
        }
        else{
            
            let currentNode = this.root;
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = new Node(value,null,currentNode);
        }
    }
    displayList(){
        console.log(util.inspect(this.root,false,null,true))
    }
}
let list = new DoublyLinkedList();
list.addNode(10);
list.addNode(12);
list.addNode(17);
list.displayList();
