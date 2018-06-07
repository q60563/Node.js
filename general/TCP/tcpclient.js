var net = require('net');
const client = net.connect({port: 8124}, function () {  
    console.log('client端：向 server端 請求連線');
});
client.on('connect', function () {  
    console.log('client端：與 server端 連線成功，可以開始傳輸資料');
});
client.write('hello!', function () { 
    console.log('client端：開始傳輸資料，傳輸的資料為 hello!');
});
client.on('data', function (data) { 
    console.log('client端：收到 server端 傳輸資料為 ' + data.toString()); 
    // client.end();
});
