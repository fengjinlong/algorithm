// 123 + 456 = 789    扑克牌 
let arr = []
let book = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
]
let NUM = 10
let total = 0
function dfs (step) {
    if (step === NUM) {
        if (arr[0] * 100 + arr[1] * 10 + arr[2] + arr[3] *100 + arr[4] * 10 + arr[5] === arr[6] * 100 +  arr[7] * 10 + arr[8]) {
            console.log(arr)
            total++
            return
        }
    }
    for(let i = 1; i < NUM; i++) {
        if (book[i] === 0) {
            arr[step-1] = i
            book[i] = 1
            dfs(step + 1)
            book[i] = 0
        }
    }
    return
}
dfs(1)
console.log(total)