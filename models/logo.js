module.exports=function async(sequelize,DataTypes){
    return sequelize.define('Logo',{
        option:{
            type : DataTypes.INTEGER,
            allowNull:false
        },
        content:{
            type : DataTypes.STRING,
        },
        subContent:{
            type : DataTypes.STRING,
        },
        deadline:{
            type : DataTypes.INTEGER,
        },
        edit:{
            type : DataTypes.INTEGER,
        },
        price:{
            type : DataTypes.INTEGER,
        }
    },{
        freezeTableName:true
    })
}