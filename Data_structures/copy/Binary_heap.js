/**
 * Heaps : These are a special implementaton of tree data structure.
 * The implementation of priority Queues is based on heaps.
 *
 * Max-heap: Here all the child values are lesser than it's parent.
 * Min-heap: the root is the smallest of all.
 *
 * heap parent-children relationship:
 *
 * binary-heap if we index the elements into a list like an array,
 * the child corresponding to a parent are found using
 *
 * heaps are built using array's or list.
 *
 * a. parent-child relationship:
 * [left,right]: [2n+1,2n+2];
 *      where n is the index of the parent node
 *
 *              100
 *          25      26
 *      12    17  15    19
 *
 *  here let us suppose an array starting from root if we see : [100,25,26,12,17,15,19];
 *
 * So let us say 25 it's index in array is 1... now it's child are at [2*1+1,2*1+2] ==> [3,4]
 *
 * so the elements [12,17] are the child of 25 as we see from tree. which is the generalised
 *
 * representation above as [2n+1,2n+2];
 *
 * b.child-parent relationship:
 *
 * suppose child is at a position of n, then it's parent can be found at a position of
 *
 * Math.floor((n-1)/2) ==> this is to take the decimal position of the index we refer.
 * 
 */
class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(value) {
        this.values.push(value);
        let currentSize = this.values.length;
        if (currentSize > 1) {
            let currentIndex = currentSize - 1;
            while (currentIndex > 0) {
                let parentIndex = Math.floor((currentIndex - 1) / 2);
                let parent_Value = this.values[parentIndex];
                if (value < parent_Value) break;
                this.values[currentIndex] = parent_Value;
                this.values[parentIndex] = value;
                currentIndex = parentIndex;
            }
        }
    }
    extractMax() {
        let maxValue = this.values[0];
        let least_value = this.values[this.values.length - 1];
        this.values.splice(0, 1);
        this.values = [least_value, ...this.values];
        this.values.splice(this.values.length - 1, 1);

        let currentIndex = 0;
        while (true) {
            let child1 = this.values[(2 * currentIndex) + 1];
            let child2 = this.values[(2 * currentIndex) + 2];
            let currentValue = this.values[currentIndex]
            let maxNodeValue = child1 > child2 ? child1 : child2;
            let maxNodeIndex = this.values.indexOf(maxNodeValue);

            if (currentValue > maxNodeValue) break;
            else {
                this.values[currentIndex] = maxNodeValue;
                this.values[maxNodeIndex] = currentValue;
            }
        }
        return maxValue;
    }
    displayHeap() {
        console.log(this.values);
    }
}
let test_max_binary_heap = new MaxBinaryHeap();
test_max_binary_heap.insert(10);
test_max_binary_heap.insert(100);
test_max_binary_heap.insert(55);
test_max_binary_heap.insert(12);
test_max_binary_heap.insert(65);
test_max_binary_heap.insert(66);
test_max_binary_heap.insert(16);
test_max_binary_heap.insert(200);

// [100, 25, 26, 12, 17, 15, 19].map(val => { test_max_binary_heap.insert(val) });

test_max_binary_heap.displayHeap();
console.log(test_max_binary_heap.extractMax());
test_max_binary_heap.displayHeap();