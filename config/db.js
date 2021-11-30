const mysql = require("mysql");
const config = require("./constant.json");
const pool = mysql.createPool({
  host: config.DB_HOST,
  user: config.DB_USER,
  password: config.DB_PASS,
  port: config.DB_PORT,
  database: config.DB_DATABASE,
});
pool.getConnection((err) => {
  if (err) {
    console.log("error connecting to db", err.stack);
    process.exit(1);
  }
  console.log("Connected to db...");
});

const excuteQuery = (query, arrayParams) => {
  return new Promise((resolve, reject) => {
    try {
      pool.query(query, arrayParams, (err, data) => {
        if (err) {
          console.log("error excuting the query");
          reject(err);
        }
        resolve(data);
      });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { excuteQuery };
