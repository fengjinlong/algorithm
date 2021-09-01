// 深度优先
const arr = [
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 1]
];
const book = []
for (let i = 0; i < 5; i++) {
  book[i] = []
  for (let j = 0; j < 4; j++) {
    book[i][j] = 0
  }
}
// console.log(book)

// 目标 3 2
let min = 100;
const four = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0]
]

function dfs(x, y, step) {


  if (x === 3 && y === 2) {
    if (step < min) {
      min = step;
    }
    console.log(x, y, min);
    return
  }
  let tx;
  let ty;
  for (var i = 0; i < 4; i++) {
    tx = x + four[i][0]
    ty = y + four[i][1]

    // 是否
    if (tx < 0 || tx > 4 || ty < 0 || ty > 3) {
      continue;
    }
    if (arr[tx][ty] === 0 && book[tx][ty] === 0) {
      book[tx][ty] = 1;
      dfs(tx, ty, step + 1)
      book[tx][ty] = 0
    }
  }


}
// dfs(0, 0, 0)

// 广度优先
function bfs() {
  let head = 0;
  let tail = 0;
  let flag = 0;

  // que = [{x,y}]
  const que = [];

  que[head] = {
    x: 0,
    y: 0,
    s: 1
  };
  tail++;
  book[0][0] = 1
  let tx;
  let ty;
  while (head < tail) {
    // 下一个点
    for (let i = 0; i < 4; i++) {
      tx = que[head].x + four[i][0]
      ty = que[head].y + four[i][1]
      if (tx < 0 || ty < 0 || tx > 4 || ty > 3) {
        continue;
      }
      if (arr[tx][ty] === 0 && book[tx][ty] === 0) {
        book[tx][ty] = 1;
        que[tail] = {
          x: tx,
          y: ty,
          s: que[head].s + 1
        };
        tail++;
      }
      if (tx === 3 && ty === 2) {
        flag = 1;
        break;
      }
    }
    if (flag === 1) {
      console.log(que[head])
      break;
    }
    head++;
  }
}
bfs()