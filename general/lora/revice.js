var serialport = require('serialport');
var SerialPort = serialport.SerialPort;
var port = '/dev/tty.usbserial-A4D2FFV';
var serialPort = new SerialPort(port,{
	baudrate: 9600,
	parser: serialport.parsers.byteLength(4)
});

serialPort.on('open', function(){
	console.log('open');
	serialPort.on('data', function(data){
		console.log("get data");
		console.log(data);
	});
});
