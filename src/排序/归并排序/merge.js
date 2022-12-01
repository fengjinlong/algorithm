// var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
// var mergeSort1 = function (arr) {
//   var len = arr.length;
//   if (len < 2) {
//     return arr;
//   } else {
//     var middle = len >> 1;
//     var leftArr = arr.slice(0, middle);
//     var rightArr = arr.slice(middle);
//     return merge(mergeSort(leftArr), mergeSort(rightArr));
//   }
// };
// function merge1(leftArr, rightArr) {
//   var result = [];
//   // 同时存在
//   while (leftArr.length && rightArr.length) {
//     // 比较第一个
//     if (leftArr[0] < rightArr[0]) {
//       result.push(leftArr.shift());
//     } else {
//       result.push(rightArr.shift());
//     }
//   }
//   while (leftArr.length) {
//     result.push(leftArr.shift());
//   }
//   while (rightArr.length) {
//     result.push(rightArr.shift());
//   }
//   return result;
// }
// var a = mergeSort1(arr);
// console.log(a);

const mergeSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  let m = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, m));
  let right = mergeSort(array.slice(m));
  return merge(mergeSort(left), mergeSort(right));
};
function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      // result.push(left.shift());
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  if (i < left.length) {
    result.push(...left.slice(i));
  }
  if (j < right.length) {
    result.push(...right.slice(j));
  }
  return result;
}
console.log(mergeSort([1, 6, 2, 3, 4, 9]));
