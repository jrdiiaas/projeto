const env = require('./env.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    port: env.port,
    dialect: env.dialect,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Cliente = require('../models/cliente.model.js')(sequelize, Sequelize);
db.Post = require('../models/post.model.js')(sequelize, Sequelize);

module.exports = db;