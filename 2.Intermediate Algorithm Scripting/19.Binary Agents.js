// 传入二进制字符串，翻译成英语句子并返回。
// 二进制字符串是以空格分隔的。

function binaryAgent(str) {
  var binaries = str.split(" ");
  var newStrs = [];
  
  binaries.forEach(function(ele) {
    // 转为二进制code
    var charCode = parseInt(ele,2);
    
    // 将code转为字符
    var letter = String.fromCharCode(charCode);
    
    // 将字符放入数组
    newStrs.push(letter);
  });
  
  var newStr = newStrs.join('');
  return newStr;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
