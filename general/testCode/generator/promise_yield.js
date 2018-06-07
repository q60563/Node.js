var helper = require('./promise_helper');

var add = function*(){
  var sum = yield helper.add(8,9);

  console.log(sum);
  return sum;
}

var a = add();
a.next().value.then(function(res){
  a.next(res);
  console.log('success');
});
