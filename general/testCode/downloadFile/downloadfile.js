var fs = require('fs');
var path = require('path');
var http = require('http');

http.createServer(function(req,res){
  if(req.url == '/download'){
    var downloadFilePath = './testDownload.html';
    var filename = path.basename(downloadFilePath);
    var filesize = fs.readFileSync(downloadFilePath).length;
    res.setHeader('Content-Disposition','attachment;filename='+filename);
    res.setHeader('Content-Length',filesize);
    res.setHeader('Content-Type','application/octet-stream');
    var fileStream = fs.createReadStream(downloadFilePath,{bufferSize:1024*1024});
    fileStream.pipe(res,{end:true});
    return;
  }

  res.writeHead(200,{'content-type': 'text/html'});
  res.end('點擊此處開始下載');
}).listen(8000);
