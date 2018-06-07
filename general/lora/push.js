var serialport = require('serialport');
var SerialPort = serialport.SerialPort;
var port = '/dev/tty.usbserial-A4D1619';
var serialPort = new SerialPort(port,{
	baudrate : 9600
});
var a = "255";
serialPort.on('open', function(){
	serialPort.write(a, function(err){
		if(err) return console.log('Err: ', err.message);
		console.log('message written');
	});

	serialPort.close();
});


