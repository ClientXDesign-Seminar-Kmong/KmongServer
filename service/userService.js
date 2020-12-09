const {User,Service} = require('../models')

module.exports={
    getExpert:async(idx)=>{
        const expert = await User.findOne({where:{ServiceId:idx},attributes:['id','name','connection','workCnt','satisfaction','responseTime','membership']})
        return expert
    },
    setLike:async(idx,like,userId)=>{
        const service = await Service.findOne({where:{id:idx}})
        const user = await User.findOne({where:{id:userId}})
        if(service == null || user == null){
            var newError = new Error("서비스나 사용자 pk값이 옳지 않습니다.")
            newError.name = "BadRequest"
            throw newError
        }
        if(like){
            await service.addUser(user)
        }else{
            await service.removeUser(user)
        }
    }
}