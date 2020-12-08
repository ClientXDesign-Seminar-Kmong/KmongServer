const util = require('../modules/util')
const responseMessage = require('../modules/responseMessage')
const statusCode = require('../modules/statusCode')
const {serviceService} = require('../service')

module.exports={
    serviceTop:async(req,res)=>{
        const {idx} = req.params
        try{
            const serviceTop = await serviceService.getTop(idx)
            return res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.SERVICE_TOP_SUCCESS,serviceTop))
        }catch(err){
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR,responseMessage.SERVICE_TOP_FAIL))
        }
        
    },
    serviceDescription:async(req,res)=>{
        const {idx} = req.params
        try{
            const serviceDescription = await serviceService.getDescription(idx)
            return res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.SERVICE_DESCRIPTION_SUCCESS,serviceDescription))
        }catch(err){
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR,responseMessage.SERVICE_DESCRIPTION_FAIL))
        }
    },
    similarService:async(req,res)=>{
        const {idx} = req.params
        try{
            const similarImg = await serviceService.getSimilarImg(idx)
            console.log('similarImg!!',similarImg)
            return res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.SERVICE_SIMILAR_IMG_SUCCESS,similarImg))
        }catch(err){
            errReturn(err,res)
        }
    },
}
const errReturn=(err,res)=>{
    if(err.name="NOT_FOUND_SERVICE"){
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,err.message))
    }else{
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util,fail(statusCode.INTERNAL_SERVER_ERROR,responseMessage.SERVICE_SIMILAR_IMG_FAIL))
    }
}