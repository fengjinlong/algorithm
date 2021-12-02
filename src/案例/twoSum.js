// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
// 示例 2：

// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]

// 方法一 for for

// 方法二
// var twoSum = function (nums, target) {
//   let hash = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (hash[target - nums[i]] !== undefined) {
//       return [i, hash[target - nums[i]]];
//     }
//     hash[nums[i]] = i;
//   }
//   return [];
// };

// 方法三 排序双指针
var twoSum = function (nums, target) {
  let numsBack = JSON.parse(JSON.stringify(nums))

  let sortArr = quickSort(nums)
  let left= 0
  let right=sortArr.length - 1
  while(left < right && sortArr[left]+sortArr[right] !== target) {
      if (sortArr[left] + sortArr[right] > target) {
          right--
      }
      if (sortArr[left] + sortArr[right] < target) {
          left++
      }
  }
  if (sortArr[left] + sortArr[right] === target) {
      let indexFrom = {}
      let leftIndex = numsBack.indexOf(sortArr[left])
      indexFrom[leftIndex] = 1
      let rightIndex = numsBack.indexOf(sortArr[right])
      if (indexFrom[rightIndex]) {
          rightIndex = numsBack.indexOf(sortArr[right], leftIndex+1)
      }
      
      return [leftIndex, rightIndex]
  }

}
function quickSort (arr) {
  if (arr.length <= 1) {
      return arr
  }
  let mid = arr.length >> 1
  let aa = arr.splice(mid,1)
  let middleVal = aa[0]
  let left = []
  let right = []
  for (let i=0;i<arr.length;i++) {
      if(arr[i] < middleVal) {
          left.push(arr[i])
      } else {
          right.push(arr[i])
      }
  }
  return quickSort(left).concat(middleVal, quickSort(right))
}