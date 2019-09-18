//引入express
const express = require('express');
const server = express();
const cookieParser = require('cookie-parser');

//定义一个中间件
const myTime = (num) => {
    return (req,res,next) => {
        let dates = new Date();
        let year = dates.getFullYear();
        let mon = dates.getMonth() + 1;
        let day = dates.getDate(); 
        if(num == 1){
            req.requestTime = `${year}年`;
            next();
        }else if (num == 2) {
            req.requestTime = `${year}年  ${mon}月`;
            next();
        }else if(num == 3){
            req.requestTime = `${year}年  ${mon}月  ${day}日`;
            next();
        }
        
    }
}
server.use(express.json());
server.use(express.urlencoded({ extended:true }));
server.use(myTime(3))
//设置一个中间件给req加上一个cookies 的属性
server.use(cookieParser());
//去处理路由
server.get('/',(req,res) => {
    res.send('主页！');
    //res上面是没有send方法的，此时的res是经过express处理以后的res，不是原本的res了，所以能用send方法；
});

server.post('/handleLogin',(req,res) => {
    console.log(req.body);
    res.send("hello req.body");
});

server.get('/setCookie',(req,res) => {
    res.cookie('username','zhangshan',{
        maxAge:1000 * 60 * 10 
    });
    res.send('设置成功');
});

server.get('/getCookie',(req,res) => {
    console.log(req.cookies)
    res.send('获取成功');
});

server.get('/reqs',(req,res) => {
    console.log(req.requestTime);
    res.send('添加成功');
})
//监听一个端口号
server.listen(3000,() => {
    console.log('服务已经启动，地址是：http://127.0.0.1:3000');
})