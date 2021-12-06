/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
 * 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 请必须使用时间复杂度为 O(log n) 的算法。
 *
 */

var searchInsert = function (nums, target) {
  let po = nums.indexOf(target);
  if (po === -1) {
    let i = 0;
    po = 0;
    while (target > nums[i]) {
      i++;
      po++;
    }
  }
  return po;
};
