const net = require('net');

const server = net.createServer(function(socket){
  // 回傳訊息至client端
  socket.write('Echo server\r\n');

  //ocket.pipe(socket);
  //以下功能與第7行相同
  socket.on('data', function (data) {
    socket.write(data);
  });
  

  socket.on('error', function(err){
    console.log(err);
  })
});

server.listen(26000);
