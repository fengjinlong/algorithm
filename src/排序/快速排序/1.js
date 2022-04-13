function partition(arr, low, high) {
  if (low > high) return;
  let i;
  let j;
  let middle;
  i = low;
  j = high;
  middle = arr[low];
  while (i < j) {
    while (arr[j] > middle) {
      // 找到小于 基点的索引
      j--;
    }
    while (middle >= arr[i] && i < j) {
      // 找到大于节点的 索引
      i++;
    }
    // 交换 两个索引的对应值 的位置
    swap(arr, i, j);
  }
  // 交换基准点与 最后大于基准点位置的值
  swap(arr, low, i);

  //   递归 1
  partition(arr, low, i - 1);
  //   递归 2
  partition(arr, i + 1, high);
}
let arr = [1, 5, 2, 4, 3, 8];

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
partition(arr, 0, arr.length - 1);
console.log(arr);
