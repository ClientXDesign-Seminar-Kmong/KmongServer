module.exports=function async(sequelize,DataTypes){
    return sequelize.define('User',{
        name:{
            type:DataTypes.STRING,
        },
        profile:{
            type:DataTypes.STRING,
        },
        connection:{
            type:DataTypes.STRING,
        },
        workCnt:{
            type:DataTypes.INTEGER,
        },
        satisfaction:{
            type:DataTypes.INTEGER,
        },
        responseTime:{
            type:DataTypes.INTEGER,
        },
        membership:{
            type:DataTypes.INTEGER,
        }
    },{
        freezeTableName:true
    })
}