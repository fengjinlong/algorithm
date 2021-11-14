const BinarySearchTree = function () {
  let Node = function (key) {
    this.key = key
    this.left = null
    this.right = null
  }
  // 根结点
  let root = null
  this.insert = (key: any) => {
    let newNode = new Node(key)
    if (!root) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }
  this.min = () => {
    return minNode(root)
  }
  this.max = () => maxNode(root)
  this.search = (searchKey) => searchNode(searchKey,root)
  this.toString = () => {
    console.log(JSON.stringify(root))
  }
  // 中序遍历 总是得到一个升序的序列
  this.inOrderTraverse = (callback) => {
    inOrderTraverseNode(root, callback)
  }
  // 前序遍历
  this.preOrderTraverse = (callback) => {
    preOrderTraverseNode(root, callback)
  }
  // 后序遍历
  this.postOrderTraverse = (callback) => {
    postOrderTraverseNode(root, callback)
  }
}
// 后序遍历
const postOrderTraverseNode = (node, callback) =>{
  if(node) {
    postOrderTraverseNode(node.left, callback)
    postOrderTraverseNode(node.right, callback)
    callback(node.key)
  }
}
// 前序遍历
const preOrderTraverseNode = (node, callback) => {
  if (node) {
    callback(node.key)
    preOrderTraverseNode(node.left, callback)
    preOrderTraverseNode(node.right, callback)
  }
}
// 中序遍历
const inOrderTraverseNode = (node, callback) => {
  if (node) {
    inOrderTraverseNode(node.left, callback)
    callback(node.key)
    inOrderTraverseNode(node.right, callback)
  } 
}
// 插入
const insertNode = (root, newNode) => {
  if (root.key > newNode.key) {
    if (root.left === null) {
      root.left = newNode
    } else {
      insertNode(root.left, newNode)
    }
  } else {
    if (root.right === null) {
      root.right = newNode
    } else {
      insertNode(root.right, newNode)
    }
  }
}
let t = new BinarySearchTree()
t.insert(9)
t.insert(7)
t.insert(2)
t.insert(5)
t.insert(4)
t.insert(6)
t.insert(3)
// t.toString()
// t.min()
// t.max()
t.search(5)

let cb = (k) => {
  console.log(k)
}
// t.inOrderTraverse(cb)
t.preOrderTraverse(cb)
// console.log('---')
t.postOrderTraverse(cb)

function minNode(root: any) {
  let current = root
  while(current !== null && current.left !== null) {
    current = current.left
  }
  console.log('minKey: ', current.key, current)
  return current
}

function maxNode(root: any) {
  let current = root
  if (current !== null && current.right !== null) {
    current = current.right
  }
  console.log('maxKey: ', current.key)
  return current
}



function searchNode(searchKey: any, node: any) {
  if(node === null) return false
  if (searchKey > node.key) {
    searchNode(searchKey, node.right)
  } else if (searchKey < node.key) {
    searchNode(searchKey, node.left)
  } else {
    console.log('find it !')
    return true
  }
}
// console.log(t)
