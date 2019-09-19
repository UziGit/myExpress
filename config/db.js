//用来做mongoose连接的

//1.引入mongoose
const mongoose = require("mongoose");
//2.定义一个mongodb的链接地址
// const url = 'mongodb://127.0.0.1:27017/要操作的数据库的名字';
const url = "mongodb://127.0.0.1:27017/express";
//3.使用mongoose模块的connect()方法去链接；
// mongoose.connect(要链接的url地址,{设置选项配置：useNewUrlParser:true});这个方法返回一个promise对象；
mongoose
  .connect(url, { useNewUrlParser: true , useUnifiedTopology : true})
  .then(() => {
    console.log("数据库链接成功！");
  })
  .catch(erro => {
    console.log("数据库链接失败");
    console.log(erro);
  });

  module.exports = mongoose;