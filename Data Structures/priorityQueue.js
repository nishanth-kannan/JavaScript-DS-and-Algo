class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

// Priority Queue implementation using Min Binary Heap. Lower number for priority = Higher priority 
class PriorityQueue{ // Priority Queues are usually implemented using Binary Heaps
    constructor(){
        this.heap = [];
    }

    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.heap.push(newNode);    

        let n = this.heap.length - 1;

        while(n > 0){
            let parent = this.heap[Math.floor((n-1)/2)];
            if(this.heap[n].priority >= parent.priority) break;

            swap(this.heap, n, Math.floor((n-1)/2));
            n = Math.floor((n-1)/2);
        }

        return this.heap;
    }

    dequeue(){
        const minElem = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown();
        }
        return minElem;
    }
    sinkDown(){
        let index = 0;
        const len = this.heap.length;
        const elem = this.heap[0];
        while(true){
            let leftChildIndex = 2*index + 1;
            let rightChildIndex = 2*index + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIndex < len){
                leftChild = this.heap[leftChildIndex];
                if(leftChild.priority < elem.priority){
                    swap = leftChildIndex;
                }
            }
            if(rightChildIndex < len){
                rightChild = this.heap[rightChildIndex];
                if((swap == null && rightChild.priority < elem.priority) || (swap != null && rightChild.priority < leftChild.priority)){
                    swap = rightChildIndex;
                }
            }

            if(swap == null) break;
            this.heap[index] = this.heap[swap];
            this.heap[swap] = elem;
            index = swap;
            
        }
    }
}

function swap(arr, i, j){ // swaps array elements with given indices
    [arr[j], arr[i]] = [arr[i], arr[j]];
    return arr;
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue(10, 2);
priorityQueue.enqueue(15, 5);
priorityQueue.enqueue(6, 4);
priorityQueue.enqueue(5, 7);
priorityQueue.enqueue(84, 3);
priorityQueue.enqueue(45, 1);
console.log(priorityQueue);
console.log(priorityQueue.dequeue());
console.log(priorityQueue);
console.log(priorityQueue.dequeue());
console.log(priorityQueue);
console.log(priorityQueue.dequeue());
console.log(priorityQueue);
console.log(priorityQueue.dequeue());
console.log(priorityQueue);
console.log(priorityQueue.dequeue());
console.log(priorityQueue);

