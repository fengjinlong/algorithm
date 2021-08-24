// 回文  aba  abba 
let str = 'aba'
let str1 = 'aba1'
let str2 = 'abba'

function pr(str) {
  let top = 0
  let len = str.length
  //  找middle
  let middle = parseInt(len / 2) - 1;
  // 前一般放进数组
  let arr = []
  for ( ; top <=middle; top++) {
    arr[top] = str.charAt(top)
  }
  top--

  let flat = 0;
  // 判断 奇偶数
  let start = middle % 2 ? middle + 1 : middle + 2;
  for (; start < len; start++) {
    if (str.charAt(start) !== arr[top]) {
      flat = 1
      break;
    } else {
      top--
    }
  }
  if (flat) {
    console.log('no')
  } else {
    console.log('yes')
  }
}
pr(str)