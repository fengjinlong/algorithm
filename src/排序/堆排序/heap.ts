// 堆排序
/**
 * 1 arr 长度为 L
 * 2 找到数组0 - L的最大值
 * 3 最大值 与 最后一位交换位置 （此时最大值已经放在最后的位置）
 * 4 再找到数组0 - L-1的最大值，重复 第2步骤
 * 1234  不是堆排序 ^_^
 * 
 * 
*/
const heapSort = (array) => {
  // findMaxPutlast(array,0,array.length)
  let len = array.length
  for (let index = 0; index < len; index++) {
    findMaxPutlast(array, 0, len-index)
  }
};


function findMaxPutlast(array,i,length) {
  let maxVal = array[i]
  let maxIndex = i
  for(let j=i;j<length;j++) {

    if (array[j] > maxVal) {
      maxVal = array[j]
      maxIndex = j
    }
  }
  swap(array,maxIndex,length-1);
}
function swap(array: any, i: number, j: number) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

let a = [1, 5, 2, 4, 3,7];
console.log(a);
heapSort(a);

console.log(a);
