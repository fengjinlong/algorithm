import Dictionary from "./dictionary.js";

// 图 邻接表
class Graph {
  constructor(isDirected = false) {
    // 默认无向图
    this.isDirected = isDirected;
    // 所有顶点
    this.vertices = [];
    //  字典 顶点名字为 key ，邻接顶点为值
    this.adjList = new Dictionary();
  }
  // 添加新顶点
  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []);
    }
  }
  //  添加顶点之间的边
  addEdge(v, w) {
    if (!this.adjList.get(v)) {
      this.addVertex(v);
    }
    if (!this.adjList.get(w)) {
      this.addVertex(w);
    }
    this.adjList.get(v).push(w);
    //  双向
    if (!this.isDirected) {
      this.adjList.get(w).push(v);
    }
  }
  // 返回顶点列表
  getVertices() {
    return this.vertices;
  }
  // 返回邻接列表
  getAdjList() {
    return this.adjList;
  }
  toString() {
    let s = "";
    for (let i = 0; i < this.vertices.length; i++) {
      const el = this.vertices[i];
      s += `${el} -> `;
      const neighbors = this.adjList.get(el);
      for (let j = 0; j < neighbors.length; j++) {
        const item = neighbors[j];
        s += `${item} `;
      }
      s += "\n";
    }
    return s;
  }
}

const graph = new Graph();
const myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
for (let i = 0; i < myVertices.length; i++) {
  const el = myVertices[i];
  graph.addVertex(el);
}
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

console.log('graph', graph.toString());
