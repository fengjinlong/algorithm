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
                j--;
            }
            arr[i] = arr[j];

            while (middle >= arr[i] && i < j) {

                i++;
            }
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