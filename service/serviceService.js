const {Service,ServiceImg} = require('../models')

module.exports={
    getTop:async(idx)=>{
        const service = await Service.findOne({where:{id:idx},attributes:['title','id','star','review','heart','price','layer'],include:[{model:ServiceImg,attributes:['id','img']}]})
        return service
    }
}