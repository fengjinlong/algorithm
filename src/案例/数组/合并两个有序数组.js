/**
 * 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，
 * 分别表示 nums1 和 nums2 中的元素数目。
 * 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
 * 最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，
 * nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，
 * 应忽略。nums2 的长度为 n 。
 *
 */
/**
 * 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * 输出：[1,2,2,3,5,6]
 * 解释：需要合并 [1,2,3] 和 [2,5,6] 。
 * 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
 */

// 双指针
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0;
  let j = 0;
  let t = 0;
  let arr = [...nums1];
  while (i < m && j < n) {
    if (arr[i] <= nums2[j]) {
      nums1[t] = arr[i];
      i++;
    } else {
      nums1[t] = nums2[j];
      j++;
    }
    t++;
  }
  if (i !== m) {
    // 还有nums1
    for (let tt = i; tt < m; tt++) {
      nums1[t] = arr[tt];
      t++;
    }
  }
  if (j !== n) {
    // 还有nums2
    for (let t2 = j; t2 < n; t2++) {
      nums1[t] = nums2[t2];
      t++;
    }
  }
  return nums1;
};

// 官方
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m, ...nums2);
  nums1.sort((a, b) => a - b);
};
