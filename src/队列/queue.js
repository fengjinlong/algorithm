// 击鼓传花
class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  // add
  enqueue(ele) {
    this.items[this.count] = ele
    this.count++;
  }
  // del
  dequeue() {
    if (this.isEmpty()) {
      console.log(99999)
      return undefined;
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++;
    return result;

  }
  peek() {
    if (this.isEmpty) {
      return undefined;
    }
    return this.items[this.lowestCount]
  }
  isEmpty() {
    return this.count - this.lowestCount === 0
  }
  size() {
    return this.count - this.lowestCount
  }

  clear() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.dequeue()
// console.log(queue.isEmpty())
console.log(queue)

function beat(itemsList, num) {
  // 队列
  const queue = new Queue()
  // 淘汰的
  const eliminateList = []

  // add
  itemsList.forEach(item => {
    queue.enqueue(item)
  });

  // 循环
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    eliminateList.push(queue.dequeue())
  }

  return {
    eliminateList,
    winner: queue.dequeue()
  }
}
let r = beat([1,2],3)
console.log(r)



