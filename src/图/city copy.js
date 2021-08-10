
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
e[1][2] = 2
e[1][5] = 10
e[2][3] = 3
e[2][5] = 7
e[3][1] = 4
e[3][4] = 4
e[4][5] = 5
e[5][3] = 3

console.log(e)
// 1 5个城市，一个只能走一次
// 求最短路线
// 深度搜索
// 当前的城市，最小值的比较
let min = 9999
book[1] = 0
function dfs (current, path) {
  // 如果已经大于最小的路线
  if (path > min) {
    return
  }

  // 已经到了目的地
  if (current === 5) {
    if (path < min) {
      min = path
    }
    return
  }

  for(let i = 1; i <= 5; i++) {
    // 由 current 城市 到 i 城市有路线
    if (e[current][i] !== '**' && book[i] === 0) {
      // 标记 i 城市已经路过
      book[i] = 1;
      // 递归从i 城市到其他城市的路线，即 current 变为 i
      dfs(i, path + e[current][i])
      // 承接上一个递归结束，此时 current 也就是上一个current 的 前一个current
      // 要把由于递归导致的 后续 book的标记 复位。也就递归使 i 这个城市已经走了，
      book[i] = 0
    }
  }

}
dfs(1, 0)