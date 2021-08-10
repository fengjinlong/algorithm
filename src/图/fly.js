
let e = [];
// book 记录哪些点已经访问到了 一共 5个city
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
// 有向图
e[1][2] = 1
e[2][1] = 1

e[1][3] = 1
e[3][1] = 1

e[3][2] = 1
e[2][3] = 1

e[2][4] = 1
e[4][2] = 1

e[4][3] = 1
e[3][4] = 1

e[4][5] = 1
e[5][4] = 1

e[3][5] = 1
e[5][3] = 1

console.log(e)

function bfs() {
  let num = 0
  let que = []
  let head = 1;
  let tail = 1;
  let flag = 0;
  book[1] = 1
  que[head] = {
    site: 1,
    path: 0
  }
  tail++
  while (head < tail) {
    let currentSite = que[head].site
    for (let i = 1; i <= 5; i++) {
      if (e[currentSite][i] !== '**' && book[i] === 0) {
        let o = {
          site: i,
          path: que[head].path + 1
        }
        que[tail] = o
        tail++
        book[i] = 1
      }
      
      if (que[tail-1].site === 5) {
        flag = 1
        console.log(que[tail-1].path)
        break
      }
      
    }
    // console.log(que)
    if (flag === 1) {
      console.log(que)
      break
    }
    head++;
  }
  // 能走的点推入队列


}
bfs()


