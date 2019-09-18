//先引入express模块
const express = require('express');

//定义一个路由实例
const router = express.Router();

//在这个路由实例上加路由代码
router.get('/',(req,res) => {
    res.render('../views/post/index',
    {
        post:[
            {title:'愉快的星期三',time:'2019-09-19 20:30:30',content:'今天学习nodejs',autoer:'李威'},
            {title:'愉快的星期四',time:'2019-09-20 20:30:30',content:'今天学习js',autoer:'李威'},
            {title:'愉快的星期五',time:'2019-09-21 20:30:30',content:'今天学习node',autoer:'李威'}
            ],
        isLogin:true
    });
})

router.post('/',(req,res) => {
    res.send('新增某个文章')
})

router.delete('/:id',(req,res) => {
    res.send('删除了某个文章');
})

router.get("/:id/edit",(req,res) => {
    res.send("修改了某个文章");
})

//将这个路由实例暴露出去
module.exports = router;