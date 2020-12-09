const {Logo} = require('../models')

module.exports={
    getOption:async(idx,logo)=>{
        console.log(`idx:${idx}, logo:${logo}`)
        const option = await Logo.findOne({where:{option:logo,ServiceId:idx},attributes:['content','subContent','deadline','edit','price']})
        console.log(option)
        return option
    },
    setOption:async(idx,logo)=>{
        const option = await Logo.findOne({where:{option:logo,ServiceId:idx}})
        return option
    }
}