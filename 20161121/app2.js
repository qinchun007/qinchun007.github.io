var http = require('http');
var server = http.createServer(function(req,res){
res.writeHead(200,{'Content-Tpye':'text/plain'});
res.write('1+2+..'+n+'='+sum);
res.end();
});

var n =5;
var sum = 0;
for(i=1;i<n;i++){
    sum = sum+n;
}
server.listen(12345);
console.log('Server running at http://127.0.0.1:12345/');
