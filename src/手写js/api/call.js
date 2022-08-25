Function.prototype.myCall = function (content, ...aergs) {
  let ctx = content || window;
  let func = Symbol();
  ctx[func] = this;

  args = args ? args : [];

  const res = args.lenght > 0 ? ctx[func](...args) : ctx[func]();
  delete ctx[func];
  return res;
};

fun.call(obj, args);
Function.prototype._call = function (ctx, args) {
  ctx = ctx || window;
  ctx.fn = this;
  delete ctx.fn;
  return ctx.fn(...args);
};


Function.prototype.call1 = function (ctx, args) {
  ctx = ctx || window;
  ctx.fn = this;
  r = ctx.fn(...args);
  delete ctx.fn;
  return r;
}