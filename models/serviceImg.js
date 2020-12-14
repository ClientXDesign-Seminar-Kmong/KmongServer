module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('ServiceImg',{
        img:{
            type:DataTypes.STRING
        }
    },{
        freezeTableName:true,
        timestamps:false
    })
}