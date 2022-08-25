Function.prototype.myBind = function (content) {
  if (typeof this !== "function") {
    throw new TypeError("error");
  }
  const _this = this;
  const args = [...arguments].slice(1);
  return function F() {
    if (this instanceof F) {
      return new _this(...args, ...arguments);
    }
    return _this.apply(content, args.concat(...arguments));
  };
};

Function.prototype.bind = function (thisObj) {
  if (typeof this !== "function") {
    throw new TypeError("error");
  }
  const self = this;
  const arges = [].slice.call(arguments, 1);
  function Bound() {
    return self.apply(
      this instanceof Bound ? this : thisObj,
      arges.concat([].slice.apply(arguments))
    );
  }
  if (this.prototype) {
    Bound.prototype = Object.create(this.prototype);
  }
  return Bound;
};
Function.prototype.bind = function (thisObj) {
  if (typeof this !== "function") {
    throw new TypeError("error");
  }
  const self = this;
  const arges = [].slice.call(arguments, 1);
  function Bound() {
    return self.apply(
      this instanceof Bound ? this : thisObj,
      arges.concat([].slice.apply(arguments))
    );
  }
  if (this.prototype) {
    Bound.prototype = Object.create(this.prototype);
  }
  return Bound;
};
fun.prototype._bind = function (thisObj, ...args) {
  if (typeof this !== "function") {
    return new TypeError("err");
  }
  let fn = this;
  const bound = function () {
    let con;
    con = fn instanceof bound ? fn : thisObj;
    fn.apply(con, args.concat(...arguments));
  };
  if (this.prototype) {
    Object.setPrototypeOf(bound, this.prototype);
  }
  return bound;
};

Function.prototype._bind = function (thisObj, ...args) {
  if (typeof this !== "function") {
    return new TypeError("err");
  }

  let fn = this;
  const bound = () => {
    let con = fn instanceof bound ? fn : thisObj;
    let args = args.concat(...arguments);
    fn.apply(con, args);
  };
  if (this.prototype) {
    Object.setPrototypeOf(bound, this.prototype);
  }
  return bound;
};
