Function.prototype.MyCall = function (content) {
  if (typeof this !== "function") {
    throw new Error("");
  }
  if (content === null || content === undefined) {
    content = window;
  } else {
    content = Object(content);
  }

  let fnSym = Symbol();
  content[fnSym] = this;
  let args = [...arguments].slice(1);

  // apply
  // let result = content[fnSym](...args);
  let result = arguments.length > 1 ? content[fnSym](args) : content[fnSym]();
  delete content[fnSym];
  return result;
};
