/* 
  prev 理解为上一次执行的结果更好，并不是数组的前一个值
*/
/**
 * @description 找数组最大值
 * @author Werewolf
 * @date 2021-12-17
 * @param {*} prev 前一个值为最大值，prve能被赋值
 * @param {*} current 当前值，数组的元素，不能赋值
 * @return {*} prev
 */
const reducer = (prev, current) => {
  if (prev > current) {
    prev = current;
  }
  return prev;
};
const arr = [1, 2, 3, 4, 5, 3, 2];
let v = arr.reduce(reducer);
// console.log(v)

/**
 * @description 数组求和
 * @author Werewolf
 * @date 2021-12-17
 * @param {*} prev
 * @param {*} current
 */
const reducer2 = (prev, current) => prev + current;
arr.reduce(reducer2);

/**
 * @description 求对象内元素的和，这里不能写 prev.x + current.x, 需要传第一个的默认值
 * @author Werewolf
 * @date 2021-12-17
 * @param {*} prev 上一次计算结果
 * @param {*} current 数组元素
 * @return {*}
 */
const reducer3 = (prev, current) => {
  return prev + current.x;
};
const arr3 = [{ x: 1 }, { x: 2 }, { x: 3 }];

/**
 * @description 扁平话数组
 * @author Werewolf
 * @date 2021-12-17
 * @param {*} prev 初始化的参数 []
 * @param {*} current
 * @return {*}
 */
const reducer4 = (prev, current) => {
  return prev.concat(current);
};
// const arr4 = [[1,2],[3]]
// console.log(arr4.reduce(reducer4, []))

/**
 * @description 求数组中元素出现的次数
 * @author Werewolf
 * @date 2021-12-17
 * @param {*} prev 初始参数 {}
 * @param {*} current 数组元素
 * @return {*}
 */
const reducer5 = (prev, current) => {
  if (current in prev) {
    prev[current]++;
  } else {
    prev[current] = 1;
  }
  return prev;
};
// const arr5 = ['a','b','co','a','b','c']
// console.log(arr5.reduce(reducer5, {}))

/**
 * @description 扩展运算符的应用
 * @author Werewolf
 * @date 2021-12-17
 * @param {*} prev
 * @param {*} current
 * @return {*}
 */
const reducer6 = (prev, current) => {
  return [...prev, ...current.books];
};
const friends = [
  {
    name: "Anna",
    books: ["Bible", "Harry Potter"],
    age: 21,
  },
  {
    name: "Bob",
    books: ["War and peace", "Romeo and Juliet"],
    age: 26,
  },
  {
    name: "Alice",
    books: ["The Lord of the Rings", "The Shining"],
    age: 18,
  },
];
// console.log(friends.reduce(reducer6, ["init_Data"]))

/**
 * @description 数组去重
 * @author Werewolf
 * @date 2021-12-17
 * @param {*} prev
 * @param {*} current
 * @return {*}
 */
const reducer7 = (prev, current) => {
  if (prev.indexOf(current) === -1) {
    prev.push(current);
  }
  return prev;
};
let myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
// console.log(myArray.reduce(reducer7, []))

const double = (x) => x + x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;
/**
 * @description 功能性函数管道
 * @author Werewolf
 * @date 2021-12-17
 * @param {*} functions
 */
const pipe =
  (...functions) =>
  (input) => {
    return functions.reduce((prev, curr) => {
      prev = curr(prev);
      return prev;
    }, input);
  };

const multiply6 = pipe(double, triple, quadruple);
// console.log(multiply6(2));

/* 
  reduce 实现 map
*/
Array.prototype.reduce_mm = function (callback, thisArg) {
  return this.reduce((prev, curr, index, arr) => {
    prev[index] = callback.call(thisArg, curr, index, arr);
    return prev;
  }, []);
};
const arr7 = [1, 2, 3];
console.log(arr7.reduce_mm((ele, index) => ele * 10));
