// 双端队列
// export class Queue_double {
class Queue_double {
  constructor() {
    // 数目
    this.count = 0;
    // 底
    this.lowestIndex = 0;
    // 顶
    this.heightIndex = 0;
    this.items = {};
  }

  // heightIndex -- -- -- lowestIndex
  // add lowest
  enqueue_low(ele) {
    if (this.lowestIndex === 0 && this.heightIndex !== 0) {
      this.lowestIndex = 1
    }
    this.items[this.lowestIndex] = ele
    this.lowestIndex++;
    this.count++;
  }
  // add heightest
  enqueue_heihgt(ele) {
    if (this.heightIndex === 0 && this.lowestIndex !== 0) {
      // 第一次后面add
      this.heightIndex = -1

    } else if (this.heightIndex === 0 && this.lowestIndex === 0) {
      // 第一次 前面先add
      this.lowestIndex = 1
    }

    this.items[this.heightIndex] = ele
    this.heightIndex--;
    this.count++;
  }
  eachAll() {
    let len = this.count
    let arr = []
    for (var i = 0; i < len; i++) {
      let j = this.heightIndex + 1
      arr.push(this.items[j])
      this.heightIndex++
    }
    return arr.join(' ')
  }
  // del
  // dequeue() {
  //   if (this.isEmpty()) {
  //     return undefined;
  //   }
  //   const result = this.items[this.lowestCount]
  //   delete this.items[this.lowestCount]
  //   this.lowestCount++;
  //   return result;
  // }
  // peek() {
  //   if (this.isEmpty) {
  //     return undefined;
  //   }
  //   return this.items[this.lowestCount]
  // }
  isEmpty() {
    return this
  }
  size() {
    return this.count
  }

  // clear() {
  //   this.items = {}
  //   this.count = 0
  //   this.lowestCount = 0
  // }
}

let q = new Queue_double()
q.enqueue_low(1)
q.enqueue_low(2)
q.enqueue_heihgt(3)
q.enqueue_low(4)
q.enqueue_heihgt(5)
q.enqueue_low(6)

// 531246

console.log(q.eachAll())