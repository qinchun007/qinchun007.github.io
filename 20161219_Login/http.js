// 載入 http 的模組
var http = require('http');
// 引用 File System 模組
var fs = require('fs');

var url = require('url');
var path = require('path');

// 引入函式庫
var mongoose = require('mongoose');
var User = require('./models/user.js');

// 設定資料庫名稱
var dbname = 'members';

var file_content;

var webPath = 'public';

var that;


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('資料庫連接成功');
});

// 連接database
mongoose.connect('mongodb://localhost/' + dbname);

var server = http.createServer(function (req, res) {
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
    } else if (pathname === '/json/') {

        that = res || {};

        var url_parts = url.parse(req.url, true);
        var user_data = url_parts.query;
        console.dir(user_data);




        var user = new User(user_data);

        user.save(function (err) {
            if (err) {
                console.log('新增失敗');
                console.log(err.message);
                that.writeHead(200, { 'Content-Type': 'text/html' });
                that.write('新增失敗<br>');
                that.write(err.message);
                that.end();
                db.close();
                return;
            } else {
                console.dir(this);
                console.log('新增成功');
                that.writeHead(200, { 'Content-Type': 'text/html' });
                that.write('新增成功');
                that.end();
                db.close();
                return;
            }
        })

        return;
    }
    // __dirname 是程式的路徑
    // webPath 是公開的資料夾
    // pathname 是使用者要求的路徑名稱
    var filePath = path.join(__dirname, webPath, pathname);
    console.log('filePath:' + filePath);


    // 讀取檔案
    fs.readFile(filePath, 'utf8', function (err, content) {
        if (err) {
            console.log('Failed to read');
            // 若檔案讀取錯誤，回傳 404
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end();
            return;
        }
        // 將檔案內容傳給瀏覽器
        //res.writeHead(200, { 'Content-Type': 'text/' });
        res.write(content);
        res.end();
    })


});

// 監聽 12345 port
server.listen(12345);
console.log('Server running at http://127.0.0.1:12345/');