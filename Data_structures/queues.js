const util = require("util");

/**
 * Queue: FIFO Implementation : First In First Out.
 * 
 * Enque : To add Element in the que.
 * Deque : To remove element.
 * 
 * 
 *  n1=> n2 => n3 => n4 ,n5
 *  n1 => n2 => n3 => n4 => n5
 */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    Enqueue(value) {
        var newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue() {
        if (!this.first) {
            return null;
        }
        else {
            let copy = this.first.value;
            if (this.size == 1) {
                this.first = null;
                this.last = null;
            }
            else {
                this.first = this.first.next;
            }
            this.size--;
            return copy;
        }
    }
}
let que = new Queue();
console.log(que.Enqueue(10));
que.Enqueue(15);
que.dequeue();
console.log(que);
exports.Queue = Queue;