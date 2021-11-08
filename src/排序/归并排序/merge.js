var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
var mergeSort = function (arr) {
    var len = arr.length;
    if (len < 2) {
        return arr;
    }
    else {
        var middle = len >> 1;
        var leftArr = arr.slice(0, middle);
        var rightArr = arr.slice(middle);
        return merge(mergeSort(leftArr), mergeSort(rightArr));
    }
};
function merge(leftArr, rightArr) {
    var result = [];
    // 同时存在
    while (leftArr.length && rightArr.length) {
        // 比较第一个
        if (leftArr[0] < rightArr[0]) {
            result.push(leftArr.shift());
        }
        else {
            result.push(rightArr.shift());
        }
    }
    while (leftArr.length) {
        result.push(leftArr.shift());
    }
    while (rightArr.length) {
        result.push(rightArr.shift());
    }
    return result;
}
var a = mergeSort(arr);
console.log(a);
