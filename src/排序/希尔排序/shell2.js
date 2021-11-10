const shellSort = (arr) => {
  // 数组长度
  let length = arr.length;
  // 变换位置的临时变量
  let temp;
  // 把数组分成几组的标记,也就是增量

  let group = Math.floor(length / 2);
  // 分组必须大于 1 且为整数
  for (group; group > 0; group = Math.floor(group / 2)) {
    // i-g
    for (let i = group; i < length; i++) {
      // j 是一个元素的下标，所有可以为0
      // j-group 为了  但确定 在 2,3完成比较后，是否影响之前的比较结果。
      // 比如 1，2 位置已经完成比较。2，3完成比较后这要检查3位置是否影响之前1，2位置的结果
      for (let j = i - group; j >= 0; j = j - group) {
        if (arr[j] > arr[j+group]) {
          // 换位置
          temp = arr[j]
          arr[j] = arr[j+group]
          arr[j+group] = temp
        }
      }
    }
  }


  console.log(arr)
}
const aa = [10, 8, 2, 7, 3, 6, 4, 9, 5, 1]
shellSort(aa)