module.exports=function async(sequelize,DataTypes){
    return sequelize.define('Logo',{
        option:{
            type : DataTypes.INTEGER,
            allowNull:false
        },
        title:{
            type : DataTypes.STRING,
        },
        content:{
            type : DataTypes.STRING,
        },
        subContent:{
            type : DataTypes.STRING,
            get:function(){
                return JSON.parse(this.getDataValue('subContent'))
            }
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
        freezeTableName:true,
        timestamps:false
    })
}