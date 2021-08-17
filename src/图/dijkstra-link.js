// 单源最短路径 邻链表方法 O(M+N)logN 暂时消化不了

// let e = []
// // book 记录哪些点已经访问到了 一共 6个city
// let book = [0, 0, 0, 0, 0, 0, 0]

// let first = [-1, -1, -1, -1, -1]
// let u = [1, 4, 1, 2, 1]
// let v = [4, 3, 2, 4, 3]
// let w = [9, 8, 5, 6, 7]
// let next = []

// for (let i = 0; i < 5; i++) {
//   next[i] = first[u[i]]
//   first[u[i]] = i
// }

// // for (let i = 1; i <= 4; i++) {
// //   e[i] = [];
// //   for (let j = 1; j <= 4; j++) {

// //     if (i === j) {
// //       e[i][j] = 0;
// //     } else {
// //       e[i][j] = 99;
// //     }
// //   }
// // }

// // e[1][4] = 9
// // e[4][3] = 8
// // e[1][2] = 5
// // e[2][4] = 6
// // e[1][3] = 7

// // 找 1 到各个点的最近路径
// // 估计最近值
// // const dis = []
// // for (let i = 1; i <= 4; i++) {
// //   dis[i] = e[1][i]
// // }
// // book[1] = 1
// // let min

// // for (let i = 1; i <= 4; i++) {
// //   min = 999999
// //   for (let j = 1; j <= 4; j++) {
// //     if (book[j] === 0 && dis[j] < min) {
// //       min = dis[j]
// //       u = j
// //     }
// //   }
// //   book[u] = 1
// //   for (let v = 1; v <= 4; v++) {
// //     if (dis[v] > dis[u] + e[u][v]) {
// //       dis[v] = dis[u] + e[u][v]
// //     }
// //   }
// // }

// let k
// let min
// let dis = [0,9, 888, 5, 888, 7]
// let u;

// for (let i = 0; i < 5; i++) {
//   min = 99999
//   k = first[i + 1]
//   while (k !== -1) {
//     // 终点

//     // 权值
//     if (w[k] < min) {
//       min = w[k]
//       u = k
//     }
//     for (let v = 1; v <= 4; v++) {
//       if (dis[v] > dis[u] + e[u][v]) {
//         dis[v] = dis[u] + e[u][v]
//       }
//     }
//     k = next[k]
//   }
// }

// // i -> 1
// // dis -> 0 1 10 4 99 99
// // i -> 2
// // dij -> 0 1 8 4 17 19
// // console.log(dis)
// console.log(first)
// console.log(next)

// console.log(dis)
// console.log(dis1)
