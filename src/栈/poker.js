// 1-9 js 数组模拟 存在一些问题 

const P = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function poker(arr1, arr2) {
  let head1 = 0
  let tail1 = 6

  let head2 = 0
  let tail2 = 6

  const stack = []
  let top = 0
  let t
  // 出牌逻辑
  while (head1 < tail1 && head2 < tail2) {
    t = arr1[head1]
    // arr1 出牌

    // 玩家判断是否可以收牌
    if (P[t] === 0) {
      // 标记
      top++
      stack[top] = t
      head1++;
      P[t] = 1
      // 不可以
      // top++;
    } else {
      // 可以 先收自己出的一张，再瘦栈里面的牌
      head1++;
      arr1[tail1] = t
      tail1++;

      // 收栈里面的扑克
      while (stack[top] != t) {
        P[stack[top]] = 0
        arr1[tail1] = stack[top]
        tail1++;
        top--
      }
      P[stack[top]] = 0
      arr1[tail1] = t
      tail1++;
      top--
    }
    if (head1 == tail1) break

    // 玩家2 总是领导老子了
    t = arr2[head2]

    if (P[t] === 0) {
      P[t] = 1
      top++
      stack[top] = t
      head2++;
      // top++;
    } else {
      head2++
      arr2[tail2] = t
      tail2++;

      while (stack[top] != t) {
        P[stack[top]] = 0
        arr2[tail2] = stack[top]
        tail2++;
        top--
      }
      P[stack[top]] = 0
      arr2[tail2] = t
      tail2++;
      top--
    }
    if (head2 == tail2) break



  }

  console.log(head1)
  console.log(tail1)
  console.log(head2)
  console.log(tail2)
  console.log(arr2)
  console.log(stack)

}
const arr1 = [2,4,1,2,5,6]
const arr2 = [3,1,3,5,6,4]
poker(arr1, arr2)