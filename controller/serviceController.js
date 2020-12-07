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
            errReturn(err,res)
        }
        
    },
    serviceDescription:async(req,res)=>{
        
    },
    similarService:async(req,res)=>{

    },
    serviceDetailImg:async(req,res)=>{
        
    }
}
const errReturn=(err,res)=>{
    if(err.name=""){

    }else{
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR,responseMessage.SERVICE_TOP_FAIL))
    }
}