exports.add = function(x,y){
  return new Promise(function(resolve,reject){
    resolve(x+y);
  });
}