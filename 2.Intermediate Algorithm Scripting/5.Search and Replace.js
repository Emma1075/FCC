// 使用给定的参数对句子执行一次查找和替换，然后返回新句子。
// 第一个参数是将要对其执行查找和替换的句子。
// 第二个参数是将被替换掉的单词（替换前的单词）。
// 第三个参数用于替换第二个参数（替换后的单词）。
// 注意：替换时保持原单词的大小写。例如，如果你想用单词 "dog" 替换单词 "Book" ，你应该替换成 "Dog"。

function myReplace(str, before, after) {
  // 将字符串拆分成数组
  var arrtmp = str.split(' ');
  
  // 遍历数组中每个元素
  arrtmp.forEach(function(ele,i) {
    
    // 找到同before相同的元素ele，并取得其索引值
    if(ele == before) {
      
      // 判断大小写。如果before是小写字母，则after也是小写
      if(before == before.toLowerCase()) {
        after = after.toLowerCase();
      } 
      // 否则after首字母大写
      else {
        var afterArr = after.split('');
        var firstLetter = afterArr[0].toUpperCase();
        afterArr.splice(0,1,firstLetter);
        after = afterArr.join('');
      }

      // 用after替换arrtmp中通before相同的元素ele
      arrtmp.splice(i,1,after);
    }
  });
  
  // 返回字符串retval
  var retval = arrtmp.join(' ');
  return retval;
}
myReplace("Let us go to the store", "store", "mall") // "Let us go to the mall"。
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") // "He is Sitting on the couch"。
