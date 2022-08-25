// 右边变量的prototype 在左边变量的原型链上
function myInstanceof(left, right) {
  let prototype = right.prototype
  left = left.__proto__;
  while (true) {
    if (left === null || left === undefined) {
      return false;
    }
    if (prototype === left) {
      return true;
    }
    left = left.__proto__
  }
}

function A () {};
let a = new A();
let r = myInstanceof(a, A)
console.log(r)

