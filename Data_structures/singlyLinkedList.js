const util = require("util");
/**
 * Singly Linked List using javascript.
 * Methods implemented :
 *
 * 1) Add at any given index
 * 2) Remove at any Index
 * 3) Add first to chain or list
 * 4) Remove first to chain
 * 5) Remove Last to chain
 * 6) Add Last to chain.
 * 7) Get Size of Chain.
 */
class Node {
  constructor(next = null, data) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.root = null;
    this.size = 0;
  }
  addFirst(value) {
    /*
     *    n1 => n2 => n3 => n4 => n5 , new_node  ==> input
     *    new_node=>n1=>n2=>n3=>n4=>n5 ==> output
     *    new node's next point's to n1
     */
    if (this.root) {
      var new_node = new Node(this.root, value);
      this.root = new_node;
    } else {
      this.root = new Node(null, value);
    }
    this.size++;
  }
  addLast(value) {
    /**
     * n1 => n2 => n3 => n4 => n5 , new_node  ==> input
     * n1 => n2 => n3 => n4 => n5=>new_node ==> Output
     * new node must be pointed by the last node.
     *
     * If list is empty then the root is taken to be the new node.
     */
    var node_new = new Node(null, value);
    if (this.root) {
      var currentNode = this.root;
      while (currentNode && currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node_new;
    } else {
      this.root = node_new;
    }
    this.size++;
  }
  removeFirst() {
    /**
     * n1 => n2 => n3 => n4 => n5 input
     * n2 => n3 => n4 => n5   ==> output.
     * Here the first node in the list is removed.
     */
    if (this.root) {
      this.root = this.root.next;
    }
    this.size--;
  }
  removeLast() {
    /**
     *  n1 => n2 => n3 => n4 => n5 => n6
     *
     * if only one node is present remove the root, else we have to identify the node whose next value is the last element.
     * so to achieve this
     * 1) if single node ==> convert root to null
     * 2) else ==> if current , current.next , current.next.next all the three must exist that means the current.next.next ==> this existence means it's not a last node
     *  so if it is last node it will be null and we will set the current.next to null in order to remove that desired last node.
     */

    let currentNode = this.root;

    if (currentNode && currentNode.next) {
      while (currentNode && currentNode.next && currentNode.next.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
    } else {
      this.root = null;
    }
    this.size--;
  }
  removeAnyWhereInList(index = 0) {
    if (index === 0) {
      this.removeFirst();
    } else {
      for (
        let currentNode = this.root, i = 0;
        currentNode;
        currentNode = currentNode.next, i++
      ) {
        if (index === i + 1) {
          if (!currentNode.next) {
            this.removeLast();
          } else {
            //  0     1       2     3
            // n1 ==> n2 ==> n3 ==> n4
            currentNode.next = currentNode.next.next;
          }
        }
      }
    }
    this.size--;
  }
  addAnyWhereInTheList(index = 0, value) {
    if (index === 0) {
      this.addFirst(value);
    } else {
      //  0     1       2     3
      // n1 ==> n2 ==> n3 ==> n4
      for (
        let currentNode = this.root, i = 0;
        currentNode;
        currentNode = currentNode.next, i++
      ) {
        if (i === index - 1) {
          if (!currentNode.next) {
            this.addLast(value);
          } else {
            let newNode = new Node(currentNode.next, value);
            currentNode.next = newNode;
          }
        }
      }
    }
    this.size++;
  }
  displayList() {
    return this.root;
  }
  displaySize() {
    console.log(this.size);
  }
}
var linkedList_new = new LinkedList();
linkedList_new.addLast(19);
linkedList_new.addLast(25);
linkedList_new.addLast(15);
linkedList_new.addFirst(17);
linkedList_new.removeAnyWhereInList(3);
console.log(util.inspect(linkedList_new.displayList(), false, null, true));
linkedList_new.removeFirst();
console.log(util.inspect(linkedList_new.displayList(), false, null, true));
linkedList_new.addAnyWhereInTheList(1, 10);
console.log(util.inspect(linkedList_new.displayList(), false, null, true));
linkedList_new.displaySize();
