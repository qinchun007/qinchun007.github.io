var request = require('request');
var http = require('http');
var fs = require('fs');
var cheerio = require('cheerio');
var filename = __dirname + '\\web\\index.html';


var site = 'http://www.zhihu.com';

var server = http.createServer(function(req, res) {
    fs.readFile(filename, 'utf8', function(err, content) {
        if (err) {
            console.log('Failed to read');
            // 若檔案讀取錯誤，回傳 404
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end();
            return;
        }
        // 將檔案內容傳給瀏覽器
        //res.writeHead(200, { 'Content-Type': 'text/' });

        var options = {
            method: 'GET',
            uri: 'http://www.zhihu.com/search',
            qs: {
                q: 'node.js',
                type: 'content'
            }
        };
        // 網址, callback 
        request(options, function(error, response, body) {
            if (!error && response.statusCode == 200) {

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
                    //console.log($title[i]);
                }

                //console.log(body) // Show the HTML for the Google homepage.

                //var wstream =fs.createWriteStream('index.html', {encoding:'utf8'});
                //var wstream = fs.createWriteStream('myOutput.txt');
                //console.log(body);
                //wstream.write(body);
                var str = JSON.stringify(result, null, 4);
                fs.writeFile('result.json', str, 'utf8', null, (err) => {
                    if (err) throw err;
                    console.log('It\'s saved!');
                });
                res.writeHead(200, { 'Content-Type': 'text/plian; charset=utf8' });
                res.write(str);
                //res.write(content);
                res.end();
                //wstream.end();
            }
        })



    })
});

// 監聽 12345 port
server.listen(12345);
console.log('Server running at http://127.0.0.1:12345/');