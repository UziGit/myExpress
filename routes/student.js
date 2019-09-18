//先引入express模块
const express = require('express');

//定义一个路由实例
const router = express.Router();

//在这个路由实例上加路由代码
router.get('/',(req,res) => {
    res.send('查看了学生列表');
})

router.post('/',(req,res) => {
    res.send('新增某个学生')
})

router.delete('/:id',(req,res) => {
    res.send('删除了某个学生');
})

router.get("/:id/edit",(req,res) => {
    res.send("修改了某个学生");
})

//将这个路由实例暴露出去
module.exports = router;