console.log("hello");
//載入 http 的模組
var http = require('http');
// 引用 File System 模組
var fs = require('fs');
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

var url = require('url');
var path = require('path');

var file_content;

var webPath = 'public';

var server = http.createServer(function(req, res) {
    // req 是本地端請求的訊息
    // res 是主機回傳到本地端的訊息

    // 解析使用者要求的路徑名稱
    let url_path = url.parse(req.url);
    console.log('path:' + url_path);
    let pathname = url_path.pathname;
    console.log('pathname:' + pathname);

    // 判斷pathname是否為預設路徑
    if (pathname === "/" || pathname === "/index.htm") {
        pathname = 'index.html';
    }

    // __dirname 是程式的路徑
    // webPath 是公開的資料夾
    // pathname 是使用者要求的路徑名稱
    var filePath = path.join(__dirname, webPath, pathname);
    console.log('filePath:' + filePath);

    if (pathname === "/json") {
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

        filePath = __dirname + '\\result.json';
        console.log('filePath:' + filePath);

        // fs.readFile(filename, 'utf8', function(err, content) {
        //     if (err) {
        //         console.log('Failed to read');
        //         res.writeHead(404, { 'Content-Tpye': 'text/plain' });
        //         res.end();
        //         return;
        //     }
        //     //console.log(content);
        //     // a = content;
        //     res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf8' });
        //     res.write(content);
        //     res.end();
        // });


    }








    // 讀取檔案
    fs.readFile(filePath, 'utf8', function(err, content) {
        if (err) {
            console.log('Failed to read');
            // 若檔案讀取錯誤，回傳 404
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end();
            return;
        }
        // 將檔案內容傳給瀏覽器
        //res.writeHead(200, { 'Content-Type': 'text/' });
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });
        res.write(content);
        res.end();
    })


});

// 監聽 12345 port
server.listen(12345);
console.log('Server running at http://127.0.0.1:12345/');