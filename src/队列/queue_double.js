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
  // toString
  eachAll() {
    let len = this.count
    let arr = []
    let j = this.heightIndex + 1
    for (var i = 0; i < len; i++) {
      arr.push(this.items[j])
      j++
    }
    return arr.join(' ')
  }
  // del height
  del_queue_height() {
    if (this.isEmpty()) {
      return undefined
    }
    this.heightIndex++
    const result = this.items[this.heightIndex]
    delete this.items[this.heightIndex]
    this.count--
    console.log(result)
    return result

  }
  // del low
  del_queue_low() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.lowestIndex--
    const result = this.items[this.lowestIndex]
    delete this.items[this.lowestIndex]
    this.count--
    console.log(result)
    return result;
  }
  peek_height() {
    if (this.isEmpty()) {
      return undefined
    }
    

  }
  peek_low() {
    if (this.isEmpty) {
      return undefined;
    }
    return this.items[this.lowestCount]
  }
  isEmpty() {
    return this.count === 0
  }
  size() {
    return this.count
  }

  clear() {
    this.items = {}
    this.count = 0
    this.lowestIndex = 0
    this.heightIndex = 0
  }
}

let q = new Queue_double()
// console.log(q.isEmpty())
q.enqueue_low(1)
q.enqueue_low(2)
q.enqueue_heihgt(3)
q.enqueue_low(4)
q.enqueue_heihgt(5)
q.enqueue_low(6)
// console.log(q.isEmpty())
// 531246
console.log(q.eachAll())
q.del_queue_low()
// console.log(1)
console.log(q.eachAll())
q.del_queue_height()
console.log(q.eachAll())
