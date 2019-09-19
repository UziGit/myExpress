//引入express
const express = require('express');
//引入注册页面的路由模块
const registerRouter = require('./routes/user');
const cookieParser = require('cookie-parser');

const server = express();
//做引入模板引擎的处理
server.set('views','views');
server.set('view engine','ejs');

//处理静态资源托管
server.use(express.static('public'));

//处理req.body
server.use(express.json());
server.use(express.urlencoded({ extended : true }));

//处理cookies
server.use(cookieParser());

//处理注册的路由的中间件
server.use('/register',registerRouter)
// server.use('/mongoose',mongoose)
 

server.listen(3000,() => {
    console.log('服务启动，地址：127.0.0.1:3000')
})



























// //引入express
// const express = require('express');
// const server = express();
// const cookieParser = require('cookie-parser');

// server.use(express.json());
// server.use(express.urlencoded({ extended:true }));
// //设置一个中间件给req加上一个cookies 的属性
// server.use(cookieParser());
// //去处理路由
// server.get('/',(req,res) => {
//     res.send('主页！');
//     //res上面是没有send方法的，此时的res是经过express处理以后的res，不是原本的res了，所以能用send方法；
// });

// server.post('/handleLogin',(req,res) => {
//     console.log(req.body);
//     res.send("hello req.body");
// });

// server.get('/setCookie',(req,res) => {
//     res.cookie('username','zhangshan',{
//         maxAge:1000 * 60 * 10 
//     });
//     res.send('设置成功');
// });

// server.get('/getCookie',(req,res) => {
//     console.log(req.cookies)
//     res.send('获取成功');
// });

// //监听一个端口号
// server.listen(3000,() => {
//     console.log('服务已经启动，地址是：http://127.0.0.1:3000');
// })


// //引入express
// const express = require('express');
// const cookieParser = require('cookie-parser');
// const server = express(); 
// //引入路由模块
// const postRouter = require('./routes/post');
// const studentRouter = require('./routes/student');

// server.use('/post',postRouter);

// server.use('/student',studentRouter);

// //设置ejs模板引擎相关的操作
// server.set('views','views');
// server.set('view engine','ejs')

// //配置welcome的路由
// server.get('/welcome',(req,res) => {
//     //因为上面已经设置了ejs的模板引擎相关操作，所以这里可以直接使用，.ejs可以省略；
//     res.render('welcome.ejs',{name:'dengchao'})
// })

// server.listen(3000,()=>{
//     console.log('服务启动，地址：127.0.0.1:3000');
// })
