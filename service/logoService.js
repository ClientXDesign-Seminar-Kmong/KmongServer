const {Logo} = require('../models')

module.exports={
    getOption:async(idx)=>{
        console.log(`idx:${idx}`)
        // const option = await Logo.findOne({where:{option:logo,ServiceId:idx},attributes:['content','subContent','deadline','edit','price']})
        const option = await Logo.findAll({attributes:['title','content','subContent','deadline','edit','price']})
        console.log(option)
        return option
    },
    setOption:async(idx,logo)=>{
        const option = await Logo.findOne({where:{option:logo}})
        return option
    }
}