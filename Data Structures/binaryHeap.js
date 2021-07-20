class MaxBinaryHeap{ // Opposite of Min Binary Heaps where the min element is root and children are elements larger than parent
    constructor(){
        this.heap = [41, 39, 33, 18, 27, 12];
    }

    insert(val){
        this.heap.push(val);    

        let n = this.heap.length - 1;

        while(n > 0){
            let parent = this.heap[Math.floor((n-1)/2)];
            if(this.heap[n] <= parent) break;

            swap(this.heap, n, Math.floor((n-1)/2));
            n = Math.floor((n-1)/2);
        }

        return this.heap;
    }

    extractMax(){
        const maxElem = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown();
        }
        return maxElem;
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
                if(leftChild > elem){
                    swap = leftChildIndex;
                }
            }
            if(rightChildIndex < len){
                rightChild = this.heap[rightChildIndex];
                if((swap == null && rightChild > elem) || (swap != null && rightChild > leftChild)){
                    swap = rightChildIndex;
                }
            }

            if(swap == null) break;
            this.heap[index] = this.heap[swap];
            this.heap[swap] = elem;
            index = swap;
            
        }

    }

    // This is a working method but doesn't translate well to priority queues

    // extractMax(){
    //     if(this.heap.length == 0) return false;
    //     swap(this.heap, 0, this.heap.length-1);
    //     let maxElem = this.heap.pop();

    //     let n = 0;
    //     while(n < this.heap.length - 1){
    //         let left = this.heap[2*n+1] || true; // if undefined (no right or left exist), right or left would become true values
    //         let right = this.heap[2*n+2] || true; 

    //         if(this.heap[n] > left && this.heap[n] > right) break;

    //         if(left > right){
    //             swap(this.heap, n, 2*n+1);
    //             n = 2*n+1;
    //         } else {
    //             swap(this.heap, n, 2*n+2);
    //             n = 2*n+2;
    //         }
    //     }

    //     return maxElem;
    // }
}

function swap(arr, i, j){ // swaps array elements with given indices
    [arr[j], arr[i]] = [arr[i], arr[j]];
    return arr;
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(5);
heap.insert(37);
heap.insert(45);
heap.insert(199);
console.log(heap);
console.log(heap.extractMax());
console.log(heap);


