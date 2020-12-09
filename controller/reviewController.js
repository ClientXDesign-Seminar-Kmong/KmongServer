const util = require('../modules/util')
const responseMessage = require('../modules/responseMessage')
const statusCode = require('../modules/statusCode')
const {reviewService} = require('../service')

module.exports={
    reviewDetail:async(req,res)=>{
        const {idx} = req.params
        try{
            const reviews = await reviewService.getReview(idx)
            return res.status(statusCode.OK).send(util.success(statusCode.OK,"리뷰불러오기 성공",reviews))
        }catch(err){
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR,"리뷰 불러오기 실패"))
        }
    }
}