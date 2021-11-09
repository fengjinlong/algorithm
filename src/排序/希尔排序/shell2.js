const shellSort = (arr) => {
  let len = arr.length;
  let tem;
  let group = len / 2
  // 一次分组 最小为1组
  for (group; group > 0; group = Math.floor(group / 2)) {
    // 以 group 为 2 举例
    // 分成2组 要比较五次

    // i++ 是为了
    for (let i = group; i< len; i++) {
      // 为了分组2组，每组内元素依次比较
      // i          2   3   4     5    6 
      //待比较 j     0   1   2 0   3 1  4 2 0
      //待比较 j+2   2   3   4 2   5 3  6 4 2

      for (let j = i-group; j>=0; j=j-group) {
        if (arr[j] > arr[j+group]) {
          tem = arr[j]
          arr[j] = arr[j+group]
          arr[j+group] = tem
        }
      }
    }
  }
  console.log(arr)
}
const aa = [10, 8, 2, 7, 3, 6, 4, 9, 5, 1]
shellSort(aa)