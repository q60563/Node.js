const net = require('net');
const server = net.createServer(function(socket){
  server.maxConnections = 1;
  server.getConnections(function(err,count){
    console.log(count);
  });

    socket.on('data', function (data) { 
        socket.write('hi', function () { 
            console.log('server:收到 client端 傳輸資料為' + data + '回應 hi');    
            // socket.end();
        });  
    });

  socket.setTimeout(3000);

  socket.on('timeout',function(){
    socket.end();
  })
});
server.on('connection', function () {   
    console.log('server端：收到 client 端連線請求，並通知 client 端可以開始傳送資料');  
}); 


server.listen({port:8124,host:'127.0.0.1'}, function () {  
    console.log('TCP Server start');
});
