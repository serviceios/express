/**
 * Created by Administrator on 2016/8/7 0007.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/admin/movie', function(req, res, next) {

    res.render('admin', {
        title: 'imooc 后台录入页',
        movie: {
            doctor: '',
            country: '',
            title: '',
            year: '',
            poster: '',
            language: '',
            flash: '',
            summary: ''
        }
    })

});

module.exports = router;
