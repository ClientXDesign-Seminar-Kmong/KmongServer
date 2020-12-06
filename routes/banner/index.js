const express = require('express')
const router = express.Router()
const bannerController = require('../../controller/bannerController')

router.get('/',bannerController.getBanners)//현종

module.exports=router