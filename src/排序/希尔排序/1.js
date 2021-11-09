// 第 1 层循环：得到每一次的增量步长
// 增量并逐步缩小增量
for (let gap = arr.length / 2; gap > 0; gap = gap / 2) {
  /**
   这里的内层循环，除了是获得每一组的值（按增量取），
   移动法使用的是简单插入排序的算法 {@link InsertionSortTest#processSelectSort2(let[])}
   唯一不同的是，这里的组前一个是按增量来计算的
   */
  // 每一轮，都是针对某一个组的插入排序中：待排序的起点
  for (let i = gap; i < arr.length; i++) {
    let currentInsertValue = arr[i]; // 无序列表中的第一个元素
    let insertIndex = i - gap; // 有序列表中的最后一个元素
    while (insertIndex >= 0 && currentInsertValue < arr[insertIndex]) {
      // 比较的数比前一个数小，则前一个往后移动
      arr[insertIndex + gap] = arr[insertIndex];
      insertIndex -= gap;
    }
    // 对找到的位置插入值
    arr[insertIndex + gap] = currentInsertValue;
  }
}