import { Color } from "./color";

export function defaultToString(item) {
  return item;
}
export const initColor = (vertices) => {
  const color = {};
  for (let i = 0; i < vertices.length; i++) {
    const el = vertices[i];
    color[el] = Color.WHITE;
  }
  return color;
};
