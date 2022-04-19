Function.prototype.call1 = (ctx, ...arg) => {
  ctx = ctx ? Object(ctx) : window;
  ctx.fn = this;
  let result = ctx.fn(...arg);
  delete ctx.fn;
  return result;
};

Funciton.prototype.apply1 = (ctx, arg) => {
  ctx = ctx ? Object(ctx) : window;
  ctx.fn = this;
  let result = ctx.fn(...arg);
  delete ctx.fn;
  return result;
};
Funciton.prototype.call2 = (ctx, ...arg) => {
  ctx = ctx ? Object(ctx) : window;
  ctx.fn = this;
  let result = ctx.fn(...arg);
  delete ctx.fn;
  return result;
}
