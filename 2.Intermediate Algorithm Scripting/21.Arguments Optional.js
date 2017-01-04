// 创建一个计算两个参数之和的 function。如果只有一个参数，则返回一个 function，
// 该 function 请求一个参数然后返回求和的结果。

function add(a,b){
  // 如果a不是数字类型，返回undefined
  if(typeof a !== 'number') {
    return undefined;
  } else if(b === undefined) {
    // a是数字类型，但b不存在，返回一个带有参数n的函数
    return function(n) {
      // 如果参数n不是数字类型，返回undefined
      if(typeof n !== 'number') {
        return undefined;
      } else {
        // 如果参数n是数字类型，返回a与n的和
        return a + n;
      }
    }; 
  } else if(typeof b !== 'number') {
    // 如果b存在，但b不是数字类型，返回undefined
    return undefined;
  } else {
    // a与b均存在，且均为数字类型
    return a + b;
  }
}

add(2, 3) // 5。
add(2)(3) // 5。
add("http://bit.ly/IqT6zt") // undefined。
add(2, "3") // undefined。
add(2)([3]) // undefined。
