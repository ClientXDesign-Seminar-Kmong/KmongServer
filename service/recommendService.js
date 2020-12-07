const {Recommend,Service} = require('../models')

module.exports={
    getRecommendList:async()=>{
        const recommend = await Recommend.findAll({attributes:{exclude:['createdAt','updatedAt']},include:[{model:Service,attributes:{exclude:['description','createdAt','updatedAt','heart','layer','price']},through:{attributes:[]}}]})
        return recommend
    }
}
