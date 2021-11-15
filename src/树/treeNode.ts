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
  this.delete = (node) => {
    if (node === root) {
      root = null
    }
  }
  this.min = () => {
    return minNode(root)
  }
  this.max = () => maxNode(root)
  this.search = searchKey => {
    return searchNode(searchKey, root)
  }
  this.remove = (key: any) => removeNode(root, key, this)
  this.toString = () => {

    console.log(JSON.stringify(root))
  }
  // 中序遍历 总是得到一个升序的序列
  this.inOrderTraverse = callback => {
    inOrderTraverseNode(root, callback)
  }
  // 前序遍历
  this.preOrderTraverse = callback => {
    preOrderTraverseNode(root, callback)
  }
  // 后序遍历
  this.postOrderTraverse = callback => {
    postOrderTraverseNode(root, callback)
  }
}
// 后序遍历
const postOrderTraverseNode = (node, callback) => {
  if (node) {
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
t.insert(4)
t.insert(10)
t.insert(2)
t.insert(6)
t.insert(5)
t.insert(8)

t.toString()
// t.min()
// t.max()
// t.search(5)

let cb = k => {
  console.log(k)
}
// t.inOrderTraverse(cb)
// t.preOrderTraverse(cb)
// t.postOrderTraverse(cb)
t.remove(4)
// t.remove(7)
// t.remove(6)
t.toString()

function minNode(root: any) {
  let current = root
  while (current !== null && current.left !== null) {
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
  if (node === null) return false
  if (searchKey > node.key) {
    return searchNode(searchKey, node.right)
  } else if (searchKey < node.key) {
    return searchNode(searchKey, node.left)
  } else {
    console.log('find it !')
    return node
  }
}

function removeNode(node: any, key: any, self) {
  // console.log(key)
  if (node === null) return false
  let { parent, branch,root } = findParentBranch(key, node)
  // console.log(root)
  if (root) {
    // node = null
    // 删除自身
    self.delete(node)
    return
  }
  node = self.search(key)
  console.log('deleteNode: ', node)

  // 没有子节点
  if (node.left === null && node.right === null) {
    console.log('deleteing')
    // node = null
    parent[branch] = null
    return node
  }
  if (node.left === null) {
    parent[branch] = node.right
    return node
  } else if (node.right === null) {
    parent[branch] = node.left
    return node
  }
  console.log('right')
console.log(node.right)
  let aux = minNode(node.right)
  node.key = aux.key
  node.right = removeNode(node,aux.key,self)
  // parent[branch] = removeNode(node,aux.key,self)
  return node
  // parent[branch] = null
}
interface P {
  parent: object
  branch: string
  root: boolean
}
// 根据子节点，找父节点与 哪个分支的方法
function findParentBranch(childNodeKey, root) {
  let obj: P = {
    parent: {},
    branch: '',
    root: false
  }
  if (childNodeKey === root.key) {
    // 本身
    obj.root = true
    console.log('删除本身')
    return obj
  }
  if (childNodeKey < root.left.key) {
    return findParentBranch(childNodeKey, root.left)
  } else if (childNodeKey > root.right.key) {
    return findParentBranch(childNodeKey, root.right)
  } else {
    
    obj.parent = root
    console.log(childNodeKey)
    if (root.left.key === childNodeKey) {
      obj.branch = 'left'
    } else {
      obj.branch = 'right'
    }
    console.log(obj)

    return obj
  }
}
// 有点问题！！！