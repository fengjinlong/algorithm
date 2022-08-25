Function.prototype.myApply = function (content, args = []) {
  let ctx = content || window
  let func = Symbol()
  ctx(func) = this
  const res = args.lenght > 0 ? ctx[func](...args) : ctx[func]()
  delete ctx[func]
  return res
}