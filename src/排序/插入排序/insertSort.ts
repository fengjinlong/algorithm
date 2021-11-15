const fun = arr => {
  if(arr.length === 0) return
  for(let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      while (j>0 && arr[j] < arr[j-1]) {
        let tem = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = tem
        j--
      }
    }
  }
  console.log(arr)
}

const arr  = [10,1,5,2,4,3]
fun(arr)