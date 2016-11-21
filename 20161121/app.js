var http = require('http');
var server = http.createServer(function(req,res){
 res.writeHead(200,{'Content-Tpye':'text/plain'});
 res.write('a+b='+c);
 res.end();

});
var a = 3;
var b = 5;
var c = a+b;
server.listen(129);

console.log('Server running at http://127.0.0.1:129/');
