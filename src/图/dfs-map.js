const arr = [
  [0, 1, 1, 999, 1],
  [1, 0, 999, 1, 999],
  [1, 999, 0, 999, 1],
  [999, 1, 999, 0, 999],
  [1, 999, 1, 999, 0]
]
const book = [1, 0, 0, 0, 0]
const N = 5

function dfs(n) {

  if (n === N) {
    return
  }
  console.log(n)
  let cur = arr[n]
  for (let i = 0; i < N; i++) {

    if (cur[i] === 1 && book[i] === 0) {

      book[i] = 1;
      dfs(i)
    }
  }
}
dfs(0)