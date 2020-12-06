var express = require('express');
var router = express.Router();

router.use('/service',require('./service'))
router.use('/banner',require('./banner'))
router.use('/recommend',require('./recommend'))

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports=router
