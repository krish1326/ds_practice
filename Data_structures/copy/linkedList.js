const util = require('util');
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
  }
  /**
   * Traverse till the end of the list and add new node.
   * 
   * @param {*} value 
   */
  addLast(value) {
    var node_new = new Node(null, value);
    if (this.root) {
      var currentNode = this.root;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node_new;
    } else {
      this.root = node_new;
    }
  }
  /**
   * To remove the node at the root.
   */
  removeFirst() {
    if (this.root) {
      this.root = this.root.next;
    }    
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
  }
  displayList() {
    console.log(util.inspect(this.root,false,null,null));
  }
  /**
   * Reverse the entire list.
   */
  reverseList() {
    // 1 => 2 => 3 => 4
    // 4 => 3 => 2 => 1
    let new_list = null;
    let currentNode = this.root;
    let values = [];
    while (currentNode) {
      values.push(currentNode.data);
      currentNode = currentNode.next;
    }
    values = values.reverse();
    this.root = null;
    values.forEach((value) => {
      this.addLast(value);
    });
    this.displayList();
  }
  swapList(){
      let values = [];
      let currentNode = this.root;
      
      while(currentNode && currentNode.next){
        [currentNode.data, currentNode.next.data] = [currentNode.next.data, currentNode.data];
        currentNode = currentNode.next.next;
      }
      console.log(currentNode);
    //   while(currentNode){
    //       values.push(currentNode.data);
    //       currentNode=currentNode.next;
    //   }
    //   let count_index = 0;
    //   let new_list = new LinkedList();
    //   while(count_index<values.length){
    //     let temp = values.slice(count_index,count_index+2);
          
    //       if(!new_list){
    //         new_list.addFirst(temp[1]);
    //         new_list.addLast(temp[0])        
    //       }
    //       else{
    //         new_list.addLast(temp[1]);
    //         new_list.addLast(temp[0]);
    //       }
    //       count_index+=2;
    //   }
    //   return new_list;
  }
}
var linkedList_new = new LinkedList();
linkedList_new.addLast(19);
linkedList_new.addLast(25);
linkedList_new.addLast(15);
linkedList_new.addFirst(17);
linkedList_new.addLast(78);
linkedList_new.addLast(67);
linkedList_new.addFirst(18);
linkedList_new.addLast(19);
linkedList_new.addLast(21);
// console.log(linkedList_new.displayList());
// linkedList_new.reverseList();
linkedList_new.swapList();