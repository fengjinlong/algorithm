Function.prototype.apply2 = function (content) {
  if (typeof this !== "function") {
    throw new TypeError("error");
  }
  content = content || window;
  content.fn = this;
  let args = arguments[1];
  let result;
  if (args) {
    result = content.fn(...args);
  } else {
    result = content.fn();
  }
  delete content.fn;
  return result;
};
