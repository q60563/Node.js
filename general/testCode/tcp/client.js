const net = require('net');

const client = new net.Socket();
client.connect(26000, '127.0.0.1', function () {
  console.log('Connected');
  client.write('Hello, server!');
});

client.on('data', function (data) {
  console.log('Received: ' + data);
  client.destroy();
  // client.end();
});

client.on('close', function () {
  console.log('Connection closed');
});
