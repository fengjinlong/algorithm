const arr = [1,2,3,4,5,6,7,8]
// 删掉一个，放后面一个，直到删除完毕，删了那些？

function queue(arr) {
  let head = 0
  let tail = arr.length

  while(head < tail) {
    console.log(arr[head])
    head++
    arr[tail] = arr[head]
    tail++
    head++
  }
}
queue(arr)