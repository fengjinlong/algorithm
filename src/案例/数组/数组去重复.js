// 输入：nums = [1,1,2]
// 输出：2, nums = [1,2]
// 解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
// 双指针

// 方式1 删除数组的重复项，执行1100ms，题目没有说必须删除掉
var removeDuplicates = function (nums) {
  let len = nums.length;
  let left = 0;
  let right = 1;
  while (right < len) {
    // 不相等
    if (nums[left] !== nums[right]) {
      left++;
      right++;
    } else if (nums[left] === nums[right]) {
      // 相等
      nums.splice(right, 1);
      len--;
    }
  }

  return len;
};

// 方式2 把非重复项放在数组的前面，后面的不用管，执行82ms ����
var removeDuplicates = function (nums) {
  let len = nums.length;
  let left = 1;
  let right = 1;
  while (right < len) {
    // 不相等
    if (nums[right - 1] !== nums[right]) {
      nums[left] = nums[right];
      left++;
    }
    right++;
  }
  return left;
};
