function create(Con, args) {
  let obj = {};
  Object.setPrototypeOf(obj, Con.prototype);
  let result = Con.apply(obj, args);
  return result instanceof Object ? result : obj;
}

/**
 * 对象
 * this指向 ，也就是设置原型
 * 执行构造函数
 * 返回结果
 */

function neww(fun, args) {
  let obj = {};
  Object.setPrototypeOf(obj, fun.prototype);
  let res = fun.apply(obj, args);
  return res instanceof Object ? res : obj;
}

function new1(fun, args) {
  let obj = {};
  Object.setPrototypeOf(obj, fun.prototype);
  let result = fun.call(obj, ...args);
  return result instanceof Object ? result : obj;
}
function new2(fun, args) {
  let obj = {};

  Object.setPrototypeOf(obj, fun.prototype);
  let r = fun.call(obj, ...args);
  return r instanceof Object ? r : obj;
}
