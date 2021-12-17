


/**
 * @description 杨辉三角，每个数是它左上方和右上方的数的和
 * @author Werewolf
 * @date 2021-12-17
 * @param {*} 前num行
 * @return {*} 二位数组 line
 */

const generate = (num) => {
  // 这是一个二元数组
  // [
  //   [],
  //   [],
  // ]
  // 控制行数组的数组
  const line = [];
  const len = num - 1;
  for (let i = 0; i < len; i++) {
    // 创建 行数组,并填充 1
    // [
    //   [1],
    //   [1,1],
    //   [1,1,1],
    //   ...
    // ]
    let row = new Array(i + 1).fill(1);
    // 从第三行才需要有运算，而且必须是每行的第2个元素才需要运算，第一个元素都是1
    /* 
      1. 从第三行才需要计算 所以逻辑是 j=1,j<row.length-1。前两行直接push到line
      2. row[j] 上一行是line[i-1]
    */
    for (let j = 1; j < row.length - 1; j++) {
      row[j] = line[i - 1][j - 1] + line[i - 1][j];
    }
    line.push(row)
  }
  return line
};
