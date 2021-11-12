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
t.insert(1)
t.insert(7)
t.insert(2)
t.insert(5)
t.insert(4)
t.insert(6)
t.insert(3)
t.toString()

let cb = (k) => {
  console.log(k)
}
// t.inOrderTraverse(cb)
t.preOrderTraverse(cb)
console.log('---')
t.postOrderTraverse(cb)
// console.log(t)
