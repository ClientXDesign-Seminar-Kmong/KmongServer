const {
    Service,
    ServiceImg,
    Recommend
} = require('../models')

module.exports = {
    getTop: async (idx) => {
        const service = await Service.findOne({
            where: {
                id: idx
            },
            attributes: ['title', 'id', 'star', 'review', 'heart', 'price', 'layer'],
            include: [{
                model: ServiceImg,
                attributes: ['id', 'img']
            }]
        })
        return service
    },
    getDescription: async (idx) => {
        const description = await Service.findOne({
            where: {
                id: idx
            },
            attributes: ['id', 'description']
        })
        return description
    },
    getSimilarImg: async (idx) => {
        const service = await (await Service.findOne({
            where: {
                id: idx
            },
            include: [{
                model: Recommend
            }]
        }))
        if(service == null){
            var newError = new Error("해당 서비스를 찾을수 없습니다.")
            newError.name = "NOT_FOUND_SERVICE"
            throw newError
        }
        const getRecommend = await service.getRecommends()
        console.log('test1',getRecommend)
        const similarImgArr = await filterSimilarImg(getRecommend)
        console.log('similarImgArr2', similarImgArr)
        // return similarImgArr
        return similarImgArr
    }
}

const filterSimilarImg = function async (similarImg) {
    return new Promise(function (resolve, reject) {
        var similarImgArr = new Array()
        similarImg.map(async (v) => {
            const serviceContent = await v.getServices({
                attributes:{exclude:['createdAt','updatedAt','description','heart','layer']},
                joinTableAttributes:[]
            })
            serviceContent.map(v => {
                similarImgArr.push(v)
                resolve(similarImgArr)
            })
        })
    })
}