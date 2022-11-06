class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const cretaTree = (arr) => {
  let tree = new Node(arr[0]);
  const Nodes = [tree];
  let i = 1;
  for (const node of Nodes) {
    node.left = new Node(arr[i]);
    Nodes.push(node.left);
    i++;
    if (i === arr.length) return tree;
    node.right = new Node(arr[i]);
    Nodes.push(node.right);
    i++;
    if (i === arr.length) return tree;
  }
};
const arr = [3, 9, 20];
console.log("tree", cretaTree(arr));
// Node {
//   val: 3,
//   left: Node {
//     val: 9,
//     left: Node { val: null, left: null, right: null },
//     right: Node { val: null, left: null, right: null }
//   },
//   right: Node {
//     val: 20,
//     left: Node { val: 15, left: null, right: null },
//     right: Node { val: 7, left: null, right: null }
//   }
// }
