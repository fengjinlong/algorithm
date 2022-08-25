const isComplexDataType = (obj) => {
  return (typeof obj === "object" || typeof obj === "function") && obj !== null;
};
const deepClone = (obj, hash = new WeakMap()) => {
  // 1 日期
  if (obj.constructor === Date) {
    return new Date(obj);
  }
  // 2 正则
  if (obj.constructor === RegExp) {
    return new RegExp(obj);
  }
  // 3 循环引用
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  // 4 取对象的 描述，继承原型链
  let allDesc = Object.getOwnPropertyDescriptor(obj);
  // 继承原型链
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);

  // 5 存
  hash.set(obj, cloneObj);

  // 6 递归
  for (const key of Reflect.ownKeys(obj)) {
    cloneObj[key] =
      isComplexDataType(obj[key]) && typeof obj[key] !== "function"
        ? deepClone(obj[key], hash)
        : obj[key];
  }

  return cloneObj
};
