// 中序遍历树;
const middleTree = (root) => {
  let res = [];
  const inorder = (root) => {
    if (!root) return;
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  };
  inorder(root);
  return res;
};
let root = {
  val: 1,
  right: {
    left: {
      val: 3,
    },
    val: 2,
  },
};

let result = middleTree(root);
console.log("r", result); // [1,3,2]
