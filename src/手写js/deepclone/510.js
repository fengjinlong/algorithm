// 简易版本
function isObj(obj) {
  return typeof obj === "object" && obj !== null;
}
function deepCopy(obj) {
  let newObj = obj instanceof Array ? [] : {};
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      newObj[key] = isObj(element) ? deepCopy(element) : element;
    }
  }
  return newObj;
}

const isObjFunction = (obj) => {
  return (typeof obj === "function" || typeof obj === "object") && obj !== null;
};
const deepCopy = (obj, hash = new WeakMap()) => {
  if (hash.has(obj)) return hash.get(obj);
  let type = [Date, RegExp, Set, Map];
  if (type.includes(obj.constructor)) {
    return new obj.constructor(type);
  }
  // getOwnPropertyDescriptor 自有属性对应的属性描述符。直接赋予该对象的属性，不需要从原型链上进行查找的属性
  /**
   * {a: 1} Object.getOwnPropertyDescriptor(obj)
   * { a: {value: 1, writable: true, enumerable: true, configurable: true} }
   */
  let allDesc = Object.getOwnPropertyDescriptor(obj);
  // getPrototypeOf() 方法返回指定对象的原型
  /**
   * {b: 1} Object.getPrototypeOf(obj)
   * { constructor: ƒ Object()
      hasOwnProperty: ƒ hasOwnProperty()
      isPrototypeOf: ƒ isPrototypeOf()
      propertyIsEnumerable: ƒ propertyIsEnumerable()
      toLocaleString: ƒ toLocaleString()
      toString: ƒ toString()
      valueOf: ƒ valueOf()
      __defineGetter__: ƒ __defineGetter__()
      __defineSetter__: ƒ __defineSetter__()
      __lookupGetter__: ƒ __lookupGetter__()
      __lookupSetter__: ƒ __lookupSetter__()
      __proto__: （…）
      get __proto__: ƒ __proto__()
      set __proto__: ƒ __proto__() 
    }
  */
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);
  hash.set(obj, cloneObj);
  for (const key of Reflect.ownKeys(obj)) {
    cloneObj[key] = isObjFunction(obj[key])
      ? deepCopy(obj[key], hash)
      : obj[key];
  }
  return cloneObj;
};
