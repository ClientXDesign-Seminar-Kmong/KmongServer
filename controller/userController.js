const util = require('../modules/util')
const responseMessage = require('../modules/responseMessage')
const statusCode = require('../modules/statusCode')
const {userService} = require('../service')

module.exports={
    userInfo:async(req,res)=>{
        const {idx} = req.params
        try{
            const expert = await userService.getExpert(idx)
            return res.status(statusCode.OK).send(util.success(statusCode.OK,"전문가 정보 불러오기 성공",expert))
        }catch(err){
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR,"전문가 정보 불러오기 실패"))
        }
    },
    like:async(req,res)=>{
        const {idx} = req.params
        const {like,userId} = req.body
        try{
            await userService.setLike(idx,like,userId)
            return res.status(statusCode.OK).send(util.success(statusCode.OK,"좋아요 누르기 성공"))
        }catch(err){
            if(err.name=="BadRequest"){
                return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,err.message))
            }
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR,"좋아요 누르기 실패"))
        }
    }
}