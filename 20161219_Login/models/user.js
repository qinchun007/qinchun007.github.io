// 引入函式庫
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 建立 profile Schema
var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});

// 根據 userSchema 產成 User 物件
mongoose.model('User', userSchema);

// 將 User 變成 Node.js 模組
// module.exports = User;