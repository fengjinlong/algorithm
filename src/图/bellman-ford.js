// 其计算的最短路径从单一来源顶点到所有其他顶点的加权有向图。
// 对于相同的问题， 它比Dijkstra 的算法慢，但更通用，因为它能够处理一些边权重为负数的图。
const u = ['empty', 2, 1, 1, 4, 3]
const v = ['empty', 3, 2, 5, 5, 4]
const w = ['empty', 2, -3, 5, 2, 3]
const dis = ['empty', 0, 9999999, 9999999, 9999999, 9999999]

let N = 5
let M = 5

if (1) {
  console.time('qq')
  for (let k = 1; k <= N - 1; k++) {
    for (let i = 1; i <= M; i++) {
      if (dis[v[i]] > dis[u[i]] + w[i]) {
        dis[v[i]] = dis[u[i]] + w[i]
      }
    }
  }
  console.log(dis)

  for (let i = 1; i <= M; i++) {
    if (dis[v[i]] > dis[u[i]] + w[i]) {
      console.log('此图有负权回路')
    }
  }
  console.timeEnd('qq')
} else {
  // 优化方案
  // 如果在新的一轮松弛中，数组 dis 没有发生变化，可以提前退出循环

  const bit = []
  console.time('qq')
  for (let k = 1; k <= N - 1; k++) {
    for (let i = 1; i <= M; i++) {
      bit[i] = dis[i]
    }

    for (let i = 1; i <= M; i++) {
      if (dis[v[i]] > dis[u[i]] + w[i]) {
        dis[v[i]] = dis[u[i]] + w[i]
      }
    }

    // 检查
    let check = 0
    for (let i = 1; i <= M; i++) {
      if (bit[i] !== dis[i]) {
        check = 1
        break
      }
    }
    if (!check) {
      break
    }
  }
  console.log(dis)

  for (let i = 1; i <= M; i++) {
    // console.log(dis[v[i]] , dis[u[i]] , w[i])
    if (dis[v[i]] > dis[u[i]] + w[i]) {
      console.log('此图有负权回路')
    }
  }
  console.timeEnd('qq')
}
