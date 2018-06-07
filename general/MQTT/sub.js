var mqtt = require('mqtt')
//var client  = mqtt.connect('mqtt://test.mosquitto.org')
var client = mqtt.connect('mqtt://127.0.0.1:1883', {clientId:'1',clean:false}); 

client.on('connect', function () {
  client.subscribe('presence', {qos:1});
});
 
client.on('message', function (topic, message) {
  console.log(message.toString());
});
