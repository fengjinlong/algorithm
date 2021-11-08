// 单链表
function Node(element) {
	this.element = element;
	this.next = null;
}

function SinglyLinkedList() {
	let length = 0
	let head = null;

	this.append = (element) => {
		// 创建节点
		let node = new Node(element);
		let currentNode = head

		// 是否为空
		if (head === null) {
			head = node;
			node.next = head
		} else {
			currentNode = head
			// 找到最后一个
			while (currentNode.next !== head) {
				currentNode = currentNode.next;
			}
			currentNode.next = node;
			node.next = head;
		}
		length++
		return true;
	}

	// 插入
	this.insert = (position, element) => {
		if (position < 0 || position >= length) {
			return false;
		} else {
			let node = new Node(element);
			let index = 0
			let currentNode = head
			let previousNode
			// 最前面
			if (position === 0) {
				node.next = currentNode;
				head = node;
			} else {
				// 找位置 
				while (index < position) {
					index++;
					previousNode = currentNode
					currentNode = currentNode.next;
				}
				// 找到position 后，也就是确定了 previousNode 位置
				previousNode.next = node
				node.next = currentNode;

			}
			length++;
		}
		return true;
	}

	// 移除指定位置
	this.removeAt = (removePosition) => {
		if (removePosition > length-1) {
			removePosition = removePosition - length
		}
		console.log(length)
		if (removePosition < 0 || removePosition > length-1 || length === 0) {
			// 越界
			return false
		} else {
			let currentNode = head
			let index = 0
			let previousNode
			if (removePosition === 0) {
				// 当前 currentNode
				let curr = head
				// 移动第一个节点
				while (curr.next !== head) {
					curr = curr.next
				}
				head = currentNode.next
				curr.next = head



			} else {
				// 找位置
				while (index < removePosition) {
					index++
					previousNode = currentNode
					currentNode = currentNode.next
				}
				// 找到了
				previousNode.next = currentNode.next
			}
			length--
			return currentNode.element
		}
	}
	// 移除元素
	this.remove = (element) => {
		let pos = this.indexOf(element)
		return this.removeAt(pos)
	}

	// 返回元素索引
	this.indexOf = (element) => {
		let currentNode = head
		let index = 0

		while (currentNode) {
			if (currentNode.element === element) {
				console.log(`${element} 的索引是 ${index}`)
				return index
			}
			index++
			currentNode = currentNode.next
		}
		return -1
	}

	this.list = () => {
		console.log('head: ', head);
		return head;
	}
	this.size = () => {
		return length
	}
	this.isEmpty = () => {
		return length === 0
	}
	this.toString = () => {
		let arr = []
		let currentNode = head;
		let indexCheck = 0
		while (indexCheck <= length) {
			arr.push(currentNode.element)
			currentNode = currentNode.next
			indexCheck++
		}
		console.log(arr.join(', '))
		return arr.join(',')
	}
	// 获取头部
	this.getHead = () => {
		console.log(head.element)
		return head.element
	}
}
let s = new SinglyLinkedList()
s.append('aaa')
s.append('bbb')
s.append('ccc')
s.append('ddd')
// s.insert(2, 'fff')
// s.list()

// s.toString()
// s.removeAt(5)
// s.toString()
// s.removeAt(3)
// s.toString()
// s.append('eee')
s.toString()
s.remove('aaa')
s.toString()
// s.getHead()
// s.indexOf('ccc')