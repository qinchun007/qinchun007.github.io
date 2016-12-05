var fs = require('fs');

console.log(__dirname);
var filename = __dirname + '\\web\\index.html';
console.log(filename);


var http = require('http');
var server = http.createServer(function(req, res) {

    fs.readFile(filename, 'utf8', function(err, content) {
        if (err) {
            console.log('Failed to read');
            res.writeHead(404, { 'Content-Tpye': 'text/plain' });
            res.end();
            return;
        }
        //console.log(content);
        // a = content;
        res.write(content);
        res.end();
    });




});


server.listen(12345);
console.log('server running at http://127.0.0.1:12345/')