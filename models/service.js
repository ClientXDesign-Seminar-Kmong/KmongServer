module.exports=function async(sequelize,DataTypes){
    return sequelize.define('Service',{
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        start:{
            type:DataTypes.INTEGER
        },
        price:{
            type:DataTypes.INTEGER
        },
        image:{
            type:DataTypes.STRING
        },
        heart:{
            type:DataTypes.INTEGER
        },
        layer:{
            type:DataTypes.STRING
        },
        description:{
            type:DataTypes.STRING
        }
    },{
        freezeTableName:true
    })
}