// 基础版本
function deepCopy(obj) {
  if (typeof obj === 'object') {
    let newObj = []
    if (obj.constructor === Array) {
      obj.forEach(ele => {
        newObj.push(ele)
      })
    } else {
      for (let i in obj) {
        newObj[i] = deepCopy(obj[i])
      }
    }
    return newObj
  } else {
    return obj
  }
}



// 面试终极版本
// 判断是 obj function 且不是  null
const isComplexDataType = obj => {
  return (typeof obj === 'object' || typeof obj === 'function') && obj !== null
}

const deepClone = function (obj, hash = new WeakMap()) {
  //如果成环了,参数obj = obj.loop = 最初的obj 会在WeakMap中找到第一次放入的obj提前返回第一次放入WeakMap的cloneObj
  if (hash.has(obj)) {
    return hash.get(obj)
  }

  let type = [Date, RegExp, Set, Map]
  // let type = [Date, RegExp, Set, Map, WeakMap, WeakSet]
  // WeakMap, WeakSet 存在疑义，暂时不考虑
  // Object 类型不能实现深克隆 
  // Number String Boolean 类型可以 也可以放进数组吧？那为啥不放进去呢？
  if (type.includes(obj.constructor)) {
    return new obj.constructor(obj)
  } 

  //遍历传入参数所有键的特性
  let allDesc = Object.getOwnPropertyDescriptors(obj) 

  //继承原型
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc)
  
  hash.set(obj, cloneObj)
  for (let key of Reflect.ownKeys(obj)) {
    //Reflect.ownKeys(obj)可以拷贝不可枚举属性和符号类型
    // 如果值是引用类型(非函数)则递归调用deepClone
    cloneObj[key] = isComplexDataType(obj[key]) ? deepClone(obj[key], hash) : obj[key]
  }
  return cloneObj
}

let obj = {
  bigInt: BigInt(12312),
  set: new Set([2]),
  map: new Map([
    ['a', 22],
    ['b', 33],
  ]),
  num: 0,
  str: '',
  boolean: true,
  unf: undefined,
  nul: null,
  obj: {
    name: '我是一个对象',
    id: 1,
  },
  arr: [0, 1, 2],
  func: function () {
    console.log('我是一个函数')
  },
  date: new Date(0),
  reg: new RegExp('/我是一个正则/ig'),
  [Symbol('1')]: 1,
}

Object.defineProperty(obj, 'innumerable', {
  enumerable: false,
  value: '不可枚举属性',
})
obj = Object.create(obj, Object.getOwnPropertyDescriptors(obj))
obj.loop = obj
let cloneObj = deepClone(obj)
console.log('obj', obj)
console.log('cloneObj', cloneObj)

for (let key of Object.keys(cloneObj)) {
  if (typeof cloneObj[key] === 'object' || typeof cloneObj[key] === 'function') {
    console.log(`${key}相同吗？ `, cloneObj[key] === obj[key])
  }
}
