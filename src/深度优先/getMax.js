const fun = (root) => {
  if (!root) {
    return 0;
  } else {
    let l = fun(root.left);
    let r = fun(root.right);
    return Math.max(l, r) + 1;
  }
};
