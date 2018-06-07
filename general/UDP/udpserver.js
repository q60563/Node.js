const dgram = require('dgram');
const serverSocket = dgram.createSocket('udp4');
serverSocket.on('message', (msg, rinfo) => {  
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
    serverSocket.send('OK!', 0, 3, rinfo.port, rinfo.address);
});
serverSocket.on('listening', () => {  
    const address = serverSocket.address();  
    console.log(`server listening ${address.address}:${address.port}`);
});
serverSocket.bind(51234);
