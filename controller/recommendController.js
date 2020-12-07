const util = require('../modules/util')
const responseMessage = require('../modules/responseMessage')
const statusCode = require('../modules/statusCode')
const {recommendService} = require('../service')

module.exports={
    getRecommends:async(req,res)=>{
        try{
            const recommend = await recommendService.getRecommendList()
            return res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.RECOMMEND_SUCCESS,recommend))
        }catch(err){
            errReturn(err,res)
        }
    }
}

const errReturn=(err,res)=>{
    if(err.name=""){

    }else{
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR,responseMessage.RECOMMEND_FAIL))
    }
}