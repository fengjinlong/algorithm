// 解决负边权

let Dian = 5
let Bian = 5

const u = [1, 0, 0, 3, 2]
const v = [2, 1, 4, 4, 3]
const w = [2, -3, 5, 2, 3]

const dis = [0,-3,999999,999999,5]

// n个定点，任意两点最多有n-1条边
for (let i = 0; i < Dian - 1; i++) {
  // 边
  for (let j = 0; j < Bian; j++) {
    if ( dis[v[j]] > dis[u[j]] + w[j]) {
      dis[v[j]] = dis[u[j]] + w[j];
    }
  }
}

console.log(dis)