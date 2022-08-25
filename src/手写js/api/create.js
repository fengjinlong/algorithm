// 用Object.create 实现继承
// 绑定this 继承原型方法 指定构造函数

function Rectangle (length, width) {
  this.length = length;
  this.width = width;
}
function Square(length) {
  Rectangle.call(this, length, length);
}
Square.prototype = Object.create(Rectangle.prototype, {
  constructor: {
    value: Square,
  }
})

let sq = new Square(9)

console.log(sq instanceof Square)
console.log(sq instanceof Rectangle)
