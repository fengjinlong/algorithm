// async function runParallel(maxConcurrency, source, iteratorFn) {
//   const ret = []
//   const executing = []
//   for (const item of source) {
//     const p = Promise.resolve().then(() => iteratorFn(item, source))
//     ret.push(p)

//     if (maxConcurrency <= source.length) {
//       const e = p.then(() => executing.splice(executing.indexOf(e), 1))
//       executing.push(e)
//       if (executing.length >= maxConcurrency) {
//         await Promise.race(executing)
//       }
//     }
//   }
//   return Promise.all(ret)
// }

const source = [2000, 1000, 3000, 5000, 3333, 4444, 5555, 6666, 7777];
async function build(target) {
  console.log(target);
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("buiild", target);
      resolve("success");
    }, target);
  });
}
async function runParallel1(maxConcurrency, source, iteratorFn) {
  const ret = [];
  const executing = [];
  for (let item of source) {
    const p = Promise.resolve().then(() => iteratorFn(item));
    ret.push(p);
    if (maxConcurrency <= source.length) {
      const e = p.then(() => {
        console.log("执行一个");
        executing.splice(executing.indexOf(e), 1);
      });
      executing.push(e);

      if (executing.length >= maxConcurrency) {
        console.log("promise race 开始执行");
        await Promise.race(executing);
      }
    }
  }
  return Promise.all(ret);
}
runParallel1(5, source, build).then((res) => {
  console.log("promise all 执行完毕");
});
