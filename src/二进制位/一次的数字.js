/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * @param {number[]} [2,2,1]
 * @return {number} 1
 */
var singleNumber = function (nums) {
  // for(let i=0;i<nums.length;i++) {
  //     if (nums.indexOf(nums[i], nums.indexOf(nums[i])+1) === -1) {
  //         return nums[i]
  //     }
  // }

  let n = 0;
  for (let i = 0; i < nums.length; i++) {
    n ^= nums[i];
  }
  return n;
};
