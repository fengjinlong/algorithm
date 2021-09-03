const arr = [
  [0, 1, 1, 999, 1],
  [1, 0, 999, 1, 999],
  [1, 999, 0, 999, 1],
  [999, 1, 999, 0, 999],
  [1, 999, 1, 999, 0]
]
const book = [1, 0, 0, 0, 0]
const N = 5

function bfs() {
  const queue = []
  let head = 0;
  let tail = 0;
  queue[head] = 0;
  tail++;

  while (head < tail) {
    let cur = arr[queue[head]]

    for (let i = 0; i < N; i++) {
      if (cur[i] === 1 && book[i] === 0) {

        book[i] = 1;
        queue[tail] = i;
        tail++;
      }
    }


    head++;
  }
  console.log(queue)
}
bfs()