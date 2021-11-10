// 约瑟夫 丢手卷 击鼓传花问题
// 单循环链表

// 1 创建单循环链表
// 节点
function NodeLink(element) {
  this.element = element
  this.next = null
}
// 类
function SingleLoopLink() {
  let length = 0
  let head = null
  // 实现方法 append insert removeAt remove indexOf list isEmpty toString
  this.append = element => {
    let node = new NodeLink(element)
    if (this.isEmpty()) {
      head = node
      node.next = head
      length++
    } else {
      let current = head
      while (current.next !== head) {
        current = current.next
      }
      current.next = node
      node.next = head
      length++
    }
  }
  this.insert = (position: number, element: any) => {
    let node = new NodeLink(element)
    if (this.isEmpty()) {
      head = node
      length++
      return true
    }

    if (position > length - 1) {
      position = position - length
    }
    let current = head
    let index = 0
    let prevNode

    if (position === 0) {
      while (current.next !== head) {
        current = current.next
      }
      node.next = head
      head = node
      current.next = head

      length++
      return true
    } else {
      while (index !== position) {
        index++
        current = current.next
      }
      // 找到了
      node.next = current.next
      current.next = node
      length++
      return true
    }
  }
  this.removeAt = position => {
    if (this.isEmpty() || position < 0) {
      return false
    }
    if (position > length - 1) {
      position = position - length
    }
    // 只有一个节点
    let current = head
    if (length === 1) {
      head = null
      length = 0
      return current
    } else {
      let index = 0
      let prveNode
      let deleteNode

      if (position === 0) {
        // 找到最后一个节点 和 第一个节点
        while (current.next !== head) {
          current = current.next
        }
        deleteNode = head
        head = head.next
        current.next = head
      } else {
        while (index !== position) {
          index++
          prveNode = current
          current = current.next
        }
        deleteNode = current
        prveNode.next = current.next
      }

      length--
      return deleteNode
    }
  }
  // 索引
  this.indexOf = element => {
    let index = 0
    let current = head
    if (this.isEmpty()) {
      return undefined
    }
    if (current.element === element) {
      return index
    }
    while (current.element !== element) {
      index++
      current = current.next
    }
    return index
  }
  this.list = () => {
    console.log(head)
    return head
  }
  this.isEmpty = () => {
    return length === 0
  }
  this.toString = () => {
    // 循环链表 打印一圈后 再次打印一个 说明是循环单链表 自己想的
    if (this.isEmpty()) {
      return null
    } else {
      let tempArr = []
      let current = head
      for (let i = 0; i <= length; i++) {
        tempArr.push(current.element)
        current = current.next
      }
      console.log(tempArr.join(', '))
      return tempArr.join(', ')
    }
  }
}
const singLoop = new SingleLoopLink()
singLoop.append('111')
singLoop.append('222')
singLoop.append('333')
singLoop.append('444')
singLoop.append('555')
singLoop.toString()
// let index = singLoop.indexOf('333')
// console.log(index)

// let a = singLoop.removeAt(6)
// console.log(a)
singLoop.removeAt(1)
singLoop.removeAt(2)
// let i = new NodeLink('www')
// singLoop.insert(1, '555')
singLoop.toString()
