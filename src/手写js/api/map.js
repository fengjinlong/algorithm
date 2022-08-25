
if (Array.prototype.map) {
  Array.prototype.map1 = function (callback) {
    if (this === null) {
      throw new TypeError('this is null defined')
    }
    // let arrObj = Object(this)
    let arrObj = this;
    let _this;
    if (arguments.length > 1) {
      _this = arguments[1]
    }
    if (typeof callback !== 'function') {
      throw new TypeError('callback is require')
    }
    const returnArr = [];
    let len = arrObj.length
    for(let i =0;i<len;i++) {
      returnArr[i] = callback.call(_this, arrObj[i], i, arrObj)
    }
    return returnArr
  }
  // return returnArr
}
let arr = [1,2,3,4]
console.log(arr.map1(ele => ele *2))


