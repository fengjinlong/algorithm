
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

// // // // 无向图
// // // e[1][2] = 2
// // e[2][1] = 2
// // e[1][5] = 10
// // e[5][1] = 10
// // e[2][3] = 3
// // e[3][2] = 3
// e[2][5] = 7
// e[5][2] = 7
// e[3][1] = 4
// e[1][3] = 4
// e[3][4] = 4
// e[4][3] = 4
// e[4][5] = 5
// e[5][4] = 5
// 有向图
// [
//   <1 empty item>,
//   [ <1 empty item>, 0, 2, 0, 0, 10 ],
//   [ <1 empty item>, 0, 0, 3, 0, 7 ], 
//   [ <1 empty item>, 4, 0, 0, 4, 0 ], 
//   [ <1 empty item>, 0, 0, 0, 0, 5 ], 
//   [ <1 empty item>, 0, 0, 3, 0, 0 ]  
// ]

// 无向图
// [
//   <1 empty item>,
//   [ <1 empty item>, 0, 2, 4, '**', 10 ],
//   [ <1 empty item>, 2, 0, 3, '**', 7 ],
//   [ <1 empty item>, 4, 3, 0, 4, '**' ],
//   [ <1 empty item>, '**', '**', 4, 0, 5 ],
//   [ <1 empty item>, 10, 7, '**', 5, 0 ]
// ]
console.log(e)
// 1 5个城市，一个只能走一次
// 求最短路线
// 深度搜索
// 当前的城市，最小值的比较
let min = 9999
let dis = 0
function dfs(cur, dis) {
  let i
  if (dis > min) return
  if (cur === 5) {
    if (min > dis) {
      min = dis
      return
    }
    return
  }
  for(i = 1; i <= 5; i++) {
    if (e[cur][i] !== '**' && book[i] === 0) {
      book[i] = 1;
      dfs(i, dis+e[cur][i])
      book[i] = 0

    }
  }
}
dfs(1, 0)
console.log(min)








