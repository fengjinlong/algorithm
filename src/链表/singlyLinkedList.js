// 单链表
function SinglyLinkedList() {
	// 节点
	// node {
	// 	element:''
	// 	nest: 1
	// }
	function Node(element) {
		this.element = element; // 当前节点的元素
		this.next = null; // 下一个节点指针
	}

	var length = 0; // 链表的长度
	var head = null; // 链表的头部节点

	// 向链表尾部添加一个新的节点
	this.append = function (element) {
		var node = new Node(element);
		var currentNode = head;

		// 判断是否为空链表
		if (head === null) {
			// 是空链表，就把当前节点作为头部节点
			head = node;
		} else {
			// 从 head 开始一直找到最后一个 node
			while (currentNode.next) {
				// 后面还有 node
				currentNode = currentNode.next;
			}
			// 把当前节点的 next 指针 指向 新的节点
			currentNode.next = node;
		}
		// 链表的长度加 1
		length++;
	};

	// 向链表特定位置插入一个新节点
	this.insert = function (position, element) {
		if (position < 0 || position > length) {
			// 越界
			return false;
		} else {
			var node = new Node(element);
			var index = 0;
			var currentNode = head;
			var previousNode;

			// 在最前插入节点
			if (position === 0) {
				node.next = currentNode;
				head = node;
			} else {
				// 循环找到位置
				while (index < position) {
					index++;
					previousNode = currentNode;
					currentNode = currentNode.next;
				}
				// 把前一个节点的指针指向新节点，新节点的指针指向当前节点，保持连接性
				previousNode.next = node;
				node.next = currentNode;
			}

			length++;

			return true;
		}
	};

	// 从链表的特定位置移除一项
	this.removeAt = function (position) {
		if ((position < 0 && position >= length) || length === 0) {
			// 越界
			return false;
		} else {
			var currentNode = head;
			var index = 0;
			var previousNode;

			if (position === 0) {
				head = currentNode.next;
			} else {
				// 循环找到位置
				while (index < position) {
					index++;
					previousNode = currentNode;
					currentNode = currentNode.next;
				}
				// 把当前节点的 next 指针 指向 当前节点的 next 指针，即是 删除了当前节点
				previousNode.next = currentNode.next;
			}

			length--;

			return true;
		}
	};

	// 从链表中移除指定项
	this.remove = function (element) {
		var index = this.indexOf(element);
		return this.removeAt(index);
	};

	// 返回元素在链表的索引，如果链表中没有该元素则返回 -1
	this.indexOf = function (element) {
		var currentNode = head;
		var index = 0;

		while (currentNode) {
			if (currentNode.element === element) {
				return index;
			}

			index++;
			currentNode = currentNode.next;
		}

		return -1;
	};

	// 如果链表中不包含任何元素，返回 true，如果链表长度大于 0，返回 false
	this.isEmpty = function () {
		return length === 0;
	};

	// 返回链表包含的元素个数，与数组的 length 属性类似
	this.size = function () {
		return length;
	};

	// 获取链表头部元素
	this.getHead = function () {
		return head.element;
	};

	// 由于链表使用了 Node 类，就需要重写继承自 JavaScript 对象默认的 toString() 方法，让其只输出元素的值
	this.toString = function () {
		var currentNode = head;
		var string = '';

		while (currentNode) {
			string += ',' + currentNode.element;
			currentNode = currentNode.next;
		}

		return string.slice(1);
	};

	// 打印链表数据
	this.print = function () {
		console.log(this.toString());
	};

	// 获取整个链表
	this.list = function () {
		console.log('head: ', head);
		return head;
	};
}
let s = new SinglyLinkedList()
s.append('aaa')
s.append('bbb')
s.list()