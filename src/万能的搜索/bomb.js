// bfs
// 13 * 13
const arr = [
  ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
  ['#', 'G', 'G', '.', 'G', 'G', 'G', '#', 'G', 'G', 'G', '.', '#'],
  ['#', '#', '#', '.', '#', 'G', '#', 'G', '#', 'G', '#', 'G', '#'],
  ['#', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', 'G', '#'],
  ['#', 'G', '#', '.', '#', '#', '#', '.', '#', 'G', '#', 'G', '#'],
  ['#', 'G', 'G', '.', 'G', 'G', 'G', '.', '#', '.', 'G', 'G', '#'],
  ['#', 'G', '#', '.', '#', 'G', '#', '.', '#', '.', '#', '.', '#'],
  ['#', '#', 'G', '.', '.', '.', 'G', '.', '.', '.', '.', '.', '#'],
  ['#', 'G', '#', '.', '#', 'G', '#', '#', '#', '.', '#', 'G', '#'],
  ['#', '.', '.', '.', 'G', '#', 'G', 'G', 'G', '.', 'G', 'G', '#'],
  ['#', 'G', '#', '.', '#', 'G', '#', 'G', '#', '.', '#', 'G', '#'],
  ['#', 'G', 'G', '.', 'G', 'G', 'G', '#', 'G', '.', 'G', 'G', '#'],
  ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
]
// 当前可以扎几个
let max = 0;
let maxX = 0;
let maxY = 0;

function getNum(x, y) {
  let sum = 0
  let i = 0
  let j = 0

  // 向上统计
  i = x
  j = y
  while (arr[i][j] !== '#') {
    if (arr[i][j] === 'G') {
      sum++
    }
    i--
  }
  // 下
  i = x
  j = y
  while (arr[i][j] !== '#') {
    if (arr[i][j] === 'G') {
      sum++
    }
    i++
  };
  // 左
  i = x
  j = y
  while (arr[i][j] !== '#') {
    if (arr[i][j] === 'G') {
      sum++
    }
    j--
  };
  i = x
  j = y
  while (arr[i][j] !== '#') {
    if (arr[i][j] === 'G') {
      sum++
    }
    j++
  }

  return sum;
}
// 四个方向
const four = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0]
]
// 标记
const book = []
for (let i = 0; i < 15; i++) {
  book[i] = []
  for (let j = 0; j < 15; j++) {
    book[i][j] = 0
  }
}

function bfs() {
  // 模拟队列
  const que = []
  let head = 0;
  let tail = 0;

  let startX = 3
  let startY = 3

  que[head] = {
    x: startX,
    y: startY
  }

  book[startX][startY] = 1;
  tail++;
  max = getNum(startX, startY)


  while (head < tail) {
    let tx;
    let ty;

    for (let i = 0; i < 4; i++) {
      tx = que[head].x + four[i][0]
      ty = que[head].y + four[i][1]
      // 越界
      if (tx < 0 || tx > 12 || ty < 0 || ty > 12) {
        continue;
      }
      let mm = arr[tx][ty]
      if (arr[tx][ty] === '.' && book[tx][ty] === 0) {
        book[tx][ty] = 1;
        que[tail] = {
          x: tx,
          y: ty
        }
        tail++

        let sum = getNum(tx, ty)
        // console.log(11)
        if (sum > max) {
          max = sum;
          maxX = tx;
          maxY = ty;
          
        }

      }
    }
    head++;
  }

}
// bfs()
// console.log(maxX, maxY, max)

function dfs(x, y) {
  let sum = getNum(x, y)
  if (sum > max) {
    max = sum;
    maxX = x;
    maxY = y;
  } 
  for (let i= 0; i < 4; i++) {
    let tx = x + four[i][0]
    let ty = y + four[i][1]

    if (tx < 0 || tx > 13 || ty < 0 || ty > 13) {
      continue
    }
    if (arr[tx][ty] === '.' && book[tx][ty] === 0) {
      book[tx][ty] = 1;
      dfs(tx, ty)
    }
  }
}
dfs(3,3)
console.log(maxX, maxY, max)