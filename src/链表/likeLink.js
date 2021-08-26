// 两个数组 分别存储数组 和 数组元素下一个对应的元素
// arr->[1,2,3,4,5]
// right->[1,2,3,4,5], right[0]=1 表示 arr 的第 0 个元素下一个是 arr[1]

// 现在按照大小插入一个元素，放到相应的位置

const arr = [1, 2, 3, 4, 6, 7, 8]
// right -> [0,1,2,3,4,5,6,0]
const right = []
arr.forEach((ele, i) => {
  if (i === arr.length - 1) {

    right.push(0)
  } else {

    right.push(i + 1)
  }
})
// console.log(right)

// 现在 把5插进去
let target = 5

// 先把target 放到最后
arr[arr.length] = 5

let t = 0;
// 如果right[t] 为了 0 说明 到最后了
while (right[t] !== 0) {
  // 找到临界点  target < arr[m] 5 < 6   
  if (target < arr[right[t]]) {
    // right 的最后一个值为 k，那么 arr[k] = arr[right[t]] 所以

    right[right.length] = right[t]
    right[t] = arr.length-1
    break
  }
  t = right[t]
}

console.log(arr)
console.log(right)
let ind = 0
console.log(arr[0])
while (right[ind] !== 0) {
  console.log(arr[right[ind]])
  ind = right[ind]
}