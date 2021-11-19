// 快速排序  数组方式

const arr = [3,1,4,2,5];
function quick(left, right) {
  let i = left
  let j = right
  if (i > j) {
    return
  }
  let tem = arr[left];
  while (i < j) {
    while(tem <= arr[j] && i < j) {
      j--
    }
    while(tem >= arr[i] && i < j) {
      i++;
    }
    if (i < j) {
      let t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
    }
  }
  arr[left] = arr[i];
  arr[i] = tem;

  quick(left, i-1);
  quick(i+1, right);
  
}

quick(0, 4)
console.log(arr);
