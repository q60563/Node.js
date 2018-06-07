function a(){
  console.log("function a");
}

//var b = a();

function *c(){
  console.log("function c1");
    a();
  console.log("function c2");
}
function *d(){
  console.log("function d1");
  yield a();
  //b.next();	
  console.log("function d2");
}

var cc = c();
var dd = d();
console.log("out 0");
cc.next();
console.log("out 1");
cc.next();
console.log("out 2");
dd.next();
console.log("out 3");
dd.next();
console.log("out 4");






