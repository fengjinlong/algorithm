/**
 * @description
 * @author Werewolf
 * @date 2021-12-17
 * @param {*} arr
 * @param {*} left
 * @param {*} right
 * @return {*} 
 */
const quickSort = (arr, left, right) => {
	let len = arr.length,
		partitionIndex;
	left = typeof left != 'number' ? 0 : left;
	right = typeof right != 'number' ? len - 1 : right;

	if (left < right) {
    // 0 2
		partitionIndex = partition(arr, left, right);
		quickSort(arr, left, partitionIndex - 1);
		quickSort(arr, partitionIndex + 1, right);
	}
	return arr;
};

const partition = (arr, left, right) => {
	//分区操作
	let pivot = left, //设定基准值（pivot）
		index = pivot + 1;
	for (let i = index; i <= right; i++) {
		if (arr[pivot] > arr[i]) {
			swap(arr, i, index);
			index++;
		}
	}
	swap(arr, pivot, index - 1);
	return index - 1;
};

const swap = (arr, i, j) => {
  if (arr[i] === arr[j]) return
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
};
let aa = [5,2,4,3]
quickSort(aa)