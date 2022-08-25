export class Queue {
  count: number;
  lowestCount: number;
  items: {};
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  enqueue(el) {
    this.items[this.count] = el;
    this.count++;
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  size() {
    return this.count - this.lowestCount;
  }
  isEmpty() {
    return this.size() === 0;
  }
}
