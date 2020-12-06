const express = require('express')
const router = express.Router()
const serviceController = require('../../controller/serviceController')
const optionController = require('../../controller/optionController')
const userController = require('../../controller/userController')
const reviewController = require('../../controller/reviewController')

router.get('/:idx',serviceController.serviceTop)//서비스 상단api
router.get('/:idx/description',serviceController.serviceDescription)//서비스 설명api
router.get('/:idx/option/:logo',optionController.serviceOption)//서비스 옵션api
router.post('/:idx/option/:logo',optionController.setServiceOption)//서비스 옵션 보내기api
router.get('/:idx/expert',userController.userInfo)
router.get('/:idx/review',reviewController.reviewDetail)
router.post('/:idx/like',userController.like)
router.get('/:idx/similar',serviceController.similarService)

module.exports=router