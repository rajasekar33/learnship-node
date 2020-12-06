const dbConfig = require("../config/db-config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.js")(sequelize, Sequelize);
db.blogs = require("./blog")(sequelize, Sequelize);
db.comments = require("./comment")(sequelize, Sequelize);


//Relations
db.comments.belongsTo(db.blogs, {
    foreignKey: "blogId"});
db.blogs.hasMany(db.comments);
db.blogs.belongsTo(db.users, {
    foreignKey: "userId"});
db.users.hasMany(db.blogs);

module.exports = db;