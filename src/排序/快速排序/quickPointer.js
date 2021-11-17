// 快速排序  移动方式
const quickSort = (arr, left, right) => {
	let len = arr.length,
		partitionIndex;
	left = typeof left != 'number' ? 0 : left;
	right = typeof right != 'number' ? len - 1 : right;

	if (left < right) {
		partitionIndex = partition(arr, left, right);
		quickSort(arr, left, partitionIndex - 1);
		quickSort(arr, partitionIndex + 1, right);
	}
	return arr;
};

const partition = (arr, left, right) => {
	//分区操作
	let pivot = left //设定基准值（pivot）0
  let temp = arr[pivot]
  // 0 - 5
	let	index = pivot + 1; // 1

	for (let i = index; i <= right; i++) {
    // 左边的大于基准
    // 如果基准值值 大于他 右边标记的值，那么 
		if ( temp > arr[i] ) {
			swap(arr, i, index);
			index++;
		}
	}
	swap(arr, pivot, index - 1);
	return index - 1;
};

const swap = (arr, i, j) => {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
};
