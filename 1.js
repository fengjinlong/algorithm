/**
 * 基数排除
 * 原理：个十百每位都排好了，那也就排好了
 * 排序 59，25，100
 * 转换为相同位数 059，025，100
 */

let array = [59, 25, 100];
let maxLength = 0;
for (let v of array) {
  let length = String(v).length;
  if (length > maxLength) {
    maxLength = length;
  }
}
for (i = 0; i < maxLength; i++) {
  array = sort(array, i);
  console.log(array);
}
function sort(array, i) {
  let buckets = [];
  for (let index = 0; index < 10; index++) {
    buckets.push([]);
  }
  for (const v of array) {
    let pad = String(v).padStart(maxLength, "0");
    let num = pad[maxLength - 1 - i];
    buckets[num].push(v);
  }
  let result = [];
  for (const arr of buckets) {
    result.push(...arr);
  }
  return result;
}
