try {
  module.exports = Promise;
} catch (e) {}
function Promise1(executor) {
  let self = this;
  self.status = "pending";
  self.data = undefined;
  self.onResolvedCallback = [];
  self.onRejectedCallback = [];

  function resolve(value) {
    if (value instanceof Promise1) {
      return value.then(resolve, reject);
    }
    setTimeout(() => {
      if (self.status === "pending") {
        self.status = "resolved";
        self.data = value;
        for (let i = 0; i < self.onResolvedCallback.length; i++) {
          self.onResolvedCallback[i](value);
        }
      }
    });
  }

  function reject(reason) {
    setTimeout(() => {
      if (self.status === "pending") {
        self.status = "rejected";
        self.data = reason;
        for (let i = 0; i < self.onRejectedCallback.length; i++) {
          self.onRejectedCallback[i](reason);
        }
      }
    });
  }

  try {
    executor(resolve, reject);
  } catch (e) {}
}
function resolvePromise(promise2, x, resolve, reject) {
  var then;
  var thenCalledOrThrow = false;
  if (promise2 === x) {
    return reject(new TypeError("Chaining cycle detected for promise!"));
  }
  if (x instanceof Promise) {
    if (x.status === "pending") {
      x.then(function (v) {
        resolvePromise(promise2, v, resolve, reject);
      }, reject);
    } else {
      x.then(resolve, reject);
    }
    return;
  }
  if (x !== null && (typeof x === "object" || typeof x === "function")) {
    try {
      then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          function rs(y) {
            if (thenCalledOrThrow) return;
            thenCalledOrThrow = true;
            return resolvePromise(promise2, y, resolve, reject);
          },
          function rj(r) {
            if (thenCalledOrThrow) return;
            thenCalledOrThrow = true;
            return reject(r);
          }
        );
      } else {
        resolve(x);
      }
    } catch (e) {
      if (thenCalledOrThrow) return;
      thenCalledOrThrow = true;
      return reject(e);
    }
  } else {
    resolve(x);
  }
}

Promise1.prototype.then = function (onResolved, onRejected) {
  let self = this;
  let promise2;

  onResolved = typeof onResolved === "function" ? onResolved : function (v) {};
  onRejected = typeof onRejected === "function" ? onRejected : function (r) {};

  if (self.status === "resolved") {
    return (promise2 = new Promise1(function (resolve, reject) {
      setTimeout(() => {
        try {
          let x = onResolved(self.data);
          // if (x instanceof Promise) {
          // x.then(resolve, reject);
          // }
          resolvePromise(promise2, x, resolve, reject);
          resolve(x);
        } catch (e) {
          reject(e);
        }
      });
    }));
  }
  if (self.status === "rejected") {
    return (promise2 = new Promise1(function (resolve, reject) {
      setTimeout(() => {
        try {
          var x = onRejected(self.data);
          // if (x instanceof Promise) {
          //   x.then(resolve, reject);
          // }
          resolvePromise(promise2, x, resolve, reject);
          reject(x);
        } catch (e) {
          reject(e);
        }
      });
    }));
  }
  if (self.status === "pending") {
    return (promise2 = new Promise1(function (resolve, reject) {
      self.onResolvedCallback.push(function (value) {
        try {
          let x = onResolved(self.data);
          // if (x instanceof Promise) {
          //   x.then(resolve, reject);
          // }
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
      self.onRejectedCallback.push(function (reason) {
        try {
          let x = onRejected(self.data);
          // if (x instanceof Promise) {
          //   x.then(resolve, reject);
          // }
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    }));
  }
};
Promise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
};
// 最后这个是测试用的，后面会说
Promise1.deferred = Promise1.defer = function () {
  var dfd = {};
  dfd.promise = new Promise1(function (resolve, reject) {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
};
/**
 * Promise(executor) {...}
 * executor(resolve, reject) ----> (resolve, reject) => {}
 * let p = new Promise1((resolve, reject) => {});
 *
 */
