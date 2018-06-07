var http = require('http');
var ws = require('websocket').server;

var PORT = 9999;
var server = http.createServer().listen(PORT);

webSocketServer = new ws({
  httpServer: server
});

webSocketServer.on('request', function(request){
  var connection = request.accept('echo-protocol', request.origin);

  connection.on('message', function(message){
    console.log(message);
    connection.send('我收到了: ' + message.utf8Data);

    connection.on('close', function(reasonCode, description){
      console.log('close');
    })
  })
})

