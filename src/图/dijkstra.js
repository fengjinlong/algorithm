// 单源最短路径 O(N)^2 

let e = [];
// book 记录哪些点已经访问到了 一共 6个city
let book = [0, 0, 0, 0, 0, 0, 0];

for (let i = 1; i <= 4; i++) {
  e[i] = [];
  for (let j = 1; j <= 4; j++) {

    if (i === j) {
      e[i][j] = 0;
    } else {
      e[i][j] = 99;
    }
  }
}
// 有向图
// e[1][2] = 1
// e[1][3] = 12
// e[2][3] = 9
// e[2][4] = 3
// e[3][5] = 5
// e[4][3] = 4
// e[4][5] = 13
// e[4][6] = 15
// e[5][6] = 4

e[1][4] = 9
e[4][3] = 8
e[1][2] = 5
e[2][4] = 6
e[1][3] = 7
console.log(e)
console.time('qq')
// 找 1 到各个点的最近路径
// 估计最近值
const dis = []
for (let i = 1; i <= 4; i++) {
    dis[i] = e[1][i]
}
book[1] = 1
let min; 
// console.log(dis) [ <1 empty item>, 0, 1, 12, 999, 999, 999 ]

// dijkstra 核心算法
/**
 * 1 我们找与 1 的最近点作为中间值，每个值都要当一次中间值，才能判断出 是 1-3-5 近？还是 1-6-5 近？
 *   最终比较出 1-x-5 的最近值，x是什么暂时不必关心 所以最外层是个大循环
 * 
 * 2 拿到一个临时的中间值middle，根据 e[1][x] 是否大于 e[1][middle] + e[middle][x] ? 来确定是否需要更新
 * 
*/
let u;
for (let i = 1; i <=4; i++) {
    min = 999999
    for (let j = 1; j <= 4; j++) {
        if (book[j] === 0 && dis[j] < min) {
            min = dis[j]
            u = j
        }
    }
    book[u] = 1;
    for(let v = 1; v <= 4; v++) {
        if (dis[v] > dis[u] + e[u][v]) {
            dis[v] = dis[u] + e[u][v]
        }
    }
}

// i -> 1
// dis -> 0 1 10 4 99 99
// i -> 2
// dij -> 0 1 8 4 17 19
console.log(dis)
console.timeEnd('qq')













