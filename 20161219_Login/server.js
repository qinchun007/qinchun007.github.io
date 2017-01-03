// 引入函式庫
var mongoose = require('mongoose');
var User = require('./models/user.js');




var dbname = 'final_project';

// 連接database
mongoose.connect('mongodb://120.125.63.129/' + dbname);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
     console.log('資料庫連接成功');

    var wang = new User({
        name: '老王',
        username: 'lwss',
        password: 'asdf',
        admin: false,
        location: 'Taipei',
        meta: {
            age: 18,
            website: ''
        }
    })
   
    wang.save(function (err, doc) {
        if (err) {
            console.log(err.message);
        } else {
            console.log(doc.name + '新增成功');

        }
    })
});

