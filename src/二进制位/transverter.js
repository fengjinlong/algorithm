export function transver(num, flag) {
  const arr = [];
  while (num > 0) {
    let n = Math.floor(num % flag);
    arr.push(n);
    num = Math.floor(num / flag);
  }
  return arr.reverse().join("");
}
