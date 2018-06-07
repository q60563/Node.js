var mqtt = require('mqtt');
//var client  = mqtt.connect('mqtt://test.mosquitto.org');
var client = mqtt.connect('mqtt://127.0.0.1:1883');

/*client.on('connect', function () {
  client.subscribe('presence');
  //client.publish('presence', 'Hello mqtt', {qos:1, retain: true});
})*/

var num = 0;
setInterval(function (){
  client.publish('presence', (num++).toString() , {qos:1, retain: true});
},1000);
 
/*client.on('message', function (topic, message) {
  console.log('Topic: ', topic);
  console.log('Message: ', message.toString());
  client.end();
})*/
