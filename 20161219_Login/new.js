// 引入函式庫
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dbname = 'members';

// 連接database
mongoose.connect('mongodb://localhost/' + dbname);


// 宣告資料欄位
var profileSchema = new Schema({ name: String, id: String, pw: String, email: String });

// 根據 porfileSchema 產生 Profile 資料類型 (class)
var Profile = mongoose.model('profile', profileSchema);



var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

    console.log('資料庫連接成功');

    // 根據 Profile 資料類型，宣告 wang 資料
    var wang = new Profile({
        name: '張三',
        id: 'zs',
        pw: 'asdf',
        email: 'zs@qq.com'
    });

    wang.save(function(err, doc){
        if (err) {
            console.log(doc.name + '新增失敗');
        } else {
            console.log(doc.name + '新增成功');
        }
    })
});

db.close();