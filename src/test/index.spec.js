import {
  Queue
} from '../队列/queue'
describe('init', () => {
  it('ii', () => {
    const queue = new Queue()
    const eliminateList = []
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.enqueue(4)
    while (queue.size() > 1) {
      for (let i = 0; i < 5; i++) {
        queue.enqueue(queue.dequeue())
      }
      eliminateList.push(queue.dequeue())
    }

    expect(queue.size()).toBe(1);
    queue.dequeue()
    expect(queue.size()).toBe(0);
  })
})