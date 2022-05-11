Function.prototype.bind1 = function (ctx, ...args) {
  if (typeof this !== "function") {
    return new Error("this must be a function");
  }
  let self = this;
  const bound = function () {
    self.apply(
      this instanceof bound ? this : ctx,
      args.concat(Array.slice.call(arguments))
    );
  };

  if (this.prototype) {
    Object.setPrototypeOf(bound, this.prototype);
  }
  return bound;
};
Function.prototype.bind2 = function (ctx, ...args) {
  if (typeof this !== "function") {
    return new Error("this must be a function");
  }
  let self = this;
  const bound = function () {
    self.apply(
      this instanceof bound ? this : ctx,
      args.concat(Array.slice.call(arguments))
    );
  };
  if (this.prototype) {
    Object.setPrototypeOf(bound, this.prototype);
  }
  return bound;
};

Function.prototype.bind3 = function (ctx, ...args) {
  if (typeof this !== "function") {
    return new Error("this must be a function");
  }
  let self = this;
  const bound = function () {
    self.apply(
      this instanceof bound ? this : ctx,
      args.concat(Array.slice.call(arguments))
    );
  };
  if (this.prototype) {
    Object.setPrototypeOf(bound, this.prototype);
  }
  return bound;
};
Function.prototype.bind4 = function (ctx, ...args) {
  if (typeof this !== "function") {
    return new Error("this must be a function");
  }
  let self = this;
  const bound = function () {
    self.apply(
      this instanceof bound ? this : ctx,
      args.concat(Array.slice.call(arguments))
    );
  };

  if (this.prototype) {
    Object.setPrototypeOf(bound, this.prototype);
  }
  return bound;
};
