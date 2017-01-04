// 当你救了一个重要的人时，很可能其他队友也会因此获救。
// arr 中有几个元素满足func条件，这就能多增加几个不满足条件的元素

function drop(arr, func) {
  // Drop them elements.
  var result = [];
  arr.forEach(function(ele) {
    var len = result.length;
    if(func(ele) === true) {
      result.push(ele);
    } else {
      if(len) {
        result.push(ele);
        len--;
      }
    }
  });
  return result;
}

drop([1, 2, 3, 9, 2], function(n) {return n > 2;}); // [3, 9, 2]
