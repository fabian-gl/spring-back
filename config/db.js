const { Sequelize } = require("sequelize");
const mysql = require("mysql2/promise");

const { initUserModel } = require("../models/user");

let sequelize;

exports.initDb = async () => {
  return new Promise(async (resolve, reject) => {
    const connection = await mysql.createConnection({
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
    });

    await connection.query(
      `CREATE DATABASE IF NOT EXISTS \`${process.env.DATABASE_NAME}\`;`
    );

    sequelize = new Sequelize(
      process.env.DATABASE_NAME,
      process.env.DATABASE_USER,
      process.env.DATABASE_PASSWORD,
      {
        host: process.env.DATABASE_HOST,
        dialect: "mysql",
        logging: false,
      }
    );

    sequelize
      .authenticate()
      .then(() => {
        initUserModel(sequelize);
        resolve();
      })
      .catch(reject);
  });
};

exports.getDBModel = (modelName) => sequelize.models[modelName];
