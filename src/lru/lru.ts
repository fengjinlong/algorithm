// const LRUCache = function (capacity) {};
class LRUCache {
  capacity: number;
  cache: Map<any, any>;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  // 取出来用一下，优先级调到最高
  get(key: any) {
    if (this.cache.has(key)) {
      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    }
    return -1;
  }
  // 存一个
  put(key: any, value: any) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else {
      // 是否超过容量
      if (this.cache.size >= this.capacity) {
        let old = this.cache.keys().next().value;
        this.cache.delete(old);
      }
    }
    this.cache.set(key, value);
  }
  // for test
  tostring() {
    let str = "";
    for (const [key, value] of this.cache.entries()) {
      str += key;
    }
    return str;
  }
}
export { LRUCache };
