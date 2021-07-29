// class PriorityQueue { // slow implementation of priority queue
//     constructor(){
//       this.values = [];
//     }
//     enqueue(val, priority) {
//       this.values.push({val, priority});
//       this.sort();
//     };
//     dequeue() {
//       return this.values.shift();
//     };
//     sort() {
//       this.values.sort((a, b) => a.priority - b.priority);
//     };
// }

class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

// Fast Priority Queue
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


class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node: vertex2, weight}); // weight is added to a property called weight itself cause js allows that
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }

    Dijkstra(start, finish){
        // Initialising all the required objects
        const distances = Object.keys(this.adjacencyList).reduce((ac,a) => ({...ac,[a]:Infinity}),{}); // makes a object that sets all weights as infinity in the beginning
        distances[start] = 0;
        const previous = {};

        const nodes = new PriorityQueue(); //setting up priority queue
        for(let elem in distances){
            if(elem == start) nodes.enqueue(elem, 0);
            else nodes.enqueue(elem, Infinity);
            previous[elem] = null; // setting up the previous object
        }

        // visiting nodes
        while(nodes.values.length){
            let smallest = nodes.dequeue().val;
            if(smallest == finish){
                let path = [finish];
                let elem = previous[finish];
                while(elem != null){
                    path.push(elem);
                    elem = previous[elem];
                }
                return path.reverse(); // returns the path it takes
            }
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbour in this.adjacencyList[smallest]){
                    let nextNode = this.adjacencyList[smallest][neighbour];

                    // checking if nextNode is what we need for shortest path
                    let candidate = distances[smallest] + nextNode.weight;  
                    let nextNeighbour = nextNode.node;
                    if(candidate < distances[nextNeighbour]){ // if it is, update distances
                        distances[nextNeighbour] = candidate;
                        previous[nextNeighbour] = smallest; // update previous
                        nodes.enqueue(nextNeighbour, candidate);
                    }
                }
            }
        }


    }
}

let graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


console.log(graph.Dijkstra("A", "E"));
