/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function (nums) {

  // let j = nums.length
  // for (let i = 0; i < nums.length && i < j; i++) {
  //     if (nums[i] === 0) {
  //         nums.splice(i, 1)
  //         nums.push(0)
  //         j--
  //         i--
  //     }
  // }

  let j = 0
  let i = 1
  while (i < nums.length) {
      if (nums[j] === 0 && nums[i] !== 0) {
          nums[j] = nums[i]
          nums[i] = 0
          j++
      } else if (nums[j] !== 0) {
          j++
      }
      i++
  }

  return nums
};