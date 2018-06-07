/*
**將自定義function加入至預設function
*/

const fs = require('fs');
const join = require('path').join;

const helper = join(__dirname, './helper');
fs.readdirSync(helper)
  .filter(file => ~file.search(/^[^\.].*\.js$/))
  .forEach(file => require(join(helper, file)));


var arr = [1,2,3,4,5];
console.log(arr);

var newArr = arr.deleteByNameAndClean();
console.log(newArr);

var otherArr = newArr.clean(3);
console.log(otherArr);
