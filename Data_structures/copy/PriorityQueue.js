class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
        this.next = null;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(value, priority) {
        let newNode = new Node(value, priority);
        this.values.push(newNode);
        let currentSize = this.values.length;
        if (currentSize > 1) {
            let currentIndex = currentSize - 1;
            while (currentIndex > 0) {
                let parentIndex = Math.floor((currentIndex - 1) / 2);
                let parent_Value = this.values[parentIndex];
                if (value.priority <= parent_Value.priority) break;
                this.values[currentIndex] = parent_Value;
                this.values[parentIndex] = newNode;
                currentIndex = parentIndex;
            }
        }
    }
    dequeue() {
        let maxValue = this.values[0];
        this.values[0] = this.values.pop();
        let currentIndex = 0;
        while (true) {
            let child1 = this.values[(2 * currentIndex) + 1];
            let child2 = this.values[(2 * currentIndex) + 2];
            if (!child1 || !child2) {
                break;
            }
            let currentValue = this.values[currentIndex]
            let maxNodeValue = child1.priority > child2.priority ? child1 : child2;
            let maxNodeIndex = this.values.indexOf(maxNodeValue);

            if (currentValue.priority > maxNodeValue.priority) break;
            else {
                this.values[currentIndex] = maxNodeValue;
                this.values[maxNodeIndex] = currentValue;
                currentIndex = maxNodeIndex;
            }
        }
        return maxValue.priority;
    }
    displayQueue() {
        console.log(this.values);
    }
}
let priorityQueue = new PriorityQueue();
priorityQueue.enqueue(10, 2);
priorityQueue.enqueue(15, 3);
priorityQueue.enqueue(16, 1);
priorityQueue.enqueue(20, 10);
priorityQueue.enqueue(100, 16);
priorityQueue.displayQueue();
console.log(priorityQueue.dequeue());
priorityQueue.displayQueue();