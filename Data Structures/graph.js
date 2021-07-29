class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return undefined;
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); 
    }

    removeEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return undefined;
        this.adjacencyList[vertex1].splice(this.adjacencyList[vertex1].indexOf(vertex2), 1);
        this.adjacencyList[vertex2].splice(this.adjacencyList[vertex2].indexOf(vertex1), 1);
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]) return undefined;
        for(let elem of this.adjacencyList[vertex]){
            this.adjacencyList[elem].splice(this.adjacencyList[elem].indexOf(vertex), 1);    
        }
        delete this.adjacencyList[vertex];
    }

    dfsRecursive(start){
        const result = []; // order of traversal
        const visited = {}; // list of all visited nodes
        const adjacencyList = this.adjacencyList; // making a var so its accesible in helper function

        (function dfs(vertex){ // helper function
            if(!vertex) return null;
            visited[vertex] = true; // set as visited
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbour =>{ // repeat for node that it is connected to 
                if(!visited[neighbour]){
                    return dfs(neighbour); // this recursion ensures dfs because it traverses through one branch before starting with the next one 
                }
            })
        })(start); // fancy syntax for typing and calling the function

        return result;
    }

    dfsIterative(start){
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbour =>{
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    stack.push(neighbour);
                }
            });
        }
        return result;
    }

    bfs(start){
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        while(queue.length){
            currentVertex = queue.shift();
            visited[currentVertex] = true;
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbour=>{
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            });
        }
        return result;
    }
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph);
console.log(graph.dfsRecursive("A"));
console.log(graph.dfsIterative("A"));
console.log(graph.bfs("A"));

