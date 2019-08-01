var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/user', function(req, res, next) {
  res.send([
    {
      name: 'hql',
      age: 23,
      gender: '男'
    },
    {
      name: 'lbb',
      age: 25,
      gender: '女'
    },
    {
      name: 'lkq',
      age: 64,
      gender: '男'
    },
    {
      name: 'scl',
      age: 69,
      gender: '女'
    }
  ])
});

router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if(username === 'hqh' && password === 'hqh'){
    res.send({
      code: 200,
      msg: '恭喜，登录成功！'
    })
  }else{
    res.send({
      code: 404,
      msg: '对不起，登录失败！'
    })
  }
});

module.exports = router;
