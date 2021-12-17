// const prices = [7, 1, 5, 3, 6, 4];
// const prices =[7,2,4,1]
const prices =[11,2,6,1,4]

/* 
  1 左右双指针 left right
  2 在最大值之前找一个最小值 求差 m
  3 在最小值之后找一个最大值 求差 n
  4 最大值为第一个，最小值为最后一个 则 0。否则比较 m n
*/

/**
 * @description
 * @author Werewolf
 * @date 2021-12-17
 * @param {*} prices
 * @return {*} 
 */
function maxProfit(prices) {
  if (prices.length < 2) {
    return 0
  }
  let left = 0;
  let right = prices.length - 1;

  // 找最小值
  for (let i = 0; i < prices.length; i++) {
    if (prices[left] > prices[i]) {
      left = i;
    }
    if (prices[right] <= prices[i]) {
      right = i;
    }
  }
  // console.log(left, right);
  if (left === prices.length - 1 && right === 0) {
    let axm = []
    for(let i = 1; i < prices.length-1; i++) {
      axm.push(prices[i])
    }
    return maxProfit(axm);
  } else if (right === 0) {
    let arr = prices.slice(1, prices.length)
    return maxProfit(arr);
  }

  // 最大值之前的 最大利润
  let max1 = 0;
  for (var i = 0; i < right; i++) {
    let mm = prices[right] - prices[i];
    if (mm > max1) {
      max1 = mm;
    }
  }
  // 最小值之后的 最大利润
  let max2 = 0;

  for (var i = left; i < prices.length; i++) {
    let mm = prices[i] - prices[left];
    if (mm > max2) {
      max2 = mm;
    }
  }

  if (max1 > max2) {
    console.log(`下周一买，下周${max1}卖出，肯定挣钱!`)
    return max1;
  } else {
    console.log(`下周${max2}，买肯定挣钱!`)
    return max2;
  }
}
maxProfit(prices);
