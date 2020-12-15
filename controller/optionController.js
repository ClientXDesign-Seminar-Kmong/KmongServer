const util = require('../modules/util')
const responseMessage = require('../modules/responseMessage')
const statusCode = require('../modules/statusCode')
const {logoService} = require('../service')

module.exports={
    serviceOption:async(req,res)=>{
        const {idx} = req.params
        try{
            const option = await logoService.getOption(idx)
            return res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.SERVICE_OPTION_SUCCESS,option))
        }catch(err){
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR,responseMessage.SERVICE_OPTION_FAIL))
        }
    },
    setServiceOption:async(req,res)=>{
        const {idx} = req.params
        const {logo}=req.body
        try{
            const setOption = await logoService.setOption(idx,logo)
            if(setOption == null){
                return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,"선택한 옵션에 대한 정보가 없습니다."))
            }
            return res.status(statusCode.OK).send(util.success(statusCode.OK,"선택한 옵션이 바르게 선택되었습니다."))
        }catch(err){
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR,responseMessage.SERVICE_OPTION_SET_FAIL))
        }
    }
}