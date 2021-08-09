// 55
// 12
// 13
// 15
// 24
// 35

// [
// [ <1 empty item>, 0, 1, 1, '**', 1 ],
// [ <1 empty item>, 1, 0, '**', 1, '**' ],
// [ <1 empty item>, 1, '**', 0, '**', 1 ],
// [ <1 empty item>, '**', 1, '**', 0, '**' ],
// [ <1 empty item>, 1, '**', 1, '**', 0 ]
// ]

let e = [];
// book 记录哪些点已经访问到了 一共 5个点
let book = [0, 0, 0, 0, 0, 0];

for (let i = 1; i <= 5; i++) {
  e[i] = [];
  for (let j = 1; j <= 5; j++) {
    if (i === j) {
      e[i][j] = 0;
    } else {
      e[i][j] = "**";
    }
  }
}

e[1][2] = 1;
e[2][1] = 1;
e[1][3] = 1;
e[3][1] = 1;
e[1][5] = 1;
e[5][1] = 1;
e[2][4] = 1;
e[4][2] = 1;
e[3][5] = 1;
e[5][3] = 1;
console.log(e);

// 深度优先遍历图
let sum = 0;
let nn = 25;
book[1] = 1;
function dfs(cur) {
  sum++;
  console.log("cur", cur); // 1 2 4 3 5
  if (sum === nn) return;
  for (let i = 1; i <= 5; i++) {
    if (e[cur][i] === 1 && book[i] === 0) {
      book[i] = 1;
      // 从顶点i再出发继续遍历
      dfs(i);
    }
  }
}
// dfs(1);

// 广度优先遍历图
function bfs(cur) {
  let que = ["empty"];
  let head = 1;
  let tail = 1;
  // 第一次
  que[head] = 1;
  tail++;
  while (head < tail) {
    let cur = que[head];
    console.log(cur); // 1 2 3 5 4
    for (let i = 1; i <= 5; i++) {
      if (e[cur][i] === 1 && book[i] === 0) {
        book[i] = 1;
        que[tail] = i;
        tail++;
      }
      if (tail > 25) {
        break;
      }
    }
    head++;
  }
}
bfs(1);
