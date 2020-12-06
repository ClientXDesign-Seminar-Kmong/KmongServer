module.exports=function async(sequelize,DataTypes){
    return sequelize.define('Review',{
        name:{
            type : DataTypes.STRING,
        },
        star:{
            type : DataTypes.INTEGER,
        },
        logoType:{
            type : DataTypes.INTEGER,
        },
        review:{
            type : DataTypes.STRING,
        },
        reviewData:{
            type : DataTypes.DATEONLY
        },
    },{
        freezeTableName:true,
    })
}