function find(arr, func) {
  var result;
  arr.filter(function(ele) {
    if(func(ele) === true && !result) {
      result = ele;
    }
  });
  return result;
}

find([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }); // 8
