const { sequelize } = require(".");

module.exports=function async(sequelize,DataTypes){
    return sequelize.define('Recommend',{
        part:{
            type : DataTypes.STRING,
        }
    },{
        freezeTableName:true
    })
}