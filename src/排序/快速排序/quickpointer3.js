const quickPoint = (arr, left, right) => {
  let i = left;
  let j = right;
  if (i > j) {
    return;
  }
  let temp = arr[left];
  /**
   *  在循环条件下（i < j）
   *  1 找到左边第一个大于基准点的值
   *  2 找到右边第一个小于基准点的值
   *  3 判读两边值索引是否符合 i < j,符合交换位置
   *  4 继续循环执行 找下一个大于和小于基准点的值
   *  5 执行第三步骤
   *
   *  循环结束后，将基准点调整为中间值 此时arr[i] 是左边且最接近基准点的值，互换位置，此时arr[i]为中间值，也就是新的基准点
   *  新的基准点将arr分成两部分，分别快排递归调用这两部分 quickPoint(left, i-1) 和 quickPoint(i+1, right)
   *
   */
  while (i < j) {
    while (i < j && temp <= arr[j]) {
      j--;
    }
    while (i < j && temp >= arr[i]) {
      i++;
    }
    if (i < j) {
      let m = arr[i];
      arr[i] = arr[j];
      arr[j] = m;
    }
  }

  arr[left] = arr[i];
  arr[i] = temp;
  quickPoint(arr, left, i - 1);
  quickPoint(arr, i + 1, right);
};
let arr = [1, 5, 2, 4, 3];
quickPoint(arr, 0, 4);
console.log(arr);
