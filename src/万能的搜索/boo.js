// 13 * 13
const Arr = [
  [
    "#",
    "#",
    "#",

    "#",

    "#",

    "#",

    "#",

    "#",

    "#",

    "#",
    ".",
    "#",
    ".",
    "#",
    "#",
  ],
  ["#", "G", "G", ".", "G", "G", "G", "#", "G", "G", "G", ".", "#"],
  ["#", "#", "#", ".", "#", "G", "#", "G", "#", "G", "#", "G", "#"],
  ["#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", "G", "#"],
  ["#", "G", "#", ".", "#", "#", "#", ".", "#", "G", "#", "G", "#"],
  ["#", "G", "G", ".", "G", "G", "G", ".", "#", ".", "G", "G", "#"],
  ["#", "G", "#", ".", "#", "G", "#", ".", "#", ".", "#", ".", "#"],
  ["#", "#", "G", ".", ".", ".", "G", ".", ".", ".", ".", ".", "#"],
  ["#", "G", "#", ".", "#", "G", "#", "#", "#", ".", "#", "G", "#"],
  ["#", ".", ".", ".", "G", "#", "G", "G", "G", ".", "G", "G", "#"],
  ["#", "G", "#", ".", "#", "G", "#", "G", "#", ".", "#", "G", "#"],
  ["#", "G", "G", ".", "G", "G", "G", "#", "G", ".", "G", "G", "#"],
  ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
];

function getNum(i, j) {
  let sum, x, y;
  sum = 0;
  // 向上统计
  x = i;
  y = j;
  // 不是墙
  while (Arr[x][y] != "#") {
    // 如果是敌人
    if (Arr[x][y] === "G") {
      sum++;
    }
    if (x < 1) {
      break;
    }
    x--;
  }

  // 向下统计
  x = i;
  y = j;
  while (Arr[x][y] !== "#") {
    if (Arr[x][y] === "G") {
      sum++;
    }
    x++;
  }
  // 向左统计
  x = i;
  y = j;
  while (Arr[x][y] != "#") {
    if (Arr[x][y] === "G") {
      sum++;
    }
    if (y < 1) break;
    y--;
  }
  // 向右统计
  x = i;
  y = j;
  while (Arr[x][y] != "#") {
    if (Arr[x][y] === "G") {
      sum++;
    }
    y++;
  }

  return sum;
}
const book = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

// 移动
let next = [
  [0, 1], // 右
  [1, 0],
  [0, -1],
  [-1, 0],
];

// 广度优先
function booBfs() {
  const que = [{
    x: 0,
    y: 0
  }];
  let head = 0;
  let tail = 0;
  let sum = 0;
  let max = 0;
  // 最大点坐标
  let mx = 3;
  let my = 3;

  let startX = 3;
  let startY = 3;

  que[head].x = 3;
  que[head].y = 3;
  tail++;
  book[startX][startY] = 1;
  max = getNum(1, 1);

  while (head < tail) {
    for (let k = 0; k < 4; k++) {
      // 新坐标
      tx = que[head].x + next[k][0];
      ty = que[head].y + next[k][1];
      if (tx < 0 || ty < 0 || tx > 12 || ty > 12) {
        continue;
      }
      // 可以走
      Arr[tx][ty];
      book[tx][ty];
      if (Arr[tx][ty] === "." && book[tx][ty] === 0) {
        book[tx][ty] = 1;
        let o = {
          x: tx,
          y: ty,
        };
        que[tail] = o;

        sum = getNum(tx, ty);
        tail++;

        if (sum > max) {
          max = sum;
          mx = tx;
          my = ty;
        }
      }
    }
    head++;
  }
  console.log(mx, my, max);
}
// booBfs();

// 深度优先
function booDfs(i, j) {
  let sum = getNum(i, j);
  let tx, ty;
  let max = 0;
  let mx = i;
  let my = j;
  if (sum > max) {
    max = sum;
    mx = i;
    my = j;
    console.log(mx, my, max);
  }
  for (let k = 0; k < 4; k++) {
    tx = i + next[k][0];
    ty = j + next[k][1];
    if (tx < 0 || ty < 0 || tx > 12 || ty > 12) {
      continue;
    }
    if (Arr[tx][ty] === "." && book[tx][ty] === 0) {
      book[tx][ty] = 1;
      booDfs(tx, ty);
    }
  }
}
booDfs(3, 3)