const arr = [
  [0, 1, 12, 8888888, 8888888, 8888888],
  [8888888, 0, 9, 3, 8888888, 8888888],
  [8888888, 8888888, 0, 8888888, 5, 8888888],
  [8888888, 8888888, 4, 0, 13, 15],
  [8888888, 8888888, 8888888, 8888888, 0, 4],
  [8888888, 8888888, 8888888, 8888888, 8888888, 0]
]


// 一共6各点，求 第一个点 到 各点的最短路径

function dij() {
  const book = []

  const len = arr.length

  // 第一个点到各jj点的初始距离
  const dis = []

  for (let ii = 0; ii < len; ii++) {
    dis[ii] = arr[0][ii]
    book.push(0)
  }
  console.log(dis)
  book[0] = 1;
  let minIndex;



  // 核心算法
  for (let i = 0; i < len; i++) {
    // 注意  每次循环计算 时候 min 需要初始化
    let min = 999999999999
    for (let j = 0; j < len; j++) {
      if (book[j] === 0 && dis[j] < min) {
        min = dis[j]
        minIndex = j
      }
    }
    book[minIndex] = 1;
    for (let v = 0; v < len; v++) {
      if (arr[minIndex][v] < 8888888) {
        if (dis[v] > dis[minIndex] + arr[minIndex][v]) {
          dis[v] = dis[minIndex] + arr[minIndex][v]
        }
      }
    }
  }

  console.log(dis)

}
dij()