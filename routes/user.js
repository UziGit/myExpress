//注册功能的实现;
const express = require('express');
//创建一个路由的实例
const router = express.Router();
//需要引入module里面的use，因为要操作这个表的文件,因为是构造函数，所以大写
const UseModel = require('../modules/use'); 
//设置注册的路由
router.get('/create',(req,res) => {
    res.render('../views/register.ejs')
});

//注册完成的路由
router.post('/stroe',(req,res) => {
    //获取form表单传过来的参数
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    //对参数做出校验
    console.log(req.body);
    if(!username || !password || !email){
        res.send('参数有误');
        return;
    }
    //验证唯一性
    UseModel.findOne({ email:email }).then( (data) => {
        if( data.email || data.username ){
            res.send('用户名或者邮箱已被注册!');
            // return;
        }else{
            //存储到数据库中
            let user = new UseModel({
                username:username,
                password:password,
                email:email
            });

            user.save().then(()=>{
                res.send('注册成功');
            }).catch(()=>{
                res.send('注册失败');
            })
        
            console.log(req.body);
            res.send('注册成功');
        }
    })

});
module.exports = router;

//暴露模块
// module.exports = router;