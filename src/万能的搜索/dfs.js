// 深度优先 搜索
// 解救小孩
// 迷宫 ARR 0 可以走 1 不可以走 目标点 ARR[3][2] 起点ARR[0][0]
const ARR = [
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 1],
];
const book = [
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const px = 3;
const py = 2;
// 记录最短的路线
let min = 9999;
function dfs(x, y, step) {
  // 记录四个方向
  let next = [
    [0, 1], // 右
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  // 是否到达目标点
  if (x === px && y === py) {
    if (step < min) {
      min = step;
      console.log(book);
      return;
    }
  }
  // 枚举四种走法
  let tx;
  let ty;
  for (let k = 0; k < 4; k++) {
    tx = x + next[k][0];
    ty = y + next[k][1];

    // 判断边界
    if (tx < 0 || ty < 0 || tx > 4 || ty > 3) {
      continue;
    }
    // 0 可以走 1 不可以走
    if (ARR[tx][ty] === 0 && book[tx][ty] === 0) {
      book[tx][ty] = 1;
      dfs(tx, ty, step + 1);
      book[tx][ty] = 0;
    }
  }
  return;
}
dfs(0, 0, 0);
console.log(min);
