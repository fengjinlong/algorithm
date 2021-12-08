// 输入：digits = [1,2,3]
// 输出：[1,2,4]

// 输入：digits = [1,9,9]
// 输出：[2,0,0]

// 输入：digits = [9,9,9]
// 输出：[1,0,0,0]

/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function (digits) {
  // let len = digits.length
  // let i = len - 1
  // let last = digits[len - 1] + 1
  // digits[i] = last
  // if (last > 9) {
  //     while (last > 9) {
  //         digits[i] = digits[i] - 10
  //         if (i > 0) {
  //             digits[i - 1] = digits[i - 1] + 1
  //             last = digits[i - 1]
  //             i--
  //         } else {
  //             // i = 0
  //             digits.splice(0, 0, 1)
  //             last = 1
  //         }
  //     }
  // }
  // return digits

  /**
   * 三种情况
   * 1 没有9 [1,2,3] -> [1,2,4]
   * 2 有一部分连续9 [1,2,9,9] -> [1,3,0,0]
   * 3 全是9 [9,9,9] -> [1,0,0,0]
   */

  let len = digits.length

  for (let i = len - 1; i >= 0; --i) {
      // 1 2
      if (digits[i] !== 9) {
          digits[i]++
          for (j=i+1;j<len;j++) {
              digits[j] = 0
          }
          // 结束循环，跳出函数
          return digits
      }
  }
  // 如果到这了，说明都是9
  const arr = new Array(len+1).fill(0)
  arr[0] = 1
  return arr
};