import { Color } from "./color";
import { Queue } from "./queue";
import { initColor } from "./util";

export const bfs = (graph, startVertex, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  // 初始白色
  const color = initColor(vertices);
  const queue = new Queue();
  //  顶点入队
  queue.enqueue(startVertex);
  while (!queue.isEmpty()) {
    // 一个出队列
    const u = queue.dequeue();
    const neighbors = adjList.get(u);
    //  变灰色
    color[u] = Color.GREY;
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      if (color[w] === Color.WHITE) {
        color[w] = Color.GREY;
        queue.enqueue(w);
      }
    }
    color[u] = Color.BLACK;
    if (callback) {
      callback(u);
    }
  }
};
