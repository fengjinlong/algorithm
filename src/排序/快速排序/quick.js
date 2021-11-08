var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
var quickSort = function (arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var mid = arr.length >> 1;
    console.log(mid);
    var middleValArr = arr.splice(mid, 1);
    var middleVal = middleValArr[0];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < middleVal) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(middleVal, quickSort(right));
};
var a = quickSort(arr);
console.log(a);
