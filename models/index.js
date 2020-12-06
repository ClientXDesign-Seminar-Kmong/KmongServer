const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};
let sequelize;
if (config.use_env_variable) {
 sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
 sequelize = new Sequelize(config.database, config.username, config.password, config);
}
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User=require('./user')(sequelize,Sequelize)
db.Service=require('./service')(sequelize,Sequelize)
db.Review=require('./review')(sequelize,Sequelize)
db.Logo=require('./logo')(sequelize,Sequelize)
db.Recommend=require('./recommend')(sequelize,Sequelize)
db.Banner=require('./banner')(sequelize,Sequelize)
db.ServiceImg=require('./serviceImg')(sequelize,Sequelize)

db.Service.hasMany(db.User,{onDelete:'cascade',as:'Expert'})
db.User.belongsTo(db.Service)
db.Service.hasMany(db.Logo,{onDelete:'cascade'})
db.Logo.belongsTo(db.Service)
db.Service.hasMany(db.Review,{onDelete:'cascade'})
db.Review.belongsTo(db.Service)

db.Service.hasMany(db.ServiceImg,{onDelete:'cascade'})
db.ServiceImg.belongsTo(db.Service)

db.Service.belongsToMany(db.User,{through:'Like'})
db.User.belongsToMany(db.Service,{through:'Like'})

db.Service.belongsToMany(db.Recommend,{through:'ServiceList'})
db.Recommend.belongsToMany(db.Service,{through:'ServiceList'})

module.exports = db;