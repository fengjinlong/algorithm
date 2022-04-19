function new1(fun, ...args) {
  let obj = {};
  Object.setPrototypeOf(obj, fun.prototype);
  let result = fun.apply(obj, args);
  return  result instanceof Object ? result : obj
}
function new2(fun, ...args) {
  let obj = {};
  Object.setPrototypeOf(obj, fun.prototype)
  let result = fun.apply(obj, args);
  return result instanceof Object ? result : obj
}