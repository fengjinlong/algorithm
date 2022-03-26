/**
 * load 只从新发送一次
 * myGetData 发送几次用户自定义
 */
function getData() {
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.ceil(Math.random() * 20);
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
function load(onError) {
  let p = getData();
  return p.catch((err) => {
    return new Promise((resolve, reject) => {
      const retry = () => resolve(getData());
      onError(retry);
    });
  });
}
load((retry) => {
  retry();
}).then(
  (res) => {
    console.log("res" + res);
  },
  (err) => {
    console.log("err2" + err);
  }
);
