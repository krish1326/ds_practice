let Tree = require('./trees').BinarySearchTree;
let Queue = require('./queues').Queue;


/**
 * Breadth first search: 
 * 
 * This method is to traverse to all the nodes of tree in such a fashion 
 * that all the nodes of particular level are traversed first and then, the 
 * child levels are traversed 
 * 
 *          10
 *      8           12
 *    6    9     5      16
 * 
 * let us suppose this is the tree we have then.. we will have the traversing order as [10,8,12,6,9,5,16];
 * 
 * so the level of ordering is 10 then...[8,12] as they are in same level, then the child level [6,9,5,16] 
 * 
 * the implementation is we will have 2 lists in place : Queue and a list.
 * 
 * Queue .. to move the node hierarchy.
 * 
 * List : To keep track of the visited Nodes.
 * 
 */

let test_tree = new Tree();
let que = new Queue();
test_tree.insertIntoTree(10);
test_tree.insertIntoTree(25);
test_tree.insertIntoTree(6)
test_tree.insertIntoTree(1);
test_tree.insertIntoTree(2);
test_tree.insertIntoTree(3);
test_tree.insertIntoTree(8);
test_tree.insertIntoTree(9);
test_tree.insertIntoTree(12);
test_tree.insertIntoTree(13);
test_tree.insertIntoTree(55);
test_tree.insertIntoTree(60);
test_tree.insertIntoTree(17);
test_tree.insertIntoTree(11);
test_tree.insertIntoTree(7);

let visitedOrder = [];
que.Enqueue(test_tree.root);

while (que.size != 0) {
    let currentElement = que.dequeue();
    visitedOrder.push(currentElement.value);
    if (currentElement.left) {
        que.Enqueue(currentElement.left);
    }
    if (currentElement.right) {
        que.Enqueue(currentElement.right);
    }
}
console.log(visitedOrder);
/**
 * Depth First Search :
 * 
 * here the search is done in depth wise where either the left or right of the 
 * tree is taken first and all the depth of it is traversed and then the right 
 * part is traversed.
 * 
 * a. pre-order DFS : In this we will visit to a node and add it's value and go
 * left or right of node and then add their values.
 * b. post-order DFS : Here the change that we have is that the node's value is
 * said to be visited only if all of it's children(if any..) are all visited.
 * c. In-order DFS: 
 */
let visitedNodes_Pre_order = [];
function depthFirstSearchPreOrder(node) {
    visitedNodes_Pre_order.push(node.value);
    if (node.left) {
        depthFirstSearchPreOrder(node.left);
    }
    if (node.right) {
        depthFirstSearchPreOrder(node.right);
    }
}
depthFirstSearchPreOrder(test_tree.root);
console.log(visitedNodes_Pre_order);

let visitedNodes_post_order = [];
function depthFirstSearchPostOrder(node) {
    if (node.left) {
        depthFirstSearchPostOrder(node.left);
    }
    if (node.right) {
        depthFirstSearchPostOrder(node.right);
    }
    visitedNodes_post_order.push(node.value);
}
depthFirstSearchPostOrder(test_tree.root);
console.log(visitedNodes_post_order);

let visitedNodes_in_order = [];
function depthFirstSearchInOrder(node) {
    if (node.left) {
        depthFirstSearchInOrder(node.left);
    }
    visitedNodes_in_order.push(node.value)
    if (node.right) {
        depthFirstSearchInOrder(node.right);
    }
}
depthFirstSearchInOrder(test_tree.root);
console.log(visitedNodes_in_order);

