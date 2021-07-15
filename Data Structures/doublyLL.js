class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Doubly Linked List Methods

    push(val){ // push function
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode; 
            this.tail = newNode;
        } else {
            let prevTail = this.tail;
            prevTail.next = newNode;
            newNode.prev = prevTail;
            this.tail = newNode;
        }
        this.length++;

        return this;
    }

    pop(){ // pop function
        if(!this.head) return undefined;

        let prevTail = this.tail;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = prevTail.prev;
            prevTail.prev = null;
            this.tail.next = null;
        }

        this.length--;

        return prevTail;
    }

    shift(){ // shift function
        if(!this.head) return undefined;

        let prevHead = this.head;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = prevHead.next;
            prevHead.next = null;
            this.head.prev = null;
        }

        this.length--;

        return prevHead;
    }

    unshift(val){ // unshift function
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode; 
            this.tail = newNode;
        } else {
            let prevHead = this.head;
            prevHead.prev = newNode;
            newNode.next = prevHead;
            this.head = newNode;
        }
        this.length++;

        return this;
        
    }

    get(index){ // get function
        if(index < 0 || index >= this.length) return null;
        
        if(index <= this.length / 2){
            let current = this.head;
            for(let i = 0; i < index; i++){
                current = current.next;
            }
        } else {
            let current = this.tail;
            for(let i = 0; i < this.length - index - 1; i++){
                current = current.prev;
            }
        }
        return current;
    }

    set(index, val){ // set function
        let reqNode = this.get(index);
        if(reqNode != null){
            reqNode.val = val;
            return true;
        } 
        return false;
    }

    insert(index, val){ // insert function
        if(index < 0 || index > this.length) return false;
        if(index == 0) return !!this.unshift(val);
        if(index == this.length) return !!this.push(val);

        let currentNode = new Node(val);
        let prevNode = this.get(index - 1);
        let nextNode = prevNode.next;

        currentNode.prev = prevNode, prevNode.next = currentNode; // better visualisation that's all
        currentNode.next = nextNode, nextNode.prev = currentNode;

        this.length++;

        return true;
    }

    remove(index){ // remove function
        if(index < 0 || index >= this.length) return undefined;
        if(index == 0) return !!this.shift();
        if(index == this.length - 1) return !!this.pop();

        let currentNode = this.get(index);
        let prevNode = currentNode.prev;
        let nextNode = currentNode.next;

        currentNode.prev = null, prevNode.next = nextNode; // better visualisation that's all
        currentNode.next = null, nextNode.prev = prevNode;

        this.length--;

        return currentNode;
    }

}

let list = new DoublyLinkedList();
list.push(0);
list.push(1);
list.push(2);
console.log(list);
// list.pop();
// list.pop();
// list.pop();
// list.shift();
// list.shift();
// list.shift();
// list.unshift(-1);
console.log(list.get(1));  