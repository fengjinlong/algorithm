function partition(arr, low, high) {
    let i;
    let j;
    let middle;
    while (high > low) {
        i = low;
        j = high;
        middle = arr[low];
        while (i < j) {
            while (arr[j] > middle) {
                // 找到小于 基点的索引
                j--;
            }
            // arr[i] = arr[j];

            while (middle >= arr[i] && i < j) {
                // 找到大于节点的 索引
                i++;
            }

            // 交换位置
            

            arr[j] = arr[i];

        }
        arr[i] = middle;

        partition(arr, low, i - 1);
        low = i + 1;
    }
}
let arr = [1,5,2,4,3,8]

partition(arr, 0, arr.length - 1);

console.log(arr);