// 全排序
// 将123 放入 盒子

// 标记哪些扑克可以放

// const book = [0,0,0]
// const arr = [1,2,3]
// const st = []
// function putInto(step) {
//   if (step === 3) {
//     console.log(st.join(''))
//     return
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (book[i] === 0) {
//       st[step] = arr[i]
//       book[i] = 1;
//       putInto(step + 1)
//       book[i] = 0
//     }
//   }
// }
// putInto(0)

// n个数的全排序

function putIntoNum(num) {
  const book = []
  const st = []

  for (let i = 0; i < num; i++) {
    book[i] = 0
  }

  function putInto(step) {
    if (step === num) {
      console.log(st.join(''))
      return 
    }
    for (let i = 0; i < num; i++) {
      if (book[i] === 0) {
        st[step] = i
        book[i] = 1
        putInto(step + 1)
        book[i] = 0
      }
    }
  }
  putInto(0)


}
putIntoNum(5)






