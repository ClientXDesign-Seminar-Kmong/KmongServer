module.exports=function async(sequelize,DataTypes){
    return sequelize.define('Banner',{
        image:{
            type : DataTypes.STRING
        }
    },{
        freezeTableName:true,
        timestamps:false
    })
}