const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    username: 'admin',
    password: 'bublebuble',
    database: 'buble',
    host: 'buble.ck7i2m7vd3vh.ap-northeast-2.rds.amazonaws.com',
    dialect: 'mysql',
    port: 13303,
  },
  test: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
    port: 13303,
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
    port: 13303,
  },
};
