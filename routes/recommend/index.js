const express = require('express')
const router = express.Router()
const recommendController = require('../../controller/recommendController')

router.get('/',recommendController.getRecommends)

module.exports=router