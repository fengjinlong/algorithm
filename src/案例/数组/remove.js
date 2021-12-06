/**
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 *
 */

var removeElement = function (nums, val) {
  let len = nums.length;
  let start = 0;
  while (start < len) {
    let n = nums[start];
    if (n === val) {
      // 交换位置
      // 最后一个
      let last = nums[len - 1];
      nums[len - 1] = n;
      nums[start] = last;
      len--;
    } else {
      start++;
    }
  }
  return len;
};
