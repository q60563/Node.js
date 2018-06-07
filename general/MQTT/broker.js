var mosca = require('mosca');

var ascoltatore = {
  type: 'mongo',
  url: 'mongodb://localhost:27017/mqtt',
  pubsubCollection: 'ascoltatori',
  mongo: {}
};

var settings = {
  port: 1883,
  backend: ascoltatore
};

var server = new mosca.Server(settings);

server.on('clientConnected', function(client){
  console.log('client connected', client.id);
});

server.on('published', function(packet, client){
  //console.log('Published', packet.payload);
  //console.log('Packet: ', typeof(packet.payload));
  if(Buffer.isBuffer(packet.payload)){
    console.log('Published', (packet.payload).toString());
  }
});

server.on('subscribed', function(topic, client) {
  console.log('subscribed : ', topic);
});

server.on('ready', setup);

function setup(){
  console.log('Mosca server is up and running');
}
