const arr: number[] = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
const mergeSort = arr => {
  const len = arr.length
  if (len < 2) {
    return arr
  } else {
    let middle = len >> 1
    let leftArr = arr.slice(0, middle)
    let rightArr = arr.slice(middle)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
  }
}
function merge(leftArr: any, rightArr: any) {
  const result = []
  // 同时存在
  while (leftArr.length && rightArr.length) {
    // 比较第一个
    if (leftArr[0] < rightArr[0]) {
      result.push(leftArr.shift())
    } else {
      result.push(rightArr.shift())
    }
  }
  while (leftArr.length) {
    result.push(leftArr.shift())
  }
  while (rightArr.length) {
    result.push(rightArr.shift())
  }
  return result
}
let a = mergeSort(arr)
console.log(a)
