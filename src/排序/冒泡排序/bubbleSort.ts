const bubbleSort = array => {
  const length = array.length
  if (length < 1) return
  for (let i = 0; i < length; i++) {
    let hasChange = false
    for (let j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let tem = array[j]
        array[j] = array[j + 1]
        array[j + 1] = tem
        hasChange = true
      }
    }
    if (!hasChange) break
  }

  console.log(array)
}

const arr = [7, 8, 4, 5, 6, 3, 2, 1]
bubbleSort(arr)
