class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;  
    }

    insert(val){
        let newNode = new Node(val);
        if(!this.root){ // if no root, become root
            this.root = newNode;
            return this;
        }

        let parent = this.root;

        while(true){ // iterative approach
            if(val == parent.val) return undefined; // no duplicate values
            if(val < parent.val){ // if lesser than parent, add to left
                if(!parent.left){
                    parent.left = newNode;
                    return this;
                }
                parent = parent.left;
            } else { // else add to right of parent
                if(!parent.right){
                    parent.right = newNode;
                    return this;
                }
                parent = parent.right;
            }
        }
        
    }

    find(val){ // find function
        if(!this.root) return false; // if no root, what is there to find lol

        let parent = this.root;

        while(true){ // iterative approach
            if(val == parent.val) return parent; // if value found, return node (set return to true if you only want to know if it exists)
            if(val < parent.val){ // if lesser than parent, search to left
                if(!parent.left) return false;
                parent = parent.left;
            } else { // else search to right of parent
                if(!parent.right) return false;
                parent = parent.right;
            }
        }
    }

    bfs(){
        let node = this.root;
        let queue = []; // maybe use the linked list implementation for faster results
        let data = [];
        queue.push(node);

        while(queue.length){
            node = queue.shift();
            data.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    // dfs has multiple approaches
    // depending on where your use case
    // draw the trees to understand better 

    // use case: creates a copy of tree in array 
    dfsPreOrder(){ // push before you traverse; goes from left to right branches technically
        let data = [];
        let parent = this.root;
        function traverse(node){
            data.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(parent);
        return data;
    }

    dfsPostOrder(){ // push after you traverse 
        let data = [];
        let parent = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.val);
        }
        traverse(parent);
        return data;
    }

    // use case: gives you a sorted array
    dfsInOrder(){ // traverse the entire left side before starting on the right side
        let data = [];
        let parent = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.val);
            if(node.right) traverse(node.right);
        }
        traverse(parent);
        return data;
    }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(19);
console.log(bst);
console.log(bst.find(9));
console.log(bst.bfs());
console.log(bst.dfsPreOrder());
console.log(bst.dfsPostOrder());
console.log(bst.dfsInOrder());
