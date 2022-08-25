import { defaultToString } from "./util.js";
class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}
// 字典
export default class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
  hasKey(key) {
    return this.table[this.toStrFn(key)] !== null;
  }
  set(key, value) {
    if (key !== null && value !== null) {
      const tableKey = this.toStrFn(key)
      this.table[tableKey] = new ValuePair(key, value);
    }
  }
  get(key) {
    const valuePair = this.table[this.toStrFn(key)];
    return valuePair === null ? undefined : valuePair.value;
  }
  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }
  keyValues() {
    return Object.values(this.table);
  }
  keys() {
    return this.keyValues().map((v) => v.key);
  }
  values() {
    return this.keyValues().map((v) => v.value);
  }
  size() {
    return Object.keys(this.table).length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  clear() {}
}
