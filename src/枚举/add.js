// xx + xx = xx 123456
let arr = [];
let sum = 0;
let book = [];
for (arr[1] = 1; arr[1] <= 6; arr[1]++) {
  for (arr[2] = 1; arr[2] <= 6; arr[2]++) {
    for (arr[3] = 1; arr[3] <= 6; arr[3]++) {
      for (arr[4] = 1; arr[4] <= 6; arr[4]++) {
        for (arr[5] = 1; arr[5] <= 6; arr[5]++) {
          for (arr[6] = 1; arr[6] <= 6; arr[6]++) {
            for (let i = 1; i <= 6; i++) {
              book.push(0);
            }
            for (let i = 1; i <= 6; i++) {
              book[arr[i]] = 1;
            }
            sum = 0;
            for (let i = 1; i <= 6; i++) {
              sum += book[i];
            }
            if (
              sum == 6 &&
              arr[1] * 10 + arr[2] + arr[3] * 10 + arr[4] ==
                arr[5] * 10 + arr[6]
            ) {
              let a = [arr[1], arr[2], arr[3], arr[4], arr[5], arr[6]];

              //   console.log("ok");
              let sss = [0, 0, 1, 1, 1, 1];
              a.map((ele) => {
                sss[ele] = 1;
              });
              if (sss[1] === 0) {
                console.log(sss);
              }
            }
          }
        }
      }
    }
  }
}
