var mongoose = require('mongoose');
var User = require('./user.js');


var dbname = 'final_project';
var host_ip = '120.125.63.129'
// 連接database
mongoose.connect('mongodb://' + host_ip + '/' + dbname);