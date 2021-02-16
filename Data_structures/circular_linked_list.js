// const Node = require('./Node').Node;
// const util = require("util");
// /**
//  *          ()
//  * 
//  * 
//  */


// class circularLinkedList {
//     constructor() {
//         this.root = null;
//         this.size = null;
//     }

//     addNewNode(value) {
//         let newNode = new Node(value);
//         if (!this.root) {
//             this.root = newNode;
//             return;
//         }
//         let node = this.root
//         while (node && node.next) {
//             node = node.next;
//         }
//         node.next = newNode;
//         newNode.previous = node,
//             this.root.previous = newNode;
//     }
//     displayList() {
//         return this.root
//     }
// }

// let list = new circularLinkedList();
// list.addNewNode(10);
// list.addNewNode(20);
// list.addNewNode(30);
// console.log(util.inspect(list.displayList(), false, null, true))



var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];


(function rotate(arr, n) {
    console.log([].concat([...arr.slice(n, arr.length), ...arr.slice(0, n)]));
})(array, 3);

// console.log(rotate(array, 3))







