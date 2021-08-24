// 删除一个，放后面一个，直到没有 猜 qq 号码   0631758924
// 1 arr 方式
const arr = [0, 6, 3, 1, 7, 5, 8, 9, 2, 4];
let target = []
function qq(arr) {
  let head = 1;
  let tail = arr.length;

  while (head < tail) {
    // 删掉一个
    target.push(arr[head]);
    head++;
    arr[tail] = arr[head];
    tail++;
    head++;  
  }
}

// queue 方式
const queue = {
  data: [0, 6, 3, 1, 7, 5, 8, 9, 2, 4],
  head: 1,
  tail: data.length,
}
// 逻辑雷同

