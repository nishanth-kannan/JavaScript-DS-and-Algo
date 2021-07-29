class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Singly Linked List Methods

    push(val){ // add elem at the end
        let newNode = new Node(val); // init node
        if(!this.head){ // if no nodes, pushed elem is head and tail
            this.head = newNode; 
            this.tail = this.head;
        } else{
            this.tail.next = newNode; // set prev tail's next property
            this.tail = newNode; // assign new tail
        }
        this.length++;
        return this; //returning list
    }

    pop(){ //remove elem from end
        if(!this.head) return undefined; //edge case

        let current = this.head; 
        let newTail = current;
        while(current.next){    
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if(this.length == 0){ //edge case
            this.head = null;
            this.tail = null;
        }
        return current; // returning the elem popped
    }

    shift(){ // remove elem from beginning
        if(!this.head) return undefined; //edge case

        let currentHead = this.head;
        this.head = this.head.next;
        currentHead.next = null;
        this.length--;

        if(this.length == 0){ //edge case
            this.head = null;
            this.tail = null;
        }

        return currentHead;
    }

    unshift(val){ // add elem at beginning
        let newNode = new Node(val);
        if(!this.head){ // if no nodes, pushed elem is head and tail
            this.head = newNode; 
            this.tail = this.head;
        } else{
            this.head.next = this.head; // assigning new head
            this.head = newNode; 
        }
        this.length++;
        return this; //returning list

    };

    get(index){ //get node at index
        if(index > this.length - 1 || index < 0) return null;

        let current = this.head;
        for(let i = 0; i < index; i++){
            current = current.next;
        }
        return current;
    }

    set(index, val){ //set val of node at index
        let current = this.get(index);
        if(current){
            current.val = val;
            return true;
        };
        return false;
    }

    insert(index, val){ // insert elem at index
        if(index > this.length || index < 0) return false; //edge cases
        if(index == this.length) return !!this.push(val); // !!(double negation) returns a boolean
        if(index == 0) return !!this.unshift(val);

        let insertNode = new Node(val);
        let leftNode = this.get(index-1);
        let rightNode = leftNode.next;

        leftNode.next = insertNode;
        insertNode.next = rightNode;
        this.length++;

        return true;
    }

    remove(index){ // remove elem at index
        if(index >= this.length || index < 0) return false; // edge cases
        if(index == this.length - 1) return !!this.pop(); // !!(double negation) returns a boolean
        if(index == 0) return !!this.shift();

        let prevNode = this.get(index - 1);
        let removeNode = prevNode.next;
        let nextNode = removeNode.next;

        removeNode.next = null;
        prevNode.next = nextNode;
        this.length--;

        return true;
    }

    reverse(){ // reverse linked list
        let node = this.head; // swap head and tail
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;
        for(let i = 0; i < this.length; i++){ // to better understand draw on paper please
            next = node.next; 
            node.next = prev;
            prev = node; // moving forward to the next elems
            node = next;
        }
        return this;
    }

    toArr(){ // function to convert linked list to arr (for visualisation purposes)
        let arr = [];
        let current = this.head;
        for(let i = 0; i < this.length; i++){
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }

}

let list = new SinglyLinkedList();
list.push("Hello");
list.push("How are you?");
list.push("I'm fine");
list.push("How about you?")
console.log(list);
// list.pop();
// console.log(list);
// list.shift();
// console.log(list);
// list.unshift(0);
// list.insert(1, "Hi");
// console.log(list);
// list.remove(1);
// console.log(list.toArr());
// list.reverse();
// console.log(list.toArr());
