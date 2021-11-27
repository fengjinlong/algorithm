// 找到已知升序数组的两个元素，和为目标元素

let arr = [1, 3, 5, 7, 10, 11, 13, 15];
const target = 17
let left = 0
let right = arr.length - 1;

while(left < right && arr[left] + arr[right] !== target) {
  if (arr[left] + arr[right] > target) {
    right--
  } else if (arr[left] + arr[right] < target) {
    left++
  }
}
if (arr[left] + arr[right] === target) {
  console.log('找到了')
  console.log(left, right)
} else {
  console.log('没找到')
}
