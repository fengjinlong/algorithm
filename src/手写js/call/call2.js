Function.prototype.call2 = function (content) {
  if (typeof this !== "function") {
    throw new Error("error");
  }
  content = content || window;
  content.fn = this;
  const args = [...arguments].slice(1);
  let result = content.fn(...args);
  delete content.fn;
  return result;
};
var a = 'a1'
function fun() {
  console.log(this.a)
  
}
fun()
