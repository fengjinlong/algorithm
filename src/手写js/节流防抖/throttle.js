function throttle(fn, delay) {
  let flag = null;
  return function () {
    if (flag) {
      return;
    }
    flag = setTimeout(() => {
      fn.apply(this, arguments);
      flag = null;
    }, delay);
  };
}
