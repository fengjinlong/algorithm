// 防抖

const debounce = function(fn, delay) {
  let timer;
  return function (...args) {
    if (timer !== undefined) {
      clearTimeout(timer);
    }
    timer = setTimerout(() => {
      fn.apply(this, args)
    }, delay);
  }
}

const f = function () {
  console.log(arguments)
}
const fun = debounce(f, 1000);

input.onchange = fun('参数')