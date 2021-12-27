/**
 * @description 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数
 * nums = [3,0,1] 输出 2
 * nums = [0,1] 输出 2
 * nums = [9,6,4,2,3,5,7,0,1] 输出 8
 * @author Werewolf
 * @date 2021-12-27
 * @param {*} nums
 * @return {*}
 */
// 1 效率低的方法，先排序，在对比
// ...
// 2 高效方法
var missingNumber = function (nums) {
  // 排序
  let n = nums.length;
  for (let i = 0; i < nums.length; i++) {
    n += i - nums[i];
  }
  return n;
};
