// 模拟链表
let arr = [1,2,3,4,5,8,10]
let right = []
let len = arr.length
arr.map((ele,index) => {
    if (arr[index + 1]) {

    right.push(index + 1)
    } else {
        right.push(0)
    }
})
// right[0] = 1 说明原数组的第0个元素arr[0]的右边是arr[1] ,right[6]=0 
// right[1] = 2 arr[1]的右边是arr[2]
// right[2] = 3 arr[2]的右边是arr[3]
// right[3] = 4 arr[3]的右边是arr[4]
// right[4] = 5 arr[4]的右边是arr[5]
// right[5] = 6 arr[5]的右边是arr[6]
// right[6] = 0 arr[6]的右边是没有

// right [1,2,3,4,5,6,0]
// 最后一个没有右边

// 6 插入5 8 之间

// 先增加arr
arr[len] = 6
let t = 0
while (right[t] != 0) {
    // 找到临界点 当前节点 arr[t] 下一个节点 arr[right[t]]
    if(arr[right[t]] > arr[len]) {
        // 添加的6 是right里面第[len]    设置他的映射的下一个节点是的序号是right[t]
        // 效果 right[x] = y  arr[x] 的右边是 arr[y]   arr[len](add 的 6) 的右边是 arr[right[t]]( 8 )
        right[len] = right[t]
        // 当前的是t,在right里是下一个是right[t]， 下一个是新增的6 在最后面 len 给其赋值
        right[t] = len
        break

    }
    t = right[t]
}
let tt = 0
while(tt) {
    console.log(arr[tt])
    tt = right[tt]
}
for(let i = 0, t = 0; i < arr.length; i++) {

    console.log(arr[t])
    t = right[t]
}
// console.log(right)