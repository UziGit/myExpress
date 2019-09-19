//这个文件就是专门用来制作要操作的表的格式的，也就是表的模型
//引入这个链接数据库的模块来操作数据库，也就是建立表；
const mongoose = require("../config/db");

//定义你要操作的表的数据结构，表的字段。schema
const schema = new mongoose.Schema({
    username:String,
    email:String,
    password:String
})

//生成model
// const model = mongoose.model('model的名字'，就是上一步定义的schema)
const model = mongoose.model('user',schema);

//暴露model
module.exports = model;
