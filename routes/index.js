var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
      title: 'imooc 首页',
        movies: [{
          title: "复仇者联盟2",
          _id: 1,
          poster: 'http://img31.mtime.cn/mg/2015/03/27/120537.13212993_270X405X4.jpg'
        }, {
          title: "复仇者联盟2",
          _id: 2,
          poster: 'http://img31.mtime.cn/mg/2015/03/27/120537.13212993_270X405X4.jpg'
        }, {
          title: "复仇者联盟2",
          _id: 3,
          poster: 'http://img31.mtime.cn/mg/2015/03/27/120537.13212993_270X405X4.jpg'
        }, {
          title: "复仇者联盟2",
          _id: 4,
          poster: 'http://img31.mtime.cn/mg/2015/03/27/120537.13212993_270X405X4.jpg'
        }, {
          title: "复仇者联盟2",
          _id: 5,
          poster: 'http://img31.mtime.cn/mg/2015/03/27/120537.13212993_270X405X4.jpg'
        }]
    })

});

module.exports = router;
