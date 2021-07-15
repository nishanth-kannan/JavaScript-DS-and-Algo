// Queue is usually a subset of a Linked List
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // Add to end and remove from beginning for FIFO

    enqueue(val){ // push function
        let newNode = new Node(val);
        if(this.size == 0){
            this.first = newNode;
            this.last = newNode;
        } else{
            this.last.next = newNode;
            this.last = newNode;
        }

        return ++this.size;
    }

    dequeue(){ // shift function
        if(this.size == 0) return undefined;
        if(this.size == 1) this.first = null;

        let temp = this.first;
        this.first = this.first.next;
        
        this.size--;
        return temp.val;
    }
}

let queue = new Queue();
queue.enqueue('Hello');
console.log(queue.enqueue('Goodbye'));
console.log(queue.enqueue('Bye Bye'));
console.log(queue);
console.log(queue.dequeue());