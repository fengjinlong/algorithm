var a = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];
// 冒泡
function bubbleSort(arr) {
  let len = arr.length;
  if (len < 2) return arr;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (arr[i] > arr[j]) {
        let tem = arr[j];
        arr[j] = arr[i];
        arr[i] = tem;
      }
    }
  }
  console.log(arr);
}
// bubbleSort(a)

// 快排
function quickSort(arr) {
  let len = arr.length;
  if (len < 2) return arr;
  let index = arr[len >> 1];
  let left = [];
  let right = [];
  let mid = arr.splice(index, 1);
  for (let i = 0; i < len; i++) {
    if (arr[i] > mid) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return left.concat([mid], right);
}
// quickSort(a);
// console.log(a);

// 插入排序

let arr = [6, 3, 2, 1];
function insertSort(arr) {
  const len = arr.length;
  // 缓存一下循环的初始，中间变量，一次循环，current 不变
  let current;
  let ind;
  for (let i = 0; i < len; i++) {
    // 当前
    current = arr[i];
    ind = i;

    // 如果存在上一个元素 而且 上一个元素 比 当前大（需要移动）
    /**
     * current = b
     *
     * c a b
     * a > b
     * c a a
     *
     * c c a
     */
    // a > b ???
    while (ind > 0 && arr[ind - 1] > current) {
      // 把 上一个元素 给 后面的，也就是给 current 相同的
      arr[ind] = arr[ind - 1];
      // 移动一下, 判断 c > b ???
      ind--;
    }
    // b c a
    arr[ind] = current;
  }
  return arr;
}
// 选择排序
function selectSort(array) {
  const len = array.length;
  let temp;
  let minIndex;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (array[j] <= array[minIndex]) {
        minIndex = j;
      }
    }
    temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
}

// 堆排序
var a = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];

function heap_sort(arr) {
  var len = arr.length;
  var k = 0;

  function swap(i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function max_heapify(start, end) {
    var dad = start;
    var son = dad * 2 + 1;
    if (son >= end) return;
    if (son + 1 < end && arr[son] < arr[son + 1]) {
      son++;
    }

    if (arr[dad] <= arr[son]) {
      swap(dad, son);
      max_heapify(son, end);
    }
  }

  for (var i = Math.floor(len / 2) - 1; i >= 0; i--) {
    max_heapify(i, len);
  }

  for (var j = len - 1; j > k; j--) {
    swap(0, j);
    max_heapify(0, j);
  }
  return arr;
}

heap_sort(a); // [1, 1, 3, 3, 6, 6, 23, 34, 76, 221, 222, 456]
