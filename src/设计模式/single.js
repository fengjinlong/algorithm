var Signleton = function (name) {
  this.name = name;
}
Signleton.prototype.getName = function () {
  console.log(this.name)
}
Signleton.getInstance = (function () {
  var instance = null;
  return function (name) {
    if (!instance){
      instance = new Signleton(name)
    }
    return instance
  }
})()

let a = Signleton.getInstance('a')
let b = Signleton.getInstance('b')
console.log(a === b)