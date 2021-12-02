
export var arr1 = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
const quickSort = arr => {
  if (arr.length <= 1) {
    return arr
  }
  let mid = arr.length >> 1

  let middleValArr = arr.splice(mid, 1)
  let middleVal = middleValArr[0]
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < middleVal) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(middleVal, quickSort(right))
}

let a:any = quickSort(arr1)
console.log(a)
