const {Review} = require('../models')

module.exports={
    getReview:async(idx)=>{
        const reviews = await Review.findAll({where:{ServiceId:idx},attributes:['star','name','logoType','review','reviewDate']})
        var result = {}
        const reviewLength = reviews.length
        var allStar = 0
        reviews.map(v=>{
            console.log(v)
            allStar += v.star
        })
        result.allReview = reviewLength
        result.allStar = Math.round(allStar/reviewLength)
        result.reviews = reviews
        return result
    }
}