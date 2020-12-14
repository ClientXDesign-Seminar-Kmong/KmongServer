const express = require('express')
const router = express.Router()
const serviceController = require('../../controller/serviceController')
const optionController = require('../../controller/optionController')
const userController = require('../../controller/userController')
const reviewController = require('../../controller/reviewController')

router.get('/:idx',serviceController.serviceTop)//현종
router.get('/:idx/description',serviceController.serviceDescription)//현종
router.get('/:idx/option/:logo',optionController.serviceOption)//주은
router.post('/:idx/option',optionController.setServiceOption)//주은
router.get('/:idx/expert',userController.userInfo)//주은
router.get('/:idx/review',reviewController.reviewDetail)//주은
router.post('/:idx/like',userController.like)//주은
router.get('/:idx/similar',serviceController.similarService)//현종

module.exports=router