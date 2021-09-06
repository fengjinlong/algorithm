// 4个城市 8条公路 求解 多远最短路径
const Arr = [
  [0, 2, 6, 4],
  [999, 0, 3, 999],
  [7, 999, 0, 1],
  [5, 999, 12, 0]
]
console.log(Arr)

const len = 4
for(let k = 0; k < len; k++) {
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (Arr[i][j] > Arr[i][k] + Arr[k][j]) {
        Arr[i][j] = Arr[i][k] + Arr[k][j]
      }
    }
  }
}

console.log(Arr)