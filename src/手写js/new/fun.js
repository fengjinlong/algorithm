function Fun(name) {
  this.name = name;
  // return 1
  // return '1'
  return true;
  // return null

  // err
  // return {}
  // return function () {}
  // return []
  // return /w/
}
Fun.prototype.age = "prototype age";
Fun.prototype.say = function () {
  console.log("prototype function say");
};

let f = new Fun("name");
console.log(f);
console.log(f.name);
console.log(f.age);
console.log(f.say());

function _new(ctor, ...args) {
  if (typeof ctor !== "function") {
    throw new TypeError("ctor must be a function");
  }
  let obj = {};
  obj.__proto__ = ctor.prototype;
  let result = ctor.apply(obj, [...args]);
  if (typeof result === "function" || typeof result === "object") {
    return result;
  } else {
    return obj;
  }
}
console.log('_f------------')
let _f = _new(Fun, 'name');
console.log(_f);
console.log(_f.name);
console.log(_f.age);
console.log(_f.say());