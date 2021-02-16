// const util = require('util')
/**
 * Non-Linear data structures : 
 * The data structures which does have multiple paths for iterations are called non-linear Data structures
 * Examples: Trees, Maps,etc..;
 * Trees : These are the non Linear Data structures which are used to store the data at multiple levels"
 * 
 * Tree Nomencleature:
 * 1) Root: The top most layer of the Tree. 
 * 2) parent: A node which has child/chidren is a parent.
 * 3) children:A node which is referenced by it's parent. children and leafs are different.
 * 4) Leaf: A node which does'nt have any children.
 * 5) Edge: A line between two nodes of a tree.
 * 
 * Rules for Tree :
 * 1) A tree must have one and only one root node.
 * 2) No two sibling nodes will have a edge between them selves.
 * 3) The Edges must always go in one direction from top to bottom.
 * 
 * Implementations of Tree data structures:
 * 1) Computer OS Folder structure.
 * 2) JSON key value pairs are trees.
 * 3)HTML DOM.
 * 4) Network Routing algorithims trees are used.
 * 
 * Types of trees:
 * 1) Binary search Trees:
 *  a. Every Parent will have atmost 2 child nodes.
 *  b. The child nodes to the left of parent will be less than the parent and to the right will be more than
 *     the parent node.
 * 
 *  
 */

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.count = 0;
    }
}
class BinarySearchTree extends Node {
    constructor() {
        super();
        this.root = null;
    }
    insertIntoTree(value) {
        var newNode = new Node(value);
        if (!this.root) {
            newNode.count += 1;
            this.root = newNode;
            return;
        }
        else {
            const searchFunction = function (node) {
                if (node.value > value) {
                    if (!node.left) {
                        newNode.count += 1;
                        node.left = newNode;
                        return;
                    }
                    else {
                        return searchFunction(node.left);
                    }
                }
                else if (node.value == value) {
                    node.count += 1;
                    return;
                }
                else {
                    if (!node.right) {
                        newNode.count += 1;
                        node.right = newNode;
                    }
                    else {
                        return searchFunction(node.right);
                    }
                }
            }
            return searchFunction(this.root);
        }
    }
    isNumberPresent() {

    }
    displayTree() {
        console.log(this.root, true, null, true);
    }
}
let bst1 = new BinarySearchTree();
bst1.insertIntoTree(10);
bst1.insertIntoTree(5);
bst1.insertIntoTree(7);
bst1.insertIntoTree(12);
bst1.insertIntoTree(11);
bst1.insertIntoTree(27);
bst1.insertIntoTree(16);
bst1.insertIntoTree(1);
bst1.insertIntoTree(2);
bst1.insertIntoTree(3);
bst1.insertIntoTree(3);
bst1.insertIntoTree(4);
bst1.displayTree();