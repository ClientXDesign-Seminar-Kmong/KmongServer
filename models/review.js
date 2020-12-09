module.exports=function async(sequelize,DataTypes){
    return sequelize.define('Review',{
        name:{
            type : DataTypes.STRING,
        },
        star:{
            type : DataTypes.INTEGER,
        },
        logoType:{
            type : DataTypes.STRING,
        },
        review:{
            type : DataTypes.STRING,
        },
        reviewDate:{
            type : DataTypes.DATEONLY
        },
    },{
        freezeTableName:true,
    })
}