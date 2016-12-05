console.log("hello");
var fs = require('fs');
var http = require('http');
console.log(__dirname);
var filename = __dirname + '\\result.json';
console.log(filename);


var request = require('request');

var cheerio = require('cheerio');
var site = 'https://www.zhihu.com';
var options = {
    method: 'GET',
    uri: 'https://www.zhihu.com/search',
    qs: {
        q: 'node.js',

        type: 'content'
    }
};


var server = http.createServer(function(req, res) {

    request(options, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            //console.log(body) // Show the HTML for the Google homepage.
            var $ = cheerio.load(body);
            var $title = $('a.js-title-link');
            var result = [];
            for (var i = 0; i < $title.length; i++) {
                var item = {
                    title: $($title[i]).text(),
                    link: site + $($title[i]).attr('href')
                }



                console.log(item);
                result.push(item);
            }
            var str = JSON.stringify(result, null, 10);
            fs.writeFile('result.json', str, 'utf8', function(err) {
                if (err) {
                    console.log("存档失败");
                    return;
                } else
                    console.log("存档完成");
            });

        }
    });



    fs.readFile(filename, 'utf8', function(err, content) {
        if (err) {
            console.log('Failed to read');
            res.writeHead(404, { 'Content-Tpye': 'text/plain' });
            res.end();
            return;
        }
        //console.log(content);
        // a = content;
        res.writeHead(200, { 'Content-Type': 'text/plian; charset=utf8' });
        res.write(content);
        res.end();
    });




});

server.listen(1234);
console.log('server running at http://127.0.0.1:1234/')