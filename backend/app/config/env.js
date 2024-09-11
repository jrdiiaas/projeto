const env = {
    database: process.env.DATABASE || 'backend',
    username: process.env.USERNAME || 'root',
    password: process.env.PASSWORD || 'root',
    host: process.env.HOST || '127.0.0.1',
    port: process.env.PORT || 3307,
    dialect: 'mysql',
};

module.exports = env;