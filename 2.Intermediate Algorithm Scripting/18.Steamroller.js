// 对嵌套的数组进行扁平化处理。你必须考虑到不同层级的嵌套。

function steamroller(arr) {
  // I'm a steamroller, baby
  var result = [];
  arr.forEach(function check(ele) {
    if(!Array.isArray(ele)) {
      result.push(ele);
    } else {
      ele.forEach(check);
    }
  });
  return result;
}

steamroller([[["a"]], [["b"]]]) // ["a", "b"]。
steamroller([1, [2], [3, [[4]]]]) // [1, 2, 3, 4]。
steamroller([1, [], [3, [[4]]]]) // [1, 3, 4]。
steamroller([1, {}, [3, [[4]]]]) // [1, {}, 3, 4]。
