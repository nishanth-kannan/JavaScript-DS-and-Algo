// Stack is usually a subset of an Array or a Linked List
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // Add to the beginning and remove from the beginning for LIFO
    push(val){
        let newNode = new Node(val);
        if(this.size == 0){
            this.first = newNode;
            this.last = newNode;
        } else{
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        } 

        return ++this.size;
    }

    pop(){
        if(this.size == 0) return undefined;
        if(this.size == 1) this.last = null;

        let temp = this.first;
        this.first = temp.next;
        
        this.size--;
        return temp.val;
    }

} 

let stack = new Stack();
stack.push('Hello');
console.log(stack.push('Goodbye'));
console.log(stack.push('Bye Bye'));
console.log(stack);
console.log(stack.pop());