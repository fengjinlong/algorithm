// 如果期望代码的输出变成 0 -> 1 -> 2 -> 3 -> 4 -> 5，
// 并且要求原有的代码块中的循环和两处 console.log 不变，该怎么改造代码？
// 新的需求可以精确的描述为：代码执行时，立即输出 0，之后每隔 1 秒依次输出 1,2,3,4，
// 循环结束后在大概第 5 秒的时候输出 5

// promise 方式

const tesk = [];
for (var i = 0; i < 5; i++) {
  ((j) => {
    tesk.push(
      new Promise((resolve) => {
        setTimeout(() => {
          console.log(new Date(), j);
          resolve();
        }, 1000 * j);
      })
    );
  })(i);
}
Promise.all(tesk).then(() => {
  console.log(666);
  setTimeout(() => {
    console.log(new Date(), i);
  }, 1000);
});

const tasks = [];
const output = (i) => new Promise((resolve) => {
    setTimeout(() => {
      console.log(new Date(), i);
      resolve()
    }, 1000 * i);
  });

for (var i = 0; i < 5; i++) {
  tasks.push(output(i));
}
Promise.all(tasks).then(() => {
  console.log(888);
  setTimeout(() => {
    console.log(new Date(), i);
  }, 1000);
});

// ES7 形式
const sleep = (timeout) => new Promise((resolve) => {
  setTimeout(resolve, timeout)
})
(async () => {
  for (var i = 0; i < 5; i++) {
    if(i > 0) {
      await sleep(1000)
    }
    console.log(new Date(), i)
  }
  await sleep(1000)
  console.log(new Date(), i)
})()