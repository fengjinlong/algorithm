
import {Queue} from '../队列/queue'
describe('init', () => {
  it('ii', () => {
    const queue = new Queue()
    queue.enqueue(1)
    queue.enqueue(1)
    expect(queue.size()).toBe(2);
    queue.dequeue()
    expect(queue.size()).toBe(1);
  })
})