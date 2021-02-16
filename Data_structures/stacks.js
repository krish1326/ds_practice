const util = require("util");
/**
 * LIFO:Last In First Out.
 * FIFO:First In First Out.
 * Stacks : these are data structure those follow LIFO principle 
 * These are used : 
 * 
 * 1) function invocations.
 * The call stack in the recursive functionality is an example of this.
 * 
 * 2) undo/ Redo actions in editing tools like when we trying to redo the previous action in vs code 
 * it is ctrl + z to undo which makes the latest action to neglect rather than the first one which is
 * an example of stack's implementation.
 * 
 * Ques : They follow the FIFO priniple.
 */
// import './singlyLinkedList'

/**
 * Array implementation of Stack:
 * 
 * We can use array to implement the stack functionality by means of 2 ways :
 * 1) unshift and shift : where the elements are added at the beginning and the end.
 * But there is a cost of reindexing every element by doing this method. So we do not use this to implement 
 * stack.
 * 2) the built in push and pop methods of array which adds the elements at the last and delete the last
 * one which would give the same function of a stack.
 */
let log=console.log;
let a =[1,2,3,4];
a.unshift(10);// this will add elements at the begining of the array
log(a);
log(a);
a.shift();// this will remove the first element.
a.push(12);// add at the last
log(a);
a.pop();// remove at the last.
console.log(a);

/**
 * Linked-List Implementation for Stack;
 * 
 * Here the implementation is easy as the order of removal is constant 
 * we will just make the change in reference of the first element.
 * when poping of we will refernce the element to next element.
 */

 class Node {
    constructor(value){
        this.value=value;
        this.next=null;
    }
 }
class Stack{
    constructor(){
        this.first =null;
        this.last=null;
        this.size=0;
    }
    push(value){
        var newNode = new Node(value);
        if(!this.first){
            this.first= newNode;
            this.last=newNode;
        }
        else{
            newNode.next=this.first;
            this.first=newNode;
        }
        this.size++;
    }
    pop(){
        if(!this.first){
            return null;
        }
        else{
            if(this.size == 1){
                this.first=null;
            }
            else{
                this.first = this.first.next;
            }
            this.size--;
        }
    }
    displayStack(){
        console.log(util.inspect(this.first,false,null,true));
        console.log(this.size);
    }
}
var stack1 = new Stack();
stack1.push(10);
stack1.push(20);
stack1.push(30);
stack1.push(12);
stack1.displayStack();
stack1.pop();
stack1.pop();
stack1.pop();
stack1.pop();
stack1.pop();
stack1.displayStack();

/**
 * Big O of Stacks :
 * 
 * pushing and poping is constant time in linked list implementation so 
 * 1) Insertion and deletion is constant time as it only refers to the context of pushing or poping 
 * 
 * 2) when it comes to searching or accessing it will be O(n), but it is not what for stacks are used.
 * 
 * The linked lists are the best implementation for Stacks.
 */