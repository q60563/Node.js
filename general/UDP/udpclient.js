const dgram = require('dgram');
const clientSocket = dgram.createSocket('udp4');

clientSocket.on('message',function(msg,rinfo){
  console.log(msg);
  console.log(rinfo);
  clientSocket.close();
});

clientSocket.bind(8888);

setTimeout(function(){
  clientSocket.send('Hello Word!', 0, 11, 51234, '127.0.0.1');
},1000);

