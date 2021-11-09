const shellSort = (arr) => {
  let len = arr.length;
  let temp;
  let group = Math.floor(len / 2);

  for (group; group > 0; group = Math.floor(group / 2)) {

    for (let i = group; i < len; i++) {

      for (let j = i - group; j >= 0; j = j - group) {
        let a1 = arr[j];
        let a2 = arr[j + group];
        if (arr[j] > arr[j + group]) {
          temp = arr[j]
          arr[j] = arr[j + group]
          arr[j + group] = temp
        }
      }
    }
  }
  console.log(arr)

}
const aa = [10, 8, 2, 7, 3, 6, 4, 9, 5, 1]
shellSort(aa)