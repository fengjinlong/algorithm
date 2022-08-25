// 节流
const limit = function(fn, timer) {
  let firstTime = new Date();
  return new Proxy(fn, {
    // apply 拦截函数 
    apply(target, content, args) {
      let  lastTime = new Date;
      if (lastTime - firstTime > timer) {
        // fn.bind(content)(args)
        // fn.bind(target)(args)
        target(args)
        firstTime = new Date;
      } else {
        console.log('limit')
      }
    }
  })
}

const fun = () => {
  console.log('执行')
}
const targetFun = limit(fun, 1000)

setInterval(targetFun, 200)