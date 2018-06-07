var items=['A','B'];
var itemsWeight=['90',10];
var aSum=0;
var bSum=0;
var sum=0;
function weightedRandom(items, itemsWeight){
  var totalWeight=eval(itemsWeight.join("+"));
  var randomArray=[];
  var currentItem=0;
  for(var i=0; i<items.length; i++){
    for(var j=0; j<itemsWeight[i]; j++){
      randomArray.push(i);
    }
  }
  var randomNumber=Math.floor(Math.random()*totalWeight);
  return items[randomArray[randomNumber]];
}
//var result = weightedRandom(items, itemsWeight);

var loop = setInterval(function(){
  if(sum==1000){
    console.log('A: '+ aSum);
    console.log('B: '+ bSum);
    clearTimeout(loop);
  }
  var result = weightedRandom(items, itemsWeight);
  if(result=='A') aSum++;
  if(result=='B') bSum++;
  sum++;
},1)

