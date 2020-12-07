const {Banner} = require('../models')

module.exports={
    getBanners:async()=>{
        const banners = await Banner.findAll({attributes:{exclude:['createdAt','updatedAt']}})
        return banners
    }
}