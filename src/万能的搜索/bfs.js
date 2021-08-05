// 迷宫
const maze = [
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 2, 0],
  [0, 0, 0, 0],
];
const book = [
  [0, 0, 3, 0],
  [0, 0, 0, 0],
  [0, 0, 3, 0],
  [0, 3, 5, 0],
  [0, 0, 0, 0],
];
// 移动
let next = [
  [0, 1], // 右
  [1, 0],
  [0, -1],
  [-1, 0],
];

// 起始点
let startX = 0;
let startY = 0;
// 终点
let target = [3, 2];

// 游戏是否结束 1 结束
let flag = 0;

// 模拟队列 [{x, y, s}]，head永远指向数组的第0项
let head = 0;
let tail = 0;
const que = [{ x: 0, y: 0, s: 0 }];

// 往队列插入迷宫入口 maze[0][0]
que[head].x = 0;
que[head].y = 0;
que[head].s = 0;
tail++;
book[startX][startY] = 1;

// 下一个坐标[tx, ty]
let tx;
let ty;
while (head < tail) {
  for (let i = 0; i <= 3; i++) {
    tx = que[head].x + next[i][0];
    ty = que[head].y + next[i][1];

    // 是否越界
    if (tx < 0 || tx > 4 || ty < 0 || ty > 3) {
      continue;
    }
    // 是否可走
    if (maze[tx][ty] === 0 && book[tx][ty] === 0) {
      book[tx][ty] = 1;

      let obj = {
        x: tx,
        y: ty,
        s: que[head].s + 1,
      };
      que[tail] = obj;
      tail++;
    }

    // 是否到达
    if (tx === target[0] && ty === target[1]) {
      flag = 1;
      // console.log(que);
      break;
    }
  }
  if (flag === 1) {
    console.log(que);
    console.log(book);
    break;
  }
  head++;
}

// 对比 dfs