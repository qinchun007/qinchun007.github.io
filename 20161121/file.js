var fs = require('fs');
var a;
console.log(__dirname);
var filename = __dirname + '\\web\\index.html';
console.log(filename);

fs.readFile(filename, 'utf8', function(err, content) {
    if (err) {
        console.log('Failed to read');
        return;
    }
    console.log(content);
    a = content;
});
var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Tpye': 'text/html' });

    res.write(a);
    res.end();
});
server.listen(12345);
console.log('server running at http://127.0.0.1:12345/')