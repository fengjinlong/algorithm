/**
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

// 失败后，重复请求直到成功
function loadToResolve(onError) {
  return new Promise((resolve, reject) => {
    function again() {
      let p = getData();
      return p.catch((err) => {
        return new Promise((resolve, reject) => {
          const retry = () => resolve(again());
          onError(retry);
        });
      });
    }
    again();
  });
}
// 失败后，只重复1次请求

function loadOneTimes(onError) {
  let p = getData();
  return p.catch((err) => {
    return new Promise((resolve, reject) => {
      const retry = () => resolve(getData());
      onError(retry);
    });
  });
}
loadOneTimes((retry) => {
  retry();
}).then(
  (res) => {
    console.log("res" + res);
  },
  (err) => {
    console.log("err2" + err);
  }
);
