// 找出能被两个给定参数和它们之间的连续数字整除的最小公倍数。
// 范围是两个数字构成的数组，两个数字不一定按数字顺序排序。
// 例如对 1 和 3 —— 找出能被 1 和 3 和它们之间所有数字整除的最小公倍数。

function smallestCommons(arr) {
  var result;
  
  // 对arr进行从小到大的排序
  arr.sort(function(a,b) {
    return a - b;
  });
  
  var mulNum = 1;
  // 将给定参数之间的连续数字放到临时数组tempArr中
  var tempArr = [];
  for(var i = arr[0]; i < arr[1] + 1; i ++) {
    tempArr.push(i);
  }
  
  // 求两个数最小公倍数
  function forTwoNum(m,n) {
    var minNum = Math.min(m,n);
    var maxNum = Math.max(m,n);
    for(var j = maxNum; j <= m*n; j ++) {
      if((j % m === 0) && (j % n === 0)) {
        return j;
      }
    }
  }
  
  // 求数组中所有元素的最小公倍数
  function forArrNum(arr) {
    var temp = 1;
    arr.forEach(function(ele) {
      temp = forTwoNum(temp,ele);
    });
    return temp;
  }
  
  result = forArrNum(tempArr);
  return result;
}

smallestCommons([1, 5]) // 60。
smallestCommons([5, 1]) // 60。
smallestCommons([1, 13]) // 360360。
