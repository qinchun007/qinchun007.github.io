var fs = require('fs');
console.log(__dirname);
var filename = __dirname +'\\web\\index.html';
console.log(filename);
function readfile()
{fs.readFile(filename,'utf8',function(err,content){
    if(err){
        console.log('Failed to read');
        return;
    }
    console.log(content);
    return content;
});}
var http = require('http');
var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Tpye':'text/plain'});
  var file = readfile();
    res.write(file+'');
    res.end();
});
server.listen(12345);
console.log('server running at http://127.0.0.1:12345/')