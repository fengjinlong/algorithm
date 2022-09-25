import { Color } from "../广度优先/color";
import { initColor } from "../广度优先/util";

export const dfs = (graph, cb) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initColor(vertices);
  for (let i = 0; i < vertices.length; i++) {
    const el = vertices[i];
    if (color[el] === Color.WHITE) {
      dfsVisit(el, color, adjList, cb);
    }
  }
};
function dfsVisit(el: any, color: any, adjList: any, cb: any) {
  color[el] = Color.GREY;
  if (cb) {
    cb(el);
  }
  const neighbors = adjList.get(el);
  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i];
    if (color[w] === Color.WHITE) {
      dfsVisit(w, color, adjList, cb);
    }
  }
  color[el] = Color.BLACK;
}

