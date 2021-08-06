// 宝岛探险
// 1-9位陆地 0为海洋

// 一 着落到[5,7] 算落地的岛屿面积
const book = [];
for (let k = 0; k < 10; k++) {
  book[k] = [];
  for (let i = 0; i < 10; i++) {
    book[k][i] = 0;
  }
}

let Sea = [
  [1, 2, 1, 0, 0, 0, 0, 0, 2, 3],
  [3, 0, 2, 0, 1, 2, 1, 0, 1, 2],
  [4, 0, 1, 0, 1, 2, 3, 2, 0, 1],
  [3, 2, 0, 0, 0, 1, 2, 4, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 5, 3, 0],
  [0, 1, 2, 1, 0, 1, 5, 4, 3, 0],
  [0, 1, 2, 3, 1, 3, 6, 2, 1, 0],
  [0, 0, 3, 4, 8, 9, 7, 5, 0, 0],
  [0, 0, 0, 3, 7, 8, 6, 0, 1, 2],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
];

let startX = 5;
let startY = 7;
let sum = 0;

let next = [
  [0, 1], // 右
  [1, 0],
  [0, -1],
  [-1, 0],
];
// 广度优先方法
function explore() {
  let head = 0;
  let tail = 0;
  let tx = startX;
  let ty = startY;

  book[startX][startY] = 1;
  let que = [];
  let ob = {
    x: startX,
    y: startY,
  };
  que[head] = ob;
  sum++;
  tail++;
  while (head < tail) {
    for (let i = 0; i < 4; i++) {
      tx = que[head].x + next[i][0];
      ty = que[head].y + next[i][1];

      if (tx < 0 || ty < 0 || tx > 10 || ty > 10) continue;
      if (Sea[tx][ty] > 0 && book[tx][ty] === 0) {
        sum++;
        book[tx][ty] = 1;
        let o = {
          x: tx,
          y: ty,
        };
        que[tail] = o;
        tail++;
      }
    }
    head++;
  }
  console.log(sum);
}
// explore()

// 深度优先
function dfs(x, y) {
  for (let i = 0; i < 4; i++) {
    let tx = x + next[i][0];
    let ty = y + next[i][1];
    if (tx < 0 || ty < 0 || tx > 10 || ty > 10) continue;
    if (Sea[tx][ty] > 0 && book[tx][ty] === 0) {
      sum++;
      console.log(sum);
      book[tx][ty] = 1;
      dfs(tx, ty);
      book[tx][ty] = 0;
    }
  }
}
dfs(5, 7);
