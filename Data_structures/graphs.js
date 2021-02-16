/**
 * graph : Nodes + connections
 * nodes connected by means of connections by vertices.
 * Trees are a type of graphs, where any 2 points can be connected by one path.
 *
 * applications of graphs:
 * 1. social networking.
 * 2. google maps.
 * 3. Recommendation engine
 *
 * vertex ==> node , edge ==>connector line
 * Types of graphs:
 * 1. Directed and Undirected: based on the path of traversal of nodes.
 *  a. Directed Graph: it will have a direction when traversing with arrows
 *  b. undirected Graph: here 2 way communication or no particular path is
 *  defined for the traversal of the path.
 * 2. weighted and Unweighted graphs: based on the weight of the edges between vertices.
 *      weight here means the matter of interest between the 2 nodes.it might be distance,
 *      any relation measurement... anything of the person's interest
 *    a.weighted graphs: If 2 nodes are attached by a edge with a particular weight it
 *      is called a weighted graph. Ex: in google maps the weight we use is distance.
 *    b. unweighted graphs: If 2 nodes are attached without any weight they are
 *      unweighted graphs.
 *
 * How we store the graphs:
 * adjacency matrix: This is the representation of connections between the vertices of the graph
 *
 * adjacency list : this is the represnetation in terms of list like a array where the data stored
 *
 * is as a dictionary or a js object
 *
 * adjacency matrix will take more space as the representation of matrix which has a complexity of
 * vertex*vertex(vertex squared)(more space)
 *
 * adjacency matrix is easy to query but adjacency list is difficult to query.
 *
 */

const Node = require('./Node').Node

class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    AddVertex(value) {
        if (!this.adjacencyList[value])
            this.adjacencyList[value] = [];
    }
    AddEdge(v1, v2) {
        if (this.adjacencyList[v1]) this.adjacencyList[v1].push(v2);
        if (this.adjacencyList[v2]) this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v != v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v != v1);
    }
    removeVertex(v) {
        let edges = this.adjacencyList[v];
        if (edges.length > 0)
            edges.forEach(edge => {
                this.removeEdge(v, edge);
            })
        delete this.adjacencyList[v];
    }
}
let graph = new Graph();

graph.AddVertex("A");
graph.AddVertex("B");
graph.AddVertex("C");
graph.AddVertex("D");
graph.AddVertex("E")
graph.AddVertex("F");


graph.AddEdge("A", "B");
graph.AddEdge("A", "C");
graph.AddEdge("B", "D");
graph.AddEdge("C", "E");
graph.AddEdge("D", "E");
graph.AddEdge("D", "F");
graph.AddEdge("E", "F");

console.log(graph.adjacencyList)

/**
 * Depth first Search of graph.
 */
let visitedList = {};
function DFS_Traverse(graph, startNode) {
    if (!visitedList[startNode]) {
        visitedList[startNode] = true;
        if (graph[startNode]) {
            let nodes = graph[startNode];
            nodes.forEach((node) => {
                return DFS_Traverse(graph, node)
            })
        }
    }
}
let graph_test = graph.adjacencyList
DFS_Traverse(graph.adjacencyList, 'A');
console.log(visitedList);

function DFS_Traverse_iterative(graph, startNode) {
    let result = [];
    let isVisited = {};
    let stack = [];
    stack.push(startNode);
    while (stack.length != 0) {
        let currentNode = stack.pop();
        if (!isVisited[currentNode]) {
            isVisited[currentNode] = 10
            result.push(currentNode)
            stack.push(...graph[currentNode]);
        };

    }
    console.log(result);
}
DFS_Traverse_iterative(graph.adjacencyList, 'A')

/**
 * BFS for graph : To go to vertices of a particular node is connected to
 * and then we will go to the neighbours of each node's neighbour.
 */

function BFS_Traverse(graph, startNode) {
    let result = [];
    let isVisited = {};
    let stack = [];
    stack.push(startNode);
    while (stack.length) {
        let currentNode = stack.shift();
        if (!isVisited[currentNode]) {
            result.push(currentNode);
            isVisited[currentNode] = 1;
            stack.push(...graph[currentNode]);
        }
    }
    return result;
}
console.log(BFS_Traverse(graph.adjacencyList, 'A'))

class WeightedGraph extends Graph {
    constructor() {
        super()
    }
    AddEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({ node: v2, weight: weight });
        this.adjacencyList[v2].push({ node: v1, weight: weight });
    }
}

let test_var = new WeightedGraph();
test_var.AddVertex(12);
test_var.AddVertex(11);
test_var.AddVertex(10);
test_var.AddEdge(12, 11, 15)
console.log(test_var.adjacencyList)