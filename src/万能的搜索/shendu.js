// 深度优先的搜索、
//输出1-n的全排列  如 123 的全排列 123 132 231 213 321 312
let arr = []
let n = 3
let book = [0,0,0,0,0,0]

function dfs(step) {
  if (step === n + 1) {
    console.log(arr)
    return
  }
  for (let i = 1; i <= n; i++) {
    if (book[i] === 0) {
      arr[step-1] = i
      book[i] = 1
      dfs(step + 1)
      book[i] = 0
    }
  }
  return
}
dfs(1)