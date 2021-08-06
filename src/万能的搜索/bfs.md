![bfs](/Users/fjl/Documents/github/algorithm/src/万能的搜索/bfs.jpg)

1. 深度优先搜索
   - 总体是一个递归
   - 函数初始值带初始参数
   - book 下一次递归 后 要初始化
   - 方向移动 tx ty
   - 越界判断
   - 符合点判断 (book ele
   - 符合点累加逻辑( sum, book, 递归下一个点
   - book[tx] [ty] = 0
2. 广度优先搜索，要素点
   - 符合点插入队列，通过判断队列的指针情况结束while循环
   - 初始值 startX startY sum
   - 队列 que head tail
   - 循环 head < tail
   - book 标记重复点
   - 移动坐标的数组 next[] 得到下一个点的坐标tx ty
   - 越界判断
   - 符合点判断
   - 符合点处理逻辑 sum book que tail
   - head++ 