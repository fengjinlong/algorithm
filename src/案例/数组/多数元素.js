/**
 * @description 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 输入：[3,2,3]输出：3;
 * 输入：[2,2,1,1,1,2,2]输出：2
 * @author Werewolf
 * @date 2021-12-27
 * @param {*} nums
 * @return {*} 
 */
var majorityElement = function(nums) {
  let length = nums.length
  let item = nums[0]
  let max = 0

  let obj = {}
  for (let i =0;i<length;i++) {
      let ele = nums[i]
      if (obj[ele]) {
          obj[ele]++
          if (obj[ele] > length/2 && obj[ele] > max) {
              max = obj[ele]
              item = ele
          }
      } else {
          obj[ele] = 1
      }
  }
  return item
};