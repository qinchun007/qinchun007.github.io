var http = require('http');
var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('hello world\n');
    res.write('this is my first page!');
    res.end();

});
server.listen(12345);
console.log('Server running at http://127.0.0.1:12345/');