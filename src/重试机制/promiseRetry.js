/**
 * 已有请求函数getData，其功能为异步请求数据返回promise对象
 * 实现一个myGetData,返回promise对象，要求加入失败重试功能
 * 该函数内部依然使用getData实现，在getData失败一次后间隔一秒钟再重试一次，直到重试到第五次、
 * 如果全都失败了，myGetData所返回的promise为reject，只要有任意一次成功，则停止重试，知道resolve结果。
 *
 */

/**
 * load 只从新发送一次
 * myGetData 发送几次用户自定义
 */
function getData() {
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.ceil(Math.random() * 20);
      console.log(num);
      if (num < 10) {
        console.log("请求成功， 值为" + num);
        resolve(num);
      } else {
        console.log("error， 值为" + num);
        reject("数字大于 10，失败");
      }
    }, 500);
  });
  return p;
}
const myGetData = (getData, times, delay) => {
  return new Promise((resolve, reject) => {
    const reTry = () => {
      getData().then(resolve, (err) => {
        if (times === 0) {
          reject(err);
        } else {
          times--;
          setTimeout(reTry, delay);
        }
      });
    };
    reTry();
  });
};
myGetData(getData, 1, 500);
